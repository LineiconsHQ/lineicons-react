import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIntel = ({
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
      d="M2 8.228h1.448v1.448H2V8.228ZM3.412 15.77v-5.213h-1.37v5.214h1.37Zm9.108.052v-1.277c-.2 0-.37-.01-.494-.031a.56.56 0 0 1-.325-.144.58.58 0 0 1-.144-.31 3.337 3.337 0 0 1-.031-.505v-1.823h.994v-1.175h-.994V8.522H10.15v5.044c0 .427.037.788.109 1.076.072.284.195.516.365.69.17.176.397.3.67.377.278.077.629.113 1.046.113h.18Zm7.873-.051V8.12h-1.376v7.65h1.376ZM8.826 11.067c-.38-.412-.917-.618-1.597-.618-.33 0-.628.067-.901.2-.268.135-.5.32-.68.557l-.078.098v-.747H4.215v5.214h1.366v-2.777.098c.015-.49.134-.85.36-1.082.242-.247.536-.371.871-.371.397 0 .7.124.902.36.195.238.298.572.298 1v2.767h1.386v-2.958c.005-.742-.19-1.329-.572-1.74Zm9.48 2.087c0-.377-.067-.727-.196-1.057a2.83 2.83 0 0 0-.551-.86 2.512 2.512 0 0 0-.85-.577 2.788 2.788 0 0 0-1.092-.206 2.71 2.71 0 0 0-1.922.788c-.242.242-.438.53-.577.86a2.62 2.62 0 0 0-.211 1.062c0 .376.067.732.2 1.061.135.33.325.619.562.86.237.243.53.438.87.578.341.144.717.216 1.119.216 1.164 0 1.886-.53 2.318-1.025l-.989-.752c-.206.247-.7.582-1.319.582-.386 0-.706-.088-.948-.268a1.322 1.322 0 0 1-.494-.727l-.016-.046h4.096v-.49Zm-4.086-.48c0-.38.438-1.045 1.381-1.05.943 0 1.386.664 1.386 1.045l-2.766.005Zm7.739 2.417a.488.488 0 0 0-.108-.16.514.514 0 0 0-.355-.15.495.495 0 0 0-.356.15.514.514 0 0 0-.15.356.494.494 0 0 0 .15.355.512.512 0 0 0 .355.15.493.493 0 0 0 .196-.042.488.488 0 0 0 .16-.108.514.514 0 0 0 .15-.355.514.514 0 0 0-.042-.196Zm-.083.36a.403.403 0 0 1-.222.222.446.446 0 0 1-.33 0 .403.403 0 0 1-.133-.088.426.426 0 0 1-.118-.299.403.403 0 0 1 .118-.299.427.427 0 0 1 .299-.119c.057.001.113.011.165.032a.405.405 0 0 1 .222.222c.02.051.03.103.03.165a.35.35 0 0 1-.03.164Zm-.288-.123a.16.16 0 0 0 .098-.047.152.152 0 0 0 .04-.113c0-.057-.014-.098-.05-.129-.031-.03-.088-.046-.155-.046h-.227v.582h.108v-.237h.078l.144.237h.113l-.15-.247Zm-.057-.083h-.129v-.165h.13c.015 0 .03.006.046.01a.053.053 0 0 1 .03.027c.006.01.01.025.01.046 0 .02-.004.036-.01.046-.01.01-.02.02-.03.026a.149.149 0 0 1-.047.01Z"
    />
  </svg>
);
export default SvgIntel;
