/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div>
                <div className="footer-area pt-5" style={{ backgroundColor:"black" }}>
                    <div className="container text-white">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="text-white">
                                    <h4 className="mb-4 text-white">E-commerce</h4>
                                </div>
                                <div>
                                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti, cum commodi fugit
                                        debitis sequi possimus obcaecati. Ducimus, optio voluptate!</p>
                                </div>
                            </div>
                            <div className="col-sm-3 px-5 text-white">
                                <div>
                                    <h4 className="mb-4 text-white">Category</h4>
                                </div>
                                <div>
                                    <div>Phone</div>
                                    <div>Laptop</div>
                                    <div>Camera</div>
                                    <div>Television</div>
                                </div>
                            </div>
                            <div className="col-sm-3 px-5">
                                <div>
                                    <h4 className="mb-4 text-white">LINKS</h4>
                                </div>
                                <div className="text-white">
                                    <div> <Link className="text-white" to="/" style={{ textDecoration: "none" }}>Home</Link> </div>
                                    <div> <Link className="text-white" to="/login" style={{ textDecoration: "none" }}>Login</Link> </div>
                                    <div> <Link className="text-white" to="/about" style={{ textDecoration: "none" }}>About</Link></div>
                                    <div> <Link className="text-white" to="/contact" style={{ textDecoration: "none" }}>Contact</Link> </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="" style={{ marginLeft:"60px" }}>
                                    <div>
                                        <h4 className="mb-4 text-white">ADDRESS</h4>
                                    </div>
                                    <div>
                                        <p className="text-white">Bashundhara R/A <br /> Dhaka,Bangladesh</p>
                                    </div>
                                    <div className="">
                                        <a href="https://www.facebook.com/" target="_blank"><i
                                            className="fab fa-facebook h4 pr-3"></i></a>
                                        <a href="https://www.linkedin.com/" target="_blank"> <i
                                            className="fab fa-linkedin h4 px-2"></i></a>
                                        <a href="https://www.github.com/" target="_blank"> <i
                                            className="fab h4 fa-github-square px-2"></i></a>
                                    </div>
                                    <div className="btn btn-danger btn-sm">
                                        Phone: +8801749555864
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center py-4 fw-bold"><small className="text-white">copyright 2021 || all rights reserved by e-commerce.com</small></p>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Footer;