import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'

const protectedRoutes = ['/users']

export default async function middleware(request: NextRequest) {
  const session = await auth()

  const { pathname } = request.nextUrl

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))

  if (isProtected && !session) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }

  return NextResponse.next()
}
