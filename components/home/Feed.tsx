import BlogFeed from '../blog/BlogFeed';

export default function Feed() {
  return (
    <section>
      <h2 className="text-3xl mt-12 mb-6">News and Events</h2>
      <BlogFeed count={3} />
    </section>
  );
}
