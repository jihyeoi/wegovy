import type { NextAuthConfig } from 'next-auth';
import Home from './app/page';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user;
    //   const isAtProfile = nextUrl.pathname.startsWith('/profile');
    //   if (isAtProfile) {
    //     if (isLoggedIn) return true;
    //     return false; // Redirect unauthenticated users to login page
    //   } else if (isLoggedIn) {
    //     return true;
    //   }
    //   return true;
    // },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;