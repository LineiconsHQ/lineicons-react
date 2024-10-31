import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmazonOriginal = ({
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
      d="M15.545 17.345a.566.566 0 0 0 .642-.065v.001l.003.008c.686-.61 1.38-1.21 2.08-1.802.222-.184.183-.471.012-.721l-.161-.219c-.443-.597-.862-1.163-.862-2.297V8.02l.001-.43c.01-1.623.018-3.105-1.197-4.239-1.04-1-2.766-1.351-4.087-1.351-2.58 0-5.466.962-6.076 4.16-.064.333.184.512.405.562l2.638.295c.248-.011.427-.246.473-.496.225-1.1 1.145-1.63 2.18-1.63.56 0 1.194.206 1.522.706.343.5.338 1.166.333 1.764l-.001.202v.343a72.68 72.68 0 0 1-.77.08c-1.431.144-3.09.31-4.333.858-1.703.733-2.894 2.233-2.894 4.435 0 2.821 1.775 4.23 4.061 4.23 1.928 0 2.985-.455 4.474-1.973.073.105.139.203.2.295.357.53.59.877 1.357 1.514ZM13.45 10.81c0 .994.002 1.838-.508 2.733-.438.763-1.125 1.233-1.878 1.233-1.042 0-1.653-.793-1.653-1.965 0-2.313 2.073-2.733 4.04-2.733l-.002.587v.145ZM11.98 22c2.58 0 5.577-.813 7.645-2.337.344-.254.05-.632-.3-.483a18.582 18.582 0 0 1-7.129 1.457c-3.391 0-6.685-.93-9.344-2.479-.233-.136-.4.103-.213.278C5.104 20.663 8.355 22 11.98 22Z"
    />
    <path
      fill="#323544"
      d="M18.092 18.595c.674-.079 2.133-.25 2.393.084h.009c.265.338-.294 1.735-.544 2.357-.083.19.08.265.25.123 1.11-.928 1.395-2.873 1.169-3.153-.227-.28-2.16-.518-3.348.313-.182.127-.152.303.052.279l.019-.003Z"
    />
  </svg>
);
export default SvgAmazonOriginal;
