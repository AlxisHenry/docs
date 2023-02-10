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

# Restiloc - Web Application <Badge type="tip" text="v0.1.0" />

<br>

:::tip Nice!
Online ! You can access it by clicking [here](https://restiloc.space).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/Restiloc/api).

## Presentation

:::danger
**Sorry, but this project isn't finished, so I can't present it now.**
:::

## Contributors

<VPTeamMembers size="medium" :members="members" />
