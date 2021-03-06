import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';
// import background from '../media/landing.png';

// const sectionStyle = {
//     backgroundSize: "100% 100%",
//     height: "100VH",
//     backgroundRepeat: "no-repeat",
//     backgroundImage: `url(${background})`
//   };

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }


    return (
            // <section style={ sectionStyle }>
            <div className="home">
                <img className="yao" src="https://vignette.wikia.nocookie.net/cardfight/images/c/cb/Yao-ming-meme.jpg/revision/latest?cb=20150317072431" alt="yao ming" />
            
                <p className="landing-page-info">what if i told u, <br/>
                u can enjoy learning <br/>the names of <br/>some dank memes <br/> w/ spaced repetition</p>
                <p className="spaced-rep-info">*spaced repetition is a learning technique that utilizes increasing intervals of time between subsequent review of previously learned material in order to exploit the psychological spacing effect </p>
                <div className="options">
                    <div className="login">
                        <Link className="login-link" to="/login">Log In</Link>
                    </div>
                    <div className="register">
                        <Link className="register-link" to="/register">Register</Link>
                    </div>
                </div>
            </div>
        // </section>
    );
}


export default LandingPage;