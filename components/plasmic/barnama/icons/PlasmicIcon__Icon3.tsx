// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 120 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"15"} cy={"15"} r={"15"}>
        <animate
          attributeName={"r"}
          from={"15"}
          to={"15"}
          begin={"0s"}
          dur={"0.8s"}
          values={"15;9;15"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"fill-opacity"}
          from={"1"}
          to={"1"}
          begin={"0s"}
          dur={"0.8s"}
          values={"1;.5;1"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </circle>

      <circle cx={"60"} cy={"15"} r={"9"} fillOpacity={".3"}>
        <animate
          attributeName={"r"}
          from={"9"}
          to={"9"}
          begin={"0s"}
          dur={"0.8s"}
          values={"9;15;9"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"fill-opacity"}
          from={".5"}
          to={".5"}
          begin={"0s"}
          dur={"0.8s"}
          values={".5;1;.5"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </circle>

      <circle cx={"105"} cy={"15"} r={"15"}>
        <animate
          attributeName={"r"}
          from={"15"}
          to={"15"}
          begin={"0s"}
          dur={"0.8s"}
          values={"15;9;15"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>

        <animate
          attributeName={"fill-opacity"}
          from={"1"}
          to={"1"}
          begin={"0s"}
          dur={"0.8s"}
          values={"1;.5;1"}
          calcMode={"linear"}
          repeatCount={"indefinite"}
        ></animate>
      </circle>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
