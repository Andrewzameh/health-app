<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
	import Logo from '../icons/logoMain.svelte'
	import { Flame } from 'lucide-svelte'
	import { isDarkMode } from '../stores/colorModeStore'
	import { Avatar } from '@skeletonlabs/skeleton'

	$: user = $page.data.user

	function toggleColorMode() {
		$isDarkMode = !$isDarkMode // Toggle the color mode
		console.log('isDarkMode: ' + $isDarkMode)
	}
	import { popup } from '@skeletonlabs/skeleton'
	import type { PopupSettings } from '@skeletonlabs/skeleton'
	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom',
	}
</script>

<AppBar shadow="shadow-xl">
	<svelte:fragment slot="lead">
		<a class="flex gap-1" href="/">
			<Logo />
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<LightSwitch on:click={toggleColorMode} />
		<a href="/pricing">Pricing</a>
		<a href="/authenticated">Authed</a>
		<a href="/about">About</a>

		{#if user}
		<button use:popup={popupFeatured}>
			<Avatar
			initials={user.username[0]}
			background="bg-primary-500"
			width="w-8"
			
			/>
		</button>
		
		<div class="card w-72 p-4 shadow-xl" data-popup="popupFeatured">
				<form method="POST" action="/logout" use:enhance>
					<button type="submit">Sign out</button>
				</form>
				<div><p>Demo Content</p></div>
				<div class="arrow bg-surface-100-800-token" />
			</div>
		{:else}
			<a href="/login">Log in</a>
			<a href="/register">Register</a>
		{/if}
	</svelte:fragment>
</AppBar>
