import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdonis = ({
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
      d="M12 21c-7.259 0-9-1.741-9-9s1.741-9 9-9 9 1.741 9 9-1.741 9-9 9ZM9.452 7.454 6.63 13.87c-.128.311-.238.715-.238 1.063 0 1.595 1.118 2.713 2.713 2.713.522 0 .956-.138 1.398-.277.456-.145.92-.292 1.498-.292.584 0 1.037.146 1.485.29.437.14.868.279 1.411.279 1.595 0 2.713-1.119 2.713-2.713 0-.348-.11-.752-.238-1.063l-2.823-6.416C14.07 6.373 13.155 5.786 12 5.786s-2.071.587-2.548 1.668Zm-.238 7.424L12 8.572l2.75 6.306c-.789-.385-1.778-.568-2.75-.568-1.008 0-1.961.183-2.786.568Z"
    />
  </svg>
);
export default SvgAdonis;