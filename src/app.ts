import { defineApp } from 'iles'

export default defineApp({
    head({ frontmatter, site }) {
      return {
        meta: [
          // { property: "author", content: site.author },
          {
            property: "keywords",
            content:
              "software, sustainability, green software, brighton, green software foundation",
          },
          {
            property: "og:description",
            content:
              "A tech community dedicated to digital sustainability.",
          },
        ],
        script: [
          {
            defer: true,
            src: "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js",
          },
        ],
      };
    },
  });
