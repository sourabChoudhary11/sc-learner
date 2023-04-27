import React, { Fragment } from 'react'
import vg from '../assets/secondImage.jpg'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
    return (
        <Fragment>
            <div className='home' id='home'>
                <main>
                    <h1>SCLearner</h1>
                    <p>Learning and Solution of your problems.</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt numquam praesentium doloribus error explicabo maxime ratione tenetur reiciendis rerum. Provident, libero commodi amet alias eius dolore et aut possimus haru Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at perspiciatis maiores fugiat in minus debitis harum nostrum obcaecati officia! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime iure cum, enim harum reprehenderit quidem quod commodi ea voluptas consectetur quis nostrum molestiae fuga, perspiciatis voluptate suscipit pariatur dicta voluptatum laudantium vitae doloremque? Enim sint assumenda molestiae ea debitis laudantium!
                    </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>

                        <div style={{
                            animationDelay:'0.3s'
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:'0.5s'
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:'0.7s'
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                        <div style={{
                            animationDelay:'1s'
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                    </article>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
