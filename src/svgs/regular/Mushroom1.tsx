import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMushroom1 = ({
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
      d="M12.023 2.5C6.47 2.5 2.416 7.789 3.43 12.982c.203 1.042 1.15 1.64 2.084 1.64h3.924l-.478 4.383a2.25 2.25 0 0 0 2.237 2.494h1.655a2.25 2.25 0 0 0 2.237-2.494l-.478-4.383h3.924c.934 0 1.88-.598 2.084-1.64C21.63 7.79 17.578 2.5 12.023 2.5Zm1.794 10.622a.73.73 0 0 0-.086 0h-3.415a.73.73 0 0 0-.087 0H5.513c-.347 0-.57-.211-.612-.427C4.061 8.388 7.452 4 12.023 4c4.572 0 7.962 4.388 7.122 8.695-.041.216-.264.427-.611.427h-4.717Zm-2.871 1.5H13.1l.495 4.546a.75.75 0 0 1-.745.83h-1.655a.75.75 0 0 1-.746-.83l.496-4.546Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMushroom1;
