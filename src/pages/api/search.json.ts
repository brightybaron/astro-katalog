async function getPost() {
  const response = await fetch(
    "https://brightybaron.github.io/astro-katalog/data.json"
  );
  const data = await response.json();

  return data.map((item: any) => ({
    title: item.title,
    slug: item.slug,
    picture: item.picture,
    deskripsi: item.deskripsi,
    harga: item.harga,
  }));
}

export async function GET() {
  return new Response(JSON.stringify(await getPost()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
