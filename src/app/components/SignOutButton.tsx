'use client'
import { logout } from '@/lib/actions/auth'

export default function SignOutButton() {
  return (
    <div>
      <button
        onClick={() => logout()}
        className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'
      >
        Sign out
      </button>
    </div>
  )
}
