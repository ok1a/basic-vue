<template>
	<div class="card">
		<div class="card-content">
			<h3>{{ article.title }}</h3>
			<div class="card-content-summary">
				<p>{{ article.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ArticleCard',
	props: {
		article: Object,
	},
};
</script>

<style scoped>
.card {
	border: 1px solid black;
	width: 29%;
	padding: 0.2rem;
	margin: 1rem auto;
	display: flex;
	justify-content: center;
}
h3 {
	font-size: 1rem;
	color: aquamarine;
}
p {
	font-size: 0.95rem;
	color: blanchedalmond;
}
</style>
