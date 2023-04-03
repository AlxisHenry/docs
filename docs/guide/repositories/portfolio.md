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

# Portfolio <Badge type="tip" text="v3.7.3" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://alexishenry.eu).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/alexishenry.eu). 

## Presentation

**My portfolio made with :heart: and passion.**

This project is made with the framework [Laravel](https://laravel.com/). This is my first time with the framework. He allowed me to learn a lot about [Laravel](https://laravel.com/). For the frontend of the application, I use [Javascript](https://www.javascript.com/) and [Sass](https://sass-lang.com/).

### Homepage

*The homepage is a simple page with a presentation of me and my main skills. Some features are available on the homepage, such as the dark mode, the language switcher and the theme switcher.*

![Homepage portfolio](/static/portfolio-home.png)

#### Spoilers

On the homepage, there are spoilers about the different pages of the application. A "more" button is available to redirect the user to the page of the section.

**About me**

***About me** spoiler is a section with a presentation of me and a lot of my social links.*

![Homepage portfolio](/static/portfolio-spoilers-about.png)

**Projects**

***Projects** spoiler is a section with the latest projects.*

![Homepage portfolio](/static/portfolio-spoilers-projects.png)

**News**

***News** spoiler is a section with the latest published news.*

![Homepage portfolio](/static/portfolio-spoilers-news.png)

**Resources**

***Resources** spoiler is a section with the latest published resources.*

![Homepage portfolio](/static/portfolio-spoilers-resources.png)

### Administation

The administration is made with [Laravel Filament](https://filamentadmin.com/).

**Dashboard**

*The dashboard allows the administrator to have a quick overview of the application. Different statistics are available and a preview of the latest records.*

![Homepage portfolio](/static/portfolio-admin.png)

**Login**

*The administration dashboard is protected by a login page. The user can login with his email and password.*

![Homepage portfolio](/static/portfolio-login.png)

**CRUD**

*The user can create, read, update and delete records in the administration.*

![Homepage portfolio](/static/portfolio-admin-example-records.png)

### Projects

*The projects page is a page with a listing of my projects. By passing the mouse over a project, the user can see a lot details about the project (like the technologies used, the description, the link to the project, etc...).*

![Homepage portfolio](/static/portfolio-projects.png)

### News

*The news page is a page with a listing of some news. On the news page, the news are ordered by categories. By the way, the user can search a news by keywords using the search bar.*

::: tip
The category "Veille Technologique" contains some news I read about my favorite technologies. I create this category because I need it to complete my school project.
:::

![Homepage portfolio](/static/portfolio-news.png)

### Resources

*The resources page is a page with a listing of some resources ordered by publication date.*

::: tip
Resources contains a lot of documentations related to my school and personal projects.
:::

![Homepage portfolio](/static/portfolio-resources.png)

### Legals informations

*The legal notices page of the application.*

![Homepage portfolio](/static/portfolio-legals.png)

### Contact

*The contact form is used on some pages of the application. He work with the laravel mailer.*

::: tip
Email server can be configured with [postfix](https://www.postfix.org/)
:::

![Homepage portfolio](/static/portfolio-contact.png)

## Features

### Dark mode  <Badge type="tip" text="release v3.1" />

*By clicking on the dark mode button, the user can switch to the dark mode. The dark mode is saved in cookies.*

![Homepage portfolio](/static/portfolio-home-dark.png)

### Language switcher  <Badge type="tip" text="released v3.7" />

*The user can switch between the languages of the application. The language is saved in the session. Available languages are English and French.*	

::: tip
Please note that the default language is French.
:::


### Language definition

*When the user click on a image of a language, if available, he's redirected to a page with a definition of the language.*

::: tip
The definition is fetched from [Wikipedia](https://www.wikipedia.org/).
:::

#### Listing of available languages definition

![List of available languages](/static/portfolio-languages.png)

#### Example of a language definition

![Language definition](/static/portfolio-language.png)

### Copy to clipboard

*The user can copy different informations to his clipboard. For example can left click on a link to copy it to his clipboard.*

::: warning
It's possible that the browser doesn't support this feature.
:::

![Copy to clipboard](/static/portfolio-copy-to-clipboard.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
