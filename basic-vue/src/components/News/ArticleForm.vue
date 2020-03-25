<template>
	<div class="article-form-container">
		<form @submit.prevent="addArticle" class="article-form">
	<p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>
			<input v-model="article_header" placeholder="article header" />
			<input v-model="article_description" placeholder="article description" />
			<button type="submit">Submit New Article</button>
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
			errors: [],
		};
	},
	methods: {
		addArticle: function() {
			if (this.validateForm()) {
				const newStoryToAdd = {
					title: this.article_header,
					description: this.article_description,
				};
				this.$store.dispatch('articles/addStory', newStoryToAdd);

				this.clearForm();
			} else {
				null;
			}
		},

		clearForm: function() {
			this.article_header = '';
			this.article_description = '';
		},
		validateForm: function() {
			this.errors = [];
			if (this.article_header && this.article_description) {
				return true;
			} else {
				const missingReq = req => {
					return `Please provide an ${req}`;
				};
				if (!this.article_header) {
					this.errors.push(missingReq('article header'));
				}
				if (!this.article_description) {
					this.errors.push(missingReq('article description'));
				}
			}
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