import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const data = [
    { id: 1, name: 'Landing Pad 1', lastLogin: '2024-11-01', status: 'active' },
    { id: 2, name: 'Landing Pad 2', lastLogin: '2024-11-10', status: 'blocked' },
  ];

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
