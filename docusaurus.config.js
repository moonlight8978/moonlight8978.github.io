/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "moonlight8978's Blog",
  tagline: "Personal blog. Powered by Dinosaurs.",
  url: "https://moonlight8978.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://avatars.githubusercontent.com/u/26299310?v=4",
  organizationName: "moonlight8978",
  projectName: "moonlight8978.github.io",
  themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "moonlight8978",
        src: "https://avatars.githubusercontent.com/u/26299310?v=4",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Programming notes",
        },
        {
          to: "/books/intro",
          position: "left",
          label: "Book notes",
          activeBasePath: "books",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Self notes",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/moonlight8978/moonlight8978.github.io",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/8068639/moonlight8978",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} moonlight8978. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/docs/",
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All posts",
          editUrl:
            "https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "books",
        path: "books",
        routeBasePath: "books",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl:
          "https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/books/",
      },
    ],
  ],
};
