import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDigitalocean = ({
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
      fillRule="evenodd"
      d="M12.002 18.145V22c6.442 0 11.466-6.327 9.356-13.188-.915-2.993-3.271-5.375-6.219-6.316C8.384.353 2.154 5.456 2.154 12h3.808c0-4.105 4.008-7.28 8.262-5.716a5.762 5.762 0 0 1 3.405 3.448c1.55 4.316-1.58 8.383-5.616 8.39v-3.843H8.206v3.867h3.796Zm-3.796 2.96H5.292v-2.96h2.914v2.96Zm-5.36-2.96h2.446V15.66H2.847v2.484Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDigitalocean;
