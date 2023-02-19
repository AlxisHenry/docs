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

# Battle Card Game <Badge type="warning" text="v0.1.6" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/battle-card-game). 

## Presentation

This is a little card game made with [PHP](https://php.net/), to introduce me to [POO](https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP). 

Techs used :

- [PHP](https://php.net/)
- [PHPUnit](https://phpunit.readthedocs.io/)
- [PHPStan](https://phpstan.org/)

## Contributors

<VPTeamMembers size="medium" :members="members" />
