import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAppleBrand = ({
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
      d="M19.741 8.819c-.117.09-2.198 1.244-2.198 3.81 0 2.968 2.647 4.019 2.727 4.045-.013.064-.421 1.438-1.396 2.838-.87 1.232-1.778 2.462-3.159 2.462-1.381 0-1.737-.79-3.332-.79-1.554 0-2.106.816-3.37.816-1.263 0-2.145-1.14-3.159-2.54-1.174-1.644-2.123-4.199-2.123-6.623 0-3.888 2.568-5.95 5.095-5.95 1.343 0 2.462.868 3.306.868.802 0 2.053-.92 3.58-.92.58 0 2.66.051 4.03 1.984Zm-4.753-3.63c.632-.739 1.078-1.763 1.078-2.787 0-.142-.012-.286-.038-.402-1.028.038-2.251.674-2.988 1.516-.58.648-1.12 1.672-1.12 2.71 0 .156.027.312.039.362.065.012.17.026.276.026.922 0 2.082-.608 2.753-1.426Z"
    />
  </svg>
);
export default SvgAppleBrand;
