import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './../../Images/logo.jpeg';
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const categories = [
    {
        filter: "women's clothing",
        displayName: 'Women'
    },
    {
        filter: "men's clothing",
        displayName: 'Men'
    }, {
        filter: "jewelery",
        displayName: 'Smart Gear'
    }, {
        filter: "electronics",
        displayName: 'Accessories'
    },
]
const Navbar = ({ setCategory, selectedCategory, ...props }) => {
    return (
        <React.Fragment>
            <div className='navfirst' >
                <nav className="navbar navbar-expand-sm bg-#1f39ff navbar-dark py-3 shadow-sm">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/"><img width={100} src={logo} /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                                <li className='nav-link'><a href='/home'>Home</a></li>
                                {
                                    categories?.map((category, i) =>

                                        <li key={i} className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}>{category.displayName}
                                        </li>

                                    )
                                }
                            </ul>
                            <div className="buttons">

                                <NavLink to="/" className="login"> < FiSearch />Search</NavLink>
                                <NavLink to="/" className="signin" ><FiUser />Signin</NavLink>
                                <NavLink to="/cart" className="cart"> <FiShoppingBag />
                                    {' '}
                                    {props.countCartItems ? (
                                        <span class='badge badge-warning' id='lblCartCount'> {props.countCartItems} </span>
                                    ) : (
                                        ''
                                    )}
                                </NavLink>{' '}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </React.Fragment>
    )
}

export default Navbar