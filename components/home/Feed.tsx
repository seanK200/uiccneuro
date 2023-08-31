import { DateTime, Duration } from 'luxon';
import Image from 'next/image';
import logoOutline from '@assets/logo_outline_light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLocationDot,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

type Person = {
  name: string;
  affiliation?: string;
  url?: string;
};

type FeedItem = {
  id: string;
  title: string;
  startsAt?: DateTime;
  endsAt?: DateTime;
  includeTime?: boolean;
  venue?: string;
  content?: string;
  img?: string;
  people?: Person[];
  rsvpUrl?: string;
  programUrl?: string;
  isPublic?: boolean;
  tags?: string[];
};

const data: FeedItem[] = [
  {
    id: 'search-models-in-financial-markets',
    title: 'Search Models in Financial Markets',
    startsAt: DateTime.fromObject({
      year: 2023,
      month: 9,
      day: 15,
      hour: 13,
      minute: 0,
    }).setLocale('en-US'),
    endsAt: DateTime.fromObject({
      year: 2023,
      month: 9,
      day: 15,
      hour: 15,
      minute: 0,
    }).setLocale('en-US'),
    includeTime: true,
    venue: 'Daewoo Annex Hall B103, Sinchon Campus, Yonsei University',
    people: [
      {
        name: 'Prof. Jungsuk Han',
        affiliation: 'Dept. of Business Mgmt., SNU',
        url: 'https://www.snu.ac.kr',
      },
    ],
    isPublic: true,
    content:
      'Lunch provided at the Lounge (Sinchon Campus) for all event participants (12:00-13:00).',
    rsvpUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfjsjFsEMbx1T_Lb3c3xBOxbQCRdhfN5zNhm583d3-Ma7tfFw/viewform?pli=1',
    tags: ['Conference', 'Lunch'],
  },
  {
    id: 'search-models-in-financial-markets',
    title: 'Search Models in Financial Markets',
    startsAt: DateTime.fromObject({
      year: 2023,
      month: 9,
      day: 15,
      hour: 13,
      minute: 0,
    }).setLocale('en-US'),
    endsAt: DateTime.fromObject({
      year: 2023,
      month: 9,
      day: 15,
      hour: 15,
      minute: 0,
    }).setLocale('en-US'),
    includeTime: true,
    venue: 'Daewoo Annex Hall B103, Sinchon Campus, Yonsei University',
    people: [
      {
        name: 'Prof. Jungsuk Han',
        affiliation: 'Dept. of Business Mgmt., SNU',
        url: 'https://www.snu.ac.kr',
      },
    ],
    isPublic: true,
    content:
      'Lunch provided at the Lounge (Sinchon Campus) for all event participants (12:00-13:00).',
    tags: ['Conference'],
  },
];

export default function Feed() {
  return (
    <section className="flex flex-col items-start">
      <div className="mt-12 mb-4 w-full flex flex-col md:flex-row md:justify-between md:items-end">
        <h2 className="mb-2 md:mb-0 text-3xl">News and Events</h2>
        <Link href="/" className="hover:underline">
          View all
        </Link>
      </div>
      <div>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="mb-7 last:mb-7 border-b last:border-b-0 border-slate-300 pb-7 last:pb-0 flex flex-col md:flex-row"
            >
              <DummyImage className="mb-4 md:mb-0 md:mr-6" />
              <div className="flex flex-col items-start">
                <h3 className="text-2xl mb-2">{item.title}</h3>
                <TagList tags={item.tags} />
                <TimeLabel data={item} />
                <IconLabel icon={faLocationDot} label={item.venue} />
                {item.people?.map((person, idx) => (
                  <PersonLabel
                    key={person.name + (person.affiliation || '')}
                    person={person}
                    idx={idx}
                  />
                ))}
                <p className="mt-4 mb-6 leading-relaxed text-slate-600">
                  {item.content}
                </p>
                {item.rsvpUrl && <Action url={item.rsvpUrl} label="RSVP" />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TagList({ tags }: { tags?: string[] }) {
  return (
    <ul className="mb-6 flex flex-wrap justify-start items-start space-x-3">
      {tags?.map((tag) => {
        return (
          <li
            key={tag}
            className="rounded px-3 py-1 bg-slate-300 leading-tight text-slate-800 font-medium"
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

function Action({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full md:w-auto rounded md:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center md:text-left"
    >
      {label}
    </a>
  );
}

function IconLabel({ icon, label }: { icon?: IconProp; label?: string }) {
  const iconClassName = 'mr-3 w-4';
  return (
    <p className="mb-1 flex items-center text-slate-600 font-medium leading-relaxed">
      {icon ? (
        <FontAwesomeIcon icon={icon} className={iconClassName} />
      ) : (
        <span className={iconClassName}></span>
      )}
      {label || ''}
    </p>
  );
}

function PersonLabel({ person, idx }: { person: Person; idx: number }) {
  let label = person.name;
  if (person.affiliation) {
    label += ` (${person.affiliation})`;
  }
  const iconLabel = (
    <IconLabel icon={idx === 0 ? faUser : undefined} label={label} />
  );

  if (person.url) {
    return (
      <a
        href={person.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {iconLabel}
      </a>
    );
  }

  return iconLabel;
}

function TimeLabel({ data }: { data: FeedItem }) {
  const dtformat = data.includeTime
    ? DateTime.DATETIME_MED
    : DateTime.DATE_MED_WITH_WEEKDAY;
  let datetime = '';
  if (data.startsAt) {
    datetime += data.startsAt.toLocaleString(dtformat);
    if (data.endsAt) {
      const diffDays = data.endsAt
        .startOf('day')
        .diff(data.startsAt.startOf('day'), 'days');
      if (data.includeTime || diffDays.days >= 1) {
        datetime += ` - ${data.endsAt.toLocaleString(dtformat)}`;
      }
    }
  }
  return <IconLabel icon={faClock} label={datetime} />;
}

function DummyImage({ className }: { className?: string }) {
  return (
    <div
      className={`w-full md:w-72 h-96 bg-slate-200 flex justify-center items-center ${
        className || ''
      }`}
    >
      <Image src={logoOutline} alt="" width={120} className="opacity-50" />
    </div>
  );
}
