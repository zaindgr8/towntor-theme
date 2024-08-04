import React from "react";
import Link from "next/link";
import Image from "next/image";

import {brokerData} from '../data/data'

import {FiFacebook, FiInstagram, FiTwitter} from '../assets/icons/vander'

export default function Broker(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title mb-3">Property Broker</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>
            </div>
        </div>

        <div className="row g-4 mt-0">
            {brokerData.map((item, index) => {
                return(
                    <div className="col-lg-3 col-md-4 col-12" key={index}>
                        <div className="card team team-primary text-center">
                            <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                                <ul className="list-unstyled team-social mb-0">
                                    <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="icons fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="icons fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="icons fea-social"/></Link></li>
                                </ul>
                            </div>

                            <div className="content mt-3">
                                <Link href="/page-team-detail" className="text-dark h5 mb-0 title">{item.name}</Link>
                                <h6 className="text-muted mb-0 fw-normal">{item.title}</h6>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}