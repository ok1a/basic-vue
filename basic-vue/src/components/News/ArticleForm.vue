<template>
	<div class="article-form-container">
		<form class="article-form">
			<input v-model="article_header" placeholder="article header" />
			<input v-model="article_description" placeholder="article description" />
			<button v-on:click.prevent="addArticle">Submit New Article</button>
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
		addArticle: function() {
			const newStoryToAdd = {
				title: this.article_header,
				description: this.article_description,
			};
			this.$store.dispatch('articles/addStory', newStoryToAdd);

			this.clearForm();
		},

		clearForm: function() {
			this.article_header = '';
			this.article_description = '';
		},
	},
};
</script>

<style scoped>
.article-form-container {
	border: 1px dashed white;
	padding: 1rem;
}
.article-form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-content: center;
}

.article-form * {
	margin: 0.4rem 0;
	text-align: center;
}
</style>