<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const additionalsMembers = []

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

# Sport Addict <Badge type="warning" text="v1.0.0" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://alxishenry.github.io/sport-addict/).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/sport-addict). 

## Presentation

The project was given to me during my studies. The goal was to reshape a website. Only the HTML structure was given to us. At the same moment I was learning [Javascript](https://www.javascript.com/), so I've decided to implement some features that allow user interactions.

## Contributors

<VPTeamMembers size="medium" :members="members" />
