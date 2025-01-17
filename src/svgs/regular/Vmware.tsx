import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVmware = ({
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
      d="M12.654 9.988c.545.173.902.544 1.07 1.113v3.18h2.424v-.004h.373v-.006h.035V8.875c-.278-.938-.867-1.551-1.766-1.838H3.943c-.9.286-1.488.899-1.766 1.838v11.343c.278.939.88 1.532 1.804 1.782h10.77c.925-.25 1.527-.843 1.805-1.782V17.26h-2.831v.712c-.169.569-.533.929-1.093 1.08H6.104c-.56-.151-.925-.511-1.093-1.08v-6.872c.168-.57.525-.94 1.07-1.113h6.573Z"
    />
    <path
      fill="#323544"
      d="M21.824 3.838c-.278-.939-.867-1.551-1.767-1.838H9.212c-.9.287-1.488.9-1.766 1.838v2.885h2.83v-.66c.17-.569.526-.94 1.072-1.112h6.572c.545.172.902.543 1.07 1.112v6.873c-.168.569-.532.928-1.093 1.08H11.37c-.56-.152-.925-.511-1.093-1.08V9.673H7.445v5.508c.278.938.88 1.532 1.804 1.782h10.77c.925-.25 1.527-.844 1.805-1.783V3.838Z"
    />
  </svg>
);
export default SvgVmware;
