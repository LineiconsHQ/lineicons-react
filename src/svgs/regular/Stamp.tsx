import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStamp = ({
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
      d="M9.122 4.388A2.25 2.25 0 0 1 11.368 2h1.31a2.25 2.25 0 0 1 2.247 2.388l-.604 9.862h4.202a2.25 2.25 0 0 1 2.25 2.25v3.25a.75.75 0 0 1-.75.75h-.5v.75a.75.75 0 0 1-.75.75h-13.5a.75.75 0 0 1-.75-.75v-.75h-.5a.75.75 0 0 1-.75-.75V16.5a2.25 2.25 0 0 1 2.25-2.25h4.203l-.604-9.863ZM19.273 19v-2.5a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0-.75.75V19h14.5ZM13.427 4.296a.75.75 0 0 0-.748-.796h-1.31a.75.75 0 0 0-.75.796l.61 9.954h1.589l.61-9.954Z"
    />
  </svg>
);
export default SvgStamp;
