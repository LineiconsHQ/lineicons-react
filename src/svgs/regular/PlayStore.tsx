import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlayStore = ({
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
      d="m4.886 2 8.813 8.812 2.275-2.275c-3.108-1.885-7.27-4.414-9.142-5.552l-1.254-.76A1.557 1.557 0 0 0 4.886 2ZM3.541 3.055a1.623 1.623 0 0 0-.033.299v17.413c0 .073.014.142.025.211l8.965-8.966-8.957-8.957Zm13.927 6.39L14.9 12.012l2.523 2.524L19.79 13.1c.454-.278.71-.697.703-1.155-.007-.45-.263-.85-.7-1.098-.098-.056-1.01-.608-2.324-1.403ZM13.7 13.213 4.913 22c.17-.03.341-.08.504-.18l10.512-6.377-2.23-2.23Z"
    />
  </svg>
);
export default SvgPlayStore;
