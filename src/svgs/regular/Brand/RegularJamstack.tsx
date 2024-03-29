import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJamstack = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M25.692 2.241a35.714 35.714 0 0 1 6.208-.85c7.54-.006 15.08-.003 22.62-.001 2.702.026 5.412-.083 8.112.058.002 10.193.006 20.388-.001 30.58-.005 5.738-1.608 11.474-4.64 16.348-3.462 5.59-8.778 10.042-14.953 12.331-3.043 1.186-6.295 1.752-9.547 1.913a30.89 30.89 0 0 1-9.924-1.429c-5.914-1.895-11.179-5.717-14.861-10.712-2.636-3.506-4.464-7.609-5.373-11.896-1.39-6.425-.695-13.298 2.01-19.294C9.039 10.894 16.74 4.341 25.692 2.241Zm7.563 7c-.011 7.365-.011 14.73 0 22.096 7.216.007 14.432.008 21.648 0 .006-7.366.01-14.731-.001-22.094-7.215-.004-14.432-.002-21.647-.002m-22.9 23.387c-.065.809.037 1.617.13 2.42.725 5.515 3.521 10.747 7.765 14.354 3.78 3.276 8.706 5.228 13.715 5.327.007-7.357 0-14.715.004-22.071-7.205-.044-14.41.017-21.614-.03m22.905.06c-.018 7.368-.023 14.739.003 22.108 1.25-.078 2.503-.182 3.73-.442 5.086-1.017 9.73-3.956 12.95-8.003 3.088-3.85 4.85-8.728 4.953-13.661-7.211-.004-14.423-.002-21.636-.002Z"
    />
  </svg>
);
export default SvgJamstack;
