<template>
	<div class="Page">
		<h3>On a page!</h3>
		<h4>
			Which page?
			<span>
				{{ pageName }}
			</span>
		</h4>
		<PathButton />
	</div>
</template>

<script>
import PathButton from './PathButton';

export default {
	name: 'Page',
	props: {
		pageName: String,
	},
	components: {
		PathButton,
	},
};
</script>

<style scoped>
h3,
h4 {
	color: rgb(223, 223, 213);
}
span {
	color: pink;
}
#HomePage .Page h4 span {
	color: yellow;
}
</style>
