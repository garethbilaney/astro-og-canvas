import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: await import.meta.glob('/src/content/**/*.md', { eager: true }),
  getImageOptions: (_path, page) => ({
    title: page.frontmatter.title,
    description: page.frontmatter.description,
    logo: { path: './src/astro-docs-logo.png', size: [350] },
    border: { width: 10 },
    padding: 40,
  }),
});
