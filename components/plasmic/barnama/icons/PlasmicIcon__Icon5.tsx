// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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
        "plasmic-default__svg plasmic_all__rN0Vc PlasmicReviewCard_svg__jcPhF__P7ogF lucide lucide-message-circle"
      )}
      viewBox={"0 0 24 24"}
      role={"img"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M7.9 20A9 9 0 104 16.1L2 22z"}></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
