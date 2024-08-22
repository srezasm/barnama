// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 3584.55 3673.6"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1024.16.01h1536.23c563.34 0 1024.16 460.16 1024.16 1023.45v493.93c-505 227-1014.43 1348.12-1756.93 1104.51-61.16 43.46-202.11 222.55-212 358.43-257.11-34.24-553.52-328.88-517.95-646.62-427.94-309.54-74.55-880.95 264.8-1110.94 727.32-492.94 1737.05-69 1175.39 283.45-341.52 214.31-1071.84 355.88-995.91-170.24-200.34 57.78-328.58 431.34-87.37 626-223.45 219.53-180.49 623.07 58.36 755.57 241.56-625.87 1082.31-544.08 1422-1291.2 255.57-562-123.34-1202.37-880.91-1104C1482.29 396.6 946.37 878.89 678.35 1450.9c-271.94 580.36-231.47 1357.51 326.93 1749.18 657.15 460.92 1356.78 34.13 1780.52-523.68 249.77-328.78 468-693 798.75-903.37v875.72c0 563.28-460.88 1024.86-1024.16 1024.86H1024.16C460.87 3673.61 0 3212.74 0 2649.45V1024.16C0 460.87 460.87 0 1024.16 0z"
        }
        fillRule={"evenodd"}
        data-name={"Isolation Mode"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
