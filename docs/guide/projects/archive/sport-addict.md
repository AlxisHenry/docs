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

ccc

## Contributors

<VPTeamMembers size="medium" :members="members" />
