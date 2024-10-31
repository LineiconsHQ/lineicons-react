import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrosoftTeams = ({
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
      d="M21.534 6.65a2.091 2.091 0 1 1-4.184 0 2.093 2.093 0 1 1 4.184 0ZM15.954 5.72a3.023 3.023 0 0 1-3.022 3.024h-.078V7.58c0-.757-.613-1.37-1.37-1.37H9.948a3.023 3.023 0 0 1 2.984-3.512 3.02 3.02 0 0 1 3.023 3.022ZM22 10.557v4.706a3.249 3.249 0 0 1-3.247 3.25h-.015a3.22 3.22 0 0 1-1.385-.31 5.247 5.247 0 0 1-4.656 3.1 5.25 5.25 0 0 1-4.819-3.5h3.606c.757 0 1.37-.612 1.37-1.368v-6.76h8.262c.49 0 .884.394.884.882Z"
    />
    <path
      fill="#323544"
      d="M12.216 7.572a.819.819 0 0 0-.085-.228l-.006-.015a.863.863 0 0 0-.744-.438H2.853A.852.852 0 0 0 2 7.744v8.525c0 .472.381.853.853.853h8.528c.469 0 .85-.381.85-.853V7.744c0-.06-.006-.115-.015-.172ZM9.359 10.13H7.625v4.643H6.569V10.13H4.872v-.9h4.487v.9Z"
    />
  </svg>
);
export default SvgMicrosoftTeams;
