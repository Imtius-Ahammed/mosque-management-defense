import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight, faQuran, faMosque, faHands, faHand, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
// import hstry from "../../../1_images/2_historyOFcenter/1_hstry-img.png";
import banner from "../../../1_images/istockphoto-1252924066-170667a.jpg";
import "./Help.css"
import SingleHelp from './SingleHelp';
import AllCampaigns from '../../../hooks/AllCampaigns';
const Help = () => {

    const [causes] = AllCampaigns()




    return (


        <div>
            <section class="container pt-5 pb-5 poppins">

                <div class="mini_title">
                    <p class="text-center">Need Help For Help</p>
                </div>

                <div class="text-center">
                    <h5 class="main_heading">Our Causes</h5>
                </div>

                <div class="d-flex justify-content-center mt-4">
                    <div class="heading_line"></div>
                </div>

                <div class="mt-3">
                    <p class="text-center help_section_body_text">
                        Join hands with us to accomplish all these projects of serving humanity and <br></br> making this world a
                        better place to live.
                    </p>

                    <div class="row pt-3">
                        {
                            causes.map(cause => <SingleHelp
                                key={cause._id}
                                cause={cause}
                            ></SingleHelp>)
                        }





                    </div>
                </div>

            </section>
        </div>

    );
};

export default Help;