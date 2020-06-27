import fetchImagesWithRequest from './imagesApi';

const getImgByRequest = (stateObj, searchRequest, page) => {
  const heightSpiner = 120;
  const scroll = document.documentElement.offsetHeight - heightSpiner;
  stateObj.setState({loader: true});
  fetchImagesWithRequest(searchRequest, page)
  .then(images => {
    stateObj.setState(prevState => ({
      images: [...prevState.images, ...images],
      page: prevState.page + 1,
    }));
    window.scrollTo({
      top: scroll,
      behavior: 'smooth',
    });
  })
  .catch(error => stateObj.setState({error}))
  .finally(()=>stateObj.setState({loader:false}))
}

export default getImgByRequest;