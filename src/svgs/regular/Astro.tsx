import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAstro = ({
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
      d="M9.24 19.035c-.901-.826-1.164-2.561-.789-3.819.65.793 1.552 1.044 2.486 1.186 1.44.218 2.856.137 4.195-.524.153-.076.295-.177.462-.278.126.365.159.734.115 1.11-.107.915-.56 1.622-1.283 2.158-.289.215-.594.406-.892.608-.916.622-1.164 1.35-.82 2.41l.034.114a2.41 2.41 0 0 1-1.07-.918 2.588 2.588 0 0 1-.412-1.401c-.003-.248-.003-.497-.036-.74-.081-.595-.36-.86-.883-.876a1.034 1.034 0 0 0-1.075.843c-.008.04-.02.08-.033.126ZM4.1 15.007s2.666-1.303 5.34-1.303l2.016-6.26c.075-.304.296-.51.544-.51.25 0 .47.206.545.51l2.016 6.26c3.167 0 5.34 1.303 5.34 1.303L15.363 2.602c-.13-.366-.35-.602-.645-.602H9.283c-.296 0-.506.236-.645.602-.01.024-4.538 12.405-4.538 12.405Z"
    />
  </svg>
);
export default SvgAstro;
