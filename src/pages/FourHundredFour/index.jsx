import React from "react";

import { Button, Img, Text } from "components";

const FourHundredFourPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[37px] items-center justify-start mx-auto pb-[108px] md:px-10 sm:px-5 px-[108px] w-full">
        <Img className="h-[220px]" src="images/img_books.svg" alt="books" />
        <div className="flex flex-col items-center justify-start w-[39%] md:w-full">
          <div className="h-[221px] relative w-[65%]">
            <Text
              className="absolute bottom-[4%] inset-x-[0] mx-auto sm:text-[19.24px] md:text-[21.24px] text-[23.24px] text-gray-900_01 w-max"
              size="txtMontserratRomanRegular2324"
            >
              Looks like you’ve got lost...
            </Text>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[147.18px] text-deep_purple-A200 w-max"
              size="txtPoppinsMedium14718"
            >
              404
            </Text>
          </div>
          <Text
            className="mt-2.5 text-[15.49px] text-gray-900_99"
            size="txtPoppinsRegular1549"
          >
            The page you’re looking for doesn’t exist or has been moved.
          </Text>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[120px] mt-[31px] rounded-[5px] text-[12.91px] text-center"
            shape="round"
            color="deep_purple_A200"
            size="xs"
            variant="outline"
          >
            Back Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default FourHundredFourPage;
