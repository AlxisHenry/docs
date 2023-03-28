<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const additionalsMembers = [
	{
        avatar: 'https://github.com/Vladimir9595.png',
        name: 'Vladimir Sacchetto',
        title: 'Contributor',
        links: [
          { icon: 'github', link: 'https://github.com/Vladimir9595' }
        ]
	}
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

# CDN <Badge type="tip" text="v1.2.3" />

<br>

::: tip Nice!
Online ! You can access it by clicking [here](https://cdn.alexishenry.eu).
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/cdn.alexishenry.eu).

## Presentation

**Homemade CDN created to host a lot of things. Like files, images, pdfs, zip...**

This website is easy to configure, you just need to edit two configuration files. He contains some available features, like : listing, simple/multiple upload, simple/multiple download.
In the online version, some features are not accessible from everyone, they need to be authenticated.

*Below, you can see the homepage of the website. You can see the login section, the search bar, and the links to navigate to the differents features.*

![CDN Homepage](/static/cdn.png)

## Features

### Search

::: warning
Note that the project is not using any database. THe he search is made by reading the shared directories and searching for occurences in the name of the files/folders.
- You can search a file by name/extention only.
:::

*The first feature is the search bar. It allows you to search for a file or a folder in the current directory. It is possible to search for a file or a folder by name.*

![CDN Search feature](/static/cdn-feat-search.png)

### Download in zip format

*The second feature is the download part. It allows you to choose a file or multiple files to download them in a zip format.*

![CDN Download feature](/static/cdn-feat-download.png)

### Upload files

::: warning
Take care, some checks are made before uploading a file.
- If the file already exists, it will be renamed with an uuid at the start of the name.
- If the file is too big, it will be rejected.
- If the extension is not allowed, it will be rejected.
:::

*The third feature is the upload part. It allows you to upload a file or multiple files.*

![CDN Upload feature](/static/cdn-feat-upload.png)

### CLI

::: danger
The CLI is not maintained anymore. Take care if you want to use it.
:::

The command line interface is available [here](https://github.com/AlxisHenry/cdn.alexishenry.eu/tree/sync).

This CLI allows you to upload files to the CDN. Some options are available, for more information, you can use the `--help` option.

## Contributors

<VPTeamMembers size="medium" :members="members" />
