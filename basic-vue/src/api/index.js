import axios from 'axios';

const api_key = `apiKey=${process.env.VUE_APP_NEWSAPIKEY}`;

// There isn't really much point of putting this API key in my .env since it's client side code and the API key can easily be found by anyone monitoring the network traffic via their browser's developer tools.
// but since 1) it's a free and public API 2) i'm not planning on spinning up a backend for this exercise just yet (but soon),
// i'll just add it as an env var so it's at least not uploaded to my repo

const endpoint =
  'http://newsapi.org/v2/top-headlines?' + 'country=us&' + api_key;

async function getPostsFromAPI() {
  return axios.get(endpoint);
}

export default { getPostsFromAPI };
