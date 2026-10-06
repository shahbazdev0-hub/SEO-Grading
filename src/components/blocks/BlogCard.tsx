import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlogPost, formatPostDate } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(10,22,49,0.4)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-700">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-500">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readTime}
        </p>
        <h3 className="mt-3 text-lg leading-snug font-bold text-ink-950 transition-colors group-hover:text-primary-700">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[15px] leading-relaxed text-ink-600">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
          Read article
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
