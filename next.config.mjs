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
});
