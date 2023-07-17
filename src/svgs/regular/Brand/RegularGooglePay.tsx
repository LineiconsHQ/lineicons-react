import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGooglePay = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M15.166 25.59a5.56 5.56 0 0 0-3.928-1.537c-2.67 0-4.937 1.8-5.748 4.227a6.135 6.135 0 0 0 0 3.919c.81 2.426 3.078 4.226 5.748 4.226 1.384 0 2.567-.355 3.486-.978v-.002a4.738 4.738 0 0 0 2.044-3.111h-5.53V28.39h9.656c.118.687.177 1.384.176 2.082 0 3.115-1.113 5.75-3.046 7.532h-.002l.002.001c-1.696 1.565-4.023 2.472-6.786 2.472a10.24 10.24 0 0 1 0-20.477 9.837 9.837 0 0 1 6.85 2.666l-2.922 2.922Zm15.156 6.438v7.217h-2.29V21.423h6.072a5.492 5.492 0 0 1 3.932 1.543 4.959 4.959 0 0 1 1.643 3.76 4.937 4.937 0 0 1-1.643 3.784c-1.061 1.012-2.372 1.518-3.932 1.517h-3.782v.001Zm0-8.411v6.221h3.84a3.029 3.029 0 0 0 2.265-.921 3.037 3.037 0 0 0 0-4.356 2.986 2.986 0 0 0-2.266-.945h-3.84Zm14.633 3.036c1.692 0 3.028.452 4.007 1.357.98.904 1.468 2.144 1.467 3.72v7.515h-2.19v-1.692h-.1c-.947 1.393-2.208 2.09-3.782 2.09-1.343 0-2.467-.398-3.371-1.194a3.815 3.815 0 0 1-1.357-2.987c0-1.261.477-2.265 1.43-3.01.954-.745 2.227-1.119 3.82-1.12 1.36 0 2.48.248 3.359.746v-.523a2.608 2.608 0 0 0-.946-2.027 3.242 3.242 0 0 0-2.21-.834c-1.278 0-2.29.539-3.035 1.618l-2.017-1.27c1.11-1.593 2.75-2.39 4.925-2.39Zm-2.963 8.86a1.83 1.83 0 0 0 .76 1.492c.506.399 1.135.61 1.779.597a3.65 3.65 0 0 0 2.575-1.069c.758-.714 1.138-1.551 1.138-2.513-.714-.568-1.71-.853-2.987-.853-.93 0-1.705.224-2.326.673-.627.455-.939 1.008-.939 1.672Zm13.363 9.107L63 27.051h-2.493l-3.533 8.76h-.05l-3.634-8.76h-2.488l5.027 11.422-2.837 6.147h2.363Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGooglePay;