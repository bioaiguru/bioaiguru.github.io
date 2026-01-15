import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on bioinformatics, genomics, data analysis, and computational biology from the BioAIguru team. Stay updated with the latest in life sciences.",
  openGraph: {
    title: "Blog | BioAIguru",
    description: "Insights on bioinformatics, genomics, and computational biology.",
    url: "/blog",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

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

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider uppercase text-accent-300 mb-4">
              Blog
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Thoughts on bioinformatics, computational biology, and data science 
              from our team. Practical guides, research insights, and industry perspectives.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
      </section>

      {/* Blog Content */}
      <section className="bg-white dark:bg-primary-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-primary-600 dark:text-primary-300 max-w-md mx-auto mb-8">
                We&apos;re working on our first articles. Subscribe to our newsletter to be notified when we publish new content.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-colors"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="font-semibold text-primary-800 dark:text-white mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog"
                        className="text-accent-500 hover:text-accent-600 font-medium"
                      >
                        All Posts
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          href={`/blog/category/${category.toLowerCase()}`}
                          className="text-primary-600 dark:text-primary-400 hover:text-accent-500 transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Posts Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <article
                      key={post.slug}
                      className="group bg-primary-50 dark:bg-primary-900 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {post.image && (
                        <div className="aspect-video bg-primary-200 dark:bg-primary-800">
                          {/* Placeholder for image */}
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold uppercase tracking-wider text-accent-500">
                            {post.category}
                          </span>
                          <span className="text-primary-400 dark:text-primary-500">
                            &bull;
                          </span>
                          <span className="text-sm text-primary-500 dark:text-primary-400">
                            {post.readingTime}
                          </span>
                        </div>
                        <h2 className="font-display text-xl font-semibold text-primary-800 dark:text-white mb-3 group-hover:text-accent-500 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-primary-600 dark:text-primary-300 mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-primary-500 dark:text-primary-400">
                            {formatDate(post.date)}
                          </span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm font-semibold text-accent-500 hover:text-accent-600 flex items-center gap-1"
                          >
                            Read more
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary-50 dark:bg-primary-900 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-primary-800 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-600 dark:text-primary-300 mb-8">
            Subscribe to receive new articles and insights on bioinformatics and computational biology.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-primary-800 border border-primary-200 dark:border-primary-700 text-primary-800 dark:text-white placeholder-primary-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500"
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
