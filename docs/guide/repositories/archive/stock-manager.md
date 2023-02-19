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

# Stock Manager <Badge type="warning" text="v1.0.0" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/stock-manager). 

## Presentation

During my sandwich course at The Timken Company, I developed a web application for inventory management. This web application allows us to manage all of IT equipments. This application was made without frameworks. I only used [PHP](https://php.net) and [Javascript](https://javascript.com).

Preview of the dashboard page :

![img](/static/stock-manager.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
