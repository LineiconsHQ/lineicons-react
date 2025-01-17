import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGit = ({
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
      d="m21.838 11.677-9.549-9.58c-.129-.13-.451-.13-.645 0L9 4.742l2.452 2.452c.193-.097.419-.13.645-.13.903 0 1.58.742 1.58 1.581 0 .226-.032.452-.129.645l1.968 1.968c.194-.097.42-.129.645-.129.904 0 1.58.742 1.58 1.58 0 .904-.741 1.581-1.58 1.581-.903 0-1.58-.742-1.58-1.58 0-.226.032-.452.129-.646l-1.968-1.967h-.032v3.71c.58.258 1 .806 1 1.483 0 .904-.742 1.581-1.581 1.581-.903 0-1.58-.742-1.58-1.58 0-.678.419-1.259 1-1.485v-3.612c-.581-.259-1-.807-1-1.484 0-.226.032-.452.128-.645L8.225 5.613l-6.097 6.064c-.129.13-.129.452 0 .646l9.58 9.58c.13.13.452.13.646 0l9.548-9.58a.593.593 0 0 0-.064-.646Z"
    />
  </svg>
);
export default SvgGit;
