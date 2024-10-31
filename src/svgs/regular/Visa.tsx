import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVisa = ({
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
      d="M15.027 8.76c-1.42 0-2.69.736-2.69 2.096 0 1.56 2.251 1.667 2.251 2.45 0 .33-.378.626-1.023.626a3.4 3.4 0 0 1-1.602-.413l-.293 1.372s.79.349 1.837.349c1.552 0 2.774-.772 2.774-2.155 0-1.648-2.26-1.753-2.26-2.48 0-.259.31-.542.954-.542.727 0 1.32.3 1.32.3l.286-1.325s-.645-.278-1.554-.278Zm-12.993.1L2 9.06s.597.11 1.136.327c.692.25.742.396.858.848l1.272 4.902H6.97L9.596 8.86h-1.7l-1.688 4.268L5.52 9.51c-.063-.414-.383-.65-.775-.65h-2.71Zm8.246 0-1.334 6.277h1.622l1.329-6.277H10.28Zm9.044 0c-.39 0-.598.21-.75.575l-2.376 5.702h1.7l.33-.95h2.071l.2.95H22L20.691 8.86h-1.367Zm.221 1.696.504 2.355H18.7l.846-2.355Z"
    />
  </svg>
);
export default SvgVisa;
