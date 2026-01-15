import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import MarkdownContent from "@/components/MarkdownContent";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-300 mb-8">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-primary-200">{post.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              {post.category}
            </span>
            <span className="text-primary-400">&bull;</span>
            <span className="text-sm text-primary-300">
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-primary-100 leading-relaxed mb-8">
            {post.description}
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
              {post.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="font-medium text-white">{post.author}</p>
              <p className="text-sm text-primary-300">{formatDate(post.date)}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Content */}
      <section className="bg-white dark:bg-primary-950 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article className="prose-custom">
            <MarkdownContent content={post.content} />
          </article>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-primary-100 dark:border-primary-800">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-200 dark:bg-primary-700 flex items-center justify-center text-primary-600 dark:text-primary-300 font-semibold text-lg flex-shrink-0">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 dark:text-white mb-1">
                  {post.author}
                </h3>
                <p className="text-primary-600 dark:text-primary-300 text-sm">
                  BioAIguru Team
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
