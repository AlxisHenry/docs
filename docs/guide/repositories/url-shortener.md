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

# URL Shortener <Badge type="tip" text="v0.1.1" />

<br>

:::warning Oupss... 
Offline... Sorry but this project is not available.
:::

## Github

This project is open-source and available on a Github repository, accessible [here](https://github.com/AlxisHenry/url-shortener). 

## Presentation

**Simple URL Shortener (inspired by [bitly](https://bitly.com/)) 🔗**

I use [Laravel](https://laravel.com/) for the backend of the application, and [React](https://fr.reactjs.org/) for the frontend.

He's based on the same operating principle as [bitly](https://bitly.com/). You give the URL you would like to shorten. The application takes care of everything and return you a beautiful link.

For example :

```php
$link = "https://alxishenry.github.io/docs/guide/projects/url-shortener";
$slug = Slug::new(); // A23n4b0s

$short = Short::create([
	"slug" => $slug,
	"url" => $link,
	"user_id" => Auth::user()->id,
	"expires" => now()->addYears(5)
]);

/**
 * Now, if you try to access to the given url
 * - https://example.com/$slug
 * You will be redirected to the url corresponding to this slug.
 * 
 * @param Short $short
 * 
 * @return \Illuminate\Http\Response
 */
public function show(Short $short)
{
  return redirect()->away($short->url);
}
```

## Contributors

<VPTeamMembers size="medium" :members="members" />
