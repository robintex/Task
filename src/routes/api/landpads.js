export async function load() {
    const response = await fetch('https://api.spacexdata.com/v3/landpads');
    const data = await response.json();
    return { landpads: data };
    console.log(data);
  }
  