import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNissan = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M62.831 22.345h-7.572c-.996 0-1.866-.833-2.319-1.54-4.021-6.521-11.702-10.597-20.071-10.597-8.37 0-16.485 4.275-20.416 11.159l-.036.072c-.072.272-.344.924-1.322.924H2.87c-1.105 0-2.011.906-2.011 2.029v13.55c0 1.123.906 2.01 2.01 2.01h6.848c.525 0 .996.308 1.413.906.09.145.254.344.435.58.308.416.706.942.978 1.358 4.166 6.776 11.974 10.996 20.397 10.996 8.424 0 15.489-3.532 19.673-9.474.109-.163.254-.38.435-.616.543-.76 1.268-1.793 1.848-2.953.362-.652.616-.778 1.123-.778h6.811a2.022 2.022 0 0 0 2.029-2.011V24.41a2.037 2.037 0 0 0-2.029-2.029m-51.302.562v-.037c.725-.127 1.25-.58 1.432-1.268 3.84-6.684 11.448-10.832 19.89-10.832 8.441 0 15.67 3.949 19.582 10.325.562.888 1.594 1.812 2.808 1.812h7.572c.326 0 .598.108.833.271l-1.884 1.757a1.235 1.235 0 0 0-.634-.18H4.538c-.236 0-.472.072-.653.198l-1.54-1.938c.163-.054.326-.09.508-.09h8.64l.037-.018ZM17 47.217c-.58-.435-1.286-1.178-1.974-2.03-.508-.615-.997-1.285-1.468-1.92-.489-.67-.923-1.304-1.268-1.83-.398-.633-.688-1.086-.742-1.213-.254-.489-.49-1.087-.073-1.648.399-.562 1.45-1.196 2.083-1.431l3.968 2.318-.182.308-3.387-1.884C16.584 45.37 24.1 50.75 32.94 50.75c8.84 0 15.615-5.29 18.35-12.554l-2.97 1.558-.09-.145s-.037-.09-.073-.145v-.018l4.094-2.355 2.608 2.083c-.833 2.12-3.17 5.743-6.358 5.362-4.203 4.656-9.057 6.902-15.56 6.902-6.504 0-12.246-2.608-16.177-6.738l-1.939-.634c.634 1.286 1.522 2.427 2.156 3.115m30.669-7.083c-2.21 6.268-9.112 8.641-14.818 8.75-5.706-.109-12.59-2.464-14.818-8.75-.073-.18-.055-.29-.018-.326 0 0 .054-.018.072-.018h29.546s.072 0 .072.018c.036.036.036.145-.036.326M61.762 25.95v9.22a.63.63 0 0 1-.634.634H4.538a.63.63 0 0 1-.635-.634v-9.22c0-.345.29-.634.634-.634h56.591c.344 0 .634.29.634.634Z"
    />
    <path
      fill="#000"
      d="M18.214 24.32h29.908c1.05 0 .616-.888.362-1.36 1.214.2 2.137.725 2.916 1.395-2.626-8.043-9.89-11.92-18.44-11.92s-15.815 4.71-18.423 12.138c.634-.49 1.884-1.196 2.807-1.359-.036.526.2 1.123.888 1.123m.073-1.612c2.536-6.576 8.26-8.804 14.582-8.804 6.322 0 13.151 2.138 15.253 8.804 0 0 .018.109.036.145 0-.018 0-.072-.036-.145.09.399.054.562-.399.562h-28.93c-.29 0-.67-.073-.488-.562M14.61 32.435l-2.41-6.033H8.577v7.953h2.21V28.05l2.554 6.304h3.496v-7.953H14.61v6.033Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M20.985 26.402v7.953h-2.427v-7.953h2.427Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="m41.456 26.402-2.844 7.953h2.282l.507-1.431h3.297l-.598-1.757h-2.083l1.033-2.99 2.174 6.178h2.282l-2.808-7.953h-3.242ZM27.017 29.464h-2.372v-1.286h4.474v-1.776h-4.565c-1.196 0-2.174.58-2.174 2.283 0 .797.127 2.572 2.681 2.572h2.41v1.286h-4.873v1.812h4.945c1.16 0 2.282-.942 2.282-2.464 0-1.521-.833-2.41-2.808-2.41M54.371 32.435l-2.41-6.033H48.34v7.953h2.21V28.05l2.554 6.304h3.514v-7.953h-2.246v6.033ZM35.405 29.464h-2.373v-1.286h4.474v-1.776h-4.565c-1.195 0-2.192.58-2.192 2.283 0 .797.145 2.572 2.682 2.572h2.427v1.286h-4.873v1.812h4.945c1.16 0 2.283-.942 2.283-2.464 0-1.521-.833-2.41-2.826-2.41"
    />
  </svg>
);
export default SvgNissan;