import { useMemo, useState } from 'react';
import BlogHero from '../sections/BlogHero';
import FeaturedPost from '../sections/FeaturedPost';
import BlogList from '../sections/BlogList';
import ArticleView from '../sections/ArticleView';
import Newsletter from '../sections/Newsletter';
import { BLOG_POSTS, BLOG_TAGS, type BlogTag } from '../data';

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<BlogTag>('All');
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const counts = useMemo(() => {
    const c = {} as Record<BlogTag, number>;
    for (const t of BLOG_TAGS) {
      c[t] = t === 'All' ? BLOG_POSTS.length : BLOG_POSTS.filter((p) => p.tag === t).length;
    }
    return c;
  }, []);

  const openPost = useMemo(
    () => BLOG_POSTS.find((p) => p.slug === openSlug) ?? null,
    [openSlug],
  );

  const related = useMemo(() => {
    if (!openPost) return [];
    return [
      ...BLOG_POSTS.filter((p) => p.tag === openPost.tag && p.slug !== openPost.slug),
      ...BLOG_POSTS.filter((p) => p.tag !== openPost.tag),
    ].slice(0, 3);
  }, [openPost]);

  const featured = useMemo(() => BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0], []);

  const filtered = useMemo(() => {
    const list =
      activeTag === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.tag === activeTag);
    return list.filter((p) => p.slug !== featured.slug);
  }, [activeTag, featured.slug]);

  if (openPost) {
    return (
      <main className="bg-[#f6f4ef]">
        <ArticleView
          post={openPost}
          related={related}
          onBack={() => setOpenSlug(null)}
          onOpen={setOpenSlug}
        />
        <Newsletter />
      </main>
    );
  }

  return (
    <main className="bg-[#f6f4ef]">
      <BlogHero activeTag={activeTag} onTag={setActiveTag} counts={counts} />
      {activeTag === 'All' && <FeaturedPost post={featured} onOpen={setOpenSlug} />}
      <BlogList posts={filtered} onOpen={setOpenSlug} />
      <Newsletter />
    </main>
  );
}
