const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2`;

export const getPageInfo = async (slug: string) => {
  const url = `${apiUrl}/pages?slug=${slug}&_embed=wp:featuredmedia&_fields=title,content,acf,id,carousel_gallery,_links`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
  const [data] = await response.json();

  const featured_image =
    data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

  return {
    title: data?.title.rendered,
    content: data?.content.rendered,
    acf: data?.acf || {},
    carousel_gallery: data?.carousel_gallery || {},
    featured_image: featured_image,
  };
};

export const getMediaUrl = async (mediaId: number): Promise<string> => {
  const url = `${apiUrl}/media/${mediaId}?_fields=source_url`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
    const data = await response.json();
    return data?.source_url || "";
  } catch (error) {
    console.error(`Error fetching media ${mediaId}:`, error);
    return "";
  }
};

export const getPostBySlug = async (slug: string) => {
  const url = `${apiUrl}/posts?slug=${slug}&_fields=title,content,acf,carousel_gallery,id`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
  const [data] = await response.json();

  return {
    title: data.title.rendered,
    content: data.content.rendered,
    acf: data.acf || {},
    carousel_gallery: data.carousel_gallery || {},
  };
};

export const getNuestrasSedes = async () => {
  const response = await fetch(
    `${apiUrl}/pages/68?_fields=title,acf,id&acf_format=standard`,
  );
  if (!response.ok) throw new Error("Failed to fetch main page");
  const mainPage = await response.json();

  const sedeIds: number[] = mainPage.acf.sedes || [];
  if (!sedeIds.length) return { titulo: mainPage.title.rendered, sedes: [] };

  const batchUrl = `${apiUrl}/posts?include=${sedeIds.join(",")}&_embed=wp:featuredmedia&_fields=id,title,content,featured_media`;
  const sedesResponse = await fetch(batchUrl);
  if (!sedesResponse.ok) throw new Error(`Failed to fetch: ${batchUrl}`);
  const sedesData = await sedesResponse.json();

  const sedes = await Promise.all(
    sedesData.map(async (sede) => ({
      id: sede.id,
      title: sede.title.rendered,
      content: sede.content.rendered,
      featured_image: sede.featured_media
        ? await getMediaUrl(sede.featured_media)
        : "",
    })),
  );
  return {
    titulo: mainPage.title.rendered,
    subtitulo: mainPage.acf.subtitle,
    sedes: sedes,
  };
};

export const getNovelties = async () => {
  try {
    const url = `${apiUrl}/novedades?per_page=100&_fields=id,title,slug`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
    const data = await response.json();

    return data.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching novelties:", error);
    return [];
  }
};

export const getNoveltyBySlug = async (slug: string) => {
  const url = `${apiUrl}/novedades?slug=${slug}&_embed=1&_fields=id,title,content,carousel_gallery,date`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch: ${url}`);
  const [post] = await response.json();

  if (!post) return null;

  return {
    title: post.title.rendered,
    content: post.content.rendered,
    acf: post.acf || {},
    carousel_gallery: post.carousel_gallery || {},
  };
};
