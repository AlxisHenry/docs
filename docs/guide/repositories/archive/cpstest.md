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

# Click/s <Badge type="warning" text="v0.1.0" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://alxishenry.github.io/cpstest/).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/cpstest). 

## Presentation

This project is my first [React](https://fr.reactjs.org/) project. It's a website with a feature that allow you to calculate your clicks per second. Inspired by [cpstest.click](https://cpstest.click/fr).

Preview of the homepage :

![cpstest.png](/static/cpstest.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
