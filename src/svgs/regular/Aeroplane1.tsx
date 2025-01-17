import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAeroplane1 = ({
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
      d="M16.04 21.988c-.1 0-.19-.02-.28-.06l-3.78-1.55-3.78 1.55c-.23.09-.49.07-.7-.07a.738.738 0 0 1-.33-.62v-2.18c0-.23.11-.45.29-.59l1.93-1.5-.12-2.46-5.16.82a.729.729 0 0 1-.6-.17.765.765 0 0 1-.26-.57v-2.53c0-.29.17-.55.43-.68L9 8.858c-.1-2.25.57-4.5 1.9-6.32.51-.7 1.69-.7 2.2 0a9.924 9.924 0 0 1 1.9 6.32l5.32 2.52c.26.12.43.39.43.68v2.53c0 .22-.1.43-.26.57-.17.14-.39.21-.6.17l-5.16-.82-.12 2.46 1.93 1.5c.18.14.29.36.29.59v2.18c0 .25-.12.48-.33.62-.13.08-.27.13-.42.13h-.04Zm-7.37-2.56v.69l3.03-1.24c.18-.08.39-.08.57 0l3.03 1.24v-.7l-1.95-1.52a.772.772 0 0 1-.29-.63l.18-3.68c.01-.21.11-.41.28-.54.17-.13.38-.19.59-.16l5.12.81v-1.18l-5.34-2.53a.767.767 0 0 1-.43-.72l.02-.47c.09-1.86-.44-3.71-1.5-5.23a8.472 8.472 0 0 0-1.5 5.23l.02.47c.02.3-.15.59-.43.72l-5.34 2.53v1.18l5.12-.81c.21-.03.42.02.59.16.17.13.27.33.28.54l.18 3.68c.01.24-.1.48-.29.63l-1.94 1.52v.01Z"
    />
  </svg>
);
export default SvgAeroplane1;
