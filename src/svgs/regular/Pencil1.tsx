import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPencil1 = ({
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
      d="M19.303 3.78a2.25 2.25 0 0 0-3.182 0L14.35 5.551a.607.607 0 0 0-.033.033l-8.483 8.483a2.25 2.25 0 0 0-.562.936l-1.22 4.01a.75.75 0 0 0 .936.935l4.009-1.22c.353-.108.675-.3.936-.562L20.22 7.88a2.25 2.25 0 0 0 0-3.182l-.917-.917Zm-4.44 3.378 1.979 1.978-7.97 7.97a.75.75 0 0 1-.312.187l-2.664.81.811-2.663a.75.75 0 0 1 .187-.312l7.97-7.97Zm3.04.918-1.978-1.978L17.18 4.84a.75.75 0 0 1 1.061 0l.917.917a.75.75 0 0 1 0 1.06l-1.257 1.258Z"
    />
  </svg>
);
export default SvgPencil1;
