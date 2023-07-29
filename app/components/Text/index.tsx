import React from "react";

const sizeClasses = {
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA70099: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsMedium40: "font-medium font-poppins",
  txtLexendExtraLight20: "font-lexend font-thin",
  txtPlayfairDisplayItalicMedium14: "font-medium font-playfairdisplay italic",
  txtPoppinsMedium48: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

 const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
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
