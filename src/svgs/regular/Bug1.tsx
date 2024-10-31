import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBug1 = ({
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
      fillRule="evenodd"
      d="M9.134 2.08a.75.75 0 0 1 1.006.335l.542 1.085h2.665c.052 0 .104.002.156.006l.545-1.091a.75.75 0 0 1 1.342.67l-.51 1.019c.194.18.357.396.479.64l.879 1.758a2.25 2.25 0 0 1 2.16 2.248v.732l1.398-.446a.75.75 0 1 1 .456 1.429l-1.853.591v2.07h1.625a.75.75 0 1 1 0 1.5h-1.625v1c0 .354-.03.702-.085 1.04l1.938.62a.75.75 0 1 1-.456 1.429l-1.9-.607a6.377 6.377 0 0 1-11.746 0l-1.898.607a.75.75 0 1 1-.457-1.43l1.938-.618a6.42 6.42 0 0 1-.084-1.042v-1H4.024a.75.75 0 0 1 0-1.5h1.625v-2.069l-1.854-.591a.75.75 0 1 1 .457-1.43l1.397.447V8.75a2.25 2.25 0 0 1 2.16-2.248l.88-1.758c.141-.285.34-.53.575-.726l-.466-.932a.75.75 0 0 1 .336-1.007ZM14.56 6.5l-.543-1.085a.75.75 0 0 0-.67-.415H10.7a.75.75 0 0 0-.671.415L9.487 6.5h5.073ZM7.9 8a.75.75 0 0 0-.75.75v6.875a4.875 4.875 0 1 0 9.75 0V8.75a.75.75 0 0 0-.75-.75h-8.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBug1;
