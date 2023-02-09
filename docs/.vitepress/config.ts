import { defineConfig } from "vitepress";

export default defineConfig({
    base: "/docs/",
    title: "📦 Documentations",

    lastUpdated: true,
    cleanUrls: true,

    head: [["meta", { name: "theme-color", content: "#3c8772" }]],

    markdown: {
        headers: {
            level: [0, 0],
        },
    },

    themeConfig: {
        nav: nav(),

        sidebar: {
            "/guide/": sidebarGuide(),
        },

        editLink: {
            pattern:
                "https://github.com/AlxisHenry/docs/edit/master/docs/:path",
            text: "Edit this page on GitHub",
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/AlxisHenry" },
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/in/alexishenry03",
            },
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present Alexis Henry",
        },

        algolia: {
            appId: "Z7MU1KXKY9",
            apiKey: "db0abdb40c41cff16a0b46f56eb7d300",
            indexName: "alexishenry.eu",
        },

        carbonAds: {
            code: "CEBDT27Y",
            placement: "vuejsorg",
        },
    },
});

function nav() {
    return [
        {
            text: "Socials",
            items: [
                {
                    text: "Portfolio",
                    link: "https://alexishenry.eu",
                },
                {
                    text: "LinkedIn",
                    link: "https://www.linkedin.com/in/alexishenry03",
                },
                {
                    text: "Github",
                    link: "https://github.com/AlxisHenry",
                },
            ],
        },
    ];
}

function sidebarGuide() {
    return [
        {
            text: "Repositories",
            collapsed: false,
            items: [
                { text: "Portfolio", link: "/guide/projects/portfolio" },
                { text: "CDN", link: "/guide/projects/cdn" },
                { text: "Timeline", link: "/guide/projects/timeline" },
                { text: "Slides", link: "/guide/projects/slides" },
                { text: "Convert.py", link: "/guide/projects/convert" },
                {
                    text: "URL Shortener",
                    link: "/guide/projects/url-shortener",
                },
                { text: "Deployment", link: "/guide/projects/deployment" },
                {
                    text: "Server Maintenance",
                    link: "/guide/projects/server-maintenance",
                },
                {
                    text: "Archived",
                    collapsed: false,
                    items: [
                        {
                            text: "Click/s",
                            link: "/guide/projects/archive/cpstest",
                        },
                        {
                            text: "Stock Manager",
                            link: "/guide/projects/archive/stock-manager",
                        },
                        {
                            text: "Sport Addict",
                            link: "/guide/projects/archive/sport-addict",
                        },
                        {
                            text: "DOM Destroyer",
                            link: "/guide/projects/archive/dom-destroyer",
                        },
                        {
                            text: "Vanilla Portfolio",
                            link: "/guide/projects/archive/vanilla-portfolio",
                        },
                        {
                            text: "Battle Card Game",
                            link: "/guide/projects/archive/battle-card-game",
                        },
                    ],
                },
            ],
        },
        {
            text: "Organizations",
            collapsed: true,
            items: [
                {
                    text: "CCI-Campus",
                    collapsed: true,
                    items: [
                        {
                            text: "CCI-Appro",
                            link: "/guide/orgs/cci-campus/cci-appro",
                        },
                    ],
                },
                {
                    text: "Restiloc",
                    collapsed: true,
                    items: [
                        { text: "Web Application", link: "/guide/orgs/restiloc/web" },
                        {
                            text: "Mobile Application",
                            link: "/guide/orgs/restiloc/mobile",
                        },
                    ],
                },
            ],
        },
        {
            text: "Getting Started With",
            collapsed: true,
            items: [
                { text: "Sass", link: "/guide/start/sass" },
                { text: "Symfony", link: "/guide/start/symfony" },
            ],
        },
    ];
}
