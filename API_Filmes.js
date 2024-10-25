  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTVkNzg2MGQ3MWM2MDcxNjM5MDc3NTMxOTM2MDRmNSIsIm5iZiI6MTcyOTcwODUxMi40MDA1MjYsInN1YiI6IjY3MTkzMDUxNmQ2YjcwNWRjODcxMWE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0Alel---mR396G1i7KWtqb3gvAlL6QVxe0niOHhdMg",
    },
  };
  fetch('https://api.themoviedb.org/3/discover/movie?with_keywords=9951,9882&language=pt-BR', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));



// overview = sinopse
// original title = titulo
// poster path = poster do filme

//1184918