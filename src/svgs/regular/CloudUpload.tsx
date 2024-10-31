import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudUpload = ({
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
      d="M6.387 7.483a5.615 5.615 0 0 1 11.227 0c1.563.124 2.913 1 3.688 2.267h-1.948a3.253 3.253 0 0 0-2.12-.782h-.368a.75.75 0 0 1-.75-.75v-.603a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0 0 6.532H9.75V17H6.766a4.766 4.766 0 0 1-.38-9.517Z"
    />
    <path
      fill="#323544"
      d="M20.655 12a.75.75 0 0 1-.75.75h-6.56a.75.75 0 0 1 0-1.5h6.56a.75.75 0 0 1 .75.75ZM16.098 14.466a.75.75 0 0 1 1.06 0l2.218 2.217a.75.75 0 0 1-1.06 1.061l-.938-.937v4.444a.75.75 0 0 1-1.5 0v-4.444l-.938.937a.75.75 0 1 1-1.06-1.06l2.218-2.218Z"
    />
  </svg>
);
export default SvgCloudUpload;
