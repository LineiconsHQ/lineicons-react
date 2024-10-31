import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeno = ({
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
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10ZM7.063 5.382c.256.069.41.33.347.587l-.003.011-.664 2.461-.003.012a.488.488 0 0 1-.943-.254l.003-.012.664-2.461.004-.012a.488.488 0 0 1 .595-.332Zm8.532.465c.257.07.41.33.348.587l-.003.012-.522 1.933-.043-.032a5.47 5.47 0 0 0-.825-.502l.447-1.654L15 6.18a.488.488 0 0 1 .595-.332Zm-4.343-2.775a.486.486 0 0 1-.002.22l-.003.012-.665 2.461-.003.012a.488.488 0 0 1-.942-.254l.003-.012.619-2.295.065-.013a8.98 8.98 0 0 1 .928-.13Zm6.11 1.7.058.043c.268.2.525.414.77.643l-.015.052-.003.012a.488.488 0 0 1-.943-.254l.003-.012.13-.484ZM13.5 3.152l.07.012c.298.05.593.116.885.197l-.248.919-.003.011a.488.488 0 0 1-.942-.254l.003-.012.235-.873Zm-1.668 13.762a.488.488 0 0 1 .306.247l.014.072.023.114.016.08-.002.019a.485.485 0 0 1-.01.055l-.003.012-.664 2.461-.003.012a.488.488 0 0 1-.943-.254l.003-.012.664-2.461.003-.012a.489.489 0 0 1 .596-.332ZM7.203 14.38c.248.217.53.41.846.576l-.602 2.232-.003.012a.488.488 0 0 1-.943-.255l.003-.012.664-2.46.005-.017a.49.49 0 0 1 .03-.076ZM5.62 11.55c.256.07.41.33.347.587l-.003.012-.664 2.46-.003.012a.488.488 0 0 1-.943-.254l.003-.012.664-2.46.003-.012a.488.488 0 0 1 .596-.333Zm14.89-.559c.256.07.41.33.347.587l-.003.012-.664 2.46-.004.013a.488.488 0 0 1-.942-.255l.003-.011.664-2.462.003-.011a.488.488 0 0 1 .596-.333ZM4.174 7.705a.488.488 0 0 1 .463.604l-.004.012-.664 2.46-.003.012a.488.488 0 0 1-.835.184 8.922 8.922 0 0 1 1.043-3.272Zm14.654.017c.256.07.41.33.347.587l-.003.012-.664 2.46-.003.012a.488.488 0 0 1-.943-.254l.003-.012.664-2.46.003-.013a.488.488 0 0 1 .596-.332ZM9.11 18.106c.257.069.41.33.347.587l-.003.011-.475 1.762-.066-.025a8.913 8.913 0 0 1-.84-.364l.438-1.627.004-.012a.488.488 0 0 1 .595-.332Zm2.554-10.424c1.399 0 2.599.387 3.543 1.125 1.174.918 1.617 2.182 1.997 3.553l1.522 5.678a9.048 9.048 0 0 1-5.482 2.89c-.127-.86-.29-1.716-.454-2.57l-.024-.13-.095-.495v-.003c-.17-.894-.35-1.851-.426-2.06-.09-.248-.168-.433-.443-.427-3.226.069-5.308-1.304-5.308-3.454 0-2.277 2.262-4.107 5.17-4.107Z"
    />
    <path
      fill="#323544"
      d="M12.29 9.326a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25Z"
    />
  </svg>
);
export default SvgDeno;