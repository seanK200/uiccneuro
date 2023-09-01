import Image from 'next/image';
import Link from 'next/link';
import Container from '@components/Container';
import logo from '@assets/logo.png';
import logoText from '@assets/logo_light_en.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <nav className="py-6">
      <Container className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={logoText}
            alt="UICCN"
            height={60}
            className="hidden md:block"
          />
          <Image
            src={logo}
            alt="UICCN"
            height={60}
            className="block md:hidden"
          />
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/news">Research News</Link>
          </li>
          <li>
            <Link href="/people">People</Link>
          </li>
          <li className="rounded-full p-2 bg-slate-200 text-slate-500">
            <Link href="/auth/login" className="leading-none">
              <FontAwesomeIcon icon={faUser} className="w-4" />
            </Link>
          </li>
        </ul>
        <button className="shrink-0 flex md:hidden justify-center items-center">
          <FontAwesomeIcon icon={faBars} className="h-6" />
        </button>
      </Container>
    </nav>
  );
}
