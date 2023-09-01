import Container from '@components/Container';
import BlogFeed, { dummyBlogPosts } from '@/components/blog/BlogFeed';

export default function Events() {
  const data = dummyBlogPosts.filter((post) => Boolean(post.event));
  return (
    <main className="w-full min-h-screen">
      <Container>
        <h1 className="text-4xl mb-6">Events</h1>
        <BlogFeed data={data} />
      </Container>
    </main>
  );
}
