import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMushroom5 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M8.52 9.05a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM14.938 11.266a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0ZM13.46 5.797a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M3.43 12.982C2.415 7.79 6.468 2.5 12.022 2.5c5.555 0 9.608 5.289 8.595 10.482-.203 1.042-1.15 1.64-2.084 1.64H14.61l.478 4.383a2.25 2.25 0 0 1-2.237 2.494h-1.655a2.25 2.25 0 0 1-2.237-2.494l.478-4.383H5.513c-.934 0-1.88-.598-2.084-1.64Zm10.301.14a.73.73 0 0 1 .086 0h4.717c.347 0 .57-.211.611-.427C19.985 8.388 16.595 4 12.023 4c-4.57 0-7.962 4.388-7.122 8.695.042.216.265.427.612.427h4.716a.73.73 0 0 1 .087 0h3.415Zm-.63 1.5h-2.155l-.496 4.546a.75.75 0 0 0 .746.83h1.655a.75.75 0 0 0 .745-.83l-.495-4.546Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMushroom5;
