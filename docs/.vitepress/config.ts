import { defineConfig } from "vitepress";

export default defineConfig({
    base: "/docs/",
    title: "Documentations",
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
            message: "MIT Licensed",
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
                { text: "Portfolio", link: "/guide/repositories/portfolio" },
                { text: "CDN", link: "/guide/repositories/cdn" },
                { text: "Timeline", link: "/guide/repositories/timeline" },
                { text: "Slides", link: "/guide/repositories/slides" },
                { text: "URL Shortener", link: "/guide/repositories/url-shortener" },
                { text: "Travels", link: "/guide/repositories/travels" },
                { text: "Deployment", link: "/guide/repositories/deployment" },
                { text: "Server Maintenance", link: "/guide/repositories/server-maintenance" },
                { text: "Dotfiles", link: "/guide/repositories/dotfiles" },
                {
                    text: "Organizations",
                    collapsed: true,
                    items: [
                        { text: "CCI-Campus", link: "/guide/repositories/orgs/cci-campus" },
                        { text: "Restiloc", link: "/guide/repositories/orgs/restiloc" },
                    ],
                },
                {
                    text: "Archived",
                    collapsed: true,
                    items: [
                        { text: "Click/s", link: "/guide/repositories/archive/cpstest" },
                        { text: "Stock Manager", link: "/guide/repositories/archive/stock-manager" },
                        { text: "Sport Addict", link: "/guide/repositories/archive/sport-addict" },
                        { text: "Vanilla Portfolio", link: "/guide/repositories/archive/vanilla-portfolio" },
                        { text: "Battle Card Game", link: "/guide/repositories/archive/battle-card-game" },
                        { text: "Sass", link: "/guide/repositories/archive/sass" },
                        { text: "Symfony", link: "/guide/repositories/archive/symfony" },
                    ],
                },
            ],
        },
        {
            text: "Projects",
            collapsed: true,
            items: [
                { text: "TrueNAS", link: "/guide/projects/truenas" },
                { text: "ownCloud", link: "/guide/projects/owncloud" }
            ]
        }
    ];
}
