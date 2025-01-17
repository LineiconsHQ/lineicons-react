import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGamePadModern1 = ({
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
      d="M9.303 7.739a.75.75 0 0 1 .75.75v1.004h1.005a.75.75 0 0 1 0 1.5h-1.005V12a.75.75 0 0 1-1.5 0v-1.007H7.547a.75.75 0 0 1 0-1.5h1.006V8.489a.75.75 0 0 1 .75-.75ZM14.479 11.746a.75.75 0 0 1 .75-.75h.877a.75.75 0 0 1 0 1.5h-.877a.75.75 0 0 1-.75-.75ZM15.229 7.989a.75.75 0 1 0 0 1.5h.877a.75.75 0 0 0 0-1.5h-.877Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M6.402 5.018a30.75 30.75 0 0 1 11.188 0l1.565.29a2.25 2.25 0 0 1 1.825 1.944l1.167 9.73a2.25 2.25 0 0 1-2.234 2.518h-2.097a2.25 2.25 0 0 1-1.915-1.07l-1.434-2.324a.75.75 0 0 0-.638-.356h-3.667a.75.75 0 0 0-.638.356l-1.433 2.325A2.25 2.25 0 0 1 6.175 19.5H4.078a2.25 2.25 0 0 1-2.234-2.518l1.168-9.73a2.25 2.25 0 0 1 1.824-1.944l1.566-.29Zm10.915 1.475a29.25 29.25 0 0 0-10.642 0l-1.566.29a.75.75 0 0 0-.608.648l-1.167 9.73a.75.75 0 0 0 .744.839h2.097a.75.75 0 0 0 .639-.357l1.433-2.324a2.25 2.25 0 0 1 1.915-1.07h3.667c.78 0 1.505.405 1.915 1.07l1.434 2.324a.75.75 0 0 0 .638.357h2.097a.75.75 0 0 0 .745-.84L19.49 7.43a.75.75 0 0 0-.609-.647l-1.565-.29Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGamePadModern1;
