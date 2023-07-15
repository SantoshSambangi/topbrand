import React from "react";
import styles from "./styles.module.css";
import rightarrowimg from "../../assets/Images/rightarrowimg.svg";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialMediaData = [
    {
      socialMediaImg: <BiLogoFacebook />,
    },
    {
      socialMediaImg: <BiLogoInstagram />,
    },
    {
      socialMediaImg: <FaLinkedinIn />,
    },
  ];

  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeftBlock}>
          <p className={styles.topBrandHeading}>TOP BRANDS MEDIA</p>
          <p className={styles.cityHeading}>Chennai</p>
          <p className={styles.cityHeadingOne}>Los angeles</p>
          <div className={styles.socialMediaImgBlock}>
            {socialMediaData &&
              socialMediaData.map((item, index) => {
                console.log("socialMediaData", socialMediaData);
                return (
                  <div className={styles.socilMediaSubBlock} key={index}>
                    <span className={styles.socialMediaImg}>
                      {item.socialMediaImg}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.footerRightBlock}>
          <div className={styles.footerRightSubBlock}>
            <p className={styles.getInTouchHeading}>Get in touch</p>
            <div className={styles.rightArrowImgBlock}>
              <img src={rightarrowimg} className={styles.imageWidth} alt="" />
            </div>
          </div>
          <div className={styles.divider}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
