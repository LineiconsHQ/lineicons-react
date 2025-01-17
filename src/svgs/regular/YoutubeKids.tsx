import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYoutubeKids = ({
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
      d="M11.437 4.527c2.328-.322 5.109-.668 5.534-.668h.026c.998.02 1.808.179 2.76.906.585.446 1.055 1.14 1.396 2.066.295.802.82 5.28.833 6.215l.005.24v.004c.02.784.053 2.093-.523 3.171-1.08 2.02-3.451 2.239-4.42 2.239h-.116c-3.955 0-5.87.522-7.411.942h-.003c-.978.268-1.823.498-2.889.498-.284 0-.57-.016-.87-.049-1.217-.133-2.15-.993-2.63-2.424-.355-1.06-.975-5.696-1.084-6.873-.14-1.519-.004-2.684 1.112-3.805.605-.609 1.369-1.08 2.33-1.44.697-.26 3.62-.7 5.95-1.022Zm-1.97 4.332c-.122.089-.073.455-.052.61l.005.041.13 1.098c.15 1.284.378 3.235.416 3.514l.009.073.015.123c.045.355.114.905.281.994.025.012.056.02.09.02.223 0 .621-.26.847-.435l3.581-2.479c.227-.158.454-.314.683-.47l.012-.007.075-.047c.156-.094.347-.213.344-.465-.006-.266-.22-.359-.378-.426a1.305 1.305 0 0 1-.101-.047c-1.098-.562-4.63-1.813-5.333-2.04l-.01-.004a1.615 1.615 0 0 0-.448-.095.277.277 0 0 0-.166.042Z"
    />
  </svg>
);
export default SvgYoutubeKids;
