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

# Getting started with Symfony <Badge type="warning" text="v1.0.0" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/getting-started-symfony).

## Presentation

Getting started with Symfony with creating a simple CRUD.

This CRUD allow you to create, update, delete users.

Techs used :

- [Symfony](https://symfony.com/²²)
- [Bootstrap](https://getbootstrap.com/)

## Contributors

<VPTeamMembers size="medium" :members="members" />
