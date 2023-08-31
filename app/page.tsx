import Introduction from '@/components/home/Introduction';
import Container from '@components/Container';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-100 h-80 bg-slate-200"></div>
      <Container className="py-8">
        <h1 className="text-3xl font-light mb-6">
          <span className="font-semibold">UICCN: </span> Underwood International
          College Computational Neuroscience Laboratory
        </h1>
        <Introduction />
      </Container>
    </main>
  );
}
