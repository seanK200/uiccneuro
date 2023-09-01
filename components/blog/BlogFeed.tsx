import { DateTime } from 'luxon';
import BlogFeedItem, { BlogPost } from './BlogFeedItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const dummyBlogPosts: BlogPost[] = [
  {
    id: '1356',
    title: 'Search Models in Financial Markets',
    contents:
      'Speaker: Prof. Speaker: Prof. Jungsuk Han (Dept. of Business Mgmt., SNU)\nVenue: Daewoo Annex Hall, B103, Sinchon Campus\nTime: Sep 15, 2023 (Fri) 13:00 - 15:00',
    author: {
      name: 'Youngwoo Kim',
      hidden: true,
    },
    createdAt: DateTime.fromObject({ year: 2023, month: 9, day: 1, hour: 9 }),
    tags: ['UIC cNeuro Lecture Series', 'Lunch'],
    images: ['', '', '', ''],
    actions: [
      {
        label: 'RSVP',
        url: '/',
      },
      {
        label: 'Speaker Profile',
        url: '/',
      },
    ],
    event: {
      startsAt: DateTime.fromObject({
        year: 2023,
        month: 9,
        day: 15,
        hour: 13,
      }),
      endsAt: DateTime.fromObject({ year: 2023, month: 9, day: 15, hour: 15 }),
      location: 'Daewoo Annex Hall B103, Yonsei University Sinchon Campus',
      url: 'https://uic.yonsei.ac.kr',
    },
  },
  {
    id: '1389',
    title: 'Search Models in Financial Markets',
    contents:
      'Speakers: Prof. Speaker: Prof. Jungsuk Han (Dept. of Business Mgmt., SNU)\nVenue: Daewoo Annex Hall, B103, Sinchon Campus\nTime: Sep 15, 2023 (Fri) 13:00 - 15:00',
    author: {
      name: 'Youngwoo Kim',
      hidden: true,
    },
    createdAt: DateTime.fromObject({ year: 2023, month: 9, day: 1, hour: 9 }),
    tags: ['UIC cNeuro Lecture Series', 'Lunch'],
    images: ['', '', '', ''],
    actions: [
      {
        label: 'RSVP',
        url: '/',
      },
      {
        label: 'Speaker Profile',
        url: '/',
      },
    ],
  },
];

export default function BlogFeed({
  data,
  count,
}: {
  data?: BlogPost[];
  count?: number;
}) {
  data = data || dummyBlogPosts;
  return (
    <div className="flex flex-col items-center">
      {data.map((post) => (
        <BlogFeedItem key={post.id} post={post} />
      ))}
      {count !== undefined && (
        <button className="my-6 flex items-center space-x-1 text-blue-900 hover:underline">
          <span>View more</span>
          <FontAwesomeIcon icon={faChevronRight} className="h-3" />
        </button>
      )}
    </div>
  );
}
