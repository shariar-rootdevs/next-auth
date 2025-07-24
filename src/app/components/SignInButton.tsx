'use client'
import { signIn } from 'next-auth/react'

export default function SignInButton() {
  return (
    <div>
      <button
        onClick={() => signIn('github')}
        className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'
      >
        Sign in with GitHub
      </button>
    </div>
  )
}
