import { type Writable, writable } from 'svelte/store';
import { auth } from '$lib/firebase/firebase.ts';
import { GoogleAuthProvider, signInWithPopup, signOut, type UserCredential } from 'firebase/auth';

export const authorizedUser: Writable<UserCredential | null> = writable(null);
export class AuthenticationHandlers {
  static async login() {
    try {
      const provider: GoogleAuthProvider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      const user: UserCredential = await signInWithPopup(auth, provider);
      authorizedUser.set(user);
    } catch(err: unknown) {
      if (err instanceof Error) {
        console.error('Login error: ', err);
      }
    }
  }

  static async logout() {
    try {
      await signOut(auth);
    } catch(err: unknown) {
      if (err instanceof Error) {
        console.error('Logout error: ', err);
      }
    }
  }
}

// Subscriptions
const authUserLogger = authorizedUser.subscribe((val) => {
  console.log('Authorized User Subscription: ', val);
})