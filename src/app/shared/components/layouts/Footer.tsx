import React from 'react';
import SectionTitle from '../partial/SectionTitle';

export const Footer = () => {
  return(
    <footer className="footer">
      <section className="footer-top py-5">
        <div className="container">
          <SectionTitle
            mainTitle={'Subcribe our newsletter'}
            subTitle={'Sign up for our newsletter to be updated on the latest designs, exclusive offers, inspiration and tips!'} />
          <form className="form d-flex justify-content-center">
            <div className="form-group mb-0 mr-2">
              <input className="form-control" type="email" placeholder="Enter your email" />
            </div>
            <button className="btn btn-primary">Subcribe</button>
          </form>
        </div>
      </section>
      <section className="footer-middle bg-gray-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <a className="logo txt-xxxl mb-2">Changioii</a>
              <ul className="info my-4">
                <li className="info-item mb-3 d-flex align-items-center">
                  <span className="icon-address"></span>
                  <span className="ml-2 d-inline-block">184 Main Rd E, St Albans<br />VIC 3021, Australia</span>
                </li>
                <li className="info-item mb-3 d-flex align-items-center">
                  <span className="icon-mail"></span>
                  <span className="ml-2 d-inline-block">changioii@company.com</span>
                </li>
                <li className="info-item mb-3 d-flex align-items-center">
                  <span className="icon-phone"></span>
                  <span className="ml-2 d-inline-block">+8436 757 4836</span>
                </li>
              </ul>
              <ul className="social d-flex">
                <li className="social-item txt-lg">
                  <a className="pd-2"><span className="icon-facebook"></span></a>
                </li>
                <li className="social-item txt-lg">
                  <a className="pd-2"><span className="icon-instagram"></span></a>
                </li>
                <li className="social-item txt-lg">
                  <a className="pd-2"><span className="icon-mail"></span></a>
                </li>
                <li className="social-item txt-lg">
                  <a className="pd-2"><span className="icon-telegram"></span></a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5 className="footer-block-title">Infomation</h5>
              <ul className="info">
                <li className="info-item">
                  <a>About Us</a>
                </li>
                <li className="info-item">
                  <a>Contact Us</a>
                </li>
                <li className="info-item">
                  <a>Terms of Service</a>
                </li>
                <li className="info-item">
                  <a>Returns & Exchanges</a>
                </li>
                <li className="info-item">
                  <a>Shipping and Delivery</a>
                </li>
                <li className="info-item">
                  <a>Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h5 className="footer-block-title">Useful Links</h5>
              <ul className="info">
                <li className="info-item">
                  <a>Store Location</a>
                </li>
                <li className="info-item">
                  <a>My Accounts</a>
                </li>
                <li className="info-item">
                  <a>Latest New</a>
                </li>
                <li className="info-item">
                  <a>Portfolio</a>
                </li>
                <li className="info-item">
                  <a>Size Guide</a>
                </li>
                <li className="info-item">
                  <a>FQAs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom py-4">
        <div className="container">
          <p className="copyright">Copyright © 2020 <a className="logo">Changioii</a> all rights reserved. Powered by Trang Nguyen T.</p>
        </div>
      </section>
    </footer>
  )
};
