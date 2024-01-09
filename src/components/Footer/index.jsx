import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col gap-[55px] items-center justify-start w-[87%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-[11px] items-end justify-between w-full">
                    <Button
                      className="flex h-[58px] items-center justify-center mt-[13px] w-[58px]"
                      shape="round"
                      color="deep_purple_A200"
                      size="sm"
                      variant="fill"
                    >
                      <Img src="images/img_settings.svg" alt="settings_One" />
                    </Button>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="sm:text-[31px] md:text-[37px] text-[41px] text-gray-900"
                        size="txtPoppinsMedium41"
                      >
                        Bookoe
                      </Text>
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtPoppinsLight14"
                      >
                        Rekomendasi Bukumu
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="leading-[30.00px] md:mt-0 mt-3 text-blue_gray-500 text-lg"
                  size="txtDMSansRegular18"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Text>
              </div>
              <Img
                className="h-px"
                src="images/img_footerbottom.svg"
                alt="footerbottom"
              />
            </div>
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-9 w-[86%] md:w-full">
              <Text
                className="text-blue_gray-500 text-lg"
                size="txtDMSansRegular18"
              >
                Copyright © 2023 Codemasters.id | All Rights Reserved{" "}
              </Text>
              <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                <div className="flex flex-col items-end justify-start w-[7%]">
                  <Img
                    className="h-[18px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[11%]">
                  <Img
                    className="h-3.5"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                </div>
                <Img
                  className="h-[19px] w-[19px]"
                  src="images/img_info.svg"
                  alt="info"
                />
                <div className="flex flex-col items-center justify-start w-[19px]">
                  <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                    <Img
                      className="h-[17px] w-[18px]"
                      src="images/img_link.svg"
                      alt="link"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[12%]">
                  <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_warning.svg"
                      alt="warning"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
