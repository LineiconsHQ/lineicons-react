import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIbm = ({
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
      d="M2 8v.547h3.893V8H2Zm4.445 0v.547h5.547S11.425 8 10.675 8h-4.23Zm6.636 0v.547h3.356l-.2-.547h-3.156Zm5.762 0-.2.547h3.326V8h-3.126ZM2 9.064v.548h3.893v-.548H2Zm4.445.001v.547h6.19s-.071-.421-.197-.547H6.444Zm6.636 0v.547h3.724l-.185-.547h-3.54Zm5.364 0-.185.547h3.71v-.547h-3.525ZM3.119 10.13v.548h1.686v-.548H3.119Zm4.444 0v.548H9.25v-.548H7.563Zm3.326 0v.548h1.686s.107-.29.107-.548h-1.793Zm3.31 0v.548h2.99l-.2-.548H14.2Zm3.878 0-.2.548h3.004v-.548h-2.804ZM3.12 11.194v.547h1.686v-.547H3.119Zm4.444 0v.547h4.307s.36-.28.475-.547H7.563Zm6.636 0v.547h1.686v-.304l.107.305h3.088l.115-.305v.305h1.686v-.548h-3.165l-.168.464-.168-.464H14.2ZM3.12 12.26v.547h1.686v-.547H3.119Zm4.444 0v.547h4.782c-.115-.266-.476-.547-.476-.547H7.564Zm6.636 0v.547h1.686v-.547H14.2Zm1.992 0 .204.547h2.316l.194-.547H16.19Zm3.004 0v.547h1.686v-.547h-1.686ZM3.12 13.323v.547h1.686v-.547H3.119Zm4.444 0v.547H9.25v-.547H7.563Zm3.326 0v.547h1.793c0-.258-.107-.547-.107-.547h-1.686Zm3.31 0v.547h1.686v-.547H14.2Zm2.375 0 .198.547h1.552l.2-.547h-1.95Zm2.621 0v.547h1.686v-.547h-1.686ZM2.03 14.387v.549h3.893v-.549H2.03Zm4.415 0v.549h5.992c.127-.126.199-.549.199-.549H6.445Zm6.666 0v.549h2.774v-.549h-2.774Zm3.847 0 .203.549h.79l.19-.549h-1.183Zm2.237 0v.549H22v-.549h-2.805ZM2.03 15.453V16h3.893v-.547H2.03Zm4.415 0v.546h4.23c.75 0 1.317-.546 1.317-.546H6.445Zm6.666 0V16h2.774v-.547h-2.774Zm4.232 0 .195.546h.034l.198-.546h-.427Zm1.852 0V16H22v-.547h-2.805Z"
    />
  </svg>
);
export default SvgIbm;