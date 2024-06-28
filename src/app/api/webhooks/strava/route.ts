import { type NextRequest } from 'next/server';

const verifyToken = process.env.STRAVA_WEBHOOK_VERIFY_TOKEN;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    if (mode && token) {
      // Verifies that the mode and token sent are valid
      if (mode === 'subscribe' && token === verifyToken) {
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        return Response.json({ 'hub.challenge': challenge }, { status: 200 });
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        return new Response(`Verify Token does not match.`, {
          status: 403,
        });
      }
    }
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
}

export async function POST(request: Request) {
  try {
    const text = await request.text();
    console.log('text', text);
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response('Success!', {
    status: 200,
  });
}
