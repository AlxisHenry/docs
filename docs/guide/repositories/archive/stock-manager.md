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

# Stock Manager <Badge type="warning" text="v1.0.0" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/stock-manager). 

## Presentation

During my sandwich course at The Timken Company, I developed a web application for inventory management. This web application allows us to manage all of IT equipments. This application was made without frameworks. I only used [PHP](https://php.net) and [Javascript](https://javascript.com).

::: danger
For security reasons, used data are fake.
:::

### Authentication

*The administrator can login with his credentials. The account is a generic account, it's not linked to the employees. By clicking on the "I work here", in the bottom of the login form, employee can view the stock.*

::: warning
The employee feature is not available yet.
:::

![img](/static/timken-login.png)

### Stock management

Stock management is the main feature of the application. The administrator can add, update, delete articles. The administrator can also add, update, delete movements.

- *View the stock*

:::tip
By clicking on the action buttons, the user will be redirected to the corresponding page.
:::

![img](/static/timken-stock.png)

- *Update an article*

![img](/static/timken-article.png)

- *See all movements*

![img](/static/timken-mouvements.png)

- *Make a stock entry*

![img](/static/timken-entry.png)

- *Make a stock out*

![img](/static/timken-out.png)

- *Create a new article*

![img](/static/timken-new.png)

### Users

:::tip
A button is available to import all employees from the file.
:::

The RH department have a file with all employees, normally the file is up to date. So we use this file to import all employees in the application.

![img](/static/timken-users.png)

### Notifications

::: tip
The count of alerts is visible on the sidebar.
:::

The administrator can receive notifications by email. The application will send an email to the administrator when the stock of an article is below the threshold.

To optimize the application, I setup a cron job to generate an excel file with the articles below the threshold. This file is situated on the server and can be visualized by the administrator. It's possible to send the file automatically by email.

![img](/static/timken-notifications.png)

### Settings

::: tip
The application have some custom settings.
:::

*With the switch, you can customize the application. When you swip the switch, the application will send a request to the server to save the changes.*

#### Possible settings customization :

**Employees**

- Turn on/off dashboard access
- Turn on/off logs

**Administators**

- Change account password
- Turn on/off dashboard access
- Turn on/off logs

![img](/static/timken-settings.png)

**Appearance**

- Show informations bar on the top of the page
- Show configurations tabs
- Change application theme

**Notifications**

- Turn on/off email notifications
- Show notifications on the dashboard
- Threshold before notifications

![img](/static/timken-settings-bottom.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
