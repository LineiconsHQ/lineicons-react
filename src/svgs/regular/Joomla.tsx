import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJoomla = ({
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
      d="M21.93 4.711a2.624 2.624 0 0 0-5.222-.37l-.026-.015c-2.146-.967-3.954.747-3.954.747L7.947 9.878l1.89 1.819 3.848-3.781c1.797-1.797 2.775-.58 2.775-.58 1.353 1.142.047 2.495.047 2.495l1.936 1.866c1.58-1.708 1.672-3.198 1.191-4.383a2.624 2.624 0 0 0 2.295-2.603Z"
    />
    <path
      fill="#323544"
      d="m19.659 16.779.014-.027c.968-2.146-.746-3.953-.746-3.953l-4.805-4.782-1.82 1.89 3.781 3.848c1.797 1.797.581 2.776.581 2.776-1.143 1.353-2.496.046-2.496.046l-1.865 1.936c1.707 1.58 3.197 1.673 4.382 1.192a2.624 2.624 0 1 0 2.974-2.926Z"
    />
    <path
      fill="#323544"
      d="m14.163 12.303-3.849 3.78c-1.797 1.798-2.775.582-2.775.582-1.353-1.143-.047-2.496-.047-2.496l-1.936-1.866c-1.58 1.707-1.672 3.198-1.192 4.383a2.624 2.624 0 1 0 2.927 2.974l.026.014c2.146.968 3.954-.747 3.954-.747l4.78-4.805-1.888-1.819Z"
    />
    <path
      fill="#323544"
      d="M7.915 10.245c-1.797-1.797-.58-2.776-.58-2.776 1.142-1.353 2.495-.046 2.495-.046l1.866-1.936C9.99 3.907 8.5 3.814 7.313 4.295A2.624 2.624 0 1 0 4.34 7.22c-.01.017-.014.027-.014.027-.968 2.146.746 3.953.746 3.953l4.805 4.781 1.82-1.889-3.782-3.848Z"
    />
  </svg>
);
export default SvgJoomla;
