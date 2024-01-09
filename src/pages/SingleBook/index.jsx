import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const SingleBookPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto py-[26px] w-full">
        <div className="flex flex-col gap-[41px] items-center justify-start mt-[5px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1241px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[72px] w-full">
              <Img
                className="h-[587px] md:h-auto mb-2 object-cover rounded-[14px]"
                src="images/img_productphoto_587x408.png"
                alt="productphoto"
              />
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[59px]">
                <div className="flex flex-col relative w-[73%] sm:w-full">
                  <Text
                    className="mx-auto md:text-5xl text-[62px] text-gray-900"
                    size="txtPoppinsSemiBold62"
                  >
                    Pride and Protest
                  </Text>
                  <Text
                    className="mt-[-0.01px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 z-[1]"
                    size="txtPoppinsLight36"
                  >
                    by Nikki Payne
                  </Text>
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-start mt-3.5 w-[47%] md:w-full">
                  <Text
                    className="bg-yellow-800 flex h-[55px] items-center justify-center rounded-[27px] sm:text-[17.53px] md:text-[19.53px] text-[21.53px] text-center text-white-A700 w-[55px]"
                    size="txtPoppinsRegular2153"
                  >
                    4.0
                  </Text>
                  <Img
                    className="h-[55px]"
                    src="images/img_group2903.svg"
                    alt="group2911"
                  />
                </div>
                <Text
                  className="mt-[54px] text-gray-900 text-xl w-full"
                  size="txtPoppinsRegular20Gray900"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
                <Text
                  className="mt-[117px] text-gray-600_01 text-xl"
                  size="txtPoppinsLight20Gray60001"
                >
                  First published December 12, 2023
                </Text>
              </div>
            </div>
            <div className="bg-deep_purple-A200 flex flex-col gap-[22px] items-center justify-start mt-[91px] p-11 md:px-10 sm:px-5 rounded-[15px] w-full">
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-white-A700 w-[69%] sm:w-full"
                size="txtPoppinsSemiBold42"
              >
                Join our newsletter to get our latest recommendation!
              </Text>
              <div className="flex sm:flex-col flex-row gap-2 items-center justify-center mb-[17px] w-2/5 md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[50px] items-start justify-end p-2.5 w-[77%] sm:w-full"
                  style={{
                    backgroundImage: "url('images/img_group39466.svg')",
                  }}
                >
                  <div className="flex flex-row gap-3 items-start justify-start ml-2 md:ml-[0] mt-1 w-[52%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-base text-gray-600"
                      size="txtPoppinsLight16"
                    >
                      Enter your email
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-start p-3"
                  style={{
                    backgroundImage: "url('images/img_group39467.svg')",
                  }}
                >
                  <Text
                    className="text-base text-deep_purple-A200"
                    size="txtPoppinsMedium16DeeppurpleA200"
                  >
                    Submit
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex font-dmsans items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SingleBookPage;
