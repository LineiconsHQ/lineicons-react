import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPython = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M61.7 24c-1.1-4.2-3.1-7.5-7.3-7.5h-5.6v6.6c0 5.1-4.4 9.4-9.1 9.4H24.8c-4.1 0-7.3 3.5-7.3 7.6v14.1c0 3.9 3.5 6.3 7.3 7.6 4.6 1.4 9.1 1.7 14.8 0 3.7-1.1 7.3-3.2 7.3-7.6v-5.6H32.2v-1.8h22.2c4.2 0 5.9-3 7.3-7.5 1.5-4.9 1.5-9.4 0-15.3zM40.5 52c1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8-1.5.1-2.8-1.3-2.8-2.8-.1-1.5 1.2-2.8 2.8-2.8zM24.1 30.6h14.8c4.1 0 7.3-3.4 7.3-7.6V9.1c0-3.9-3.4-6.9-7.3-7.6-4.9-.7-10.3-.7-14.8 0-6.3 1.1-7.3 3.4-7.3 7.6v5.6h14.8v1.8H11.4c-4.2 0-8 2.7-9.1 7.5-1.4 5.6-1.4 9.1 0 14.9 1.1 4.4 3.5 7.5 7.9 7.5H15v-6.7c-.1-4.9 4.2-9.1 9.1-9.1zm-.9-19.7c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8z" />
  </svg>
);
export default SvgPython;
