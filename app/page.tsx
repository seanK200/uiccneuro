import Acknowledgements from '@/components/home/Acknowledgements';
import Carousel from '@/components/home/Carousel';
import Feed from '@/components/home/Feed';
import Introduction from '@/components/home/Introduction';
import Members from '@/components/home/Members';
import Container from '@components/Container';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Carousel />
      <Container className="py-8">
        <h1 className="text-4xl font-light mb-6">
          <span className="font-semibold">UICCN: </span> Underwood International
          College Computational Neuroscience Laboratory
        </h1>
        <Introduction />
        <Feed />
        <Members />
        <Acknowledgements />
      </Container>
    </main>
  );
}
