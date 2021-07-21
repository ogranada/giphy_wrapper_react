
const key = 'JtjUASWIKboLBYWDXT4XX4BG9TyL4PSS';

export async function getSuggestionsFromApi(value) {
  if (value.length > 3) {
    const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${value}`
    const response = await fetch(url)
    if (response.ok) {
      const json = await response.json();
      return json.data.map(s => s.name);
    }
    return [];
  } else {
    return [];
  }
}

