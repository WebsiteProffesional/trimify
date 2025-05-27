export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/user/*'],
      },
    ],
    sitemap: 'https://acme.com/sitemap.xml',
  }
}
