<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores'

	// Types
	import type { ModalSettings, DrawerSettings } from '@skeletonlabs/skeleton';
	import type { SubmitFunction } from '@sveltejs/kit';

	// Docs
	import DocsLogoFull from '$lib/components/DocsLogos/DocsLogoFull.svelte';
	import DocsIcon from '../DocsIcon/DocsIcon.svelte';

	// Components & Utilities
	import { AppBar, LightSwitch, popup, modalStore } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton'
	import type { PopupSettings } from '@skeletonlabs/skeleton'
	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom',
	}
	// Stores
	import { drawerStore } from '@skeletonlabs/skeleton';

	// Local
	let isOsMac = false;

	// Set Search Keyboard Shortcut
	if (browser) {
		let os = navigator.userAgent;
		isOsMac = os.search('Mac') !== -1;
	}

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

	$: user = $page.data.user

</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->

<AppBar shadow="shadow-xl">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button>
			<!-- Logo -->
			<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<DocsLogoFull />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- Explore -->
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'features' }}>
				<span>Explore</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="features">
				<a class="btn variant-filled w-full" href="/" target="_blank">
					<!-- <i class="fa-solid fa-cart-shopping" /> -->
					<span>Releases</span>
					<span class="badge variant-filled-secondary">New</span>
				</a>
				<hr class="!my-4" />
				<nav class="list-nav">
					<ul>
						<li>
							<a href="/">
								<span class="w-6 text-center"><i class="fa-solid fa-home" /></span>
								<span>Homepage</span>
							</a>
						</li>
						<li>
							<a href="/docs/get-started">
								<span class="w-6 text-center"><i class="fa-solid fa-book" /></span>
								<span>Documentation</span>
							</a>
						</li>
						<li>
							<a href="/blog">
								<span class="w-6 text-center"><i class="fa-solid fa-bullhorn" /></span>
								<span>Blog</span>
							</a>
						</li>
						<hr class="!my-4" />
						<li>
							<a href="/elements/core">
								<span class="w-6 text-center"><DocsIcon name="tailwind" width="w-5" height="h-5" /></span>
								<span>Tailwind</span>
							</a>
						</li>
						<li>
							<a href="/actions/clipboard">
								<span class="w-6 text-center"><DocsIcon name="svelte" width="w-6" height="h-6" /></span>
								<span>Svelte</span>
							</a>
						</li>
						<li>
							<a href="/utilities/codeblocks">
								<span class="w-6 text-center"><i class="fa-solid fa-screwdriver-wrench" /></span>
								<span>Utilities</span>
							</a>
						</li>
					</ul>
				</nav>
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>

		<!-- Theme -->
		<div>
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'theme' }}>
				<i class="fa-solid fa-palette text-lg md:!hidden" />
				<span class="hidden md:inline-block">Theme</span>
				<i class="fa-solid fa-caret-down opacity-50" />
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="theme">
				<div class="space-y-4">
					<section class="flex justify-between items-center">
						<h6 class="h6">Mode</h6>
						<LightSwitch />
					</section>
					<hr />
					<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
					</nav>
					<hr />
					<div>
						<a class="btn variant-filled w-full" href="/docs/generator">Foo</a>
					</div>
				</div>
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div>

		<!-- Social -->
		<!-- prettier-ignore -->
		<section class="hidden sm:inline-flex space-x-4">
			<!-- <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-discord text-lg" />
			</a>
			<a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/skeletonlabs/skeleton" target="_blank" rel="noreferrer">
				<i class="fa-brands fa-github text-lg" />
			</a> -->
			<a class="btn py-1.5  hover:variant-soft-primary hidden sm:inline-block" href="/pricing">Pricing</a>
			<a class="btn py-1.5  hover:variant-soft-primary hidden sm:inline-block" href="/authenticated">Authed</a>
			<a class="btn py-1.5  hover:variant-soft-primary hidden sm:inline-block" href="/about">About</a>
		</section>

		<!-- Search -->
		<!-- <div class="md:inline md:ml-4">
			<button class="btn p-2 px-4 space-x-4 variant-soft hover:variant-soft-primary">
				<i class="fa-solid fa-magnifying-glass" />
			</button>
		</div> -->

		{#if user}
		<button use:popup={popupFeatured}>
			<Avatar
			initials={user.username[0]}
			background="bg-primary-500"
			width="w-8"
			
			/>
		</button>

		<div class="card p-4 w-60 shadow-xl" data-popup="popupFeatured">
			<nav class="list-nav">
				<ul>
					<li>
						<a href="/">
							<span class="w-6 text-center"><i class="fa-solid fa-user" /></span>
							<span>Profile</span>
						</a>
					</li>
					<li>
						<a href="/docs/get-started">
							<span class="w-6 text-center"><i class="fa-solid fa-gear" /></span>
							<span>Settings</span>
						</a>
					</li>
				</ul>
			</nav>
			<hr class="!my-4" />
			<form class="btn variant-filled w-full" method="POST" action="/logout" use:enhance>
				<button type="submit">Sign out</button>
			</form>
			<div class="arrow bg-surface-100-800-token" />
		</div>
	
		{:else}
			<a href="/login">Log in</a>
			<a href="/register">Register</a>
		{/if}
		<!-- Sponsor -->
		<!-- <div>
			<button
				class="btn py-1.5 variant-soft hover:variant-soft-primary hidden sm:inline-block"
				use:popup={{ event: 'click', target: 'sponsor' }}
			>
				<i class="fa-solid fa-heart" />
				<span class="hidden md:inline-block">Sponsor</span>
			</button>
			<div class="card p-4 w-60 shadow-xl" data-popup="sponsor">
				<nav class="list-nav">
					<ul>
						<li>
							<a href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-solid fa-mug-saucer" /></span>
								<span>Ko-Fi</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-brands fa-github" /></span>
								<span>GitHub</span>
							</a>
						</li>
						<li>
							<a href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer">
								<span class="w-6 text-center"><i class="fa-brands fa-patreon" /></span>
								<span>Patreon</span>
							</a>
						</li>
					</ul>
				</nav>
				<div class="arrow bg-surface-100-800-token" />
			</div>
		</div> -->
	</svelte:fragment>
</AppBar>
