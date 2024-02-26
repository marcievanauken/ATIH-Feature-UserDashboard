<script>
	import { Heading, P, Button, Badge, Alert } from 'flowbite-svelte';

	export let data;
	// console.log(data);

	let signedIn = !data?.errorMessage ? true : false;

	// don't have so many vars?
	let userName = `${data?.first_name} ${data?.last_name}`;
	let userAvatar = data?.user_image;
	let userInterests = data?.interested_in;
	let userMatches = data?.matches;

	//TODO: error handling, can be more paramaterized for reusability as utility function
	let groupedOpps = userMatches?.reduce(
		(/** @type {{ role: string; values: any[]; }[]} */ curr, /** @type {{ role: any; }} */ val) => {
			let group = curr.find((g) => g.role === `${val.role}`);
			if (group) {
				group.values.push(val);
			} else {
				curr.push({ role: `${val.role}`, values: [val] });
			}
			return curr;
		},
		[]
	);
</script>

{#if !signedIn}
	<Heading tag="h4" class="m-8 text-red-700">{data.errorMessage}</Heading>
{/if}

{#if signedIn}
	<Heading tag="h1" class="m-8">Hello {userName}!</Heading>

	<img src={userAvatar} class="m-8" alt="user avatar" />

	{#if !userMatches.length}
		<div class="p-8">
			<Alert>
				<P>You have not added any interests. Add interests to be matched to opportunities.</P>
				<Button size="xs" color="light" class="mr-4 mt-4">+ INTEREST</Button>
			</Alert>
		</div>
	{:else}
		<div class="p-8">
			<Heading tag="h2">Your Interests</Heading>
			{#each userInterests as interest, index}
				<Badge color="dark" large class="mr-4">{interest}</Badge>
			{/each}
			<Button size="xs" color="light" class="mr-4">+ INTEREST</Button>
		</div>

		<div class="p-8">
			<Heading tag="h3" class="mb-4 font-normal"
				>You've matched with
				<span class="font-bold">{userMatches.length}</span> opportunities!</Heading
			>
		</div>

		<div class=" m-8">
			{#each groupedOpps as group}
				<div class="border-4 p-8">
					<div class="text-left">
						<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl"
							>{group.role}</Heading
						>
					</div>
					<Heading tag="h2" class="mb-4" customSize="text-3xl md:text-4xl font-bold"
						>{group.values.length} Match{#if group.values.length > 1}es{/if}</Heading
					>
					<ul>
						{#each group.values.slice(0, 3) as item, i}
							<li>
								<P class="text-lg dark:text-gray-400">
									<span class="font-bold">{item.org_name}:</span>
									{item.match_level}% Match
									<Button class="mb-8 ml-3" color="light" href="/">View Match</Button>
								</P>
							</li>
						{/each}
					</ul>
					{#if group.values.length > 1}
						<Button href="/">
							All {group.role} Matches
						</Button>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
{/if}
