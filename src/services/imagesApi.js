const originUrl = 'https://pixabay.com/api';
const key = '13157109-fcd6eded5baca4880d7f5c7a8';

const fetchImagesWithRequest = async (request, page = 1) => {
  try {
    const {hits} = await fetch (
      `${originUrl}/?q=${request}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then (response => response.json ());
      return hits;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchImagesWithRequest;
