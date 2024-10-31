import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDrizzle = ({
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
      d="M6.46 11.852a.863.863 0 0 0-.328-1.185.886.886 0 0 0-1.198.333l-2.819 4.918a.863.863 0 0 0 .329 1.185.886.886 0 0 0 1.198-.332l2.819-4.919ZM12.536 8.081a.863.863 0 0 0-.328-1.185.886.886 0 0 0-1.199.332l-2.818 4.919a.863.863 0 0 0 .328 1.185A.886.886 0 0 0 9.718 13l2.818-4.919ZM21.885 8.081a.863.863 0 0 0-.329-1.185.886.886 0 0 0-1.198.332l-2.819 4.919c-.24.419-.093.95.329 1.185A.886.886 0 0 0 19.066 13l2.819-4.919ZM15.807 11.852a.863.863 0 0 0-.328-1.185.886.886 0 0 0-1.199.333l-2.818 4.918a.863.863 0 0 0 .328 1.185.886.886 0 0 0 1.199-.332l2.818-4.919Z"
    />
  </svg>
);
export default SvgDrizzle;
