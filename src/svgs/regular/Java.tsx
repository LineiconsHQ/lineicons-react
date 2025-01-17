import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJava = ({
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
      d="M15.347 14.228c.355-.258.904-.484.904-.484s-1.485.258-3 .42c-1.84.096-3.808.16-4.808 0C6.088 13.84 9.7 12.97 9.7 12.97s-1.42-.097-3.194.774c-2 .968 5.13 1.42 8.84.484Zm-3.29-1.29c-.775-1.678-3.26-3.13 0-5.679C16.088 4.033 13.991 2 13.991 2c.871 3.323-2.968 4.323-4.323 6.356-.936 1.355.484 2.871 2.387 4.582Zm4.452-6.84s-6.872 1.742-3.582 5.484c.968 1.097-.258 2.098-.258 2.098s2.452-1.259 1.323-2.872c-1.032-1.484-1.871-2.226 2.517-4.71Zm-.226 10.518c-.032.032-.032.032-.032.096 5-1.322 3.194-4.678.774-3.807a.513.513 0 0 0-.323.258c.13-.032.258-.097.452-.129 1.13-.226 2.872 1.646-.871 3.582Zm1.807 2.452s.548.451-.646.806c-2.258.678-9.388.871-11.389.033-.742-.323.646-.775 1.033-.872.451-.096.677-.032.677-.032-.774-.548-5.13 1.097-2.194 1.549 8.034 1.355 14.616-.517 12.519-1.484Zm-8.712-1.614c-3.032.872 1.872 2.646 5.776.968a6.964 6.964 0 0 1-1.097-.548c-1.775.355-2.55.355-4.13.193-1.323-.16-.549-.613-.549-.613Zm7.034 3.808c-3.033.548-6.905.483-9.13.129 0 0 .451.355 2.806.548 3.582.226 9.13-.129 9.26-1.871 0 0-.226.71-2.936 1.194Zm-1.742-5.485c-2.323.451-3.678.451-5.356.258-1.323-.13-.452-.774-.452-.774-3.355 1.129 1.871 2.42 6.647 1-.29-.097-.549-.258-.84-.484Z"
    />
  </svg>
);
export default SvgJava;
