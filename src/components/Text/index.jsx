import React from "react";

const sizeClasses = {
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsLight36: "font-light font-poppins",
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsSemiBold72: "font-poppins font-semibold",
  txtPoppinsRegular2153: "font-normal font-poppins",
  txtMontserratRomanRegular2324: "font-montserrat font-normal",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold20Gray900dd: "font-poppins font-semibold",
  txtPoppinsRegular1867DeeppurpleA200: "font-normal font-poppins",
  txtPoppinsMedium14718: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsSemiBold62: "font-poppins font-semibold",
  txtPoppinsLight20: "font-light font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsSemiBold20DeeppurpleA200: "font-poppins font-semibold",
  txtPoppinsMedium16DeeppurpleA200: "font-medium font-poppins",
  txtPoppinsRegular16Gray900: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold42: "font-poppins font-semibold",
  txtPoppinsRegular1867: "font-normal font-poppins",
  txtPoppinsRegular1549: "font-normal font-poppins",
  txtPoppinsMedium41: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsSemiBold42Gray900: "font-poppins font-semibold",
  txtPoppinsRegular20Gray900: "font-normal font-poppins",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtPoppinsLight20Gray60001: "font-light font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
