<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const additionalsMembers = [
	 {
		avatar: "https://github.com/Grafikart.png",
		name: "Grafikart",
		title: "Creator",
		links: [
			{ icon: "github", link: "https://github.com/Grafikart" }
  	],
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

# Slides <Badge type="tip" text="v0.0.4" />

ccc

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/slides).

## Presentation

ccc

## Contributors

<VPTeamMembers size="medium" :members="members" />
