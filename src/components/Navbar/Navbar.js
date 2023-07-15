import React from "react";
import styles from "./styles.module.css";
import searchimg from "../../assets/Images/searchimg.svg";
import navbarlogo from "../../assets/Images/navbarlogo.svg";

const Navbar = () => {
  return (
    <div className={styles.navbarMainContainer}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogoAndMenuItems}>
          <div className={styles.navbarLogoImgBlock}>
            <img src={navbarlogo} className={styles.navbarLogo} alt="" />
            <p className={styles.navbarLogoText}>NBM</p>
          </div>
          <div className={styles.navbarMenuItemsBlock}>
            <p className={styles.navbarMenuItem}>Home</p>
            <p className={styles.navbarMenuItem}>About us</p>
            <p className={styles.navbarMenuItem}>Contact us</p>
          </div>
        </div>
        <div className={styles.navbarRightSearchImage}>
          <img src={searchimg} className={styles.imageWidth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
