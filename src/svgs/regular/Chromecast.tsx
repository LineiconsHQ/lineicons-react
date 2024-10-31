import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChromecast = ({
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
      d="M2.032 17.428v2.746H4.78a2.744 2.744 0 0 0-2.747-2.746Zm0-3.618v1.809c2.488 0 4.556 2.035 4.556 4.555h1.81c-.033-3.489-2.844-6.364-6.366-6.364Zm3.651-6.365V8.93c3.586 1.163 6.43 4.039 7.593 7.625h5.105V7.445H5.683Zm-3.65 2.746v1.81a8.197 8.197 0 0 1 8.206 8.206h1.777c.032-5.557-4.459-10.016-9.984-10.016Zm18.221-6.397H3.81C2.808 3.794 2 4.634 2 5.636v2.746h1.81V5.636h16.38v12.697h-6.365v1.81h6.365c1.001 0 1.81-.809 1.81-1.81V5.636c.031-1.067-.776-1.842-1.746-1.842Z"
    />
  </svg>
);
export default SvgChromecast;
