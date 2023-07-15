import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import bannerimg from "../../assets/Images/bannerimg.svg";
import brandcardoneimg from "../../assets/Images/brandcardoneimg.svg";
import brandcardtwoimg from "../../assets/Images/brandcardtwoimg.svg";
import brandcardthreeimg from "../../assets/Images/brandcardthreeimg.svg";
import brandcardfourimg from "../../assets/Images/brandcardfourimg.svg";
import Card from "../../components/Card/Card";
import clientleftimg from "../../assets/Images/clentleftimgblock.svg";
import ourservicerightarrowimg from "../../assets/Images/ourservicerightarrowimg.svg";
import ourserviceimgone from "../../assets/Images/ourserviveimgone.svg";
import ourserviceimgtwo from "../../assets/Images/ourserviceimgtwo.svg";
import branddownarrowimg from "../../assets/Images/branddownarrowimg.svg";
import brandrightarrowimg from "../../assets/Images/branddatarightarrowimg.svg";
import webplatformimg from "../../assets/Images/webplatformimg.svg";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  // /common data

  const scrollData = [
    {
      scrollDesc: "Digital first worldwide",
      scollStar: "*",
      scrollHyphen: "-",
    },
    {
      scrollDesc: "Digital first worldwide",
      scollStar: "*",
      scrollHyphen: "-",
    },
    {
      scrollDesc: "Digital first worldwide",
      scollStar: "*",
      scrollHyphen: "-",
    },
  ];

  //   /brandcarddata

  const brandCardData = [
    {
      brandImg: brandcardoneimg,
      brandHeading: "oUR SERVICE",
      brandDesc: "brand identity",
    },
    {
      brandImg: brandcardtwoimg,
      brandHeading: "oUR SERVICE",
      brandDesc: "brand strategy",
    },
    {
      brandImg: brandcardthreeimg,
      brandHeading: "oUR SERVICE",
      brandDesc: "Performance marketing",
    },
    {
      brandImg: brandcardfourimg,
      brandHeading: "oUR SERVICE",
      brandDesc: "Content and copy writing",
    },
  ];

  const clientData = [
    {
      clientCount: "100+",
      clientDesc: "Clients",
    },
    {
      clientCount: "10+",
      clientDesc: "Experience",
    },
    {
      clientCount: "150+",
      clientDesc: "projects",
    },
    {
      clientCount: "50",
      clientDesc: "Employees",
    },
  ];

  const ourServiceData = [
    {
      ourServiceHeading: "oUR SERVICE",
      ourServiceMainHeading: "influencer marketing stratergy",
      ourServiceDesc:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec",
      ourServiceView: "view ",
      ourServiceArrowImg: ourservicerightarrowimg,
      ourServiceImg: ourserviceimgone,
    },
    {
      ourServiceHeading: "aI powered",
      ourServiceMainHeading: "influencer marketing stratergy",
      ourServiceDesc:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec ",
      ourServiceView: "view ",
      ourServiceArrowImg: ourservicerightarrowimg,
      ourServiceImg: ourserviceimgtwo,
    },
  ];

  const buildBrandData = [
    {
      brandHeading: "did you build brand ?",
      brandDesc:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec",
      brandArrow: branddownarrowimg,
      brandDivider: "",
    },
    {
      brandHeading: "influencer marketing stratergy",
      brandDesc: "",
      brandArrow: brandrightarrowimg,
      brandDivider: "",
    },

    {
      brandHeading: "influencer marketing stratergy",
      brandDesc: "",
      brandArrow: brandrightarrowimg,
      brandDivider: "",
    },
    {
      brandHeading: "influencer marketing stratergy",
      brandDesc: "",
      brandArrow: brandrightarrowimg,
      brandDivider: "",
    },
  ];
  const bannerSection = () => {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.bannerHeading}>the world's</div>
        <div className={styles.bannerImgBlockWithHeadingMainBlock}>
          <div className={styles.bannerImgBlockWithHeading}>
            <div className={styles.bannerLeftImgWithHeading}>
              <div className={styles.bannerImgBlock}>
                <img src={bannerimg} alt="" className={styles.imageWidth} />
              </div>
              <div className={styles.bannerColorBlock}></div>
              <div className={styles.bestHeading}>Best</div>
              <div className={styles.brandBuildersHeading}>brand builders</div>
            </div>
          </div>
          <div className={styles.bannerBottomDesc}>
            only AI powered brand builders, social media and digital marketers
          </div>
        </div>
      </div>
    );
  };

  const scrollSection = () => {
    return (
      <div className={styles.scrollContainer}>
        {scrollData &&
          scrollData.map((item, index) => {
            return (
              <div key={index} className={styles.scrollDataBlock}>
                <p className={styles.scrollDesc}>{item.scrollDesc}</p>
                <p className={styles.scrollStar}>{item.scollStar}</p>
                <p className={styles.scrollHyphen}>{item.scrollHyphen}</p>
              </div>
            );
          })}
      </div>
    );
  };

  const brandSection = () => {
    return (
      <div className={styles.brandContainer}>
        {brandCardData &&
          brandCardData.map((item, index) => {
            return (
              <div key={index} className={styles.brandCardDataBlock}>
                <Card
                  image={item.brandImg}
                  heading={item.brandHeading}
                  desc={item.brandDesc}
                />
              </div>
            );
          })}
      </div>
    );
  };

  const clientSection = () => {
    return (
      <div className={styles.clientContainer}>
        <div className={styles.clientLeftContainer}>
          <div className={styles.clientLeftImgBlock}>
            <img src={clientleftimg} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.clientColorBlock}></div>
        </div>
        <div className={styles.clientRightContainer}>
          {clientData &&
            clientData.map((item, index) => {
              return (
                <div className={styles.clientDataBlock}>
                  <p className={styles.clientCount}>{item.clientCount}</p>
                  <p className={styles.clientDesc}>{item.clientDesc}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  const ourServiceSection = () => {
    return (
      <div className={styles.ourServiceContainer}>
        {ourServiceData &&
          ourServiceData.map((item, index) => {
            return (
              <div key={index} className={styles.ourServiceSubContainer}>
                <div className={styles.ourServiceLeftBlock}>
                  <p className={styles.ourServiceHeading}>
                    {item.ourServiceHeading}
                  </p>
                  <p className={styles.ourServiceMainHeading}>
                    {item.ourServiceMainHeading}
                  </p>
                  <p className={styles.ourServiceDesc}>{item.ourServiceDesc}</p>
                  <div className={styles.serviceViewAndArrow}>
                    <p className={styles.ourServiceView}>
                      {item.ourServiceView}
                    </p>
                    <img
                      src={item.ourServiceArrowImg}
                      alt=""
                      className={styles.ourServiceArrowImg}
                    />
                  </div>
                </div>
                <div className={styles.ourServiceRightBlock}>
                  <img
                    src={item.ourServiceImg}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  const buildBrandSection = () => {
    return (
      <div className={styles.buildBrandContainer}>
        {buildBrandData &&
          buildBrandData.map((item, index) => {
            return (
              <div className={styles.buidBrandSubContainer} key={index}>
                <div className={styles.buidBrandBlock}>
                  <div className={styles.buildBrandLeftBlock}>
                    <p className={styles.brandHeading}>{item.brandHeading}</p>
                    <p className={styles.brandDesc}>{item.brandDesc}</p>
                  </div>
                  <div className={styles.buildBrandRightBlock}>
                    <img
                      src={item.brandArrow}
                      alt=""
                      className={styles.imageWidth}
                    />
                  </div>
                </div>
                <div className={styles.brandDivider}></div>
              </div>
            );
          })}
      </div>
    );
  };

  const webAndMobilePlatformSection = () => {
    return (
      <div className={styles.webAndMobilePlatformContainer}>
        <div className={styles.webAndMobilePlatformLeftBlock}>
          <p className={styles.ourServiceHeading}>oUR SERVICE</p>
          <p className={styles.webPlatformHeading}>Web and mobile platform</p>
          <p className={styles.webPlatformDesc}>
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec
          </p>
          <div className={styles.viewTextBlock}>
            <p className={styles.viewText}>View</p>
            <img
              src={ourservicerightarrowimg}
              alt=" "
              className={styles.webPlatformRightArrow}
            />
          </div>
        </div>
        <div className={styles.webAndMobilePlatformRightBlock}>
          <img src={webplatformimg} className={styles.imageWidth} alt="" />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.homeMainContainer}>
      <Navbar />
      <div className={styles.bannerAndScrollContainer}>
        {bannerSection()}
        {scrollSection()}
      </div>
      <div className={styles.featuresSection}>
        {brandSection()}
        {clientSection()}
        {ourServiceSection()}
        {buildBrandSection()}
        {webAndMobilePlatformSection()}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
