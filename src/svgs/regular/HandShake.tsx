import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHandShake = ({
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
      d="M11.825 6.455a1.282 1.282 0 0 0-.009-.006l-.793-.533a3 3 0 0 0-3.626.211L5.45 7.796a.75.75 0 0 1-.488.18H2.75a.75.75 0 0 0-.75.75v6.03c0 .414.336.75.75.75h2.088a.75.75 0 0 1 .563.254l2.339 2.66a2.25 2.25 0 0 0 2.968.365l.684-.473.734.25a2.25 2.25 0 0 0 2.539-.803l.47-.642.326.044a2.25 2.25 0 0 0 2.276-1.153l.049-.09h3.464a.75.75 0 0 0 .75-.75V8.727a.75.75 0 0 0-.75-.75h-2.211a.75.75 0 0 1-.49-.182L16.86 6.336a3.75 3.75 0 0 0-5.036.12Zm-1.64.705.562.378L8.786 9.51a2.25 2.25 0 0 0 .044 3.216l.068.064c.81.771 2.062.831 2.941.14l2.079-1.632 2.657 2.555a.75.75 0 0 1 .139.9l-.025.044a.783.783 0 0 0-.014.026l-.255.467a.75.75 0 0 1-.758.384l-.769-.103a.75.75 0 0 0-.705.3l-.734 1.002a.75.75 0 0 1-.846.268l-1.09-.37a.75.75 0 0 0-.668.093l-.994.687a.75.75 0 0 1-.99-.122l-2.339-2.66a2.25 2.25 0 0 0-1.69-.763H3.5v-4.53h1.461a2.25 2.25 0 0 0 1.464-.541l1.948-1.669a1.5 1.5 0 0 1 1.813-.106Zm8.12 7.259a2.249 2.249 0 0 0-.69-1.648l-2.521-2.424a.75.75 0 0 0-1.053-1.053l-.506.397a.752.752 0 0 0-.06.047l-2.563 2.013a.75.75 0 0 1-.98-.047l-.068-.065a.75.75 0 0 1-.015-1.072l2.965-2.98a2.25 2.25 0 0 1 3.066-.116l1.687 1.458a2.25 2.25 0 0 0 1.472.547H20.5v4.943h-2.195Z"
    />
  </svg>
);
export default SvgHandShake;