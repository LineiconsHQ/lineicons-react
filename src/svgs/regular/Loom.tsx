import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoom = ({
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
      d="M22 10.903h-5.839l5.065-2.935-1.097-1.936-5.065 2.936L18 3.903l-1.936-1.129L13.13 7.84V2h-2.226v5.839L7.968 2.774 6.032 3.871l2.936 5.064-5.065-2.903-1.097 1.936 5.065 2.935H2v2.226h5.839l-5.065 2.903 1.097 1.936 5.064-2.936L6 20.097l1.935 1.096 2.936-5.064V22h2.226v-5.839l2.935 5.065 1.936-1.097-2.936-5.065L20.097 18l1.096-1.936-5.064-2.935H22v-2.226Zm-10 4.13A3.029 3.029 0 0 1 8.968 12 3.029 3.029 0 0 1 12 8.968 3.029 3.029 0 0 1 15.032 12 3.029 3.029 0 0 1 12 15.032Z"
    />
  </svg>
);
export default SvgLoom;
