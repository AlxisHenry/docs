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

# Restiloc

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://restiloc.space).
:::

## Github

The [github](https://github.com/Restiloc) of the organization contains a lot of open-source repositories is accessible.

## Presentation

::: warning
This is a school project. Some features are not available yet or are not working properly.
:::

Restiloc is mobile application with the goal to help professionals vehicles society to manage the missions of their experts. This application contains a lot of features that render the life of the experts easier. The application is available on Android and iOS.

## Documentations <Badge type="tip" text="API Docs" />

The Restiloc organization contain a documentation repository. This repository contains the documentation of the Restiloc project. You can access it by clicking [here](https://github.com/Restiloc/docs).

You can access to the different documentations of the Restiloc project by clicking on the links below.

- [Restiloc API](https://restiloc.space/docs)
- [Restiloc UX](https://cdn.alexishenry.eu/shared/pdf/210423%20-%20HENRY.ALEXIS.AP4-Doc-utilisateur.pdf)
- [Restiloc Environment](https://cdn.alexishenry.eu/shared/pdf/210423%20-%20HENRY.ALEXIS.AP4-Doc-technique.pdf)

:::

## Design system <Badge type="tip" text="v1.0.0" />

::: tip
The design system of the Restiloc project was made with [Figma](https://www.figma.com/).
:::

The Restiloc organization has a repository containing all of the design system of the application. Including web and mobile apps. 

::: danger
The design system can be not up to date.
:::

**This repository contains the design system of the Restiloc project. You can access it by clicking [here](https://github.com/Restiloc/ui).**

## Web application <Badge type="tip" text="v0.1.0" />

:::tip
The web application of the Restiloc is in production. You can access it by clicking [here](https://restiloc.space).
:::

### Landing page

We create a landing page for the Restiloc project. This landing page was created to present the project to the public. You can access it by clicking [here](https://restiloc.space).

### Restiloc API

*The Restiloc API is a REST API that is used by the differents mobile application. We made this API with [Laravel](https://laravel.com/).*

#### Documentation

The Restiloc API has a documentation. This documentation is made with [Vitepress](https://vitepress.vuejs.org/). You can access it by clicking [here](https://restiloc.space/api).

## Mobile applications 

### Kotlin

### React Native



## Contributors

<VPTeamMembers size="medium" :members="members" />
