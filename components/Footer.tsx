import Container from '@components/Container';
import Image from 'next/image';
import Link from 'next/link';
import logoTextDark from '@assets/logo_dark_en.png';

export default function Footer() {
  return (
    <footer className="py-8 bg-blue-950 text-white">
      <Container>
        <Link href="/">
          <Image src={logoTextDark} alt="UICCN" height={56} className="mb-4" />
        </Link>
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <p className="font-light text-sm text-slate-400">
            <Link
              href="https://goo.gl/maps/2GkEVFhXMCiv3ag17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Veritas Hall B #413, 85 Songdogwahak-ro, Yeonsu-gu, Incheon 21983,
              Republic of Korea
            </Link>
          </p>
          <p className="font-light text-sm text-slate-400">2023 &copy; UICCN</p>
        </div>
      </Container>
    </footer>
  );
}
