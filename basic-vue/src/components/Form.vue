<template>
	<div class="article-form">
		<form>
			<input v-model="article_header" placeholder="article header" />
			<input v-model="article_description" placeholder="article description" />
		</form>
	</div>
</template>

<script>
export default {
	name: 'ArticleForm',
	data: {
		article_header: '',
		article_description: '',
	},
};
</script>