import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCpanel = ({
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
      d="M8.527 11.081a1.639 1.639 0 0 0-1.58-1.257H5.82c-.226 0-.42.13-.452.355l-1.095 3.996h.773c.226 0 .355-.128.451-.354l.806-2.998h.645c.258 0 .483.194.548.452.096.354-.194.741-.548.741h-.323c-.225 0-.419.129-.45.354l-.194.774h.999c1.128-.032 1.773-1.16 1.547-2.063Zm-4.867.87h.58c.226 0 .355-.128.452-.354l.193-.774H3.628c-.741 0-1.354.452-1.58 1.258-.257 1.03.548 2.03 1.548 2.03h.354l.226-.806c.032-.129-.032-.258-.194-.258h-.354c-.741.065-.741-1.096.032-1.096Zm7.736-1.095h-2.45l-.097.419c-.032.322.13.58.452.58h1.805c.129 0 .032.129.032.129l-.258.999c0 .032-.032.129-.193.129H9.59c-.13 0-.13-.258 0-.258h.677c.225 0 .354-.129.45-.354l.13-.42h-1.45c-1.225 0-1.354 1.999-.033 1.999h1.805a.764.764 0 0 0 .742-.548l.45-1.644c.065-.483-.386-1.031-.966-1.031ZM21.742 9.76h-.58c-.129 0-.258.096-.322.258l-1.128 4.125c.644 0 1.257-.451 1.418-1.096l.87-3.03c0-.096-.097-.257-.258-.257Zm-7.349 1.096h-1.482l-.806 3.03c-.032.128.032.257.193.257h.58c.13 0 .258-.096.323-.258l.548-1.998h.644c.42 0 .645.355.548.741l-.354 1.257c-.032.13.032.258.193.258h.58c.13 0 .258-.096.323-.258l.257-1.031c.29-1-.515-1.998-1.547-1.998Zm3.03 2.353c-.129 0-.193-.097-.129-.226l.258-.967c.032-.129.129-.193.258-.193h1.031c.097 0 .13.032.13.128l-.033.097c-.032.033-.032.097-.129.097h-.677c-.225 0-.419.129-.451.354l-.129.42h1.644a.764.764 0 0 0 .741-.549l.097-.354c.129-.58-.258-1.128-.87-1.128h-1.45c-.549 0-1.032.354-1.226.967l-.354 1.257c-.13.548.258 1.128.87 1.128h2.063c.226 0 .355-.129.451-.355l.194-.644c-.033-.032-2.289-.032-2.289-.032Z"
    />
  </svg>
);
export default SvgCpanel;
