<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const additionalsMembers = [
	{
        avatar: 'https://github.com/Vladimir9595.png',
        name: 'Vladimir Sacchetto',
        title: 'Contributor',
        links: [
          { icon: 'github', link: 'https://github.com/Vladimir9595' }
        ]
	}
]

const members = [
	...additionalsMembers,
  {
		avatar: "https://github.com/AlxisHenry.png",
		name: "Alexis Henry",
		title: "Contributor",
		links: [
			{ icon: "github", link: "https://github.com/Alxishenry" },
			{
				icon: "linkedin",
				link: "https://www.linkedin.com/in/alexishenry03",
			},
  	],
  },
];

</script>

# CDN <Badge type="tip" text="v1.2.2" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://cdn.alexishenry.eu).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/cdn.alexishenry.eu).

## Presentation

**Homemade CDN created to host a lot of things. Like files, images, pdfs, zip...**

This website is easy to configure, you just need to edit two configuration files. He contains some available features, like : listing, simple/multiple upload, simple/multiple download.
In the online version, some features are not accessible from everyone, they need to be authenticated.

## Contributors

<VPTeamMembers size="medium" :members="members" />
