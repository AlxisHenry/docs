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

# Dotfiles <Badge type="tip" text="v0.1.0" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/dotfiles). 

## Presentation

This repository contain my dotfiles.

With this repository I can setup easily my environment (windows or linux). Becareful if you want to use this, check the code and be sure before launch it.

For Windows I use [chocolatey](https://chocolatey.org/), the package manager of this operating system.

## Contributors

<VPTeamMembers size="medium" :members="members" />
