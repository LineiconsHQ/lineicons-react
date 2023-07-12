import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFord = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M32.87 19.85C15.12 19.85.75 25.3.75 32.01s14.37 12.14 32.12 12.14 32.1-5.43 32.1-12.14c0-6.71-14.37-12.16-32.1-12.16Zm0 23.05c-17.02 0-30.86-4.85-30.86-10.89 0-6.04 13.83-10.93 30.86-10.93s30.88 4.91 30.88 10.93S49.94 42.9 32.87 42.9ZM45.7 31.44c-.73-.08-1.64.54-2.38 1.45-.37.46-.77 1.33-.83 1.84-.08.52.06 1.04.25 1.18.19.15 1.01.58 2.3-.72.73-.72 1.43-1.91 1.43-1.91l-.23-.06c.44-.81.35-1.68-.54-1.78Zm-12.83-9.46C16.34 21.98 2.99 26.47 2.99 32c0 5.53 13.36 10.05 29.88 10.05S62.78 37.55 62.78 32c0-5.55-13.4-10.02-29.91-10.02ZM18.91 37.32c-1.8 0-3.4-1.18-3.44-3.29-.02-1.28 1.01-2.86 2.94-3.33.23 0 .31.08.31.21 0 .08-.08.18-.27.27-.56.21-1.53 1.31-1.53 2.32 0 .77.48 1.62 1.29 1.8.22.06.43.04.64.04 2.01 0 4.27-2.26 6.71-5.7-.39.02-2.07.21-2.49.68-.19.15-.31.06-.35-.1 0-.04.06-.19.13-.27.66-.75 2.65-.91 3.13-.97 1.78-2.74 4.06-4.48 4.68-4.61-.01 0-.03 0-.05-.01-1.59-.37-3.04-.68-4.18-.68-4 0-5.78 1.72-5.7 3.29.04.64.56 1.06 1.32.91.83-.15 1.99-.93 2.28-1.62.06-.14.23-.17.29-.12.12.1.08.25.08.25-.1.81-1.35 3.04-3.5 3.04-1.2 0-2.01-1.12-1.99-2.22.02-2.05 2.11-4.12 7.27-4.12.97 0 2.07.08 3.27.29 1.39.25 4.85.83 7.66.87 1.04 0 2.36.04 3.44-.12 1.14-.19.89-.23 1.34-.23.41 0 .41.17.41.33 0 .66-2.32 1.93-4.29 1.93-2.9 0-5.91-1.31-7.47-1.74.06.06.1.15.05.27-.02.04-.23.27-.31.33-.41.37-1.82 1.29-3.36 3.87 1.24-.06 2.69-.31 2.69-.31s-.08-.27-.08-.5c.06-.89.58-1.43 1.24-1.33.37.06.62.37.62.71 0 .35-.27.87-.54 1.12-.19.14-.39.29-.64.41 0 .23.31.41.58.44-.06.23-.04.33-.14.31-.62 0-.87-.6-.87-.6-.83.15-1.63.25-3.27.41-4.12 6.67-5.41 7.77-7.93 7.77h.03Zm28.4-1.1c.89-.04 2.53-1.74 2.92-2.15.08-.1.23-.29.31-.29.08 0 .25.08.25.21 0 .08-.19.39-.33.58-.83 1.04-2.2 2.63-3.75 2.67-.77 0-1.06-.31-1.16-.91-.35.31-1.55.85-2.78.85-1.01-.02-1.43-.62-1.63-1.1-.19-.39-.27-.97-.12-1.55-.56.29-1.08.33-1.82.31-.87-.02-1.41-.41-1.68-1.43-1 1.82-1.04 1.88-2.05 3.79h-1.76l2.26-3.83c.29-.52.44-.93.54-1.37.06-.25-.12-.48-.39-.5-.29 0-.76.29-1.22.72 0 0-1.16 1.24-2.01 2.5-.81 1.2-2.2 2.57-3.71 2.57-1.1 0-2.09-.6-2.3-1.76 0 0-.11.27-1.08.83-.08.04-.29.16-.35.12a.882.882 0 0 1-.31-.52c.06.02.19-.08.58-.39.77-.58.93-1.04.93-1.04.19-.39.52-1.01.75-1.45.62-1.24 1.7-2.51 3.46-2.57.29 0 .37.12.43.23.17.12.11.37.11.37-1.24.19-2.09.91-2.61 1.62-.31.46-.64 1.2-.7 1.74-.12.93.31 1.55.95 1.7 1.2.19 2.2-.68 2.98-2.03.2-.35.35-1.26.35-1.76s-.27-1.01-.48-1.22c0-.35.23-.58.5-.58.08 0 .16 0 .25.08.41.41.64 1.2.64 1.8 0 .21 0 .41-.04.62.87-1.06 1.97-2.42 2.82-2.69.17-.08.33-.08.5-.08 1.55-.04 1.34 1.37 1.34 1.37.83-.95 1.41-1.3 2.17-1.26.83.04 1.12.62 1.12 1.08-.02.54-.42 1.16-1.1 1.18-.6 0-.95-.29-1.14-.83-.39.14-.58.41-.66.95-.12.68.39 1.22 1.06 1.22 1.14 0 1.64-.5 2.05-.87 1.41-1.33 2.2-2.71 4.23-2.69 1.22.02 1.53.99 1.74 1.41l2.67-4.51h1.64l-4.43 7.85c-.08.17-.29.48-.27.72.04.39.54.29.35.29h-.02Zm-16.34-8.01c.12-.12.33-.5.29-.75-.02-.12-.08-.27-.23-.25-.31.06-.5.21-.58.52-.11.33-.06.56 0 .81 0 0 .2.02.52-.33Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFord;