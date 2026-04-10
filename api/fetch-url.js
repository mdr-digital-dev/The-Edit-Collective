// Vercel Edge Function — fetches a URL server-side to bypass CORS
export const config = { runtime: 'edge' };

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get('url');

  if (!target) {
    return new Response(JSON.stringify({ error: 'No URL provided' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  let finalUrl = target;
  if (!/^https?:\/\//i.test(finalUrl)) finalUrl = 'https://' + finalUrl;

  try {
    const start = Date.now();
    const res = await fetch(finalUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TEC-Audit-Bot/1.0; +https://the-edit-collective.vercel.app/audit)'
      },
      redirect: 'follow'
    });

    const loadTime = Date.now() - start;
    const html = await res.text();
    const finalRedirect = res.url;
    const isHttps = finalRedirect.startsWith('https://');

    return new Response(JSON.stringify({
      html: html.substring(0, 80000),
      loadTime,
      isHttps,
      finalUrl: finalRedirect,
      status: res.status
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
