import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";
import AboutUs from "../components/about";
import Broker from "../components/broker";
import PropertyTwo from "../components/propertyTwo";
import Categories from "../components/categories";
import ClientOne from "../components/clientOne";
import Blog from "../components/blog";
import AboutCounter from "../components/counter/aboutCounter";
import GetInTuch from "../components/getInTuch";


export default function IndexFour(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu"/>
        <section className="position-relative mt-5 pt-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="card map border-0">
                            <div className="card-body p-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} title="towntor" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="features-absolute subscribe-search">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-md-9">
                                    <div className="text-center subscribe-form">
                                        <form style={{maxWidth:'800px'}}>
                                            <div className="mb-0">
                                                <input type="text" id="help" name="name" className="border shadow rounded-3 bg-white" required="" placeholder="City, Address, Zip"/>
                                                <button type="submit" className="btn btn-primary rounded-3">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-4">
                <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
                <PropertyTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <Categories/>
            </div>

            <div className="container mt-100 mt-60">
                <ClientOne/>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <div className="position-relative overflow-hidden rounded-3 shadow py-5" style={{backgroundImage:"url('/images/bg/05.jpg')",backgroundPosition:'center' ,backgroundAttachment:'fixed'}}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <AboutCounter/>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Broker/>
            </div>

            <div className="container mt-100 mt-60">
                <Blog/>
            </div>

            <div className="container mt-100 mt-60">
                <GetInTuch/>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}
