<template>
	<div class="article-form">
		<form>
			<input v-model="article_header" placeholder="article header" />
			<input v-model="article_description" placeholder="article description" />
			<button v-on:click.prevent="testArticleForm">Submit New Article</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'ArticleForm',
	data: function() {
		return {
			article_header: '',
			article_description: '',
		};
	},
	methods: {
		testArticleForm: function() {
			const newStoryToAdd = {
				title: this.article_header,
				description: this.article_description,
			};
			console.log('New Story:', newStoryToAdd);
		},
	},
};
</script>