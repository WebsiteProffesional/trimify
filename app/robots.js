export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/user/*'],
      },
    ],
    sitemap: 'https://www.trimify.xyz/sitemap.xml',
  }
}
