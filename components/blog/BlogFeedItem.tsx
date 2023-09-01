import { DateTime } from 'luxon';
import Image from 'next/image';
import logoOutline from '@assets/logo_outline_light.png';

type PostAction = {
  label: string;
  url: string;
  primary?: boolean;
};

type EventDetails = {
  startsAt: DateTime;
  endsAt?: DateTime;
  allDay?: boolean;
  location?: string;
  description?: string;
  url?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  contents: string;
  author: {
    name: string;
    image?: string; // URL
    hidden?: boolean;
  };
  createdAt: DateTime;
  editedAt?: DateTime;

  images?: string[]; // Source URL
  tags?: string[];
  actions?: PostAction[];
  event?: EventDetails;
};

export default function BlogFeedItem({ post }: { post: BlogPost }) {
  return (
    <article className="mb-12 last-of-type:mb-0 w-full">
      <h3 className="mb-2 font-semibold text-2xl leading-relaxed">
        {post.title}
      </h3>
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 space-y-2 md:space-y-0 mb-4">
        <div className="flex items-center">
          <div className="mr-2 w-6 h-6 rounded-full bg-slate-300"></div>
          <p className="font-medium">
            {post.author.hidden ? 'UICCN' : post.author.name}
          </p>
        </div>
        <p className="font-light">
          {post.createdAt.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
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
        <p key={idx}>{line}</p>
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
