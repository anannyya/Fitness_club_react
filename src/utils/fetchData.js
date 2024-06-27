export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '99ae8a94efmsh5db7611194a9869p10bec6jsn9472bbf1f336',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': '99ae8a94efmsh5db7611194a9869p10bec6jsn9472bbf1f336',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
