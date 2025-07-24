import { auth } from '@/auth'
import SignInButton from './components/SignInButton'

// if you're using the app directory

export default async function Home() {
  const session = await auth()
  console.log(session)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='mb-4 text-xl'>Sharair</p>
      <SignInButton />
    </div>
  )
}
