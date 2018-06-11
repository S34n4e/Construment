import React	from 'react';
//import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';



  const photos = [  ];
  const data = require('./gallery.json');
  
 //var imagen;// = new Object();
    for (var i in data) {
        var imagen = {};//new Object();
        imagen.src = data[i].src;
        imagen.width = 3;
        imagen.height = 3;
        photos.push(imagen);
    }

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    
   
     
    
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <section className="banner">
      <div class="container">
      <br/>
      <h1>Gallery</h1>

        <Gallery columns="4" photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        <br/>
      </div>
      </section>
    )
  }
  
}
export default App;




