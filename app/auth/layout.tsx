import Container from '@/components/Container';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="py-12 w-full min-h-screen flex justify-center items-center">
      <Container className="flex justify-center items-center">
        {children}
      </Container>
    </main>
  );
}
