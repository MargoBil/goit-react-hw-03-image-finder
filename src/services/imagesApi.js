const fetchImagesWithRequest = (request, page = 1) => {
  return fetch (
    `https://pixabay.com/api/?q=${request}&page=${page}&key=13157109-fcd6eded5baca4880d7f5c7a8&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then (response => response.json ())
    .then (data => data.hits);
};

export default fetchImagesWithRequest;
