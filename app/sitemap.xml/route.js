export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://trimify.xyz/</loc><priority>1.0</priority></url>
  <url><loc>https://trimify.xyz/generate-shortUrl</loc><priority>0.9</priority></url>
  <url><loc>https://trimify.xyz/login</loc><priority>0.8</priority></url>
  <url><loc>https://trimify.xyz/sign-up-to-trimify</loc><priority>0.8</priority></url>
  <url><loc>https://trimify.xyz/count-clicks</loc><priority>0.7</priority></url>
  <url><loc>https://trimify.xyz/about</loc><priority>0.7</priority></url>
  <url><loc>https://trimify.xyz/contact</loc><priority>0.7</priority></url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml', // ← required for Google
    },
  });
}
