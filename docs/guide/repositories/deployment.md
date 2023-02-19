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

# Automated Deployment Tool <Badge type="tip" text="v0.0.5" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/deployment). 

## Presentation

This project is used for deploy applications, projects or simple directories to a configured destination.

With this application you can choose the local target and the remote directory where you want to rsync the selected element.

Some type of application are supported and manage, like: 

- [Laravel](https://laravel.com/)
- [CDN](https://github.com/AlxisHenry/cdn.alexishenry.eu)

By default, some configuration are realized, with a script named `base.sh` in the `scripts` folder :

```bash
#!/bin/bash

#- This script will prepare code in dist folder for laravel project
#- ================================================================

#- Import environment variables
#- ============================
source .env;

# Clean useless folders/files
# ---------------------------
# @return {void}
clean () {
	# Files
	files=".editorconfig postcss.config.js tailwind.config.js vite.config.js package.json package-lock.json webpack.mix.js composer.lock";
	for file in $files; do
		rm -f $file;
	done
	# Scripts
	extensions="sh gitignore md bat env";
	for extension in $extensions; do
		find -iname "*.$extension" -not -path "./vendor/*" -delete
	done
}

# Call functions
# --------------
# @return {void}
main () {
	clean;
}

cd $LOCAL_DIST_FOLDER/$(ls $LOCAL_DIST_FOLDER | grep -v -E '(.gitignore|readme.md)') && main;
```

## Contributors

<VPTeamMembers size="medium" :members="members" />
