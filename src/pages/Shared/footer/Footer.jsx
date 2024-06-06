import React from 'react';
import './Footer.css'

import groupImage from '../../../assets/Group 9969.png'

const Footer = () => {

  return (
    <div className='footer_area'>
      <div className=' text-center footer_container mt-5 '>
        <div className='row mb-5'>
          <div className="col-md-3 order-md-1 order-1 mt-2 ">

            <h4>Needed Job</h4>
            <p className=''>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            <img src={groupImage} alt="" />
          </div>
          <div className="col-md-2 order-md-1 order-1 mt-2 ">

            <h5>Company</h5>
            <p className=''>About Us</p>
            <p className=''>Work</p>
            <p className=''>Latest News</p>
            <p className=''>Careers</p>
          </div>
          <div className="col-md-2 order-md-1 order-1 mt-2 ">

            <h5>Product</h5>
            <p className=''>Prototype</p>
            <p className=''>Plans & Pricing</p>
            <p className=''>Customers</p>
            <p className=''>Integrations</p>
          </div>
          <div className="col-md-2 order-md-1 order-1 mt-2 ">
            <h5>Support</h5>
            <p className=''>Help Desk</p>
            <p className=''>Sales</p>
            <p className=''>Become a Partner</p>
            <p className=''>Developers</p>
          </div>
          <div className="col-md-3 order-md-1 order-1 mt-2 ">
            <h5>Contact</h5>
            <p className=''>524 Broadway , NYC</p>
            <p className=''>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className='row border-top '>
          <div className="col-md-6 order-md-1 order-1 mt-5">
            <p className=''>@2023 CareerHub. All Rights Reserved</p>
          </div>
          <div className="col-md-6 order-md-1 order-1 mt-5">
            <p className=''>Powered by Rezaul Karim Reaz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;