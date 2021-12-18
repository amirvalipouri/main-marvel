import React , {useState} from 'react'

import { Container , Row , Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Circuit from '../../assert/circuit2.png';
import Phone from '../../assert/3.png';
import Laptop from '../../assert/laptop.png';
import Crypto from '../../assert/s3.png';

import './Carousel.scss';


const Carousell = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(

    <Carousel  activeIndex={index} onSelect={handleSelect} className="carousel w-full" style={{height : "500px"}}>
      <Carousel.Item>
        <Row className="Row1 d-flex w-100">
                    <Col  className="col-1 d-flex justify-content-center align-items-center mb-4 w-50" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <div className="d-flex justify-content-end align-items-center">
                            <div className="w-full ">
                                <p className="iranSans font-45 text-end  text-white">اپليكيشن ماراول تريد</p>
                                <p className="iranSans font-30 text-end text-white"> با آگاهي حركت كنيد</p>
                                <p className="iranSans font-20 text-end text-dark">انتخاب مطمئن شما برای سرمایه گذاری با مجموعه مجرب</p>
                                
                            </div>
                            
                        </div>
                    </Col>
                    <Col className="col-2 d-flex justify-content-end align-items-center w-50"  xs={12} sm={12} md={12} lg={6} xl={6}>
                            <div className="  phone">
                                <img src={Phone} alt="phone" />
                            </div>
                    </Col>
        </Row>
        
      </Carousel.Item>


      <Carousel.Item>
        <Row className="Row2">
          <Col className="col-1  d-flex justify-content-center align-items-center" xs={12} sm={12} md={12} lg={6} xl={6} >
            <div className="laptop d-flex justify-content-center align-items-center mt-5">
              <img src={Laptop} alt="laptop" />
            </div>
          </Col>
          <Col  className="d-flex justify-content-center align-items-center mt-3" xs={12} sm={12} md={12} lg={6} xl={6}>
            <div>
              <p className="text-end text-white fs-1 iranSans">تيتر اسلايد دوم</p>
              <p className="text-end text-white fs-2 iranSans"> تيتر دوم اسلايد دوم</p>
              <p className="text-end iranSans fs-5 ">توضيحات تكميلي اسلايد دوم</p>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
          <Row className="Row3">
            <Col   className="col-1 d-flex justify-content-center align-items-center mt-3 " xs={12} sm={12} md={12} lg={6} xl={6}>
              <div className="w-full  d-flex flex-column justify-content-center align-items-center mt-3">
                <p className="text-start text-white fs-1 iranSans">تيتر اسلايد سوم</p>
                <p className="text-start text-white fs-2 iranSans"> تيتر سوم اسلايد سوم</p>
                <p className="text-start iranSans fs-5 ">توضيحات تكميلي اسلايد سوم</p>
              </div>
            </Col>
            <Col className="col-2 d-flex jusrify-content-center align-items-center p-4"  xs={12} sm={12} md={12} lg={6} xl={6}>
                <img className="w-full h-full" src={Crypto} alt="Crypto" />
            </Col>
          </Row>
      </Carousel.Item>
    </Carousel>
    )
}

export default Carousell
