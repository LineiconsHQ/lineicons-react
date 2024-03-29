import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMailchimp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M46.7 30.2c.4-.1.8-.1 1.3 0 .1-.4.3-1.4.1-2.4-.3-1.4-.7-2.4-1.5-2.3-.8.1-.8 1.1-.6 2.7 0 .8.4 1.6.7 2zm-7.3 1.2c.6.3 1 .4 1.1.3.3-.3-.4-1.3-1.7-1.8-1.4-.6-3-.4-4.2.4-.4.3-.8.7-.8 1 .1.4 1.4-.4 3.1-.4 1.1-.1 1.8.3 2.5.5zm-1.3.7c-1.3.1-2 .8-1.8 1.4.1 0 .1.1.7-.1.8-.3 1.7-.4 2.7-.3.4 0 .6.1.7-.1.1-.2-.9-1.1-2.3-.9zm7.5 2.4c.4-1-1.5-2-2-1-.4 1 1.6 1.9 2 1zm2.1-2.9c-1.1 0-1.1 2.3 0 2.3s1.1-2.3 0-2.3zM17.6 42.5c-.1 0-.8.1-1.1-.3-.7-1.1 1.5-2.8.4-4.9-1.3-2.4-3.9-1.8-4.8-.8-1.1 1.4-1.1 3.2-.7 3.2.6.1.6-.8 1.1-1.7.4-.8 1.7-1.1 2.4-.4 1.7 1.1.1 2.4.3 3.9.1 2.4 2.5 2.3 3 1.3.1-.1 0-.1 0-.3-.2.1-.1-.2-.6 0zM59 40.2c-.4-1.7-.4-1.3-1-2.8.3-.4 2.1-3.2-.4-6.1-1.4-1.5-4.6-2.4-5.8-2.5-.1-1.5.7-8.2-3-11.4 3-3 4.6-6.3 4.6-9.2 0-5.5-6.6-7-14.8-3.7l-1.6.9s-3.1-3.1-3.2-3.1C24.5-6-4.7 26.6 4.6 34.3l2.1 1.8c-.6 1.4-.8 3.1-.6 4.6.4 4.6 4.9 8.3 9.3 8.3 7.9 18.5 37 18.5 44.5.4.1-.6 1.3-3.4 1.3-5.8-.1-2.4-1.4-3.4-2.2-3.4zm-43.7 6.7c-3.2-.1-6.6-3-6.9-6.3-.8-8.5 10.3-10.4 11.7-1.7.5 4-.7 8.1-4.8 8zm-2.5-15.8c-2.1.4-3.9 1.5-5.1 3.2-.7-.6-2-1.7-2.1-2-1.8-3.4 2-10.1 4.5-13.8 6.5-9.3 16.6-16.3 21.4-15 .8.1 3.4 3.1 3.4 3.1s-4.8 2.7-9.2 6.3c-5.9 4.4-10.4 11-12.9 18.2zM45.7 45s-4.9.8-9.6-1c.8-2.8 3.7.8 13.2-2 2.1-.6 4.8-1.8 7-3.5.4 1.1.8 2.3 1 3.4.4-.1 2-.1 1.5 2.5-.4 2.7-1.7 4.9-3.5 7-1.3 1.4-2.7 2.4-4.2 3.2-.8.4-1.8.8-2.8 1.1-7.3 2.4-14.9-.1-17.5-5.9-.1-.4-.4-.8-.4-1.4-1.1-3.8-.1-8.2 2.7-11.1.1-.1.4-.4.4-.7 0-.1-.1-.4-.3-.6-1-1.4-4.2-3.8-3.7-8.5.4-3.2 3.4-5.6 6.1-5.5h.7c1.1.1 2.3.1 3.2.3 1.7.1 3.1-.1 4.8-1.5.6-.4 1.1-.8 1.8-1.1.7-.1 1.4 0 1.8.3 1.4.8 1.5 3.1 1.7 4.8 0 1 .1 3.2.1 3.8.1 1.4.4 1.7 1.3 2 .4.1.8.3 1.4.4 1.8.4 3 1.1 3.5 1.7.4.4.6.8.7 1.3.1 1.5-1.3 3.5-5.1 5.2-6.5 3-13 2-13.8 2-2.8-.4-4.4 3.2-2.7 5.8 3.1 4.6 16.9 2.8 21-3 .1-.1 0-.1-.1-.1-5.8 3.9-13.4 5.2-17.7 3.5-.7-.3-2-.8-2.3-2.4 6.1 1.8 9.7.1 9.7.1s.4-.1.1-.1zm-21-26.6c2.4-2.7 5.1-5.1 7.7-6.3h.1v.1c-.1.4-.6 1.1-.7 1.7 0 .1 0 .1.1.1 1.5-1.1 4.4-2.3 6.8-2.4.1 0 .1 0 .1.1v.1c-.4.3-.8.7-1.1 1.1v.1h.1c1.7 0 4.1.6 5.6 1.4.1.1 0 .3-.1.1-9.6-2.3-16.9 2.5-18.6 3.7.2.1.2.1 0 .2z" />
  </svg>
);
export default SvgMailchimp;
