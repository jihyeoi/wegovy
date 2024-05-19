// import Link from 'next/link';
import NavLinks from '@/app/ui/navigation/nav-links';
// import { signOut } from '@/auth';

export default function NavBar() {
  return (
    <div>
      <div className="bg-gray-50">
        <div className="relative flex items-center justify-center ">

            <NavLinks />

        </div>
      </div>
    </div>

            // <div className="flex items-center space-x-8">
            //     <NavLinks />
                /* <form
                action={async () => {
                    'use server';
                    await signOut();
                }}
                >
                <button className="flex items-center gap-2 rounded-md bg-gray-50 p-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
                    HELLO
                    <div className="hidden md:block">Sign Out</div>
                </button>
                </form> */
        //  </div>
    //  </div>

  );
}
