import BlogFeed from '@/components/blog/BlogFeed';
import Container from '@components/Container';
import { dummyBlogPosts } from '@/components/blog/BlogFeed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UICCN: News',
};

export default function News() {
  const data = dummyBlogPosts.filter((post) => !Boolean(post.event));
  return (
    <main className="w-full min-h-screen">
      <Container>
        <h1 className="text-4xl mb-6">News</h1>
        <BlogFeed data={data} />
      </Container>
    </main>
  );
}
