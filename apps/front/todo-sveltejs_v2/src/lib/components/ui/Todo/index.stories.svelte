<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { SvelteDate } from 'svelte/reactivity';

	import Todo from './index.svelte';

	const { Story } = defineMeta({
		component: Todo,
		title: 'ui/Todo',
		parameters: {
			layout: 'centered'
		}
	});
</script>

<Story
	name="seven_days_or_more"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new SvelteDate(Date.now() + 7 * 24 * 60 * 60 * 1000)
	}}
/>
<Story
	name="less_than_seven_days"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new SvelteDate(Date.now() + 5 * 24 * 60 * 60 * 1000)
	}}
/>
<Story
	name="less_than_three_days"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new SvelteDate(Date.now() + 2 * 24 * 60 * 60 * 1000)
	}}
/>
<Story
	name="on_the_day"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new SvelteDate()
	}}
/>
<Story
	name="expired"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new SvelteDate(Date.now() - 1 * 24 * 60 * 60 * 1000)
	}}
/>
<Story
	name="completed"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new SvelteDate(Date.now() + 7 * 24 * 60 * 60 * 1000),
		isCompleted: true
	}}
/>
