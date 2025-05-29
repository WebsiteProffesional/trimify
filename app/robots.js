export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/user/*'],
      },
    ],
    sitemap: 'https://trimify.xyz/sitemap.xml',
  }
}
