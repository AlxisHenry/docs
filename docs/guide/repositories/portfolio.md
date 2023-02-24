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

# Portfolio <Badge type="tip" text="v3.4.0" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://alexishenry.eu).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/alexishenry.eu). 

## Presentation

**My portfolio made with :heart: and passion.**

This project is made with the framework [Laravel](https://laravel.com/). This is my first time with the framework. He allowed me to learn a lot about [Laravel](https://laravel.com/). For the frontend of the application, I use [Javascript](https://www.javascript.com/) and [Sass](https://sass-lang.com/).

## Contributors

<VPTeamMembers size="medium" :members="members" />
