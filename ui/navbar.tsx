import Link from 'next/link';
import NavLinks from '@/ui/nav-links';
// import { signOut } from '@/auth';

export default function TopNav() {
  return (
    <div className="flex h-20 w-full items-center justify-between px-4 py-2 bg-blue-600">
      <Link className="flex items-center" href="/">
        <div className="w-32 text-white md:w-40">
          HELLO
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <NavLinks />
        <form
        //   action={async () => {
        //     'use server';
        //     await signOut();
        //   }}
        >
          <button className="flex items-center gap-2 rounded-md bg-gray-50 p-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
            HELLO
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
