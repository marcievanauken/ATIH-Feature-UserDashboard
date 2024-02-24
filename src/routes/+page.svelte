<script>
	import { Alert } from 'flowbite-svelte';

	export let data;
	// console.log(data);

	// <!-- TO POTENTIALLY MOVE ALL OF THIS TO SRC/LIB/PAGETEMPLATES AND import data from there -->

	// don't have so many vars just use in string?
	let userName = `${data.first_name} ${data.last_name}`;
	let userAvatar = data.user_image;
	let userInterests = data.interested_in;
	let userMatches = data.matches;

	// can be in utilities or index.js as reusable function

	//TODO: error handling
	let groups = userMatches.reduce(
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

<div class="p-8">
	<p>Hello {userName}!</p>
</div>

<div class="p-8">
	<!-- <ImageComponent> -->
	<img src={userAvatar} alt="user avatar" />
</div>

<div class="p-8">
	<ul>
		<!-- <TagsComponent> -->
		{#each userInterests as interest, index}
			<li>{interest}</li>
		{/each}
	</ul>
</div>

<div class="p-8">
	<p>You've matched with {userMatches.length} opportunities!</p>
</div>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>
</div>

<div class="p-8">
	{#each groups as group}
		<br />
		<h2>{group.role}</h2>
		<h2>{group.values.length}</h2>
		<hr />
		<ul>
			{#each group.values as item, i}
				<li>
					<p>
						{i + 1} - {item.role}
						- {item.org_name}
					</p>
				</li>
			{/each}
		</ul>
	{/each}
</div>
