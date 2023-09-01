'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@components/Container';
import logo from '@assets/logo.png';
import logoText from '@assets/logo_light_en.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsOpen(false);
    }, 500);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <ul
          className={`${
            isOpen
              ? 'absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-white p-12'
              : 'hidden'
          } text-xl md:text-base md:flex items-start md:items-center space-y-6 md:space-y-0 md:space-x-8`}
        >
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="shrink-0 flex self-end md:hidden justify-center items-center"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-6" />
          </button>
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
          <li className="rounded-full w-8 h-8 flex justify-center items-center bg-slate-200 text-slate-500">
            <Link href="/auth/login" className="leading-none">
              <FontAwesomeIcon icon={faUser} className="w-4" />
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="shrink-0 flex md:hidden justify-center items-center"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-6" />
        </button>
      </Container>
    </nav>
  );
}
