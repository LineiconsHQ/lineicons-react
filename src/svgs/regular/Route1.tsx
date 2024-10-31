import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRoute1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M5.504 4.632a.9.9 0 1 0 0 1.8h.008a.9.9 0 0 0 0-1.8h-.008Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="m5.16 10.408.351-.436-.471.584a.75.75 0 0 0 .943-.001l-.472-.583.247.305.365.45-.296-.365.156.193h.001l.001-.002.003-.002.008-.007.026-.021.09-.078A9.518 9.518 0 0 0 7.326 9.13c.65-.856 1.37-2.127 1.37-3.598a3.192 3.192 0 1 0-6.383 0c0 1.472.724 2.743 1.378 3.6a9.534 9.534 0 0 0 1.22 1.314l.09.078.026.022.008.006.003.003h.001l.001.001.08-.1-.218.27.258-.318ZM3.812 5.532a1.692 1.692 0 1 1 3.385 0c0 .994-.498 1.943-1.066 2.691a7.982 7.982 0 0 1-.621.723 7.998 7.998 0 0 1-.627-.725c-.57-.747-1.07-1.697-1.07-2.69Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M19.12 16.25a.9.9 0 1 0 0 1.8h.008a.9.9 0 0 0 0-1.8h-.007Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="m18.656 22.173.471-.583-.471.583a.75.75 0 0 0 .944-.001l-.473-.582.473.582.002-.002.002-.002.008-.006.027-.022.09-.078a9.52 9.52 0 0 0 1.214-1.315c.65-.856 1.37-2.127 1.37-3.598a3.192 3.192 0 1 0-6.384 0c0 1.473.724 2.743 1.378 3.6a9.532 9.532 0 0 0 1.22 1.314l.09.078.026.022.009.006.002.003.002.001Zm-1.227-5.024a1.692 1.692 0 0 1 3.384 0c0 .994-.498 1.944-1.065 2.691a7.994 7.994 0 0 1-.622.723 7.993 7.993 0 0 1-.627-.724c-.57-.748-1.07-1.697-1.07-2.69Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      d="M7.95 10.726h2.76a2.153 2.153 0 1 1 0 4.307H5.97a3.653 3.653 0 0 0 0 7.307h10.652c-.18-.2-.372-.428-.566-.681a9.817 9.817 0 0 1-.563-.82H5.97a2.153 2.153 0 0 1 0-4.306h4.74a3.653 3.653 0 1 0 0-7.307H9.075a9.802 9.802 0 0 1-.555.81c-.195.258-.39.489-.57.69Z"
    />
  </svg>
);
export default SvgRoute1;