import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWww = ({
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
      d="M15.714 14.096c.02.012.042.018.066.018h.9c.053 0 .085-.028.097-.085l.38-2.071c.005-.012.01-.018.019-.018.008 0 .014.006.018.018l.435 2.078c.012.052.046.078.102.078h.967c.052 0 .084-.026.096-.079L19.87 9.99c.009-.033.005-.057-.012-.073-.012-.02-.034-.03-.066-.03h-1.033c-.052 0-.084.026-.097.079l-.453 1.969c-.004.016-.01.024-.018.024-.008 0-.014-.008-.018-.024l-.453-1.97c-.012-.052-.044-.078-.097-.078h-.881c-.057 0-.09.026-.103.079l-.405 1.969c-.004.016-.01.024-.018.024-.008-.004-.014-.012-.018-.024l-.513-1.97c-.012-.052-.045-.078-.097-.078h-2.002c-.053 0-.085.026-.097.079l-.453 1.969c-.004.016-.01.024-.018.024-.008 0-.014-.008-.018-.024l-.453-1.97c-.012-.052-.044-.078-.097-.078h-.882c-.056 0-.09.026-.102.079l-.405 1.969c-.004.016-.01.024-.018.024-.008-.004-.014-.012-.018-.024l-.514-1.97c-.012-.052-.044-.078-.096-.078H8.41c-.052 0-.084.026-.096.079l-.453 1.969c-.004.016-.01.024-.018.024-.009 0-.015-.008-.019-.024l-.453-1.97c-.012-.052-.044-.078-.096-.078h-.882c-.056 0-.09.026-.103.079l-.404 1.969c-.004.016-.01.024-.019.024-.008-.004-.014-.012-.018-.024l-.513-1.97c-.012-.052-.044-.078-.097-.078H4.213c-.056 0-.084.024-.084.072 0 .013.002.023.006.03l1.196 4.048a.096.096 0 0 0 .036.06c.02.012.042.018.067.018h.9c.052 0 .084-.028.096-.085l.38-2.071c.005-.012.01-.018.019-.018.008 0 .014.006.018.018l.435 2.078c.012.052.046.078.102.078h.967c.052 0 .084-.026.097-.079l.973-3.665 1.083 3.666a.096.096 0 0 0 .037.06c.02.012.042.018.066.018h.9c.052 0 .085-.028.097-.085l.38-2.071c.004-.012.01-.018.018-.018.008 0 .014.006.018.018l.435 2.078c.012.052.046.078.103.078h.966c.053 0 .085-.026.097-.079l.974-3.665 1.083 3.666a.096.096 0 0 0 .036.06Z"
    />
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M4.248 4.5a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25H19.75A2.25 2.25 0 0 0 22 17.25V6.75a2.25 2.25 0 0 0-2.25-2.25H4.248Zm-.75 2.25a.75.75 0 0 1 .75-.75H19.75a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H4.248a.75.75 0 0 1-.75-.75V6.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWww;