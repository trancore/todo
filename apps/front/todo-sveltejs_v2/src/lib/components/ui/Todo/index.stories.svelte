<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

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
		expired: new Date()
	}}
/>
<Story
	name="less_than_seven_days"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new Date()
	}}
/>
<Story
	name="three_days_ago"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new Date()
	}}
/>
<Story
	name="on_the_day"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new Date()
	}}
/>
<Story
	name="expired"
	args={{
		title: 'titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle',
		description:
			'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription',
		expired: new Date()
	}}
/>
