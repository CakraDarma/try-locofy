import type { NextPage } from "next";
import Head from "next/head";
import "antd/dist/antd.min.css";
import { Button } from "@mui/material";
import { Dropdown, Menu, Button as AntButton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import SellYourHomeContainer from "./sell-your-home-container";
import CardWithInputs from "./card-with-inputs";
import WashingtonContainer from "./washington-container";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <main className={styles.landingPage}>
      <header className={styles.topHeader} id="header">
        <div className={styles.topContainer}>
          <div className={styles.logo}>
            <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
            <div className={styles.name}>
              <div className={styles.reis}>REIS</div>
              <div className={styles.realState}>Real State</div>
            </div>
          </div>
          <div className={styles.navigationRight}>
            <div className={styles.navigation}>
              <div className={styles.home}>HOME</div>
              <div className={styles.home}>ABOUT US</div>
              <div className={styles.home}>OUR AGENTS</div>
              <div className={styles.properties}>PROPERTIES</div>
              <div className={styles.home}>GALLERY</div>
              <div className={styles.home}>BLOG</div>
              <div className={styles.home}>CONTACT US</div>
              <div className={styles.home}>SEARCH</div>
            </div>
            <button className={styles.hamburger}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </div>
      </header>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionContents}>
          <div className={styles.text}>
            <h1 className={styles.findYourDream}>Find Your Dream Home</h1>
            <div className={styles.vestibulumAnteIpsum}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <form className={styles.rentsale}>
            <div className={styles.tabs}>
              <button className={styles.rent} autoFocus={true} disabled={false}>
                <div className={styles.rent1}>Rent</div>
              </button>
              <Button
                disableElevation={true}
                color="primary"
                size="medium"
                variant="contained"
                sx={{ borderRadius: "0px 0px 0px 0px" }}
              >
                Sale
              </Button>
            </div>
            <div className={styles.formwrapper}>
              <nav className={styles.formcontainer}>
                <div className={styles.locations}>
                  <div className={styles.locations1}>Locations</div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "New York" },
                            { value: "Los Angeles" },
                            { value: "Chicago" },
                            { value: "Berlin" },
                          ] as any
                        ).map((option: any, index: number) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className={styles.propertyType}>
                  <div className={styles.propertyType1}>Property Type</div>
                  <Dropdown
                    className={styles.dropdownlink}
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "Studio apartments" },
                            { value: "One-bedroom apartments" },
                            { value: "Two-bedroom apartments" },
                            { value: "Three-bedroom apartments" },
                            { value: "Four or more bedroom apartments/houses" },
                          ] as any
                        ).map((option: any, index: number) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className={styles.rentRange}>
                  <div className={styles.propertyType1}>Rent Range</div>
                  <Dropdown
                    className={styles.dropdownlink}
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "$500-$2000" },
                            { value: "$2500-$10000" },
                            { value: "$10000+" },
                          ] as any
                        ).map((option: any, index: number) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <AntButton
                  className={styles.searchCta}
                  size="middle"
                  shape="default"
                  style={{ width: "102px" }}
                  type="primary"
                >
                  Search
                </AntButton>
              </nav>
            </div>
          </form>
        </div>
      </section>
      <div className={styles.propertiesByAreaImagesSect}>
        <div className={styles.description}>
          <div className={styles.propertiesByArea}>Properties by Area</div>
          <div className={styles.areaSubtitle}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardwrapper}>
            <div className={styles.row1}>
              <a className={styles.card1} target="_blank">
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </a>
              <div className={styles.card2}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </div>
              <div className={styles.card3}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.card4}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Arlington</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </div>
              <div className={styles.card5}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.propertiesByAreaFeatureCar}>
        <div className={styles.areaContent}>
          <div className={styles.areaLabels}>
            <div className={styles.propertiesByArea}>Properties by Area</div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.propertiesRow}>
            <SellYourHomeContainer
              imageId="/icon.svg"
              actionText="Sell your home"
            />
            <SellYourHomeContainer
              imageId="/icon.svg"
              actionText="Rent your home"
              propWidth="312px"
            />
            <SellYourHomeContainer
              imageId="/icon.svg"
              actionText="Buy a home"
              propWidth="unset"
            />
            <SellYourHomeContainer
              imageId="/icon.svg"
              actionText="Free marketing"
              propWidth="312px"
            />
          </div>
        </div>
      </div>
      <form className={styles.latestPropertiesOfRentCard}>
        <div className={styles.contents}>
          <div className={styles.text6}>
            <div className={styles.latestPropertiesOf}>
              Latest Properties of Rent
            </div>
            <div className={styles.vestibulumAnteIpsum2}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardsRow}>
            <CardWithInputs imageDimensions="/property-image@2x.png" />
            <CardWithInputs imageDimensions="/property-image@2x.png" />
            <CardWithInputs imageDimensions="/property-image@2x.png" />
            <CardWithInputs imageDimensions="/property-image@2x.png" />
          </div>
        </div>
        <Button
          disableElevation={true}
          color="primary"
          size="medium"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        >
          Load more listing
        </Button>
      </form>
      <div className={styles.latestPropertiesOfRentCard1}>
        <div className={styles.contents1}>
          <div className={styles.text6}>
            <div className={styles.propertiesByArea}>
              Latest Properties of Rent
            </div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardRow}>
            <WashingtonContainer />
            <WashingtonContainer propBackgroundImage="url('/card-21@3x.png')" />
            <WashingtonContainer propBackgroundImage="url('/card-31@3x.png')" />
            <WashingtonContainer propBackgroundImage="url('/card-41@3x.png')" />
          </div>
        </div>
        <Button
          disableElevation={true}
          color="primary"
          size="medium"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        >
          Load more listing
        </Button>
      </div>
      <div className={styles.latestPropertiesOfRentCard2}>
        <div className={styles.contents2}>
          <div className={styles.text6}>
            <div className={styles.propertiesByArea}>Contact us</div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.formText}>
              <b className={styles.enquiryForm}>Enquiry Form</b>
              <div className={styles.areYouLooking}>
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.inputRow}>
                <div className={styles.input}>
                  <div className={styles.firstName}>First name</div>
                </div>
                <div className={styles.input1}>
                  <div className={styles.firstName}>Last name</div>
                </div>
              </div>
              <div className={styles.destinationNameInput}>
                <div className={styles.firstName}>Email id</div>
              </div>
              <div className={styles.input2}>
                <div className={styles.commentsOrQuestions}>
                  Comments or questions
                </div>
              </div>
              <Button
                className={styles.formSubmitButton}
                disableElevation={true}
                color="primary"
                size="medium"
                variant="contained"
                sx={{ borderRadius: "0px 0px 0px 0px", width: 222, height: 46 }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <footer className={styles.footer}>
          <div className={styles.contactUs2}>
            <div className={styles.logo}>
              <img
                className={styles.houselineIcon}
                alt=""
                src="/houseline.svg"
              />
              <div className={styles.name}>
                <div className={styles.reis}>REIS</div>
                <div className={styles.realState}>Real State</div>
              </div>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactUs3}>Contact Us</div>
              <div className={styles.becomeAHost}>Call : +123 400 123</div>
              <div className={styles.praesentNullaMassa}>
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className={styles.emailExamplemailcom}>
                Email: example@mail.com
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.centerville}>Features</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.becomeAHost}>Home</div>
              <div className={styles.becomeAHost}>Become a Host</div>
              <div className={styles.becomeAHost}>Pricing</div>
              <div className={styles.becomeAHost}>Blog</div>
              <div className={styles.becomeAHost}>Contact</div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.centerville}>Company</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.becomeAHost}>About Us</div>
              <div className={styles.becomeAHost}>Press</div>
              <div className={styles.becomeAHost}>Contact</div>
              <div className={styles.becomeAHost}>Careers</div>
              <div className={styles.becomeAHost}>Blog</div>
            </div>
          </div>
          <div className={styles.termsAndPolicies}>
            <div className={styles.centerville}>Team and policies</div>
            <div className={styles.termsAndPoliciesSubcategori}>
              <div className={styles.becomeAHost}>Terms of servies</div>
              <div className={styles.becomeAHost}>Privacy Policy</div>
              <div className={styles.becomeAHost}>Security</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingPage;
