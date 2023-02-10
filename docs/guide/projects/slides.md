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

Slides presentations like powerpoint, but in a browser 😐

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/slides).

## Presentation

This project is made with HTML, CSS and javascript. He's based on [reveal.js](https://revealjs.com/), a javascript HTML Presentation Framework. I create an interface, in [php](https://www.php.net/), to see more easily the availables slides.

Some slides are already in the github repository : theses slides are related to differents presentations that I had to make. 

If you want to setup in local the application, you juste need to follow the readme's instructions in the [github repository](https://github.com/AlxisHenry/slides).

## Contributors

<VPTeamMembers size="medium" :members="members" />
