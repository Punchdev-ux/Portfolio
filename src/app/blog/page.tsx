import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { BlogCover } from "@/components/blog-cover";
import { Container } from "@/components/container";
import { getBlogPosts } from "@/lib/mdx";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Blog"),
  description: "Articles on software, AI, personal growth, and life.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-8 pb-16 pt-8">
      <Container>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-3 text-secondary">
          Articles on software, AI, personal growth, and life.
        </p>
      </Container>

      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/25"
            >
              <BlogCover
                title={post.title}
                cover={post.cover}
                className="aspect-2/1 w-full"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-secondary">
                  {post.date}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-secondary">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}