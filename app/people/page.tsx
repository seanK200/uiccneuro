import Container from '@components/Container';
import { dummyMemberData } from '@/components/home/Members';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UICCN: My Profile',
};

export default function People() {
  const data = dummyMemberData;

  return (
    <main className="py-8 w-full min-h-screen">
      <Container>
        <h1 className="mb-8 text-4xl">People</h1>
        {data.map((person) => (
          <article
            className="mb-12 last-of-type:mb-0 flex flex-col md:flex-row"
            key={person.name.en + person.title}
          >
            <div className="shrink-0 mb-4 md:mb-0 md:mr-8 w-56 h-72 bg-slate-200"></div>
            <div>
              <h2 className="mb-1 text-2xl font-medium">
                {person.name.en}
                {person.name.kr && (
                  <>
                    <br />
                    <span>{person.name.kr}</span>
                  </>
                )}
              </h2>
              <p className="font-medium text-lg text-blue-600 leading-relaxed">
                {person.title}
              </p>
              <p className="mb-3 text-lg text-slate-600 leading-relaxed">
                {person.affiliation}
              </p>
              <p className="text-slate-800 leading-relaxed">{person.bio}</p>
            </div>
          </article>
        ))}
      </Container>
    </main>
  );
}
