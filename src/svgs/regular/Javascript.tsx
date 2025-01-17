import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJavascript = ({
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
      d="M3 3v18h18V3H3Zm9.813 14.023c0 1.77-1.045 2.584-2.555 2.584-1.335 0-2.12-.697-2.526-1.568l1.394-.871c.232.493.493.87 1.103.87.58 0 .9-.203.9-1.073v-5.69h1.684v5.748Zm4.006 2.584c-1.567 0-2.583-.784-3.106-1.713l1.394-.813c.377.58.87 1.016 1.683 1.016.697 0 1.133-.32 1.133-.871 0-.58-.436-.784-1.22-1.133l-.406-.174c-1.22-.493-2.033-1.19-2.033-2.584 0-1.277.93-2.206 2.468-2.206 1.075 0 1.83.378 2.38 1.364l-1.305.871c-.29-.493-.581-.725-1.104-.725-.493 0-.813.32-.813.726 0 .493.32.696 1.017 1.016l.406.174c1.422.61 2.264 1.22 2.264 2.67.03 1.54-1.16 2.381-2.758 2.381Z"
    />
  </svg>
);
export default SvgJavascript;
