import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { propertyData } from "../data/data";

import {FiHome, FiHeart, FiCamera} from "../assets/icons/vander"

export default function ListSidebar(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/03.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <p className="text-white-50 para-desc mx-auto mb-0">Grid view Listing</p>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Property Listing</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card bg-white p-4 rounded-3 shadow sticky-bar">
                            <div>
                                <h6 className="mb-0">Search Properties</h6>

                                <div className="search-bar mt-2">
                                    <div id="itemSearch2" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchItemform2" className="searchform">
                                            <input type="text" className="form-control rounded-3 border" name="s" id="searchItem2" placeholder="Search..."/>
                                            <input type="submit" id="searchItemsubmit2" value="Search"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h6 className="mb-0">Type of Properties</h6>

                                <ul className="list-unstyled mt-2 mb-0">
                                    <li className="list-inline-item mb-0 me-2">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="rent"/>
                                                <label className="form-check-label" htmlFor="rent">For Rent</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item mb-0 me-2">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="buy"/>
                                                <label className="form-check-label" htmlFor="buy">For Buy</label>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item mb-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" defaultChecked type="radio" name="flexRadioDefault" id="sell"/>
                                                <label className="form-check-label" htmlFor="sell">For Sell</label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h6 className="mb-0">Categories</h6>
                                <label className="visually-hidden" htmlFor="procategories">Categories</label>
                                <select className="form-select form-control border mt-2" id="procategories" aria-label="Default select example">
                                    <option value="re">Residential</option>
                                    <option value="la">Land</option>
                                    <option value="co">Commercial</option>
                                    <option value="ind">Industrial</option>
                                    <option value="inv">Investment</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <h6 className="mb-0">Location</h6>
                                <label className="visually-hidden" htmlFor="prolocation">Location</label>
                                <select className="form-select form-control border mt-2" id="prolocation" aria-label="Default select example">
                                    <option value="NY">New York</option>
                                    <option value="MC">North Carolina</option>
                                    <option value="SC">South Carolina</option>
                                </select>
                            </div>

                            <div className="mt-4">
                                <Link href="" className="btn btn-primary w-100">Apply Filter</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="row g-4">
                            {propertyData.map((item,index)=>{
                                return(
                                    <div className="col-12" key={index} >
                                        <div className="card property property-list border-0 shadow position-relative overflow-hidden rounded-3">
                                            <div className="d-md-flex">
                                                <div className="property-image position-relative overflow-hidden shadow flex-md-shrink-0 rounded-3 m-2">
                                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid h-100 w-100" alt=""/>
                                                    <ul className="list-unstyled property-icon">
                                                        <li className=""><Link href="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHome className="icons"/></Link></li>
                                                        <li className="mt-1"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHeart className="icons"/></Link></li>
                                                        <li className="mt-1"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiCamera className="icons"/></Link></li>
                                                    </ul>
                                                </div>
                                                <div className="card-body content p-3">
                                                    <Link href={`/property-detail/${item.id}`} className="title fs-5 text-dark fw-medium">{item.title}</Link>
        
                                                    <ul className="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center justify-content-between">
                                                        <li className="d-flex align-items-center me-3">
                                                            <i className="mdi mdi-arrow-expand-all fs-5 me-2 text-primary"></i>
                                                            <span className="text-muted">8000sqf</span>
                                                        </li>
                        
                                                        <li className="d-flex align-items-center me-3">
                                                            <i className="mdi mdi-bed fs-5 me-2 text-primary"></i>
                                                            <span className="text-muted">4 Beds</span>
                                                        </li>
                        
                                                        <li className="d-flex align-items-center">
                                                            <i className="mdi mdi-shower fs-5 me-2 text-primary"></i>
                                                            <span className="text-muted">4 Baths</span>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                                        <li className="list-inline-item mb-0">
                                                            <span className="text-muted">Price</span>
                                                            <p className="fw-medium mb-0">$5000</p>
                                                        </li>
                                                        <li className="list-inline-item mb-0 text-muted">
                                                            <span className="text-muted">Rating</span>
                                                            <ul className="fw-medium text-warning list-unstyled mb-0">
                                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                                <li className="list-inline-item mb-0 text-dark">5.0(30)</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="row">
                            <div className="col-12 mt-4 pt-2">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-left fs-6"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item active"><Link className="page-link" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-right fs-6"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}
