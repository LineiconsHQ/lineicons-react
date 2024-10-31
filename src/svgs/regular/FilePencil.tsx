import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilePencil = ({
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
      d="M9.75 20.5V22h-3a2.25 2.25 0 0 1-2.25-2.25V9.621c0-.596.237-1.169.659-1.59l5.367-5.371A2.25 2.25 0 0 1 12.118 2h5.132a2.25 2.25 0 0 1 2.25 2.25v5.5H18v-5.5a.75.75 0 0 0-.75-.75h-5.002l.003 3.998A2.25 2.25 0 0 1 10 9.75H6v10c0 .414.336.75.75.75h3Zm.999-15.941L7.059 8.25h2.942a.75.75 0 0 0 .75-.75l-.002-2.941Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M20.299 12.339a1.75 1.75 0 0 0-2.475 0l-5.158 5.158a2.25 2.25 0 0 0-.646 1.35l-.19 1.746a.75.75 0 0 0 .827.826l1.747-.189a2.25 2.25 0 0 0 1.349-.646l5.158-5.158a1.75 1.75 0 0 0 0-2.475l-.612-.612Zm-2.277 1.923.966.966-4.296 4.296a.75.75 0 0 1-.45.215l-.82.089.089-.82a.75.75 0 0 1 .215-.45l4.296-4.296Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilePencil;
