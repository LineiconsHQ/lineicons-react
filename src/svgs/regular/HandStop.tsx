import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHandStop = ({
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
      d="M9.599 3.495C9.908 2.655 10.646 2 11.616 2s1.709.654 2.018 1.495a2.02 2.02 0 0 1 .834-.177c1.293 0 2.176 1.164 2.176 2.382v.437c.209-.073.435-.114.676-.114 1.293 0 2.176 1.165 2.176 2.382v5.705c.018.709.021 2.63-.828 4.4-.433.904-1.095 1.784-2.098 2.436-1.005.654-2.304 1.047-3.96 1.054h-.003c-1.814 0-3.424-.886-4.6-1.784a13.886 13.886 0 0 1-2.3-2.241 3.629 3.629 0 0 0-.16-.19L3.202 15.23l-.012-.013c-.804-.92-.804-2.375 0-3.295.85-.973 2.273-.979 3.13-.018l.27.275v-6.48c0-1.217.882-2.381 2.175-2.381.303 0 .583.064.835.177ZM9.44 5.693c-.003-.58-.395-.875-.676-.875s-.676.297-.676.882v8.315a.75.75 0 0 1-1.285.525l-1.568-1.6a.786.786 0 0 1-.03-.03c-.258-.296-.629-.296-.887 0-.308.352-.31.958-.005 1.314l2.34 2.547c.083.092.158.181.225.266a12.39 12.39 0 0 0 2.04 1.986c1.064.813 2.352 1.477 3.688 1.477 1.413-.006 2.42-.339 3.146-.811.729-.474 1.225-1.12 1.563-1.827.69-1.439.698-3.062.68-3.723V8.405c0-.585-.394-.882-.675-.882-.282 0-.676.297-.676.882v2.825a.75.75 0 1 1-1.5 0V5.7c0-.585-.395-.882-.676-.882-.282 0-.676.297-.676.882v5.53a.75.75 0 1 1-1.5 0V4.382c0-.585-.394-.882-.676-.882-.281 0-.676.297-.676.882v6.66a.75.75 0 0 1-1.5 0v-5.35Z"
    />
  </svg>
);
export default SvgHandStop;
