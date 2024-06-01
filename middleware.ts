import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    '/transformations/add/recolor',
    '/transformations/add/restore',
    '/transformations/add/fill',
    '/transformations/add/remove',
    '/transformations/add/removeBackground',
  ],
})

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
  ],
}
