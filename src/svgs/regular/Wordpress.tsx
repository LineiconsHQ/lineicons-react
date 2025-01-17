import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWordpress = ({
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
      d="M12 2C6.452 2 2 6.484 2 12s4.452 10 10 10 10-4.516 10-10S17.484 2 12 2Zm8.871 10a8.825 8.825 0 0 1-4.58 7.742l2.58-6.645c.129-.355 1.032-2.549 1.355-4.42A9.086 9.086 0 0 1 20.87 12Zm-6.968-4.355H9.355c-.194 0-.323.13-.323.323s.13.322.323.322H10l1.129 2.904-1.355 3.483-2.451-6.419h.774c.193 0 .322-.129.322-.323 0-.193-.129-.322-.322-.322H6.774L4.645 7.58C6.097 5.032 8.903 3.355 12 3.355c2.258 0 4.355.903 5.903 2.355-.806.129-1.451.774-1.645 1.548-.194.903.13 1.645.484 2.323.355.742.742 1.419.451 2.226L16 14.902l-2.548-6.645h.483c.194 0 .323-.129.323-.323 0-.16-.226-.29-.355-.29ZM3.13 12c0-1.129.226-2.226.645-3.226L8.13 19.968c-3-1.42-5-4.452-5-7.968Zm8.968 1.903 2.58 6.549c-.87.258-1.742.419-2.677.419-.871 0-1.677-.097-2.452-.355l2.549-6.613Z"
    />
  </svg>
);
export default SvgWordpress;
