import React, { useEffect, useState } from 'react'
import disneyPlus from '../data/images/disneyPlus.jpeg'
import axios from "axios"

// const fetchData = () => {
//     return axios.get("http://localhost:8080")
//         .then((response) => console.log(response.data));
// }

function SubscriptionCardElement(props) {
    const { subData } = props;
    const [isHover, setHover] = useState(false);


    // useEffect(() => {
    //     fetchData();
    // }, []);
    


    return (
        <div className="subcard">

            <div className="subcard--init"
            // onMouseEnter={() => { setHover(true); console.log("ENTER") }}
            // onMouseLeave={() => { setHover(false); console.log("LEAVE") }}
            >
                <img className="sub-image" src={disneyPlus} />
                <div className="sub-title">Disney Plus</div>
            </div>

            <div className="subcard--hover"
            // onMouseEnter={() => { setHover(true); console.log("ENTER") }}
            // onMouseLeave={() => { setHover(false); console.log("LEAVE") }}
            >

                <div className="subcard--inner">
                    <img className="sub-image hover" src={disneyPlus} />

                    <div className="card-topline">
                        <div className="card-topline-left">
                            <div className="sub-title">Disney Plus</div>
                            <div className="sub-stars">★★★★☆</div>
                        </div>
                        <div className="card-topline-right">
                            <div className="sub-annual-price">$12 per month</div>
                            <div className="sub-discount">20% off</div>
                        </div>
                    </div>

                    <div className="sub-rates">13,173 subs</div>
                    <div className="sub-reviews">2,920 reviews</div>


                    <div className="sub-description">Endless entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic. From new releases, to your favorite classics, the past, present, and future are yours.</div>
                </div>
            </div>



        </div>

    )
}

export default SubscriptionCardElement
