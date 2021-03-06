import React, {Component} from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Spiner from './Loader/Loader';
import Modal from './Modal/Modal';

import getImgByRquest from './../services/getImgByRequest';

class App extends Component {
  state = {
    images: [],
    error: null,
    searchRequest: '',
    page: 1,
    largeImageUrl: null,
    loader: false
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchRequest !== this.state.searchRequest) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const{searchRequest, page} = this.state;
    getImgByRquest(this, searchRequest, page);
  }

  handleSubmitForm = (request) => {
    this.setState({
      searchRequest: request,
      images: [],
      page: 1
    })
  }

  toggleModalWindow = ({target}) =>{
    this.setState({
      largeImageUrl: target.dataset.img
    })
  }

  closeModalWindow = () => {
    this.setState({
      largeImageUrl: null,
    })
  }

  render () {
    const{images, loader, largeImageUrl} = this.state;
    const isImagesFull = images.length > 0;
    return (
    <>
      <Searchbar onSubmit={this.handleSubmitForm}/>
      {isImagesFull && <ImageGallery images={images} onClick={this.toggleModalWindow}/>}
      {isImagesFull && !loader && <Button handleClickBtn={this.fetchImages}/>}
      {loader && <Spiner/>}
      {largeImageUrl && <Modal largeImageUrl={largeImageUrl} onClick={this.closeModalWindow}/>}
    </>
    )}
}

export default App;
