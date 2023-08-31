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

type EventItem = {
  id: string;
  title: string;
  startsAt?: DateTime;
  endsAt?: DateTime;
  includeTime?: boolean;
  venue?: string;
  description?: string;
  people?: {
    name: string;
    affiliation?: string;
    url?: string;
  }[];
  rsvp?: string;
  isPublic?: boolean;
  tags?: string[];
};

const data: EventItem[] = [
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
    description:
      'Lunch provided at the Lounge (Sinchon Campus) for all event participants (12:00-13:00).',
    rsvp: 'https://docs.google.com/forms/d/e/1FAIpQLSfjsjFsEMbx1T_Lb3c3xBOxbQCRdhfN5zNhm583d3-Ma7tfFw/viewform?pli=1',
    tags: ['Conference'],
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
    description:
      'Lunch provided at the Lounge (Sinchon Campus) for all event participants (12:00-13:00).',
    tags: ['Conference'],
  },
];

export default function Feed() {
  return (
    <section className="flex flex-col items-start">
      <div className="flex flex-col">
        {data.map((item) => {
          const dtformat = item.includeTime
            ? DateTime.DATETIME_MED
            : DateTime.DATE_MED_WITH_WEEKDAY;
          let datetime = '';
          if (item.startsAt) {
            datetime += item.startsAt.toLocaleString(dtformat);
            if (item.endsAt) {
              const diffDays = item.endsAt
                .startOf('day')
                .diff(item.startsAt.startOf('day'), 'days');
              if (item.includeTime || diffDays.days >= 1) {
                datetime += ` - ${item.endsAt.toLocaleString(dtformat)}`;
              }
            }
          }
          return (
            <div
              key={item.id}
              className="mb-7 border-b border-slate-300 pb-7 flex flex-col md:flex-row"
            >
              <DummyImage className="mb-4 md:mb-0 md:mr-6" />
              <div className="flex flex-col items-start">
                <h3 className="text-2xl mb-2">{item.title}</h3>
                <p className="mb-6 flex flex-wrap justify-start items-start">
                  {item.tags?.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="rounded px-3 py-1 bg-slate-300 leading-tight text-slate-800 font-medium"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </p>
                <IconLabel icon={faClock} label={datetime} />
                <IconLabel icon={faLocationDot} label={item.venue} />
                {item.people?.map((person, idx) => {
                  let label = person.name;
                  if (person.affiliation) {
                    label += ` (${person.affiliation})`;
                  }
                  const iconLabel = (
                    <IconLabel
                      key={item.id + person.name}
                      icon={idx === 0 ? faUser : undefined}
                      label={label}
                    />
                  );

                  if (person.url) {
                    return (
                      <a
                        key={item.id + person.name}
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
                })}
                <p className="mt-4 mb-6 leading-relaxed text-slate-600">
                  {item.description}
                </p>
                {item.rsvp && (
                  <a
                    href={item.rsvp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto rounded px-4 py-2 md:py-1 bg-blue-600 hover:bg-blue-700 text-white text-center md:text-left"
                  >
                    RSVP
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
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
