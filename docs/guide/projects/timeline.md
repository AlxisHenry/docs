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

# Timeline <Badge type="tip" text="v1.0.0" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://alxishenry.github.io/timeline/).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/timeline).

## Presentation

**Simple github repositories update timeline ⌚**

This project use <strong>JSX</strong>, he's made with [React](https://fr.reactjs.org/) and [Typescript](https://www.typescriptlang.org/). 

Some technologies are used too: 

- [vitest](https://vitest.dev/)
- [moment.js](https://momentjs.com/)

It's a website who get your repositories using the github API and show you a timeline of your latest updated repositories. 

The actual website in production use Github Pages doesn't work. You will see a message telling that the token are not valid. The reason is I can't let my github token in the source code of the application.

If you want to setup in local the application, you juste need to follow the readme's instructions in the [github repository](https://github.com/AlxisHenry/timeline).

### Example with my repositories

![Timeline Exemple](/static/timeline.png)

You will see a some details related to the repositories, like :

- Title
- Description
- Stars count
- Forks count
- Time elapsed since last update (using [moment.js](https://momentjs.com/))

## Contributors

<VPTeamMembers size="medium" :members="members" />
