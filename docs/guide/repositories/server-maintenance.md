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

# Server Maintenance Tool <Badge type="tip" text="v1.0.0" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/server-maintenance). 

## Presentation

This project allow you to manage some features with an interface on Ubuntu 22.04.

Following features are availables:

- Get some informations about your system (ram usage...)
- Manage differents services (apache, mariadb, postfix)
- Generate a dump of mysql databases

This project is not archived, some update can be performed.

## Contributors

<VPTeamMembers size="medium" :members="members" />
