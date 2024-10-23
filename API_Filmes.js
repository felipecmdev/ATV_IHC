async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTVkNzg2MGQ3MWM2MDcxNjM5MDc3NTMxOTM2MDRmNSIsIm5iZiI6MTcyOTcwODUxMi40MDA1MjYsInN1YiI6IjY3MTkzMDUxNmQ2YjcwNWRjODcxMWE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0Alel---mR396G1i7KWtqb3gvAlL6QVxe0niOHhdMg",
    },
  };
  const title = document.getElementById("title").value.toLowerCase;
  try {

    const response = await fetch('https://api.themoviedb.org/3/movie/1184918?language=en-US', options)



      if(!response.ok){
        throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const moviePoster = data.poster_path; 
    const imgElement = document.getElementById("moviePoster"); 
    
    imgElement.src = moviePoster; 
    imgElement.style.display = "block";
}
  catch(error){
      console.error(error);
  }
}


// overview = sinopse
// original title = titulo
// poster path = poster do filme

//1184918