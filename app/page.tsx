import Link from "./Link";
import ColorLib from "colorjs.io";
const Color = ColorLib as any;
import { metadata, getPosts, Post } from "./posts";
import { sans } from "./fonts";

export { metadata };

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="relative -top-[10px] flex flex-col gap-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="block py-4 hover:scale-[1.005] will-change-transform"
          href={"/" + post.slug + "/"}
        >
          <article>
            <PostTitle post={post} />
            <PostMeta post={post} />
            <PostSubtitle post={post} />
          </article>
        </Link>
      ))}
    </div>
  );
}

function PostTitle({ post }: { post: Post }) {
  // Orange-to-purple gradient that fades as posts age
  let lightStart = new Color("oklch(0.63 0.19 41.1333)");  // warm orange
  let lightEnd = new Color("oklch(0.35 0.18 285)");          // deep purple
  let darkStart = new Color("oklch(0.81 0.10 41.1333)");    // light peach
  let darkEnd = new Color("oklch(0.78 0.10 285)");           // light lavender
  let lightRange = lightStart.range(lightEnd);
  let darkRange = darkStart.range(darkEnd);
  let today = new Date();
  // Reference: 5 years before blog start, so new posts stay near 0 (orange) for years
  let blogEra = today.getTime() - new Date(2021, 2, 8).getTime();
  let timeSinceThisPost = today.getTime() - new Date(post.date).getTime();
  let staleness = Math.max(0, Math.min(1, timeSinceThisPost / blogEra));

  return (
    <h2
      className={[
        sans.className,
        "text-[28px] font-black leading-none mb-2",
        "text-[--lightLink] dark:text-[--darkLink]",
      ].join(" ")}
      style={{
        "--lightLink": lightRange(staleness).toString(),
        "--darkLink": darkRange(staleness).toString(),
      } as any}
    >
      {post.title}
    </h2>
  );
}

function PostMeta({ post }: { post: Post }) {
  return (
    <p className="text-[13px] text-gray-700 dark:text-gray-300">
      {new Date(post.date).toLocaleDateString("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </p>
  );
}

function PostSubtitle({ post }: { post: Post }) {
  return <p className="mt-1">{post.spoiler}</p>;
}
