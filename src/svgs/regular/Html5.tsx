import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHtml5 = ({
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
      d="M6.233 2h.902v.89h.824V2h.902v2.697h-.902v-.903h-.824v.903h-.902V2Zm3.813.894h-.793V2h2.489v.894h-.794v1.803h-.902V2.894ZM12.136 2h.94l.579.948.578-.948h.94v2.697h-.898V3.36l-.62.96h-.015l-.621-.96v1.337h-.882V2Zm3.486 0h.901v1.806h1.268v.891h-2.17V2Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="m4.915 5.93 1.29 14.464L11.99 22l5.802-1.609 1.291-14.46H4.915Zm11.202 6.547H9.652l-.162-1.816h6.788l.159-1.774H7.552l.478 5.364h6.148l-.206 2.3-1.978.535h-.002l-1.976-.533-.126-1.415H8.11l.248 2.785 3.633 1.009.009-.002 3.63-1.007.443-4.97.044-.476Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHtml5;
