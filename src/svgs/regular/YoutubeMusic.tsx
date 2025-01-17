import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYoutubeMusic = ({
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
      fillRule="evenodd"
      d="M8.217 8.286C9.265 7.254 10.514 6.743 12 6.743c1.486 0 2.735.51 3.783 1.543 1.048 1.032 1.562 2.258 1.562 3.714 0 1.455-.514 2.68-1.562 3.713S13.486 17.256 12 17.256c-1.486 0-2.735-.51-3.783-1.543C7.169 14.681 6.655 13.455 6.655 12c0-1.456.514-2.682 1.562-3.714Zm6.977 3.715L10 14.91V9.088l5.194 2.912Z"
      clipRule="evenodd"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M19.071 18.966C21.024 17.042 22 14.72 22 12c0-2.721-.976-5.043-2.929-6.967C17.118 3.11 14.761 2.147 12 2.147s-5.118.962-7.071 2.886C2.976 6.957 2 9.28 2 12c0 2.72.976 5.042 2.929 6.966 1.953 1.924 4.31 2.886 7.071 2.886s5.118-.962 7.071-2.886ZM12 5.433c-1.827 0-3.407.644-4.702 1.92C6.002 8.63 5.345 10.19 5.345 12c0 1.809.657 3.37 1.953 4.646 1.295 1.276 2.874 1.92 4.702 1.92 1.827 0 3.407-.644 4.702-1.92 1.296-1.276 1.953-2.837 1.953-4.646 0-1.81-.657-3.37-1.953-4.647-1.295-1.276-2.875-1.92-4.702-1.92Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgYoutubeMusic;
