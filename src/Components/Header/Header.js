import React , {useState} from 'react'
import {Container , Row , Col} from 'react-bootstrap';
import DropDownBtn from '../Dropdown/DropdownBtn'
import Logo from "../../assert/logoheader.png"
import { Link } from 'react-router-dom'
import './Header.scss';
import {useSelector , useDispatch} from "react-redux"
import {authAction} from '../../store/auth'



function Header() {
    const [ menu , setMenu ] = useState(false)
    const toggleMenu = () => {
        setMenu(prev => !prev)
        
    }

    const login = useSelector(state => state.auth.isLogin);
    let show = menu ? "show" : "";
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                    <div className=" NAV position-absolute top-0 start-0 end-0 w-100">
                        <nav className="navbar p-3 d-flex justify-content-between align-items-center navbar-expand-lg">
                            <div style={{width:"40px" , height : "40px"}}>
                                <img src={Logo} alt="logo" style={{width : "100%" , height : "100%"}} />
                            </div>
                                <button onClick={toggleMenu} className="navbar-toggler bg-light" type="button" >
                                    asd
                                </button>
                                <div className={"collapse navbar-collapse bg-resonsive " + show} id="navbarNavDropdown">
                                    <div className="d-flex flex-lg-row justify-content-between align-items-center flex-sm-column">
                                        <ul className="navbar-nav p-2">
                                            {/* <li className="mx-2" style={{width:"40px" , height : "40px"}}>
                                                <img src={Logo} alt="logo" style={{width : "100%" , height : "100%"}} />
                                            </li> */}
                                            <li className="nav-item active mx-2 mx-sm-auto  iranSans">
                                                <a className="nav-link text-white" href="/">صحفه اصلي</a>
                                                
                                            </li>
                                            <li className="nav-item mx-2 mx-sm-auto iranSans">
                                                <a className="nav-link text-white" href="#">قوانين و مقررات مشاوره اقتصادي</a>
                                            </li>
                                            <li className="nav-item mx-2 mx-sm-auto iranSans">
                                                <a className="nav-link text-white" href="/server">ويندوز سرور تريد</a>
                                            </li>
                                            <li className="nav-item mx-2 mx-sm-auto iranSans">
                                                <a className="nav-link text-white" href="#"> مقالات</a>
                                            </li>
                                            <li className="nav-item mx-2 mx-sm-auto iranSans">
                                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    راهنما
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown mx-sm-auto  mx-2   iranSans ">
                                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    درباره ما
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                        {login && 
                                            <div className="mx-sm-auto header-btn">
                                                <Link to="/Login"><button type="button" class="btn btn-sm p-2 font-sm btn-light text-primary ">ثبت نام /ورود</button></Link>
                                            </div>
                                        }

                                        {!login && 
                                            <div className="mx-sm-auto header-btn">
                                                <Link to="/profile"><button type="button" class="profile-btn"> <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.643" height="15.643" viewBox="0 0 24.643 24.643">
                                                        <path id="Union_1" data-name="Union 1" d="M0,24.643v-3.08C0,18.174,5.545,15.4,12.321,15.4s12.321,2.772,12.321,6.161v3.08ZM6.16,6.161a6.161,6.161,0,1,1,6.161,6.16A6.161,6.161,0,0,1,6.16,6.161Z" fill="#efefef"/>
                                                    </svg>    
                                                    </span> پروفايل</button>
                                                </Link>

                                                <Link to="/Login"><button type="button" class="profile-btn" > <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.643" height="15.643" viewBox="0 0 24.643 24.643">
                                                        <path id="Icon_material-shopping-cart" data-name="Icon material-shopping-cart" d="M8.893,22.715a2.464,2.464,0,1,0,2.464,2.464A2.461,2.461,0,0,0,8.893,22.715ZM1.5,3V5.464H3.964L8.4,14.816,6.737,17.835a2.382,2.382,0,0,0-.308,1.183,2.472,2.472,0,0,0,2.464,2.464H23.679V19.018H9.41A.305.305,0,0,1,9.1,18.71l.037-.148,1.109-2.008h9.18a2.453,2.453,0,0,0,2.156-1.269l4.411-8a1.2,1.2,0,0,0,.148-.591,1.236,1.236,0,0,0-1.232-1.232H6.687L5.529,3ZM21.215,22.715a2.464,2.464,0,1,0,2.464,2.464A2.461,2.461,0,0,0,21.215,22.715Z" transform="translate(-1.5 -3)" fill="#efefef"/>
                                                    </svg></span> سبد خريد </button>
                                                </Link>
                                                
                                            </div>
                                        }
                                        
                                    </div>
                                </div>
                                
                                
                        </nav>

                    
                    </div>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Header
