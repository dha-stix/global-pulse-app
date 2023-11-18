const apiBaseUrl = "https://newsapi.org/v2";

const breakingNewsUrl = `${apiBaseUrl}/top-headlines?country=ng&apiKey=${process.env.EXPO_PUBLIC_NEWS_API_KEY!}`;

const recommendedNewsUrl = `${apiBaseUrl}/top-headlines?country=ng&category=business&apiKey=${process.env.EXPO_PUBLIC_NEWS_API_KEY!}`;

const discoverNewsUrl = (discover:string) =>
	`${apiBaseUrl}/top-headlines?country=ng&category=${discover}&apiKey=${process.env.EXPO_PUBLIC_NEWS_API_KEY!}`;
const searchNewsUrl = (query:string) =>
	`${apiBaseUrl}/everything?q=${query}&apiKey=${process.env.EXPO_PUBLIC_NEWS_API_KEY!}`;

const newsApiCall = async (endpoints:string) => {
	try {
		const response = await fetch(endpoints);
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
	}
};

export const fetchBreakingNews = async () => {
	return await newsApiCall(breakingNewsUrl);
};

export const fetchRecommendedNews = async () => {
	return await newsApiCall(recommendedNewsUrl);
};

export const fetchDiscoverNews = async (discover:string) => {
	return await newsApiCall(discoverNewsUrl(discover));
};

export const fetchSearchNews = async (query:string) => {
	const endpoint = searchNewsUrl(query);
	return await newsApiCall(endpoint);
};
