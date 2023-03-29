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

# Vanilla Portfolio <Badge type="warning" text="v1.0.0" />

<br>

:::tip Nice!
Online ! You can access it by clicking [here](https://alexishenry.eu/v1).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/alexishenry.eu/tree/v1.0.0). 

## Presentation

This project is made only with [HTML](https://developer.mozilla.org/fr/docs/Web/HTML), [CSS](https://www.w3.org/Style/CSS/Overview.en.html) and [Javascript](https://www.javascript.com/). This is my first development project, don't judge me 🙈.

Below, you can see the homepage of the website. This page contains a slider with my projects and three buttons to access the other pages of the website.

![img](/static/portfolio-v1-homepage.png)

### Understand the code

This page explains how the code works. It's not a tutorial, it's just a way to understand the code.

![img](/static/portfolio-v1-how.png)

### Projects

**Projects** page contains a list of my projects. You can click on a project to see more details about it.

![img](/static/portfolio-v1-projects.png)

**Project** page contains a lot of information about the project. By passing the mouse over the image/video, you can see the project's name, a description and a button to access the project's repository.

![img](/static/portfolio-v1-project.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
