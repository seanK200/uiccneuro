import Image from 'next/image';
import logoOutline from '@assets/logo_outline_light.png';

type Member = {
  name: {
    en: string;
    kr?: string;
  };
  title: string;
  affiliation: string | string[];
  url?: string;
  email?: string;
  bio?: string;
};

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis consequat arcu. Ut ultrices sem id lorem tristique, et hendrerit dui hendrerit. Aenean fermentum quam nulla, sed auctor lacus consectetur at. Nunc hendrerit libero quis lectus tempus bibendum. Duis ut pharetra ex, at fermentum eros. Nunc at pulvinar ipsum, eu tristique ligula. Fusce consequat bibendum ante, vitae pharetra tellus ultrices vitae. Nulla nunc enim, ullamcorper eu cursus sed, sollicitudin sodales tortor. Nullam mollis ut mauris quis pellentesque. Nulla euismod, nibh id tempor dignissim, magna mi varius nunc, quis luctus enim est et nisi. Praesent in pretium lorem. Suspendisse consectetur justo sit amet tellus pharetra convallis. Nunc vitae urna sed elit pharetra eleifend sit amet sit amet est. Sed facilisis nec nisl in consequat. Donec venenatis metus sit amet scelerisque facilisis. Morbi lectus dolor, sagittis et euismod ac, aliquam ut arcu.';

export const dummyMemberData: Member[] = [
  {
    name: {
      en: 'Dr. Sehun Chun',
      kr: '천세훈',
    },
    title: 'Principle Investigator',
    affiliation:
      'Integrated Science and Engineering Division, Underwood International College, Yonsei University',
    url: 'https://sites.google.com/site/uicschun/?pli=1',
    bio: lorum,
  },
  {
    name: {
      en: 'Youngwoo Kim',
      kr: '김영우',
    },
    title: 'Research Assistant',
    affiliation:
      'Institute of Human Complexity and System Science, Yonsei University',
    bio: lorum,
  },
  {
    name: {
      en: 'Junyoung Jung',
      kr: '정준영',
    },
    title: 'Undergraduate Research Assistant',
    affiliation: 'Nano Science and Engineering, Yonsei University',
    bio: lorum,
  },
];

export default function Members() {
  return (
    <section>
      <h2 className="text-3xl mt-12 mb-4">People</h2>
      <div className="grid grid-cols-sm gap-8">
        {dummyMemberData.map((member) => (
          <MemberItem key={member.name.en + member.title} data={member} />
        ))}
      </div>
    </section>
  );
}

function MemberItem({ data }: { data: Member }) {
  const name = (
    <>
      {data.name.en}
      {data.name.kr && (
        <>
          <br />
          <span className="font-normal">{data.name.kr}</span>
        </>
      )}
    </>
  );
  return (
    <div>
      <DummyImage className="mb-2" />
      <h3
        className={`text-xl font-semibold ${data.url ? 'hover:underline' : ''}`}
      >
        {data.url ? (
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </h3>
      <p className="text-lg text-blue-600 mb-2">{data.title}</p>
      <p className="text-sm text-slate-600">{data.affiliation}</p>
    </div>
  );
}

function DummyImage({ className }: { className?: string }) {
  return (
    <div
      className={`w-36 h-52 flex justify-center items-center bg-slate-300 ${
        className || ''
      }`}
    >
      <Image src={logoOutline} alt="" width={80} className="opacity-50" />
    </div>
  );
}
