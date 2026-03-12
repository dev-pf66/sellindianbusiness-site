import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface MDXFrontmatter {
  title: string;
  description: string;
  lastUpdated?: string;
  author?: string;
  type?: string;
  keywords?: string[];
}

export interface MDXContent {
  frontmatter: MDXFrontmatter;
  content: string;
}

export function getMDXContent(filename: string): MDXContent {
  const filePath = path.join(CONTENT_DIR, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    frontmatter: data as MDXFrontmatter,
    content,
  };
}

export function extractFAQs(content: string): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = [];
  
  const faqSection = content.match(/## (?:Frequently Asked Questions|FAQs?)[\s\S]*?(?=\n---|\n## [^F]|$)/);
  if (!faqSection) return faqs;
  
  const faqText = faqSection[0];
  const questionRegex = /### (.+?)\n\n([\s\S]*?)(?=\n### |\n---|\n## |$)/g;
  
  let match;
  while ((match = questionRegex.exec(faqText)) !== null) {
    const question = match[1].trim();
    let answer = match[2].trim();
    answer = answer.replace(/\*\*([^*]+)\*\*/g, '$1');
    const firstParagraph = answer.split('\n\n')[0];
    
    faqs.push({
      question,
      answer: firstParagraph,
    });
  }
  
  return faqs;
}
