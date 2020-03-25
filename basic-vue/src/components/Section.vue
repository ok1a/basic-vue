<template>
	<section>
		<h1>API News</h1>
		<div class="cards-holder">
			<Card
				v-for="(news, index) in newsArr"
				:key="index"
				v-bind:article="news"
			/>
		</div>
		<div id="add-story">
			<!-- <button v-on:click="addArticle">add story</button> -->
			<ArticleForm />
		</div>
		<div id="attribution">
			<a href="https://newsapi.org/" target="_blank"
				>All real-world news data powered by NewsAPI</a
			>
		</div>
	</section>
</template>

<script>
import Card from './Card';
import ArticleForm from './Form';

export default {
	name: 'Section',
	beforeCreate: function() {
		console.log('instance not created yet.');
		// console.log(
		//   'instance not created yet. the below function should error since the method has not been defined yet',
		// );

		// this.testLifecycle('beforeCreate');
	},
	created: function() {
		console.log('instance created');
		this.testLifecycle('created');
	},
	beforeUpdate: function() {
		console.log("our data has changed, we're about to re-render!");
		this.testLifecycle('beforeUpdate');
	},
	updated: function() {
		this.testLifecycle('updated');
	},
	mounted: function() {
		this.$store.dispatch('GET_POSTS');
	},
	data: function() {
		return {};
	},
	computed: {
		newsArr: function() {
			return this.$store.getters.getNewsStories;
		},
	},
	components: {
		Card,
		ArticleForm,
	},
	methods: {
		testLifecycle: function(fromFunc) {
			console.log(
				`how long after/before a lifecycle method will this run... let's see. ${fromFunc}`,
			);
		},
	},
};
</script>

<style scoped>
section {
	border: 1px solid black;
	height: 100%;
	padding-bottom: 20rem;
}

.cards-holder {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
}
h1 {
	color: rgb(235, 142, 142);
}
a {
	text-decoration: none;
	color: whitesmoke;
}
#attribution,
#add-story {
	width: 50%;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	padding: auto;
}
</style>
