'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home -', href: '/' },
  { name: '- FAQ -', href: '/faq' },
  { name: '- My Profile ', href: '/profile' },
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
              "rounded-md text-sm font-medium",
              {
                '': pathname === link.href,
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
