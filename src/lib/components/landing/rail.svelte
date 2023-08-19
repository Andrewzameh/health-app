<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import SecLogo from '../icons/logoSec.svelte'
	import { Flame } from 'lucide-svelte'

	let currentTile: number = 0
</script>

<AppRail spacing="space-y-1">

	<svelte:fragment slot="lead">
		<!-- <AppRailAnchor href="#">
			<i class="fa-solid fa-bars text-2xl" />
		</AppRailAnchor> -->
	</svelte:fragment>
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
	<SecLogo classNames="mx-auto p-3" />
</svelte:fragment>

</AppRail>
