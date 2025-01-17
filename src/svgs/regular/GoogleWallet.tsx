import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleWallet = ({
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
      d="M9.007 6.226c1.677 2.742 2.87 5.032 3.774 7.258-.355 1.516-.87 2.968-1.42 4.355-.58-2.355-1.193-4.549-2.515-6.645.29-1.549.096-3.226.16-4.968Zm-2.161 3.29h-4.13c-.257 0-.451.355-.257.549 1.87 2.451 3.193 5.225 4.096 8.354H11.2c-.741-3.129-1.741-5.967-3.677-8.645-.194-.129-.42-.258-.677-.258Zm2.16-3.968C12.04 10.42 14.814 16.064 15.2 22h5.033c-.549-6.129-3.065-11.871-6.387-16.452h-4.84Zm11.227-3.032A.688.688 0 0 0 19.555 2H15.62c-.226 0-.42.226-.355.452.58 2.032 1 4.258 1.194 6.548 2.128 3.806 3.548 7.968 4.032 12.032.742-2.677 1.129-5.967 1.129-9.032 0-3.258-.516-6.452-1.387-9.484Z"
    />
  </svg>
);
export default SvgGoogleWallet;
