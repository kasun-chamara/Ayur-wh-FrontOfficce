import React from 'react';
import './AyurSrv.css';
import { FaLeaf } from 'react-icons/fa'; 
import srvImage from '../../assets/Srv-bg-rgt1.png';

const AyurSrv = () => {
  return (
    <div className="container my-4">
      <div className="row position-relative">
        {/* Red Column */}
        <div className="col-md-8">
          <div className="ayur-col col1">
            <div className="w-100">
              {/* Icon above title */}
              <div className="title-icon mb-3"></div>
              <h6 style={{ color: '#163209' }}>Our Services</h6>
              <h1 className="title mb-4">Extraordinary medicine for ordinary people.</h1>
              <hr />
              <div className="row mt-3">
                <div className="col-md-6">
                  <p>
                    Et orci volutpat penatibus facilisis lectus fermentum eu aptent torquent habitasse. Rutrum interdum volutpat a non taciti sollicitudin.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Quisque elementum purus si nec elit nibh. Urna netus sit nec suspendisse pharetra morbi dictum pellentesque orci commodo lobortis.
                  </p>
                </div>
              </div>

              {/* 3 Cards */}
              <div className="row mt-5 cards-wrapper">
                <div className="col-md-4">
                  <div className="info-card card-white">
                  <FaLeaf size={30} color="#00c40a" className='mb-3'/>
                    <h4>Natural Solutions</h4>
                    <p>Mollis vulputate penatibus leo pellentesque faucibus posuere consectetuer in gravida litora tincidunt.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-card card-green">
                  <FaLeaf size={30} color="#fff" className='mb-3'/>
                    <h4 className='text-white'>Proven Benefits</h4>
                    <p className='text-white'> Mollis vulputate penatibus leo pellentesque faucibus posuere consectetuer in gravida litora tincidunt.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-card card-white">
                  <FaLeaf size={30} color="#00c40a" className='mb-3'/>
                    <h4>Accessible Care</h4>
                    <p>Mollis vulputate penatibus leo pellentesque faucibus posuere consectetuer in gravida litora tincidunt.</p>
                  </div>
                </div>
                <hr className='mt-4'></hr>
              </div>
            </div>
          </div>
        </div>

        {/* Blue Column with Background Image */}
        <div className="col-md-4">
          <div
            className="ayur-col col3"
            style={{
              backgroundImage: `url(${srvImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AyurSrv;
