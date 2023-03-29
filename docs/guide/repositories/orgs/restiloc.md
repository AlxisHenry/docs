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

# Restiloc <Badge type="tip" text="v1.0.0" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://restiloc.space).
:::

## Github

Repositories of this organization are open-source, you can access them by clicking [here](https://github.com/Restiloc).

## Presentation

## Contributors

<VPTeamMembers size="medium" :members="members" />
