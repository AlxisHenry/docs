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

# Travels <Badge type="tip" text="v1.0.0" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://travels.alexishenry.eu).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/travels).

## Presentation

This project is made with AdonisJS, a NodeJS framework. It's a simple website to manage travels. This is a simple project to start with AdonisJS. Because of AdonisJS is like Laravel, I have some facilities to start with this framework.

::: tip
This application use the API of my [portfolio](https://alexishenry.eu) to get the list of travels.
:::

**Below, you can see the homepage of the website.**

![Travels Homepage](/static/travels-homepage.png)

## Features

### List of travels

::: tip
This is the page who map into the travels fetched from the API.
:::

![Travels List](/static/travels-travels.png)

### Travel details

By clicking on a travel, you are redirected to the travel details page. This page contains the details of the travel written in the admin panel.

![Travels Details](/static/travels-travel.png)

### Administration

The administration panel is accessible on my portfolio. He is built with [Laravel Filament](https://filamentadmin.com/). This panel is used to manage some data of the website including the travels.

![Travels Admin](/static/travels-admin.png)

**Below, you can see the CRUD of the travels.**

![Travels Crud](/static/travels-edit.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
