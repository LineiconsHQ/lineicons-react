import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBootstrap5 = ({
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
      d="M6.154 4.065c-1.141 0-1.986.995-1.948 2.074.037 1.037-.01 2.38-.35 3.474-.34 1.098-.916 1.794-1.856 1.883v1.008c.94.09 1.516.785 1.856 1.883.34 1.095.387 2.437.35 3.474-.038 1.078.807 2.074 1.948 2.074h11.693c1.142 0 1.986-.995 1.948-2.074-.036-1.037.01-2.38.35-3.474.34-1.098.915-1.794 1.855-1.883v-1.008c-.94-.09-1.514-.785-1.855-1.883-.34-1.095-.386-2.437-.35-3.474.038-1.079-.806-2.074-1.948-2.074H6.154Zm9.405 9.769c0 1.486-1.112 2.387-2.958 2.387H9.457a.34.34 0 0 1-.34-.338V8.117a.337.337 0 0 1 .34-.337h3.125c1.54 0 2.55.83 2.55 2.105 0 .895-.68 1.697-1.546 1.837v.047c1.179.129 1.972.942 1.972 2.065ZM12.258 8.85h-1.792v2.521h1.51c1.166 0 1.81-.468 1.81-1.304 0-.784-.554-1.217-1.528-1.217Zm-1.792 3.521v2.779h1.858c1.215 0 1.858-.486 1.858-1.398 0-.913-.662-1.38-1.936-1.38h-1.78Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBootstrap5;
