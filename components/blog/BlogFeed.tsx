import { DateTime } from 'luxon';
import BlogFeedItem, { BlogPost } from './BlogFeedItem';

const data: BlogPost[] = [
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
  },
];
export default function BlogFeed() {
  return (
    <div>
      {data.map((post) => (
        <BlogFeedItem key={post.id} post={post} />
      ))}
    </div>
  );
}
