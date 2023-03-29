<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const additionalsMembers = [
	{
		avatar: 'https://github.com/Dinholu.png',
    name: 'Alizée Hett',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Dinholu' }
    ]
	},
	{
		avatar: 'https://github.com/Vladimir9595.png',
    name: 'Vladimir Sacchetto',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/Vladimir9595' }
    ]
	},
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

# CCI-Campus

## CCI-Appro

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

### Github

:::warning
This website is not open-source, CCI-Campus doesn't provide public access to this repository.
:::

### Presentation

Study project that consisted of creating a supply provisioning application for the CCI Campus in Strasbourg. It was necessary to upgrade the supply provisioning system and add and improve certain already established features, such as automatic email sending, or the basket validation to avoid errors. We also added a feature allowing to export data in Excel format, to facilitate monitoring.

This project use the following techs:

- [Laravel](https://laravel.com)
- [AlpineJS](https://alpinejs.dev/)
- [JS Toolkit](https://github.com/studiometa/js-toolkit) (created by [@studiometa](https://github.com/studiometa))

Preview of the application:

![preview](/static/cciappro.png)

### API REST

## Contributors

<VPTeamMembers size="medium" :members="members" />
