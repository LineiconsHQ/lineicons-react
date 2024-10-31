import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUber = ({
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
      d="M2.988 12.719V8.637H2v4.133c0 1.553 1.091 2.58 2.503 2.58.693 0 1.297-.27 1.746-.731v.616h.976V8.637h-.989v4.082c0 1.053-.706 1.758-1.617 1.758-.925-.012-1.63-.693-1.63-1.758ZM8.2 15.248h.937v-.604c.437.45 1.053.72 1.72.72a2.507 2.507 0 0 0 2.53-2.517c0-1.399-1.117-2.516-2.53-2.516-.667 0-1.27.27-1.707.72V8.636H8.2v6.61Zm.937-2.4c0-.938.745-1.67 1.656-1.67.912 0 1.656.732 1.656 1.67 0 .923-.744 1.668-1.656 1.668a1.655 1.655 0 0 1-1.656-1.669Zm4.814-.014c0 1.438 1.117 2.517 2.555 2.517.873 0 1.592-.386 2.08-1.028l-.694-.513c-.36.475-.834.706-1.386.706-.809 0-1.464-.59-1.592-1.373h3.915v-.309c0-1.437-1.014-2.503-2.4-2.503-1.412 0-2.478 1.143-2.478 2.503Zm2.452-1.668c.706 0 1.297.487 1.463 1.232h-2.94c.18-.745.771-1.232 1.477-1.232ZM22 11.28v-.886h-.334c-.526 0-.911.244-1.155.63v-.591h-.924v4.814h.95V12.5c0-.745.449-1.233 1.078-1.233H22v.013Z"
    />
  </svg>
);
export default SvgUber;
