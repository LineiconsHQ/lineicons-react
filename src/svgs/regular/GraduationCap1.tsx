import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGraduationCap1 = ({
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
      d="M12.298 3.31a.75.75 0 0 0-.596 0l-9.25 4a.75.75 0 0 0 0 1.376l2.673 1.156v6.084a.75.75 0 0 0 .122.41l.628-.41-.628.41.001.002.001.001.003.004.007.012a2.59 2.59 0 0 0 .11.15c.072.097.177.23.316.387.277.313.69.725 1.244 1.136 1.113.826 2.797 1.648 5.071 1.648 2.274 0 3.958-.822 5.07-1.648a8.18 8.18 0 0 0 1.245-1.136 6.352 6.352 0 0 0 .425-.537l.008-.012.003-.004v-.001c.001 0 .002-.002-.626-.412l.628.41a.75.75 0 0 0 .122-.41V9.842L20.5 9.14v5.58a.75.75 0 0 0 1.5 0V7.998a.75.75 0 0 0-.452-.688l-9.25-4Zm5.077 7.18v5.19a6.68 6.68 0 0 1-1.198 1.144c-.91.674-2.288 1.352-4.177 1.352-1.89 0-3.268-.678-4.177-1.352a6.678 6.678 0 0 1-1.198-1.145v-5.188l5.077 2.195a.75.75 0 0 0 .596 0l5.077-2.195ZM12 11.18 4.64 7.999 12 4.815l7.36 3.183L12 11.181Z"
    />
  </svg>
);
export default SvgGraduationCap1;
