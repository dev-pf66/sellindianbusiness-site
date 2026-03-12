"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MDXContentProps {
  content: string;
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-lg prose-blue max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-2" {...props} />
          ),
          p: ({ ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
          li: ({ ...props }) => <li className="text-gray-700" {...props} />,
          blockquote: ({ ...props}) => (
            <blockquote
              className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4"
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a className="text-blue-600 hover:text-blue-700 underline" {...props} />
          ),
          strong: ({ ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
          code: ({ ...props }) => (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
