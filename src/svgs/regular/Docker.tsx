import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDocker = ({
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
      d="M12.988 11.321h-2.035V9.448h2.035v1.873Zm0-6.363h-2.035v1.906h2.035V4.958Zm2.455 4.554h-2.035v1.841h2.035v-1.84ZM10.566 7.22H8.53v1.873h2.034V7.22Zm2.422 0h-2.035v1.873h2.035V7.22Zm8.689 3.133c-.452-.323-1.486-.42-2.261-.258-.097-.775-.55-1.421-1.26-2.003l-.452-.258-.258.452c-.55.872-.743 2.326-.13 3.262-.258.13-.807.356-1.485.356H2.07c-.259 1.582.193 3.682 1.356 5.103 1.13 1.357 2.907 2.035 5.168 2.035 4.91 0 8.592-2.26 10.272-6.395.646 0 2.132 0 2.875-1.422.032-.032.226-.42.258-.549l-.323-.323Zm-15.989-.84H3.621v1.841h2.035v-1.84h.032Zm2.423 0H6.076v1.841H8.11v-1.84Zm2.454 0H8.532v1.841h2.034v-1.84ZM8.111 7.22H6.076v1.873H8.11V7.22Z"
    />
  </svg>
);
export default SvgDocker;
