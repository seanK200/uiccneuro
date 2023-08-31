import Image from 'next/image';
import logoOutline from '@assets/logo_outline_light.png';

type Member = {
  name: {
    en: string;
    kr?: string;
  };
  title: string;
  affiliation: string | string[];
  bio?: string[];
  url?: string;
};

const data: Member[] = [
  {
    name: {
      en: 'Dr. Sehun Chun',
      kr: '천세훈',
    },
    title: 'Principle Investigator',
    affiliation:
      'Integrated Science and Engineering Division, Underwood International College, Yonsei University',
  },
  {
    name: {
      en: 'Youngwoo Kim',
      kr: '김영우',
    },
    title: 'Research Assistant',
    affiliation:
      'Institute of Human Complexity and System Science, Yonsei University',
    bio: [
      'B.S.E. in Bio-Convergence, Yonsei University',
      'B.S.E. in Computer Science, Yonsei University',
    ],
  },
  {
    name: {
      en: 'Junyoung Jung',
      kr: '정준영',
    },
    title: 'Undergraduate Research Assistant',
    affiliation: 'Nano Science and Engineering, Yonsei University',
  },
];

export default function Members() {
  return (
    <section>
      <h2 className="text-3xl mt-12 mb-4">People</h2>
      <div className="grid grid-cols-sm gap-8">
        {data.map((member) => (
          <MemberItem key={member.name.en + member.title} data={member} />
        ))}
      </div>
    </section>
  );
}

function MemberItem({ data }: { data: Member }) {
  return (
    <div>
      <DummyImage className="mb-2" />
      <h3 className="text-xl font-semibold">
        {data.name.en}
        {data.name.kr && (
          <>
            <br />
            <span className="font-normal">{data.name.kr}</span>
          </>
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
