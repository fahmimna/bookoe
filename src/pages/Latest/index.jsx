import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const LatestPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto py-[30px] w-full">
        <div className="flex flex-col gap-[41px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1246px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="bg-gray-100 flex flex-col items-start justify-start mt-[33px] p-10 sm:px-5 rounded-[15px]">
              <Text
                className="mb-[3px] md:ml-[0] ml-[30px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                size="txtPoppinsSemiBold42Gray900"
              >
                <span className="text-gray-900 font-poppins text-left font-semibold">
                  Our{" "}
                </span>
                <span className="text-deep_purple-A200 font-poppins text-left font-semibold">
                  Latest
                </span>
                <span className="text-gray-900 font-poppins text-left font-semibold">
                  {" "}
                  Collection
                </span>
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[77px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="h-[340px] md:ml-[0] ml-[5px] relative w-[99%]">
                  <Img
                    className="h-[340px] m-auto object-cover rounded-lg w-full"
                    src="images/img_productphoto_340x260.png"
                    alt="productphoto"
                  />
                  <Text
                    className="absolute bg-deep_purple-A200 h-[41px] justify-center left-[0] pl-[18px] sm:pr-5 pr-[34px] py-1.5 rounded-br-[50px] rounded-tr-[50px] text-[18.67px] text-white-A700 top-[9%] w-[148px]"
                    size="txtPoppinsRegular1867"
                  >
                    12/12/2023
                  </Text>
                </div>
                <Text
                  className="leading-[32.00px] md:ml-[0] ml-[5px] mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl w-[99%] sm:w-full"
                  size="txtPoppinsSemiBold24"
                >
                  The Priory of The Orange Tree
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] mt-2 text-black-900 text-xl"
                  size="txtPoppinsRegular20Black900"
                >
                  by Samanthan Shannon
                </Text>
                <Img
                  className="h-[25px] mt-[11px]"
                  src="images/img_group2903.svg"
                  alt="group2911"
                />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[5px] mt-[11px] rounded-lg text-center text-xl"
                  shape="round"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                >
                  Read Book
                </Button>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="h-[340px] md:ml-[0] ml-[3px] relative w-[99%]">
                  <Img
                    className="h-[340px] m-auto object-cover rounded-lg w-full"
                    src="images/img_productphoto_2.png"
                    alt="productphoto"
                  />
                  <Text
                    className="absolute bg-deep_purple-A200 h-[41px] justify-center left-[0] pl-[18px] sm:pr-5 pr-[33px] py-1.5 rounded-br-[50px] rounded-tr-[50px] text-[18.67px] text-white-A700 top-[9%] w-[148px]"
                    size="txtPoppinsRegular1867"
                  >
                    10/12/2023
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[3px] mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  The Time Has Come
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[3px] text-black-900 text-xl"
                  size="txtPoppinsRegular20Black900"
                >
                  by Will Leitch
                </Text>
                <Img
                  className="h-[25px] mt-[17px]"
                  src="images/img_group2903.svg"
                  alt="group2912"
                />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[3px] mt-[42px] rounded-lg text-center text-xl"
                  shape="round"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                >
                  Read Book
                </Button>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="h-[340px] md:ml-[0] ml-[3px] relative w-[99%]">
                  <Img
                    className="h-[340px] m-auto object-cover rounded-lg w-full"
                    src="images/img_productphoto_3.png"
                    alt="productphoto"
                  />
                  <Text
                    className="absolute bg-deep_purple-A200 h-[41px] justify-center left-[0] pl-[18px] sm:pr-5 pr-[33px] py-1.5 rounded-br-[50px] rounded-tr-[50px] text-[18.67px] text-white-A700 top-[9%] w-[148px]"
                    size="txtPoppinsRegular1867"
                  >
                    30/11/2023
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[3px] mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  Under The Skin
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[3px] text-black-900 text-xl"
                  size="txtPoppinsRegular20Black900"
                >
                  by Linda Villarosa
                </Text>
                <Img
                  className="h-[25px] mt-[18px]"
                  src="images/img_group2903.svg"
                  alt="group2913"
                />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[3px] mt-[41px] rounded-lg text-center text-xl"
                  shape="round"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                >
                  Read Book
                </Button>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="h-[340px] md:ml-[0] ml-[3px] relative w-[99%]">
                  <Img
                    className="h-[340px] m-auto object-cover rounded-lg w-full"
                    src="images/img_productphoto_4.png"
                    alt="productphoto"
                  />
                  <Text
                    className="absolute bg-deep_purple-A200 h-[41px] justify-center left-[0] pl-[18px] sm:pr-5 pr-[35px] py-1.5 rounded-br-[50px] rounded-tr-[50px] text-[18.67px] text-white-A700 top-[9%] w-[148px]"
                    size="txtPoppinsRegular1867"
                  >
                    12/11/2023
                  </Text>
                </div>
                <Text
                  className="leading-[32.00px] md:ml-[0] ml-[3px] mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl w-[99%] sm:w-full"
                  size="txtPoppinsSemiBold24"
                >
                  (Forget a Mentor) Find a Sponsor
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[7px] text-black-900 text-xl"
                  size="txtPoppinsRegular20Black900"
                >
                  by Sylvia Ann Hewlett
                </Text>
                <Img
                  className="h-[25px] mt-[11px]"
                  src="images/img_group2903.svg"
                  alt="group2914"
                />
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[3px] mt-3 rounded-lg text-center text-xl"
                  shape="round"
                  color="deep_purple_A200"
                  size="sm"
                  variant="outline"
                >
                  Read Book
                </Button>
              </div>
            </List>
            <div className="bg-deep_purple-A200 flex flex-col gap-[22px] items-center justify-start mt-[126px] p-11 md:px-10 sm:px-5 rounded-[15px] w-full">
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
                    <Img className="h-5" src="images/img_lock.svg" alt="lock" />
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

export default LatestPage;
