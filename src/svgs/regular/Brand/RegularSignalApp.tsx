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
    viewBox="0 0 65 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="m26.14 4.816.63 2.546c-2.479.61-4.85 1.59-7.036 2.91l-1.347-2.25a27.894 27.894 0 0 1 7.752-3.206Zm13.44 0-.63 2.546c2.478.61 4.85 1.59 7.034 2.91l1.357-2.25a27.894 27.894 0 0 0-7.762-3.206ZM8.883 17.526a27.894 27.894 0 0 0-3.207 7.752l2.547.63c.61-2.479 1.59-4.85 2.91-7.035l-2.25-1.348Zm-1.4 14.472c0-1.273.095-2.544.285-3.802l-2.595-.394a28.1 28.1 0 0 0 0 8.391L7.77 35.8a25.332 25.332 0 0 1-.285-3.802Zm39.848 23.975-1.348-2.249a25.304 25.304 0 0 1-7.026 2.91l.63 2.546a27.895 27.895 0 0 0 7.744-3.207Zm10.902-23.975c.001 1.272-.094 2.543-.284 3.802l2.594.393c.42-2.78.42-5.61 0-8.39l-2.594.393c.19 1.258.285 2.53.284 3.802Zm1.807 6.72-2.546-.63a25.306 25.306 0 0 1-2.91 7.035l2.25 1.356a27.896 27.896 0 0 0 3.206-7.761Zm-23.38 18.375c-2.52.379-5.083.379-7.604 0l-.393 2.594a28.1 28.1 0 0 0 8.391 0l-.394-2.594Zm16.625-10.04a25.47 25.47 0 0 1-5.377 5.372l1.558 2.113a28.043 28.043 0 0 0 5.932-5.915l-2.113-1.57ZM47.91 11.57a25.466 25.466 0 0 1 5.377 5.377l2.113-1.575a28.045 28.045 0 0 0-5.915-5.915L47.91 11.57Zm-35.477 5.377a25.466 25.466 0 0 1 5.377-5.377l-1.575-2.113a28.043 28.043 0 0 0-5.915 5.915l2.113 1.575Zm44.402.577-2.248 1.348a25.305 25.305 0 0 1 2.909 7.026l2.546-.63a27.895 27.895 0 0 0-3.207-7.744ZM29.057 6.907c2.52-.379 5.084-.379 7.604 0l.394-2.594a28.1 28.1 0 0 0-8.391 0l.393 2.594ZM13.78 55.233l-5.42 1.265 1.264-5.42-2.555-.6-1.265 5.42a2.625 2.625 0 0 0 3.155 3.155l5.416-1.243-.595-2.577Zm-6.164-7.096 2.555.595.875-3.758a25.267 25.267 0 0 1-2.822-6.886l-2.547.63a27.79 27.79 0 0 0 2.582 6.654l-.643 2.765Zm12.25 5.688-3.758.875.595 2.555 2.765-.643a27.791 27.791 0 0 0 6.654 2.58l.63-2.545a25.266 25.266 0 0 1-6.869-2.84l-.017.018ZM32.859 9.248a22.75 22.75 0 0 0-19.25 34.855l-2.187 9.332 9.332-2.187a22.75 22.75 0 1 0 12.105-42Z"
    />
  </svg>
);
export default SvgSignalApp;
