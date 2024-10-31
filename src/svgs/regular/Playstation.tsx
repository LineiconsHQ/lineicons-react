import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlaystation = ({
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
      d="M14.036 8.059v4.813c2.035 1.001 3.618 0 3.618-2.584 0-2.65-.969-3.812-3.682-4.781-1.098-.356-3.101-.97-4.49-1.228v14.407l3.262 1.034V7.671c0-.581.259-.969.679-.807.484.096.613.646.613 1.195Z"
    />
    <path
      fill="#323544"
      d="M20.497 14.422c-1.356-.484-3.1-.678-4.49-.549-1.421.13-2.422.485-2.422.485l-.227.097v1.938l3.49-1.228c.58-.226 1.453-.258 1.937-.096.485.129.42.452-.194.678l-5.265 1.809v1.906l7.14-2.552s.968-.356 1.356-.872c.387-.42.226-1.099-1.325-1.616ZM2.375 15.52c-.71.55-.452 1.454 1.13 1.907 1.68.549 3.392.678 5.007.42.097 0 .227-.033.323-.033v-1.68l-1.647.582c-.581.226-1.454.258-1.938.097-.485-.13-.42-.453.226-.679l3.36-1.195v-1.938l-4.684 1.68c.032-.032-1.099.323-1.777.84Z"
    />
  </svg>
);
export default SvgPlaystation;