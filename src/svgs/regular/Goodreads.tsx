import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoodreads = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M6.167 17.768h1.645c.032 0 .129-.032.129.097.258 1.354 1.193 2.128 2.45 2.515 1.032.323 2.129.323 3.193.032 1.322-.258 2.192-1.096 2.644-2.354.322-.87.419-1.74.451-2.58v-2.03h-.032c-.032.031-.032.128-.097.193-.87 1.677-2.418 2.644-4.127 2.676-4.063.097-6.675-2.257-6.772-6.9-.032-.968.032-1.87.323-2.741C6.747 3.87 8.844 2.032 11.97 2c2.386 0 3.966 1.516 4.547 2.773.032.032.032.097.097.032V2.42h1.741v12.963c0 3.031-1.032 5.643-4.03 6.353-2.677.644-6.192.193-7.643-2.226a3.762 3.762 0 0 1-.516-1.74Zm5.74-14.35c-2.032-.031-4.289 1.58-4.515 5.225-.129 2.321.58 4.772 2.773 5.804 1.097.516 2.903.58 4.225-.355 1.87-1.322 2.45-3.773 2.128-6.062-.355-2.709-1.838-4.611-4.611-4.611Z"
    />
  </svg>
);
export default SvgGoodreads;
