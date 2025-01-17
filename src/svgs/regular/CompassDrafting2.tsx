import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompassDrafting2 = ({
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
      d="M12.75 2.75a.75.75 0 0 0-1.5 0v1.281A2.25 2.25 0 0 0 9.373 6.25V8.5c0 .463.14.894.38 1.252l-1.282 3.232a6.647 6.647 0 0 1-2.653-3.218.75.75 0 0 0-1.399.542 8.154 8.154 0 0 0 3.491 4.09l-2.609 6.576a.75.75 0 1 0 1.395.553l2.576-6.496c.852.304 1.77.469 2.726.469.957 0 1.874-.165 2.726-.469l2.577 6.496a.75.75 0 0 0 1.395-.553l-2.61-6.576a8.154 8.154 0 0 0 3.491-4.09.75.75 0 0 0-1.398-.542 6.648 6.648 0 0 1-2.653 3.218L14.245 9.75c.24-.358.38-.788.38-1.251V6.25a2.25 2.25 0 0 0-1.876-2.219V2.75Zm1.422 10.886a6.617 6.617 0 0 1-2.173.364c-.76 0-1.491-.128-2.172-.364l1.179-2.972c.196.056.404.086.618.086h.75c.215 0 .422-.03.619-.086l1.179 2.972ZM11.624 5.5h.75a.75.75 0 0 1 .75.75V8.5a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75Z"
    />
  </svg>
);
export default SvgCompassDrafting2;
