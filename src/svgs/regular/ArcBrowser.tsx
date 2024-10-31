import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArcBrowser = ({
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
      d="M4.687 15.146 3.7 17.218c-.502 1.054-.125 2.352.908 2.901a2.166 2.166 0 0 0 2.972-.98l.9-1.891a11.248 11.248 0 0 1-3.794-2.102ZM20.262 6.358a2.165 2.165 0 0 0-2.547 1.698c-.208 1.04-.695 2.007-1.366 2.83l1.968 4.144c1.817-1.576 3.16-3.723 3.64-6.125a2.162 2.162 0 0 0-1.695-2.547Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M12.68 13.24c-.422.1-.853.154-1.283.154-.336 0-.683-.038-1.03-.113-1.44-.306-2.89-1.196-3.709-2.28a3.67 3.67 0 0 1-.487-.84 2.168 2.168 0 0 0-2.817-1.197 2.168 2.168 0 0 0-1.197 2.818c.508 1.259 1.404 2.414 2.53 3.364a11.235 11.235 0 0 0 3.791 2.102 9.589 9.589 0 0 0 2.916.475c1.08 0 2.146-.187 3.162-.528l-1.877-3.955Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="m19.357 17.21-3.008-6.328-.003.003s0-.003.003-.003l-2.862-6.02a2.165 2.165 0 0 0-1.954-1.236c-.834 0-1.594.481-1.953 1.235l-2.919 6.14c.82 1.084 2.269 1.975 3.709 2.28l.944-1.983a.247.247 0 0 1 .445 0l.923 1.942 2.803 5.896a2.161 2.161 0 0 0 2.533 1.155c1.303-.359 1.92-1.858 1.339-3.082Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArcBrowser;
