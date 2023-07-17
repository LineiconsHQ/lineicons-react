import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMercedes = ({
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
      d="M32.985 0c-17.651 0-32 14.325-32 31.988C.985 49.653 15.31 64 32.985 64s32-14.325 32-32.011C64.985 14.3 50.659 0 32.985 0m0 62.78c-12.026 0-21.455-6.31-25.942-15.016l.683-.253c1.162 1.934 2.688 3.615 4.738 5.895 2.528 2.81 10.522 8.222 20.498 8.222 10.636 0 19.997-5.573 25.236-14.094.41-.115.546-.3.387-.645 2.391-4.284 4.031-9.65 4.031-14.9 0-3.317-.478-6.011-1.252-8.406a36.082 36.082 0 0 0-1.709-4.33.717.717 0 0 1-.114-.415c.137.116.183.185.297.346.455.852 1.503 2.948 1.981 4.33.66 1.819 1.845 4.352 1.845 8.474 0 16.835-13.643 30.791-30.702 30.791M7.294 47.05l22.411-16.305-1.913-1.106L7.818 46.43c-2.255-4.123-3.804-9.397-3.804-14.418 0-15.89 12.504-28.764 28.356-28.856l-4.077 25.701 1.913 1.129 2.574-26.83c.045-.345.273-.345.273 0l.16 28.28 4.555-2.694-4.35-25.586c15.578.415 28.492 13.127 28.492 28.81 0 5.067-1.526 10.34-3.803 14.486L38.155 29.64l-1.913 1.106 21.455 15.73c.523.368.364.529-.205.23L33.418 32.656v5.274l24.142 9.327c-5.056 8.337-14.19 13.68-24.644 13.68-10.454 0-19.45-5.32-24.506-13.68l24.188-9.327v-5.274L7.568 47.28c-.593.323-.753.139-.206-.253m-.57.276c-1.07-2.21-2.186-5.343-2.641-7.807 0-.138-.023-.253 0-.391.09.092.114.207.182.391.729 2.28 1.366 4.307 3.006 7.37l-.57.46.024-.023ZM63.688 26.53s-.114-.207-.183-.368c-2.346-7.3-4.327-10.156-8.176-14.417-5.056-5.619-13.324-9.949-22.115-9.972-16.809 0-30.429 13.795-30.429 30.768 0 5.044 1.093 9.42 1.959 11.607 1.025 2.533 2.801 5.965 2.892 6.126.069.184.091.254.091.415-.136-.092-.182-.184-.296-.346-.5-.737-2.596-4.56-3.257-6.218-1.412-3.615-2.46-7.554-2.46-11.699C1.714 14.923 15.722.714 33.054.714 48.518.714 61 11.584 63.641 26.139c0 .138.046.253 0 .368"
    />
  </svg>
);
export default SvgMercedes;