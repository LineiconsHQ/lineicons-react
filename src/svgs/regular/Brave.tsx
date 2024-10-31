import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrave = ({
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
      d="m15.013 2 1.716 1.983s1.507-.426 2.218.299a61.458 61.458 0 0 1 1.298 1.364l-.46 1.152.585 1.705s-1.723 6.65-1.925 7.463c-.398 1.599-.67 2.217-1.8 3.027a151.672 151.672 0 0 1-3.742 2.584c-.287.2-.608.423-.903.423-.296 0-.617-.224-.904-.423a151.95 151.95 0 0 1-3.743-2.584c-1.13-.81-1.401-1.428-1.799-3.027-.202-.813-1.925-7.463-1.925-7.463l.586-1.705-.46-1.152s.585-.64 1.297-1.364c.711-.725 2.218-.299 2.218-.299L8.986 2H15.013ZM7.751 5.241s-2.207 2.719-2.207 3.3c0 .48.19.668.414.89.046.046.095.094.143.146l1.655 1.79.054.057c.165.169.409.418.237.832l-.035.084c-.189.449-.42 1.002-.125 1.563.314.597.853.995 1.199.93.345-.067 1.156-.498 1.454-.696.298-.197 1.243-.991 1.243-1.295 0-.253-.68-.675-1.01-.88l-.147-.093a6.305 6.305 0 0 0-.162-.104c-.301-.19-.845-.536-.859-.688-.017-.188-.01-.244.233-.709.051-.099.112-.205.174-.315.232-.405.49-.86.433-1.184-.064-.368-.63-.578-1.107-.757l-.175-.065-.498-.19v-.001a44.01 44.01 0 0 1-1.096-.426c-.12-.057-.09-.11.277-.146l.178-.019c.455-.05 1.292-.14 1.7-.024l.264.073c.457.127 1.018.281 1.072.37l.027.042c.052.075.085.123.028.44l-.094.508c-.127.672-.324 1.724-.349 1.96a6.615 6.615 0 0 1-.011.095c-.032.263-.053.438.247.508l.078.018c.338.08.834.195 1.014.195.179 0 .675-.116 1.013-.195l.078-.018c.3-.07.279-.245.247-.508a6.489 6.489 0 0 1-.01-.095c-.026-.236-.223-1.285-.35-1.957l-.094-.51c-.057-.318-.024-.366.028-.44l.027-.043c.054-.089.615-.243 1.072-.37l.265-.073c.407-.116 1.245-.025 1.699.024l.178.019c.367.035.398.09.277.146-.087.041-.618.244-1.096.426l-.498.19-.174.066c-.479.179-1.043.39-1.108.757-.058.325.202.779.433 1.184.062.11.123.216.175.315.242.465.249.52.232.709-.014.153-.558.497-.86.688-.07.044-.127.08-.16.104l-.148.093c-.33.205-1.01.627-1.01.88 0 .304.945 1.098 1.243 1.295.298.198 1.11.63 1.455.695.345.066.884-.332 1.198-.929.296-.56.064-1.114-.124-1.563l-.036-.084c-.171-.414.072-.663.237-.832l.054-.056 1.655-1.791c.049-.052.097-.1.144-.146.223-.222.413-.41.413-.89 0-.581-2.207-3.3-2.207-3.3s-1.863.363-2.114.363c-.2 0-.587-.136-.99-.277l-.307-.107c-.503-.17-.837-.172-.837-.172h.009-.018H12c-.006 0-.34.003-.838.172-.1.035-.204.07-.306.107-.404.141-.79.277-.99.277-.252 0-2.115-.363-2.115-.363Zm5.688 9.78c-.59-.31-1.325-.575-1.44-.575-.114 0-.85.265-1.439.576l-.374.196c-.395.207-.674.354-.78.422-.137.087-.053.251.071.34.125.09 1.797 1.41 1.96 1.556l.065.06c.156.143.356.326.498.326.141 0 .34-.183.497-.326l.066-.06c.162-.146 1.835-1.466 1.959-1.555.124-.09.208-.254.071-.341-.105-.068-.385-.214-.778-.421l-.376-.197Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrave;
