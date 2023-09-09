import React from "react";
import ReactPlayer from "react-player";
import { ReactSVG } from "react-svg";

import "./styles.css";

// icons
import MapIcon from "../../assets/icons/map.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import GlobeIcon from "../../assets/icons/globe.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import ReliefIcon from '../../assets/icons/relief.svg';
import HumanityIcon from '../../assets/icons/humanity.svg';
import WorldIcon from '../../assets/icons/world.svg';
import MissionIcon from '../../assets/icons/mission.svg';

const abouts = [
  {
    text: "Lorem Ipsum is simply dummy text",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book    Lorem Ipsum is simply dummy text",
  },
];

const Content = () => {
  return (
    <div className="content">
      <div className="c-row">
        <div className="c-left">
          <div className="card video-info">
            <div className="vi-row">
              <div className="vi-title">Videos block</div>
              <div className="video-player">
                <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
              </div>
            </div>
            <div className="vi-row">
              <div className="vi-title">About us:</div>
              <div className="about-list">
                <ul className="abouts">
                  {abouts.map((about, i) => {
                    return <li className="about-item">{about.text}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="card contact-info">
            <div className="ci-title">Contact Infomation</div>
            <div className="ci-content">
              <div className="ci-content-row">
                <div>
                  <ReactSVG src={MapIcon} />
                </div>
                <div>
                  Chino Valley Community Church 14601 Peyton DrChino Hills, CA
                  91709
                </div>
              </div>
              <div className="ci-content-row">
                <div>
                  <ReactSVG src={PhoneIcon} />
                </div>
                <div>909-606-4848</div>
              </div>
              <div className="ci-content-row">
                <div>
                  <ReactSVG src={GlobeIcon} />
                </div>
                <div>cvcchurch.org</div>
              </div>
              <div className="ci-content-social-row">
                <div>
                  <ReactSVG src={TwitterIcon} />
                </div>
                <div>
                  <ReactSVG src={FacebookIcon} />
                </div>
                <div>
                  <ReactSVG src={InstagramIcon} />
                </div>
              </div>
            </div>
          </div>

          <div className="card contact-info">
            <div className="cause-wrapper">
              <div className="ci-title">Primary cause:</div>
              <div>
                <a href="www.dummy.com/learn-more" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
            <div className="ci-content">
              <div className="ci-content-row-pc">
              <div>
                  <ReactSVG src={ReliefIcon} />
                </div>
                <div>
                  Disaster relief
                </div>
              </div>

              <hr className="border"/>

              <div className="cause-wrapper">
              <div className="ci-title">Secondary causes:</div>

            </div>

<div className="ci-content-row-pc">
              <div>
                  <ReactSVG src={HumanityIcon} />
                </div>
                <div>
                Humanitarian aid & development
                </div>
              </div>
              <div className="ci-content-row-pc">
              <div>
                  <ReactSVG src={WorldIcon} />
                </div>
                <div>
                Environment
                </div>
              </div>
              <div className="ci-content-row-pc">
              <div>
                  <ReactSVG src={MissionIcon} />
                </div>
                <div>
                Evangelism & missions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
