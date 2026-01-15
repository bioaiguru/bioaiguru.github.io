"use client";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Simple markdown to HTML converter for basic formatting
  const parseMarkdown = (md: string): string => {
    let html = md
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-primary-800 dark:text-white mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="font-display text-2xl font-semibold text-primary-800 dark:text-white mt-10 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="font-display text-3xl font-semibold text-primary-800 dark:text-white mt-12 mb-6">$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre class="bg-primary-100 dark:bg-primary-800 rounded-xl p-4 overflow-x-auto my-6"><code class="text-sm font-mono text-primary-800 dark:text-primary-100">$2</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code class="bg-primary-100 dark:bg-primary-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-accent-500 hover:text-accent-600 underline">$1</a>')
      // Unordered lists
      .replace(/^\s*[-*]\s+(.*)$/gim, '<li class="ml-6 list-disc text-primary-600 dark:text-primary-300">$1</li>')
      // Ordered lists
      .replace(/^\s*\d+\.\s+(.*)$/gim, '<li class="ml-6 list-decimal text-primary-600 dark:text-primary-300">$1</li>')
      // Blockquotes
      .replace(/^>\s+(.*)$/gim, '<blockquote class="border-l-4 border-accent-500 pl-4 my-6 italic text-primary-600 dark:text-primary-400">$1</blockquote>')
      // Horizontal rules
      .replace(/^---$/gim, '<hr class="border-primary-200 dark:border-primary-700 my-8" />')
      // Line breaks (double newline = paragraph)
      .replace(/\n\n/gim, '</p><p class="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">');

    // Wrap in paragraph tags
    html = '<p class="text-primary-600 dark:text-primary-300 leading-relaxed mb-4">' + html + '</p>';

    // Clean up empty paragraphs
    html = html.replace(/<p class="[^"]*"><\/p>/g, '');

    return html;
  };

  return (
    <div
      className="prose-custom"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}
