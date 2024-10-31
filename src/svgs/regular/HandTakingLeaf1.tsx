import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHandTakingLeaf1 = ({
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
      d="m15.309 2.75.284-.694a.75.75 0 0 0-.57 0l.286.694Z"
    />
    <path
      fill="#323544"
      d="m15.309 2.75-.285-.694h-.001l-.002.001-.004.002-.01.004-.034.015a5.73 5.73 0 0 0-.474.243c-.295.17-.69.428-1.088.786-.795.716-1.645 1.873-1.645 3.524 0 2.02 1.536 3.752 3.543 3.752 2.006 0 3.542-1.732 3.542-3.752 0-1.65-.85-2.808-1.644-3.524a6.406 6.406 0 0 0-1.454-.979 3.965 3.965 0 0 0-.11-.05l-.033-.015-.01-.004-.004-.002h-.002l-.285.693Zm.894 1.472c.602.541 1.148 1.324 1.148 2.409 0 .982-.554 1.77-1.292 2.093V6.106a.75.75 0 0 0-1.5 0v2.618c-.738-.323-1.293-1.11-1.293-2.093 0-1.085.547-1.868 1.148-2.409a4.906 4.906 0 0 1 .895-.635l.063.035c.228.131.53.33.831.6ZM19.427 11.084a1.578 1.578 0 0 1 2.226 2.212l-3.867 4.829a1.978 1.978 0 0 1-1.544.741h-6.174a.75.75 0 0 0-.503.194l-.525.475a.75.75 0 0 1-.34.877l-2.576 1.487a.75.75 0 0 1-1.025-.274L2.101 16.43a.75.75 0 0 1 .274-1.025l2.577-1.487a.75.75 0 0 1 .743-.004l1.693-1.353c.553-.442 1.253-.747 2.025-.75.813-.004 2.099.068 3.262.492h2.598c.662 0 1.239.36 1.548.893l2.606-2.113ZM8.559 17.948a2.25 2.25 0 0 1 1.51-.582h6.173a.478.478 0 0 0 .373-.179l3.867-4.829a.078.078 0 0 0-.11-.109l-3.852 3.123a1.782 1.782 0 0 1-1.247.507h-2.735a.75.75 0 1 1 0-1.5h2.735c.046 0 .09-.01.13-.03a.856.856 0 0 1 .024-.021l.073-.06a.288.288 0 0 0-.227-.465h-2.682c-.13.001-.255-.023-.369-.067-.926-.353-2.033-.428-2.802-.425-.374.002-.755.15-1.096.423l-1.788 1.43 1.75 3.03.273-.246ZM3.775 16.33l2.248 3.895 1.278-.738-2.249-3.894-1.277.737Z"
    />
  </svg>
);
export default SvgHandTakingLeaf1;