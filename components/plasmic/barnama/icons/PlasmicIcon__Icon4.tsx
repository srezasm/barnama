// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
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
        "plasmic-default__svg plasmic_all__rN0Vc PlasmicReviewCard_svg__oYc9Q__2jwbo lucide lucide-send"
      )}
      viewBox={"0 0 24 24"}
      role={"img"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M22 2l-7 20-4-9-9-4zm0 0L11 13"}></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
