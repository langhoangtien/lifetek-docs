import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  search: {
    codeblocks: true,
  },
});

export default withNextra({
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "query",
            key: "query", // Kiểm tra query string
          },
        ],
        destination: "/:path*", // Chuyển hướng về URL không có query string
        permanent: false,
      },
    ];
  },
});
