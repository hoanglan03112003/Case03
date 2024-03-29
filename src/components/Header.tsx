import React from 'react'
import { Link } from "react-router-dom"
import CarItem from './CarItem'
import Products from '../Page/Products'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const count = useSelector(state => state.counter.value)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container nav-top p-2">
                    <Link className="navbar-brand" to='/'><strong>BookStore</strong></Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link nav-flied" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-flied" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-flied" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className=" position-relative nav-link dropdown-toggle" href="#" id="navbarDropdownCart" data-bs-auto-close="outside" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className="position-absolute top-2 end-100 badge badge-pill bg-danger">{count}</span>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-end cart-dropdown" aria-labelledby="navbarDropdownCart">
                                    <li>
                                        <h3 className="dropdown-item">Your Cart</h3>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <CarItem />
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>

                                    <li>
                                        <span className="float-start ms-2"></span>
                                        <Link to='/checkout' className='btn btn-sm btn-success float-end me-2'>Checkout</Link>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;