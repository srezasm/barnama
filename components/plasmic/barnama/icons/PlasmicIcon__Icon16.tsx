// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-contact"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M17 18a2 2 0 00-2-2H9a2 2 0 00-2 2"}></path>

      <rect width={"18"} height={"18"} x={"3"} y={"4"} rx={"2"}></rect>

      <circle cx={"12"} cy={"10"} r={"2"}></circle>

      <path d={"M8 2v2m8-2v2"}></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
