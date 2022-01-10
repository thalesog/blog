// @ts-ignore

const fs = require('fs');
const globby = require('globby');

(async () => {
  const pages = await globby(['pages/**/*{.tsx,.mdx}', '!pages/_*.tsx']);
  const sitemap = `
    <rss version="2.0">
      <channel>
        <title>Thales Ogliari Notes</title>
        <link>https://blog.thog.me</link>
        <description>Personal blog to write some thoughts</description>
        <language>pt-BR</language>
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('/index', '')
              .replace('.tsx', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;
            return `
              <item>
                <link>
                  ${`https://blog.thog.me${route}`}
                </link>
              </item>
            `;
          })
          .join('')}
      </channel>
    </rss>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
