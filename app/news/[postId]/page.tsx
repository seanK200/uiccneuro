import { dummyBlogPosts } from '@components/blog/BlogFeed';
import { DateTime } from 'luxon';
import Container from '@components/Container';
import Image from 'next/image';
import logoOutline from '@assets/logo_outline_light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function BlogPostView({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;
  const post = dummyBlogPosts[0];

  return (
    <main className="py-8 min-h-screen">
      <Container>
        <Link
          href="/news"
          className="mb-4 inline-block text-blue-600 border-b border-white hover:border-blue-600"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-2 mr-2" />
          Back to List
        </Link>
        <article className="w-full">
          <h1 className="text-4xl mb-4">{post.title}</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 space-y-2 md:space-y-0 mb-4">
            <div className="flex items-center">
              <div className="mr-2 w-6 h-6 rounded-full bg-slate-300"></div>
              <p className="font-medium">
                {post.author.hidden ? 'UICCN' : post.author.name}
              </p>
            </div>
            <p className="font-light">
              {post.createdAt.toLocaleString(
                DateTime.DATETIME_MED_WITH_WEEKDAY,
              )}
            </p>
            {post.tags && (
              <div className="flex flex-wrap items-start">
                {post.tags.map((tag) => (
                  <span
                    className="mr-2 last:mr-0 mb-2 md:mb-0 rounded px-2 py-1 bg-blue-100 text-sm font-medium"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          {post.images && (
            <div className="my-6 flex space-x-6 snap-x snap-mandatory md:snap-none overflow-x-auto overflow-y-visible">
              {post.images.map((src) => (
                <DummyImage key={src} />
              ))}
            </div>
          )}
          {post.contents.split('\n').map((line, idx) => (
            <p className="leading-relaxed mb-2" key={idx}>
              {line}
            </p>
          ))}
          {post.actions && (
            <div className="mt-6 flex flex-col md:flex-row md:space-x-2">
              {post.actions.map(({ label, url }, idx) => (
                <a
                  className={`mb-3 rounded px-2 md:px-6 py-3 md:py-2 flex justify-center items-center font-medium leading-none ${
                    idx === 0
                      ? 'bg-blue-900 hover:bg-blue-800 text-white'
                      : 'border border-blue-900 hover:border-blue-800 text-blue-900 hover:text-blue-800'
                  }`}
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </article>
      </Container>
    </main>
  );
}

function DummyImage({ className }: { className?: string }) {
  return (
    <div
      className={`shrink-0 flex justify-center items-center w-full snap-start md:w-72 h-96 bg-slate-200 ${
        className || ''
      }`}
    >
      <Image src={logoOutline} alt="" width={100} className="opacity-50" />
    </div>
  );
}
