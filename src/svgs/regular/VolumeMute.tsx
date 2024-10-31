import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeMute = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M3.78 2.22a.75.75 0 0 0-1.06 1.06l4.158 4.158-.07.062H4.75A2.25 2.25 0 0 0 2.5 9.75v4.5a2.25 2.25 0 0 0 2.25 2.25h2.059l3.196 2.841c1.451 1.29 3.745.26 3.745-1.681v-3.35l7.47 7.47a.75.75 0 0 0 1.06-1.061l-18.5-18.5Zm8.47 10.59v4.85a.75.75 0 0 1-1.248.56l-3.41-3.03a.75.75 0 0 0-.498-.19H4.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 4.75 9h2.344a.75.75 0 0 0 .498-.19l.348-.31 4.31 4.31ZM12.25 6.34v2.321l1.5 1.5v-3.82c0-1.942-2.294-2.972-3.745-1.683l-.93.828 1.062 1.062.865-.768a.75.75 0 0 1 1.248.56ZM15.499 11.91l1.291 1.291a3.519 3.519 0 0 0-.69-3.551.75.75 0 0 0-1.115 1.003c.323.358.494.805.514 1.257ZM17.752 14.163l1.105 1.105c1.379-2.292 1.158-5.405-.664-7.434a.75.75 0 0 0-1.116 1.002c1.289 1.435 1.514 3.628.675 5.327Z"
    />
  </svg>
);
export default SvgVolumeMute;
