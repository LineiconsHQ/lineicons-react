import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFireworkRocket4 = ({
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
      d="M17.822 2.758a2.25 2.25 0 0 1 2.408 2.409l-.458 6.245a.75.75 0 0 1-1.278.475l-.947-.946-6.494 6.495a.75.75 0 0 1-1.061 0l-.857-.857-.994.994a1.276 1.276 0 0 0 1.804 1.804.75.75 0 0 1 1.06 1.06 2.775 2.775 0 0 1-3.924-3.925l.993-.994-.602-.603a.723.723 0 0 1-.024.025l-2.402 2.402a.75.75 0 1 1-1.06-1.06l2.402-2.403a.694.694 0 0 1 .024-.023L5.557 13a.75.75 0 0 1 0-1.06l1.806-1.807a.743.743 0 0 1 .085-.085l2.135-2.134a.746.746 0 0 1 .081-.082l2.387-2.387-.95-.95a.75.75 0 0 1 .476-1.279l6.245-.458Zm.912 2.299a.75.75 0 0 0-.803-.803l-4.61.339 5.075 5.075.338-4.611ZM9.69 15.011l.833.834 1.749-1.749-4.219-2.53-.904.904 2.494 2.495a.921.921 0 0 1 .047.046Zm-.543-4.54 4.218 2.532 1.124-1.124-4.218-2.531-1.124 1.124Zm2.217-2.217 4.219 2.531.902-.902-3.375-3.375-1.746 1.746Z"
    />
  </svg>
);
export default SvgFireworkRocket4;
