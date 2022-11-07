import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { containerPlugin } from "@vuepress/plugin-container";

export default {
  theme: defaultTheme({
    sidebar: [
      // SidebarItem
      {
        text: "Projects",
        link: "/foo/",
        children: [
          // SidebarItem
          {
            text: "Portfolio",
            link: "/projects/portfolio/",
            children: [],
          },
          {
            text: "github",
            link: "https://github.com",
            children: [],
          },
          {
            text: "github",
            link: "https://github.com",
            children: [],
          },
          {
            text: "github",
            link: "https://github.com",
            children: [],
          },

        ],
      },
    ],
  }),
  plugins: [
    containerPlugin({
      // options
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ]
};
