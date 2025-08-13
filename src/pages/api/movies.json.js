import { getCollection } from 'astro:content';

const movies = await getCollection('movies');

const minimalData = movies.map(({ data, slug }) => ({
  id: data.id,
  img: data.img,
  title: data.title,
  year: data.year,
  language: data.language,
  genre: data.genre,
  url: data.url,
  description: data.description,
  slug,
}));

export function GET() {
  return new Response(
    JSON.stringify(minimalData),
  );
}
