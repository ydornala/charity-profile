import React from "react";
import ReactPlayer from "react-player";
import { ReactSVG } from "react-svg";

import Button from '../button';

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
import SendGrandIcon from '../../assets/icons/sendGrand.svg';
import FavoriteIcon from '../../assets/icons/favorites.svg';
import HeartStrokeIcon from '../../assets/icons/heart_stroke.svg';

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

const grants = [{
  grant: '5',
  subText: 'NCG givers',
  mainText: 'have charity in their favorite charities list'
}, {
  grant: '$10',
  mainText: 'grants to this charity (my fund)'
}, {
  grant: '$25,307',
  mainText: 'grants to this charity (all funds)'
}]

const Content = () => {
  return (
    <div className="content">
      <div className="c-row">
        <div className="c-left">
          <div className="card grant-info">
            <div className="vi-row send-grant">
              <div className="sg-logo-wrapper">
                <div className="logo-container">
                  <img className="logo" src="/images/logo.png" alt="logo" />
                </div>
                <div className="sg-text-wrapper">
                  <div className="sg-main-text">Boys & Girls Clubs of Southern Maine</div>
                  <div className="sg-location">
                    <ReactSVG src={MapIcon} /> Portland, N/A
                  </div>
                </div>
              </div>
              <div className="sg-actions">
                <div className="sg-actions-container">
                  <Button className="primary">
                    <ReactSVG src={SendGrandIcon} /> Send a grant
                  </Button>
                  <Button className="icon-button">
                    <ReactSVG className="fav-btn" src={HeartStrokeIcon} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="vi-row grants">
              {grants && grants.map((g, i) => {
                return <div className="g-card" key={`grant-${i}`}>
                  <div className="grant-overview"><span className="grant-value">{g.grant}</span> {g.subText && <span>{g.subText}</span>} </div>
                  <div className="grant-main-text">{g.mainText}</div>
                </div>
              })}
            </div>
          </div>

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

              <hr className="border" />

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
