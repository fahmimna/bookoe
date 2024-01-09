import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Search404Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[41px] items-center justify-end mx-auto py-[30px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1242px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="bg-gray-100 flex flex-col items-start justify-end mt-[33px] p-[37px] sm:px-5 rounded-[15px] w-full">
            <Text
              className="md:ml-[0] ml-[33px] mt-[9px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
              size="txtPoppinsSemiBold42Gray900"
            >
              Search For Eragon
            </Text>
          </div>
          <div className="border border-deep_purple-A200 border-solid flex flex-col items-center justify-start mt-11 p-[166px] md:px-10 sm:px-5 rounded-[15px] w-full">
            <Text
              className="mb-0.5 md:text-5xl text-7xl text-deep_purple-A200"
              size="txtPoppinsSemiBold72"
            >
              Book Not Found.
            </Text>
          </div>
          <div className="bg-deep_purple-A200 flex flex-col gap-[22px] items-center justify-start mt-[52px] p-11 md:px-10 sm:px-5 rounded-[15px] w-full">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-white-A700 w-[69%] sm:w-full"
              size="txtPoppinsSemiBold42"
            >
              Join our newsletter to get our latest recommendation!
            </Text>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-center mb-[17px] w-2/5 md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[50px] items-start justify-end p-2.5 w-[77%] sm:w-full"
                style={{ backgroundImage: "url('images/img_group39466.svg')" }}
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
                style={{ backgroundImage: "url('images/img_group39467.svg')" }}
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
    </>
  );
};

export default Search404Page;
