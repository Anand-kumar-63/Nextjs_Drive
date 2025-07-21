# Nextjs Middleware:
Middleware in Next.js runs before a route is rendered. It's a special function you can define in a file called:
middleware.ts / middleware.js
It lets you:
Redirect users
Modify the response
Authenticate or authorize
Log or analyze requests
Re-write URLs (change paths) 

## Middleware Matches
You can control which routes middleware runs on by using a matcher:
export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],}