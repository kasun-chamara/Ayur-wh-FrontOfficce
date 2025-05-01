import React from "react";
import "./WhyChoose.css";
import bgImage from "../../assets/whUs.png";
import { FaUserMd, FaLeaf, FaFlask, FaHandsHelping } from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaUserMd className="icon" />,
      title: "Expert Guidance",
      desc: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida",
    },
    {
      icon: <FaLeaf className="icon" />,
      title: "Holistic Approach",
      desc: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida",
    },
    {
      icon: <FaFlask className="icon" />,
      title: "Natural Solutions",
      desc: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida",
    },
    {
      icon: <FaHandsHelping className="icon" />,
      title: "Community Support",
      desc: "Fames et tortor integer ut phasellus auctor primis himenaeos gravida",
    },
  ];

  return (
    <div
      className="why-choose"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <h2>Medicine with <br /> the green perspective.</h2>

        <div className="features">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Green row with 4 stats in one background */}
        <div className="stats-row">
          <div className="stat-item">
            <h3>47K+</h3>
            <p>Happy Customer</p>
          </div>
          <div className="stat-item">
            <h3>8K+</h3>
            <p>Country Support</p>
          </div>
          <div className="stat-item">
            <h3>51+</h3>
            <p>Customer Ratings</p>
          </div>
          <div className="stat-item">
            <h3>4.8</h3>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
