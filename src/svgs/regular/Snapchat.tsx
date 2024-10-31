import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSnapchat = ({
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
      d="M21.928 16.557c-.139-.378-.403-.58-.705-.748a1.774 1.774 0 0 0-.153-.08c-.09-.046-.182-.091-.273-.139-.94-.498-1.674-1.127-2.183-1.872a4.254 4.254 0 0 1-.374-.664c-.044-.124-.042-.195-.01-.26a.42.42 0 0 1 .12-.124c.161-.107.327-.215.44-.288.202-.13.361-.234.464-.307.386-.27.656-.557.824-.877a1.746 1.746 0 0 0 .087-1.45c-.256-.673-.891-1.09-1.66-1.09a2.287 2.287 0 0 0-.61.08c.007-.46-.003-.945-.044-1.422-.145-1.68-.733-2.56-1.346-3.263a5.367 5.367 0 0 0-1.37-1.101C14.206 2.42 13.15 2.15 12 2.15c-1.15 0-2.2.27-3.132.802-.515.29-.978.662-1.371 1.103-.614.702-1.202 1.584-1.347 3.263-.04.477-.051.965-.044 1.423a2.286 2.286 0 0 0-.609-.08c-.77-.001-1.406.416-1.66 1.089a1.748 1.748 0 0 0 .084 1.452c.169.32.439.607.824.877.103.071.262.174.464.306.109.07.268.174.423.277.055.035.101.082.136.136.033.067.034.14-.014.272a4.205 4.205 0 0 1-.369.65c-.498.729-1.21 1.346-2.12 1.84-.481.256-.982.427-1.194 1.001-.16.434-.055.928.35 1.344.15.155.322.286.511.387a5.54 5.54 0 0 0 1.25.5c.09.023.176.061.253.113.148.13.127.324.324.609.098.147.224.275.37.376.412.285.876.303 1.368.322.444.017.947.036 1.522.226.238.079.486.23.772.409.689.423 1.631 1.002 3.208 1.002 1.577 0 2.526-.582 3.22-1.007.284-.175.53-.325.761-.402.575-.19 1.078-.21 1.522-.226.492-.019.956-.037 1.369-.322.172-.12.316-.277.42-.46.142-.24.139-.409.272-.526a.78.78 0 0 1 .237-.108 5.556 5.556 0 0 0 1.267-.505c.202-.108.383-.25.537-.42l.005-.007c.38-.406.475-.886.32-1.309Zm-1.401.754c-.855.472-1.423.421-1.865.706-.376.241-.154.763-.427.95-.335.232-1.325-.016-2.605.407-1.056.349-1.73 1.353-3.629 1.353-1.898 0-2.556-1.002-3.63-1.356-1.277-.422-2.27-.174-2.605-.406-.273-.188-.051-.71-.426-.95-.443-.285-1.011-.235-1.866-.704-.544-.3-.235-.487-.054-.575 3.097-1.5 3.591-3.814 3.613-3.986.027-.207.056-.371-.173-.583-.22-.204-1.203-.812-1.475-1.002-.45-.314-.649-.629-.503-1.015.102-.267.352-.368.613-.368.083 0 .166.01.246.028.495.107.975.355 1.253.422a.44.44 0 0 0 .102.014c.148 0 .2-.075.19-.245-.032-.54-.108-1.596-.023-2.581.117-1.356.554-2.028 1.073-2.623.25-.285 1.421-1.523 3.662-1.523 2.24 0 3.415 1.233 3.665 1.517.52.594.957 1.266 1.073 2.623.085.985.011 2.04-.023 2.581-.012.179.042.244.19.244a.435.435 0 0 0 .102-.013c.278-.067.758-.315 1.253-.422a1.14 1.14 0 0 1 .246-.028c.263 0 .51.102.613.368.146.386-.051.7-.502 1.015-.273.19-1.254.797-1.475 1.002-.23.212-.2.375-.173.583.022.175.515 2.49 3.613 3.986.182.091.491.277-.053.58Z"
    />
  </svg>
);
export default SvgSnapchat;
