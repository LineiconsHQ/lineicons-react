import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusic = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#323544"
      d="M21.25 4a.75.75 0 0 0-.888-.737l-12 2.25a.75.75 0 0 0-.612.737v8.209A3.952 3.952 0 0 0 5.875 14c-.874 0-1.694.27-2.31.74-.618.47-1.065 1.174-1.065 2.01 0 .836.447 1.54 1.064 2.01.617.47 1.437.74 2.311.74.874 0 1.694-.27 2.31-.74.606-.46 1.047-1.146 1.064-1.96l.001-.029V10.62l10.5-2.01v3.599a3.952 3.952 0 0 0-1.875-.459c-.874 0-1.694.27-2.31.74-.618.47-1.065 1.174-1.065 2.01 0 .836.447 1.54 1.064 2.01.617.47 1.437.74 2.311.74.874 0 1.694-.27 2.31-.74.606-.46 1.047-1.146 1.065-1.96V4Zm-1.5 10.5c0 .268-.14.564-.473.818-.333.253-.826.432-1.402.432s-1.069-.179-1.402-.432c-.332-.254-.473-.55-.473-.818 0-.268.14-.564.473-.818.333-.253.826-.432 1.402-.432s1.069.179 1.402.432c.332.254.473.55.473.818ZM7.277 15.932c.332.254.473.55.473.818 0 .268-.14.564-.473.818-.333.253-.827.432-1.402.432s-1.069-.179-1.402-.432c-.332-.254-.473-.55-.473-.818 0-.268.14-.564.473-.818.333-.253.827-.432 1.402-.432s1.069.179 1.402.432Zm12.473-8.85-10.5 2.01v-2.22l10.5-1.968v2.178Z"
    />
  </svg>
);
export default SvgMusic;