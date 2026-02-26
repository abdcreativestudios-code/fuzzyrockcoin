import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const finalUrl = response.url;

    const videoIdMatch = finalUrl.match(/\/video\/(\d+)/);
    if (!videoIdMatch) {
      return NextResponse.json(
        { error: 'Could not extract video ID from URL' },
        { status: 400 }
      );
    }

    const videoId = videoIdMatch[1];

    return NextResponse.json(
      {
        videoId,
        canonicalUrl: finalUrl,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
        },
      }
    );
  } catch (error) {
    console.error('Error resolving TikTok URL:', error);
    return NextResponse.json(
      { error: 'Failed to resolve TikTok URL' },
      { status: 500 }
    );
  }
}
