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

# TrueNAS <Badge type="tip" text="finished" />

<br>

::: tip Nice!
Completed project !
:::

## Github

:::warning
Sorry but this project doesn't have a github repository...
:::

## Presentation

I have installed [TrueNAS](https://www.truenas.com/) on my local machine in order to set up a shared folder system on the network using VMWare. TrueNAS is a powerful open-source network-attached storage (NAS) solution that allows for the creation of shared folders and provides advanced data management capabilities.

To set up the shared folder system, I first installed VMWare on my machine. VMWare is a virtualization platform that allows for the creation of virtual machines, which can be used to run multiple operating systems on a single physical machine.

Next, I created a virtual machine in VMWare and installed TrueNAS on it. Once the TrueNAS installation was complete, I configured the system to create shared folders that could be accessed by other devices on the network. This was done by configuring the network settings and creating user accounts with appropriate permissions.

To ensure that the virtual machine hosting TrueNAS was always available, I set it up to automatically start up using the Autostartup VM service in VMWare. This allowed the virtual machine to automatically start up when the physical machine is powered on, ensuring that the shared folder system is always available to other devices on the network.

After the shared folders were created and the Autostartup VM service was configured, I tested the system to ensure that it was functioning properly. I was able to successfully access the shared folders from other devices on the network and transfer files between them.

Overall, installing TrueNAS on a virtual machine using VMWare and configuring it to automatically start up allowed me to create a powerful shared folder system on my local network, providing advanced data management capabilities and secure access to shared files.

**Preview of the dashboard :**

![preview](/static/truenas.png)

**Preview of the installed disks :**

![preview](/static/truenas-disks.png)

## Contributors

<VPTeamMembers size="medium" :members="members" />
