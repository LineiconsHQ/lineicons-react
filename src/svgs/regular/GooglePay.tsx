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
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      fillRule="evenodd"
      d="M6.57 9.832a1.793 1.793 0 0 0-1.267-.495c-.862 0-1.593.58-1.855 1.363-.138.41-.138.854 0 1.264.262.783.993 1.364 1.855 1.364.446 0 .828-.115 1.124-.316a1.528 1.528 0 0 0 .66-1.004H5.303v-1.272h3.114c.038.222.058.446.057.671 0 1.006-.359 1.856-.982 2.43-.548.505-1.298.798-2.19.798a3.304 3.304 0 0 1 0-6.605c.82-.01 1.613.298 2.21.86l-.942.942Zm4.889 2.077v2.328h-.739V8.488h1.959a1.772 1.772 0 0 1 1.268.498 1.6 1.6 0 0 1 .53 1.213 1.593 1.593 0 0 1-.53 1.22c-.342.327-.765.49-1.268.49h-1.22Zm0-2.713v2.007h1.238a.976.976 0 0 0 .73-.297.98.98 0 0 0 0-1.405.963.963 0 0 0-.73-.305H11.46Zm4.72.98c.546 0 .977.145 1.293.437.315.292.473.692.473 1.2v2.424h-.707v-.546h-.032c-.305.45-.712.675-1.22.675-.433 0-.796-.129-1.087-.386a1.23 1.23 0 0 1-.438-.963c0-.407.154-.73.461-.97.308-.241.719-.362 1.232-.362.44 0 .8.08 1.084.24v-.168a.84.84 0 0 0-.305-.654 1.046 1.046 0 0 0-.713-.27c-.412 0-.739.175-.98.523l-.65-.41c.358-.514.888-.77 1.589-.77Zm-.956 2.857a.59.59 0 0 0 .245.482.901.901 0 0 0 .574.192c.312 0 .61-.124.83-.344.246-.23.368-.5.368-.811-.23-.184-.551-.275-.963-.275-.3 0-.55.072-.75.217-.203.146-.304.325-.304.54Zm4.31 2.938L22 10.304h-.804l-1.14 2.825h-.016l-1.172-2.825h-.803l1.622 3.684-.916 1.983h.763Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGooglePay;
