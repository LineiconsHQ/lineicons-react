import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSignalApp = ({
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
      d="m9.637 2.292.221.91A8.823 8.823 0 0 0 7.385 4.24l-.474-.803a9.725 9.725 0 0 1 2.726-1.145Zm4.726 0-.222.91a8.823 8.823 0 0 1 2.474 1.038l.477-.803a9.725 9.725 0 0 0-2.73-1.145ZM3.57 6.831c-.512.86-.892 1.793-1.128 2.768l.895.225A9.115 9.115 0 0 1 4.36 7.312l-.79-.481Zm-.493 5.168c0-.454.033-.908.1-1.357l-.912-.141a10.19 10.19 0 0 0 0 2.997l.912-.141c-.067-.45-.1-.903-.1-1.358Zm14.011 8.562-.473-.803c-.768.47-1.6.821-2.47 1.039l.22.91a9.723 9.723 0 0 0 2.723-1.146Zm3.834-8.562c0 .455-.033.909-.1 1.358l.912.14c.148-.993.148-2.003 0-2.996l-.912.14c.067.45.1.904.1 1.358Zm.635 2.4-.895-.225a9.113 9.113 0 0 1-1.023 2.512l.79.485a10.05 10.05 0 0 0 1.128-2.772Zm-8.22 6.562a8.85 8.85 0 0 1-2.674 0l-.139.927a9.73 9.73 0 0 0 2.951 0l-.139-.927Zm5.845-3.586a9.03 9.03 0 0 1-1.89 1.919l.547.755a9.937 9.937 0 0 0 2.086-2.113l-.743-.56Zm-1.89-12.67a9.024 9.024 0 0 1 1.89 1.92l.743-.563a9.94 9.94 0 0 0-2.08-2.112l-.553.754ZM4.817 6.624a9.025 9.025 0 0 1 1.89-1.92l-.553-.755a9.938 9.938 0 0 0-2.08 2.112l.743.563Zm15.613.206-.79.481c.463.78.808 1.625 1.022 2.51l.895-.226a10.047 10.047 0 0 0-1.127-2.765Zm-9.767-3.792a8.849 8.849 0 0 1 2.673 0l.139-.927a9.73 9.73 0 0 0-2.95 0l.138.927ZM5.29 20.297l-1.906.451.445-1.935-.899-.214-.444 1.936a.951.951 0 0 0 .246.876.92.92 0 0 0 .863.25l1.904-.444-.209-.92Zm-2.168-2.534.899.212.308-1.342a9.102 9.102 0 0 1-.993-2.459l-.895.225c.2.829.506 1.627.908 2.376l-.227.988Zm4.308 2.03-1.322.313.21.913.972-.23a9.686 9.686 0 0 0 2.34.922l.221-.91a8.814 8.814 0 0 1-2.415-1.013l-.006.006ZM12 3.876c-1.43 0-2.833.39-4.063 1.128A8.068 8.068 0 0 0 5 8.071a8.226 8.226 0 0 0 .23 8.251l-.77 3.333 3.282-.781a7.885 7.885 0 0 0 7.111.717 7.993 7.993 0 0 0 3.04-2.092 8.158 8.158 0 0 0 1.799-3.25 8.248 8.248 0 0 0 .18-3.724 8.188 8.188 0 0 0-1.477-3.413 8.03 8.03 0 0 0-2.822-2.385A7.899 7.899 0 0 0 12 3.875Z"
    />
  </svg>
);
export default SvgSignalApp;