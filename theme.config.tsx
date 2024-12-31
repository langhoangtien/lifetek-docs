import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "nextra/hooks";
const LOGO_TEXT = {
  en: "Lifetek Documentation",
  vi: "Tài liệu Lifetek",
};
const FEEDBACK_TEXT = {
  en: "Question? Give us feedback →",
  vi: "Câu hỏi? Gửi phản hồi cho chúng tôi →",
};
const EDIT_TEXT = {
  en: "Edit this page on GitHub →",
  vi: "Chỉnh sửa trang này trên GitHub →",
};
const SEARCH_PLACEHOLDER = {
  en: "Search documentation",
  vi: "Tìm kiếm tài liệu",
};
const TOC_TITLE = { en: "On this page", vi: "Trên trang này" };
const config: DocsThemeConfig = {
  logo: function useText() {
    const { locale } = useRouter();
    return <span>{LOGO_TEXT[locale!]}</span>;
  },
  project: {
    link: "https://g.lifetek.vn/lifetek-docs",
  },
  chat: {
    link: "https://discord.com",
  },
  search: {
    placeholder: function useText() {
      const { locale } = useRouter();
      return SEARCH_PLACEHOLDER[locale!];
    },
  },
  docsRepositoryBase: "https://g.lifetek.vn/lifetek-docs",
  feedback: {
    content: function useText() {
      const { locale } = useRouter();
      return <span>{FEEDBACK_TEXT[locale!]}</span>;
    },
    labels: "feedback",
    useLink() {
      const config = useConfig();
      return `https://google.com/search?q=${encodeURIComponent(
        `Feedback for ${config.title}`
      )}`;
    },
  },
  editLink: {
    content: function useText() {
      const { locale } = useRouter();
      return EDIT_TEXT[locale!];
    },
  },

  footer: {
    content: function useText() {
      const { locale } = useRouter();
      return <span>{LOGO_TEXT[locale!]}</span>;
    },
  },
  toc: {
    title: function useText() {
      const { locale } = useRouter();
      return TOC_TITLE[locale!];
    },
    backToTop: function BackToTop() {
      const { locale } = useRouter();
      return {
        en: "Scroll to top",
        vi: "Lên đầu trang",
      }[locale!];
    },
  },
  i18n: [
    {
      locale: "en",
      name: "English",
    },
    {
      locale: "vi",
      name: "Vietnamese",
    },
  ],
};

export default config;
