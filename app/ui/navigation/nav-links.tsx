'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Map', href: '/map' },
  { name: 'FAQ', href: '/faq' },
  { name: 'My Profile ', href: '/profile' },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-8",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            {link.name}{" "}
          </Link>
        );
      })}
    </>
  );
}
