import { Cookies } from 'react-cookie';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Carousel } from 'react-bootstrap';


function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['email']);

   




  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
        width="500" height="700"
          className="d-block w-100"
          src="https://www.louwmanexclusive.nl/app/uploads/autobedrijfvoertuigen/voertuig/31.197.585/10269683806-31197585-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Maserati</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="500" height="700"
          className="d-block w-100"
          src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/ge4hkbg9j8qhzyeqi09a"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Mclaren</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="500" height="700"
          className="d-block w-100"
          src="https://media.ed.edmunds-media.com/rolls-royce/ghost/2021/oem/2021_rolls-royce_ghost_sedan_base_fq_oem_1_1600.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Rolls-Royce</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default Home;
