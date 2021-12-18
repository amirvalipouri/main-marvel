import React , {useState} from 'react'
import {Container , Row , Col} from 'react-bootstrap';
import DropDownBtn from '../Dropdown/DropdownBtn'
import Logo from "../../assert/logoheader.png"
import { Link } from 'react-router-dom'
import './Header.scss';



function Header() {
    const [ menu , setMenu ] = useState(false)
    const toggleMenu = () => {
        setMenu(prev => !prev)
    }
    const show = menu ? "show" : "";
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                    <div className=" NAV position-absolute top-0 start-0 end-0 w-100">
                        <nav className="navbar p-3 d-flex justify-content-between align-items-center navbar-expand-lg">
                                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                                <button onClick={toggleMenu} className="navbar-toggler bg-light" type="button" >
                                    asd
                                </button>
                                <div className={"collapse navbar-collapse  " + show} id="navbarNavDropdown">
                                    
                                    <ul className="navbar-nav">
                                    <li style={{width:"40px" , height : "40px"}}>
                                        <img src={Logo} alt="logo" style={{width : "100%" , height : "100%"}} />
                                    </li>
                                    <li className="nav-item active mx-2 iranSans">
                                        <a className="nav-link text-white" href="#">صحفه اصلي</a>
                                    </li>
                                    <li className="nav-item mx-2 iranSans">
                                        <a className="nav-link text-white" href="#">قوانين و مقررات مشاوره اقتصادي</a>
                                    </li>
                                    <li className="nav-item mx-2 iranSans">
                                        <a className="nav-link text-white" href="#">ويندوز سرور تريد</a>
                                    </li>
                                    <li className="nav-item mx-2 iranSans">
                                        <a className="nav-link text-white" href="#"> مقالات</a>
                                    </li>
                                    <li className="nav-item mx-2 iranSans">
                                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            راهنما
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown  mx-2   iranSans ">
                                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            درباره ما
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    </ul>
                                    
                                </div>
                                <div>
                                        <Link to="/Login"><button type="button" class="btn btn-sm p-2 font-sm btn-light text-primary ml-2">ثبت نام /ورود</button></Link>
                                    </div>
                                
                        </nav>

                    
                    </div>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Header
