import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVite = ({
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
      d="m8.525 4.63-5.132-.915a1.17 1.17 0 0 0-1.164.468c-.255.351-.323.839-.07 1.28l8.901 15.58a1.182 1.182 0 0 0 2.057-.008l8.729-15.578c.49-.875-.262-1.917-1.242-1.739l-4.574.813-.206.754 4.906-.871a.474.474 0 0 1 .498.697L12.5 20.689a.472.472 0 0 1-.5.234.468.468 0 0 1-.326-.231L2.772 5.112a.474.474 0 0 1 .496-.7l5.133.916.074.013.05-.71Z"
    />
    <path
      fill="#323544"
      d="m15.097 5.26.162-.593-.6.107.438.487ZM9.217 4.754l.513.09-.542.427.03-.517Z"
    />
    <path
      fill="#323544"
      d="m15.549 2.367-6.1 1.26a.223.223 0 0 0-.126.077.247.247 0 0 0-.055.142l-.375 6.685a.242.242 0 0 0 .079.194.213.213 0 0 0 .195.05l1.698-.414c.16-.038.302.11.27.278l-.505 2.606c-.034.176.122.326.285.274l1.049-.336c.162-.052.319.098.284.274l-.801 4.093c-.05.257.272.396.407.177l.09-.147 4.97-10.464c.084-.175-.06-.375-.242-.338l-1.748.356c-.165.034-.304-.128-.258-.297l1.14-4.173c.047-.17-.093-.331-.257-.297Z"
    />
  </svg>
);
export default SvgVite;
