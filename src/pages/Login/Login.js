import React , {useState} from 'react';

import './Login.scss';
import useInput from "../../hook/useInput"
import Input from "../../Components/Input/Input"
import Btn from "../../Components/Button/Btn"
import { Row ,Col , Container } from 'react-bootstrap';
import Logo from '../../assert/marvel.png'
import CircuitBoard from '../../assert/circuit-board.png'


const Login = () => {
    const [ login , setLogin ] = useState(0);
    



    // phone number Details

    const EnterNumber = (e) => {
        e.preventDefault();

        resetPhoneNumber();
    }

    const {
        value : phonenumber,
        isValid : enterphoneIsValid,
        hasError : phoneInputHasError,
        valueChangeHandler :  phonenNumberChange,
        inputBlurHandler : phoneNumberBlur,
        reset : resetPhoneNumber
    } = useInput(value => value.lenght > 0)

    let phoneisValid = false;

    if(phonenumber){
        phoneisValid = true;
    }

    // phone number Details




    // Confirm code Details

    const {
        value : code,
        isValid : entercodeIsValid,
        hasError : codeInputHasError,
        valueChangeHandler :  codeChange,
        inputBlurHandler : codeBlur,
        reset : resetCode
    } = useInput(value => value.lenght > 0);

    let codeisValid = false;
    if(code){
        codeisValid = true;
    }

    const ConfirmNumber = (e) => {
        e.preventDefault()

        resetCode();
    }

    // Confirm code Details

    const phoneinputClass = phoneInputHasError ? "warning" : "LOGININPUT";
    const codeinputClass = codeInputHasError ? "warning" : "LOGININPUT";

    return (
        <Container fluid className="container-login" >
                <Row className="row-login">
                    
                    <Col  md={0} lg={3} sm={0} xs={0} xl={4} ></Col>
                    <Col  md={12} lg={6} sm={12} xs={12} xl={4}  className="d-flex justify-content-center align-items-center position-relative justify-content- align-items-center w-full overflow-hidden">
                        {login==0 && 
                            <div className="p-3 mx-auto position-relative zindex-tooltip bg-white LOGIN">
                                <form onSubmit={EnterNumber} className="position-relative w-100 zindex-tooltip">
                                    <div className="d-flex flex-column align-items-center w-100 my-4">
                                        <div className="LOGO">
                                            <img src={Logo} className="w-100 h-full"  alt="marvel Logo" />
                                        </div>
                                        <span></span>
                                        <p className="text-center mt-4 login-p">ورود</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center  w-full mt-4" >
                                        <Input type="tell" value={phonenumber} onChange={phonenNumberChange} onBlur={phoneNumberBlur} placeholder="شماره موبايل" className={phoneinputClass} />
                                        <Btn type="submit" onClick={()=>{setLogin(1)}} disabled={!phonenumber} className="w-75 text-light Login-Btn p-2 rounded" type="submit">
                                            ارسال كد ورود
                                        </Btn>
                                    </div>
                                </form>
                            
                            </div>
                        }

                        {login==1 && 
                            <div className="p-3 mx-auto position-relative zindex-tooltip bg-white LOGIN">
                                <div className=" m-3 position-absolute top-0 end-0">
                                            <span className="cursor-pointer" onClick={()=>{setLogin(0)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 27.848 27.849">
                                                    <path id="Icon_ionic-md-arrow-forward" data-name="Icon ionic-md-arrow-forward" d="M5.977,21.641H27.124l-9.747,9.747L19.9,33.825,33.825,19.9,19.9,5.977,17.464,8.413l9.659,9.747H5.977v3.481Z" transform="translate(-5.977 -5.977)" fill="gray"/>
                                                </svg>
                                            </span>
                                </div>
                                <form onSubmit={ConfirmNumber} className="position-relative w-100 zindex-tooltip">
                                    <div className="d-flex flex-column align-items-center w-100 my-4">
                                        <div className="LOGO">
                                            <img src={Logo} className="w-100 h-full"  alt="marvel Logo" />
                                        </div>
                                        <span></span>
                                        <p className="text-center mt-4 login-p">ثبت كد ورود</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center  w-full mt-4" >
                                        <Input value={code} onChange={codeChange} onBlur={codeBlur} type="tell" placeholder="كد ورود" className={codeinputClass} />
                                        <Btn   className="w-75 text-light Login-Btn p-2 rounded" disabled={!codeisValid} type="submit">
                                            ورود
                                        </Btn>
                                    </div>
                                </form>
                            
                            </div>
                        }
                    </Col>
                    <Col md={0} lg={3} sm={0} xs={0} xl={4}  className=" start-0 bottom-0  position-relative zindex-sticky">
                        <div className="div-CircuitBoard">
                            <img className="CircuitBoard w-full h-full" src={CircuitBoard} alt="circuit board" />
                        </div>
                    </Col>
                    
                </Row >

                <Row>
                    <Col  className=" position-relative zindex-dropdown"  md={8} lg={6} sm={12} xs={12} xl={4}>
                        <div className="Image-bottom">
                            <img className="CircuitBoard2  w-100 h-100" src={CircuitBoard} alt="circuit board" />
                        </div>
                    </Col>
                </Row>


            

        </Container>
    )
}

export default Login
