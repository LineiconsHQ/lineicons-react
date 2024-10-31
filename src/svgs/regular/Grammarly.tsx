import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGrammarly = ({
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
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.133-7.333c-.336 0-.646-.221-.706-.544a.659.659 0 0 1 .146-.552.68.68 0 0 1 .525-.241h3.708v3.807a.662.662 0 0 1-.248.516.688.688 0 0 1-.561.142c-.33-.059-.556-.363-.556-.69v-.636l.128-.704a5.863 5.863 0 0 1-2.007 1.47 5.958 5.958 0 0 1-2.448.515c-3.385 0-6.107-2.742-5.91-6.102.17-2.886 2.554-5.246 5.501-5.44a6.012 6.012 0 0 1 3.07.603 5.885 5.885 0 0 1 2.327 2.055.65.65 0 0 1-.204.878c-.31.21-.737.1-.951-.204-.81-1.114-2.222-2.036-3.833-2.036-3.09 0-5.461 3.034-4.216 6.212.55 1.4 1.85 2.403 3.363 2.636 1.86.285 3.56-.362 4.54-1.768l-.613.083h-1.056Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGrammarly;
