<script lang="ts">
	import { page } from '$app/stores'

	import DocsIcon from '$lib/components/DocsIcon/DocsIcon.svelte'
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton'
	import { drawerStore } from '@skeletonlabs/skeleton'
	import { menuNavLinks } from '$lib/links'
	import SecLogo from '../icons/logoSec.svelte'

	// Local
	let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined

	function onClickAnchor(): void {
		currentRailCategory = undefined
		drawerStore.close()
	}

	// Lifecycle
	page.subscribe((page) => {
		// ex: /basePath/...
		let basePath: string = page.url.pathname.split('/')[1]
		if (!basePath) return
		// Translate base path to link section
		if (['docs', 'essentials', 'resources'].includes(basePath))
			currentRailCategory = '/docs'
		if (['tokens', 'base', 'elements', 'blocks'].includes(basePath))
			currentRailCategory = '/elements'
		if (['components', 'actions'].includes(basePath))
			currentRailCategory = '/svelte'
		if (['utilities'].includes(basePath)) currentRailCategory = '/utilities'
	})

	// Reactive
	$: submenu = menuNavLinks[currentRailCategory ?? '/docs']
	$: listboxItemActive = (href: string) =>
		$page.url.pathname?.includes(href) ? 'bg-primary-active-token' : ''

		let currentTile: number = 0

</script>

<div class=" h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">

	<!-- App Rail -->
	<AppRail background="bg-transparent" border="border-r border-surface-500/30">
		<!-- Mobile Only -->
		<!-- <AppRailAnchor href="/" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-home text-2xl" /></svelte:fragment>
			<span>Home</span>
		</AppRailAnchor>
		<AppRailAnchor href="https://store.skeleton.dev" target="_blank" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-cart-shopping text-2xl" /></svelte:fragment>
			<span>Store</span>
		</AppRailAnchor>
		
		<AppRailAnchor href="/blog" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead"><i class="fa-solid fa-bullhorn text-2xl" /></svelte:fragment>
			<span>Blog</span>
		</AppRailAnchor>

		<AppRailTile bind:group={currentRailCategory} name="docs" value={'/docs'}>
			<svelte:fragment slot="lead"
				><i class="fa-solid fa-book text-2xl" /></svelte:fragment
			>
			<span>Docs</span>
		</AppRailTile>
		<hr class="opacity-30" />
		<AppRailTile
			bind:group={currentRailCategory}
			name="elements"
			value={'/elements'}
		>
			<svelte:fragment slot="lead"
				><DocsIcon name="tailwind" width="w-6" height="h-6" /></svelte:fragment
			>
			<span>Tailwind</span>
		</AppRailTile>
		<AppRailTile
			bind:group={currentRailCategory}
			name="svelte"
			value={'/svelte'}
		>
			<svelte:fragment slot="lead"
				><DocsIcon name="svelte" width="w-6" height="h-6" /></svelte:fragment
			>
			<span>Svelte</span>
		</AppRailTile>
		<AppRailTile
			bind:group={currentRailCategory}
			name="utilities"
			value={'/utilities'}
		>
			<svelte:fragment slot="lead"
				><i class="fa-solid fa-screwdriver-wrench text-2xl" /></svelte:fragment
			>
			<span>Utilities</span>
		</AppRailTile> -->
		<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
			<svelte:fragment slot="lead"><i class="fa-solid fa-chalkboard-user text-xl" /></svelte:fragment>
			<span>Patient Info</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
			<svelte:fragment slot="lead"><i class="fa-solid fa-truck-medical text-xl" /></svelte:fragment>
			<span>Emergency Info</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
			<svelte:fragment slot="lead"><i class="fa-solid fa-hospital text-xl" /></svelte:fragment>
			<span>Departments</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
			<svelte:fragment slot="lead"><i class="fa-solid fa-vial-virus text-xl" /></svelte:fragment>
			<span>Tests</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-3" value={4} title="tile-3">
			<svelte:fragment slot="lead"><i class="fa-solid fa-x-ray text-xl" /></svelte:fragment>
			<span>Xray</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-3" value={5} title="tile-3">
			<svelte:fragment slot="lead"><i class="fa-solid fa-notes-medical text-xl" /></svelte:fragment>
			<span>Notes</span>
		</AppRailTile>




		<svelte:fragment slot="trail">
			<SecLogo classNames="mx-auto py-5 px-1" />
		</svelte:fragment>
	</AppRail>
</div>
