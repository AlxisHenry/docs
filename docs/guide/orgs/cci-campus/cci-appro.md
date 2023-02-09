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

# CCI-Appro <Badge type="tip" text="v3.0.0" />

ccc

:::tip Nice!
Online ! You can access it by clicking [here](https://cciappro.alexishenry.eu).
:::

## Github

:::warning
This website is not open-source, CCI-Campus doesn't provide public access to his repositories.
:::

## Presentation

ccc

![ee](/static/cdn.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
