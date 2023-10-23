export default cachedEventHandler(
    async (e) => {
      const posts = await Promise.all([
        {
          _path: '/movie-category/categoryId/name/nameThai',
          modifiedAt: new Date(),
        },
        {
          _path: '/movie-genre/genreId/name/nameThai',
          modifiedAt: new Date(),
        },
        {
          _path: '/movie-year/year',
          modifiedAt: new Date(),
        },
        {
          _path: '/movie/view/id',
          modifiedAt: new Date(),
        },
      ]);
      return posts.map((p) => {
        return {
          loc: p._path,
          lastmod: p.modifiedAt,
        };
      });
    },
    {
      name: 'sitemap-dynamic-url',
      maxAge: 60 * 10, // cache URLs for 10 minutes
    }
  );
  