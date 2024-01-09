import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-[11px] items-end justify-between w-[19%] md:w-full">
          <Button
            className="flex h-[58px] items-center justify-center mt-[13px] w-[58px]"
            shape="round"
            color="deep_purple_A200"
            size="sm"
            variant="fill"
          >
            <Img src="images/img_settings.svg" alt="settings" />
          </Button>
          <div className="flex flex-col items-center justify-start">
            <Text
              className="sm:text-[31px] md:text-[37px] text-[41px] text-gray-900"
              size="txtPoppinsMedium41"
            >
              Bookoe
            </Text>
            <Text className="text-gray-900 text-sm" size="txtPoppinsLight14">
              Rekomendasi Bukumu
            </Text>
          </div>
        </div>
        <ul className="flex flex-row sm:hidden items-start justify-center mb-2 md:ml-[0] ml-[200px] md:mt-0 mt-[31px] w-[19%] md:w-full common-row-list">
          <li>
            <Text
              className="mb-0.5 text-gray-600 text-xl"
              size="txtPoppinsRegular20"
            >
              All
            </Text>
          </li>
          <li>
            <Text
              className="ml-[26px] text-gray-600 text-xl"
              size="txtPoppinsRegular20"
            >
              Latest
            </Text>
          </li>
          <li>
            <Text
              className="ml-6 mt-0.5 text-gray-600 text-xl"
              size="txtPoppinsRegular20"
            >
              Top Picks
            </Text>
          </li>
        </ul>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-start justify-end md:ml-[0] ml-[37px] md:mt-0 mt-[21px] p-[7px] w-[33%] md:w-full"
          style={{ backgroundImage: "url('images/img_group39.svg')" }}
        >
          <div className="flex flex-row gap-3.5 items-start justify-start ml-3.5 md:ml-[0] mt-1 w-[76%] md:w-full">
            <Img
              className="h-5 mt-0.5 w-5"
              src="images/img_search.svg"
              alt="search"
            />
            <Text className="text-gray-500 text-xl" size="txtPoppinsLight20">
              Search by title or authors...
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[135px] ml-4 md:ml-[0] md:mt-0 mt-[21px] rounded-lg text-center text-xl"
          shape="round"
          color="deep_purple_A200"
          size="sm"
          variant="outline"
        >
          Edit List
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
