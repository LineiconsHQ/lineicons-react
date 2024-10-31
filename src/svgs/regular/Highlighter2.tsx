import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHighlighter2 = ({
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
      d="M9.059 4.002A2.25 2.25 0 0 1 11.295 2h1.46a2.25 2.25 0 0 1 2.237 2.002l1.158 10.423a2.25 2.25 0 0 1-.582 1.773l-.397.432a.75.75 0 0 0-.186.37l-.375 2.002a.76.76 0 0 1-.747.62h-.167v.937a.75.75 0 0 1-.486.702l-1.843.691a.75.75 0 0 1-1.013-.702v-1.628h-.16a.76.76 0 0 1-.747-.62l-.374-1.993a.75.75 0 0 0-.185-.37l-.406-.441a2.25 2.25 0 0 1-.582-1.773L9.06 4.002Zm2.236-.502a.75.75 0 0 0-.745.667l-.931 8.378h4.813L13.5 4.167a.75.75 0 0 0-.745-.667h-1.461Zm3.303 10.545H9.452l-.06.546a.75.75 0 0 0 .193.59l.406.441c.286.31.479.695.557 1.11l.26 1.39h2.44l.263-1.399c.078-.415.27-.8.557-1.11l.397-.431a.75.75 0 0 0 .194-.591l-.06-.546Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHighlighter2;
