'use client'
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser
} from '@clerk/nextjs'
import { User } from 'lucide-react';
function Header() {
  const { user } = useUser();
  return (
    <div className="flex item-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">
          {(user?.username?.charAt(0).toUpperCase()  + "" + user?.username?.substring(1) + "'s "|| "User's")} Space
        </h1>
      )}

      {/* links */}

      <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </div>

  )
}
export default Header