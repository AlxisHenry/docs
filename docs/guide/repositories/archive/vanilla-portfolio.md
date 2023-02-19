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

# Vanilla Portfolio <Badge type="warning" text="v1.0.0" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/alexishenry.eu/tree/v1.0.0). 

## Presentation

This project is made only with [HTML](https://developer.mozilla.org/fr/docs/Web/HTML), [CSS](https://www.w3.org/Style/CSS/Overview.en.html) and [Javascript](https://www.javascript.com/). This is my first development project, don't juge me 🙈.

This is the homepage of the project :

![img](/static/vanilla-portfolio-home.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
