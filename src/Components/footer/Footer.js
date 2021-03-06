import React from 'react';
import {Button} from "../buttons/Button";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the adventure newsletter to receive our best vacation deals
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at anytime
          </p>
          <div className="input-areas">
            <form action="">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="footer-input"
              />
              <Button button-style="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
              <Link to='/'>LinkedIn</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                DreamFurther <i className="fab fa-typo3"/>
              </Link>
            </div>
            <small className="website-rights">DreamFurther © 2020</small>
            <div className='social-icons'>
              <Link
                class='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fa fa-facebook'/>
              </Link>
              <Link
                class='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fa fa-instagram'/>
              </Link>
              <Link
                class='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fa fa-youtube'/>
              </Link>
              <Link
                class='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fa fa-twitter'/>
              </Link>
              <Link
                class='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fa fa-linkedin'/>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;