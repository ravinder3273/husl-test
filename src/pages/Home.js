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
import MobileImage from '../Images/center.png';
import Heading from '../Images/heading.png';
import Dot_Bottom from '../Images/dots.png';

const Home = () => {
    const description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";
    return (
        <div>
            <div class="Angle_down">
                <button><i class="fa fa-angle-down"></i></button>
            </div>
            <div className="Heading_Next">
                <h1>HOW IT WORKS</h1>
                <p>It is a long established fact that a reader will
                    be distracted by the readable content.</p>
            </div>
            <div className="row">
                <CustomCard title={"LOGIN"} description={description} icon={CARD1} bgColor="bgColor_First" />
                <CustomCard title={"TAKE STEPS"} description={description} icon={CARD2} bgColor="bgColor_Second" />
                <CustomCard title={"EARN COINS"} description={description} icon={CARD3} bgColor="bgColor_Third" />
            </div>
            <div class="features">
                <img src={Heading} alt="" />
                <div class="container1">
                    <div class="background">
                        <div class="step">
                            <div class="card12">
                                <h1 className="sr-number">1</h1>
                                <h2>TAKE STEPS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                            <div class="card13">
                                <div className="sr-number-sec">
                                    <h1 className="sr-number">2</h1>
                                </div>
                                <h2>WITHDRAW COINS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                        </div>
                        <div className="step-image">
                            <img src={MobileImage} alt="" />
                        </div>
                        <div class="step1">
                            <div class="card12">
                                <h1 className="sr-number">3</h1>
                                <h2>INVITE FRIENDS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                            <div class="card13">
                                <div className="sr-number-sec">
                                    <h1 className="sr-number">4</h1>
                                </div>
                                <h2>CHALLENGE FRIENDS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Download">
                <h1>DOWNLOAD OUR APP</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                <div class="Apple_Images">
                    <img src={APPLE} alt="" />
                    <img src={NEXTAPPLE} class="nextapple" alt="" />
                </div>
                <div class="Images_row">
                    <img src={FOUR} alt="" />
                    <img src={CENTER1} class="CENTER1" alt="" />
                    <img src={SIX} alt="" />
                </div>
                <img src={Dot_Bottom} className="Dot_Bottom" alt=""/>
            </div>
        </div>
    )
}

export default Home
