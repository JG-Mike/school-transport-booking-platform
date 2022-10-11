import Carousel from 'react-bootstrap/Carousel';

function HomeImage() {
  return (

    // designing the home page with picture slide using react-bootstrap
    
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6156582/pexels-photo-6156582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Fast and easy we to book for students transportation</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/618116/pexels-photo-618116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Safe and organised Transport</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2174715/pexels-photo-2174715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Start Today</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeImage;