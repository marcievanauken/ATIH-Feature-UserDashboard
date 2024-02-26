<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Label, Input } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	/**
	 * @type {string}
	 */
	let userid;
	// NOTE: "Mock" sign in
	function signin() {
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.set('userid', userid);
		goto(`/user/dashboard/?${query.toString()}`);
	}
</script>

<!-- TODO: pageTemplates / components client-side rather than server-side  -->

<Navbar>
	<NavBrand href="/">
		<div class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Opportunity Matcher - Home Page
		</div>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/user/dashboard">User Dashboard</NavLi>
	</NavUl>
</Navbar>

<div class="m-6">
	<Label for="small-input" class="mb-2 block">Enter User ID - "Mock" Authentication</Label>
	<Input id="small-input" size="sm" placeholder="Enter User ID" bind:value={userid} />
	<Button class="mt-8" color="light" on:click={signin}>Sign In</Button>
</div>
