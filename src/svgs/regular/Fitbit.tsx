import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFitbit = ({
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
      d="M13.068 3.492c0 .817-.666 1.493-1.47 1.493-.8 0-1.469-.676-1.469-1.493 0-.812.669-1.492 1.47-1.492.803 0 1.469.68 1.469 1.492Zm-1.47 2.711c-.865 0-1.534.68-1.534 1.562 0 .881.67 1.56 1.538 1.56.864 0 1.534-.679 1.534-1.56 0-.882-.679-1.562-1.544-1.562h.006Zm0 4.207c-.865 0-1.602.744-1.602 1.626 0 .881.737 1.626 1.605 1.626.865 0 1.601-.745 1.601-1.626 0-.882-.736-1.626-1.6-1.626h-.004Zm0 4.268c-.865 0-1.534.68-1.534 1.558 0 .882.67 1.562 1.538 1.562.864 0 1.534-.68 1.534-1.562 0-.81-.679-1.558-1.544-1.558h.006Zm0 4.34c-.8 0-1.469.676-1.469 1.493 0 .81.669 1.489 1.47 1.489.803 0 1.469-.677 1.469-1.492 0-.814-.666-1.49-1.47-1.49ZM15.673 6c-.936 0-1.736.818-1.736 1.764 0 .947.8 1.76 1.736 1.76.932 0 1.733-.813 1.733-1.76 0-.947-.8-1.764-1.733-1.764Zm0 4.204c-1.004 0-1.804.813-1.804 1.832a1.81 1.81 0 0 0 1.804 1.828c1 0 1.8-.813 1.8-1.831 0-1.016-.8-1.829-1.8-1.829Zm0 4.271c-.936 0-1.736.818-1.736 1.76 0 .951.8 1.765 1.736 1.765.932 0 1.733-.817 1.733-1.764 0-.947-.8-1.76-1.733-1.76Zm4.202-4.474c-1.067 0-2 .882-2 2.035 0 1.084.865 2.034 2 2.034 1.136 0 2.004-.892 2.004-2.044-.068-1.156-.936-2.031-2.004-2.031V10ZM7.46 6.409c-.732 0-1.33.611-1.33 1.356 0 .744.598 1.355 1.33 1.355.737 0 1.335-.611 1.335-1.355 0-.745-.598-1.353-1.335-1.353V6.41Zm0 4.203c-.8 0-1.402.607-1.402 1.424 0 .814.595 1.424 1.396 1.424.803 0 1.396-.61 1.396-1.424 0-.817-.605-1.424-1.406-1.424h.016Zm0 4.268c-.732 0-1.33.611-1.33 1.355 0 .748.598 1.356 1.33 1.356.737 0 1.335-.614 1.335-1.365a1.34 1.34 0 0 0-1.335-1.355v.009Zm-4.134-4.066c-.67 0-1.203.542-1.203 1.222 0 .676.534 1.218 1.203 1.218.666 0 1.2-.542 1.2-1.218 0-.68-.534-1.222-1.2-1.222Z"
    />
  </svg>
);
export default SvgFitbit;
