import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShovel = ({
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
      d="M17.846 2.22a.75.75 0 0 0-1.06 0 3.86 3.86 0 0 0-.449 4.918l-4.533 4.533-2.216-2.217a.75.75 0 0 0-1.061 0l-4.674 4.674a4.5 4.5 0 0 0 0 6.364l.191.19a4.5 4.5 0 0 0 6.364 0l4.674-4.673a.75.75 0 0 0 0-1.06l-2.217-2.218 4.548-4.547a3.86 3.86 0 0 0 4.829-.508.75.75 0 0 0 0-1.061L17.846 2.22Zm0 4.395a2.359 2.359 0 0 1-.444-2.718l3.163 3.162a2.359 2.359 0 0 1-2.719-.444Zm-8.715 7.73a.75.75 0 1 0 1.06 1.06l1.613-1.613 1.687 1.687-4.144 4.143a3 3 0 0 1-4.242 0l-.191-.19a3 3 0 0 1 0-4.243l4.143-4.144 1.687 1.686-1.613 1.613Z"
    />
  </svg>
);
export default SvgShovel;
