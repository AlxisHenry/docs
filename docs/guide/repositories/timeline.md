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

# Timeline <Badge type="tip" text="v1.1.0" />

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

If you want to setup in local the application, you will need to follow the readme's instructions in the [github repository](https://github.com/AlxisHenry/timeline).

**If it's your first time using the application, you will need to enter your github token.**

- You can get it [here](https://github.com/settings/tokens) (you will need to be logged in)

::: tip
You can create a new token, and check only the "repo" scope.
:::

## Features

### Authentication

To authenticate, you will need to enter your token in the input field and click on the button below. 

- If the token is valid, you will be redirected to the repositories page, if not, you will see an error message.

![Timeline Homepage](/static/timeline-token.png)

### Localstorage

To avoid entering your token every time you want to use the application, it's stored in your local storage.

::: warning
Note that because the token is stored in your local storage, if you clear it, you will need to enter it again.
:::

![Timeline Homepage](/static/timeline-localstorage.png)

### Repositories

After entering your token, you will be redirected to the repositories page. 
If the token is valid, you will see your repositories ordered by last update and some details about them.

You will see a some details related to the repositories, like :

- Title
- Description
- Stars count
- Forks count
- Time elapsed since last update (formatted with [moment.js](https://momentjs.com/))

::: danger
Dates can be wrong, because the github API doesn't provide the exact date of the last update.
:::

![Timeline Homepage](/static/timeline-repositories.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
