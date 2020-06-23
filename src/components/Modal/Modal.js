import React, {Component} from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByKeyDown)
  }

  closeModalByKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  }

  render () {
    const {largeImageUrl, onClick} = this.props;
    return (
      <div onClick={onClick} className="Overlay">
        <div className="Modal">
          <img src={largeImageUrl} alt=""/>
        </div>
      </div>
    );
  }
}

export default Modal;
