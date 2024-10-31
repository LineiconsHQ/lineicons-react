import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvato = ({
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
      d="M12.916 22a.894.894 0 1 0 0-1.787.894.894 0 0 0 0 1.787ZM18.053 15.013l-5.04.54a.092.092 0 0 1-.066-.165l4.931-3.84c.319-.262.525-.668.437-1.106-.087-.669-.64-1.106-1.34-1.019l-5.359.785c-.093.012-.143-.107-.069-.166l5.312-4.056c1.047-.815 1.135-2.415.175-3.346-.871-.872-2.271-.844-3.143.028l-8.558 8.708a1.52 1.52 0 0 0-.378 1.31c.146.787.93 1.309 1.718 1.165l4.615-.94c.1-.022.153.112.069.168l-5.118 3.278c-.64.406-.931 1.134-.728 1.862.203.96 1.165 1.512 2.096 1.281l7.653-1.884a.091.091 0 0 1 .093.147l-1.193 1.475c-.319.406.203.96.64.64l3.931-3.23c.7-.582.234-1.719-.669-1.631l-.009-.004Z"
    />
  </svg>
);
export default SvgEnvato;
