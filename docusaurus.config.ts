// @ts-check
// Docusaurus config for VietCardanoCommunity

const config = {
  title: 'Cardano Documentation',
  tagline: 'Tài liệu hệ sinh thái Cardano từ cộng đồng Việt Nam',
  url: 'https://vietcardanocommunity.github.io',
  baseUrl: '/cardanodoc/',
  favicon: 'img/favicon.ico',

  organizationName: 'VietCardanoCommunity', // GitHub org/user name
  projectName: 'cardanodoc',                // Repo name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/VietCardanoCommunity/cardanodoc/edit/main/',
        },
        blog: false, // Bạn có thể bật nếu muốn blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Cardano Docs',
      logo: {
        alt: 'Cardano Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tài liệu',
        },
        {
          href: 'https://github.com/VietCardanoCommunity/cardanodoc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu',
          items: [
            {
              label: 'Giới thiệu',
              to: '/cardanodoc/docs/intro',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/VietCardanoCommunity',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VietCardanoCommunity.`,
    },
  },
};

module.exports = config;
