import React from 'react'
import CustomCard from '../Component/card';
import CARD1 from '../Images/first.svg';
import CARD2 from '../Images/second.svg';
import CARD3 from '../Images/third.svg';
import NEXTAPPLE from '../Images/apple.png';
import APPLE from '../Images/android.png';
import FOUR from '../Images/four.png';
import CENTER1 from '../Images/center.png';
import SIX from '../Images/six.png';
import Heading from '../Images/heading.png';
import Bottom from '../Images/dots.png';


function Layout() {
    const description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";
    return (
        <div>
            <div className="Heading_Next">
                <div class="Onclike">
                    <button onclick="myFunction()">Click me</button>
                </div>
                <h1>HOW IT WORKS</h1>
                <p>It is a long established fact that a reader will
                    be distracted by the readable content.</p>
            </div>
            <div className="row4">
                <CustomCard title={"LOGIN"} description={description} icon={CARD1} bgColor="bgColor_First" />
                <CustomCard title={"TAKE STEPS"} description={description} icon={CARD2} bgColor="bgColor_Second" />
                <CustomCard title={"EARN COINS"} description={description} icon={CARD3} bgColor="bgColor_Third" />
            </div>
            <div className="features">
                <img src={Heading} alt="" />
                <div className="container">
                    <div className="background">
                        <div className="step">
                            <div className="card12">
                                <h1>1</h1>
                                <h2>TAKE STEPS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                            <div className="card13">
                                <h1>2</h1>
                                <h2>WITHDRAW COINS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                        </div>
                        <div className="step1">
                            <div className="card12">
                                <h1>3</h1>
                                <h2>INVITE FRIENDS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                            <div className="card13">
                                <h1>4</h1>
                                <h2>CHALLENGE FRIENDS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Download">
                <h1>DOWNLOAD OUR APP</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                <div className="Apple_Images">
                    <img src={APPLE} alt="" />
                    <img src={NEXTAPPLE} className="nextapple" alt="" />
                </div>
                <div>
                    <div className="Images_row">
                        <img src={FOUR} alt="" />
                        <img src={CENTER1} className="CENTER1" alt="" />
                        <img src={SIX} alt="" />

                    </div>
                </div>
            </div>
            <img src={Bottom} className="bottom" alt="" />
        </div>
    )
}

export default Layout
