// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
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
        "lucide lucide-circle-fading-arrow-up"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 2a10 10 0 017.38 16.75M16 12l-4-4-4 4m4 4V8m-9.5.875a10 10 0 00-.5 3M2.83 16a10 10 0 002.43 3.4M4.636 5.235a10 10 0 01.891-.857M8.644 21.42a10 10 0 007.631-.38"
        }
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
