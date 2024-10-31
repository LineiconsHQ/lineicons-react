import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKubernetes = ({
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
      d="m12.003 13.121.605-.289.138-.646-.413-.523h-.674l-.413.523.152.646.605.29ZM16.295 12.79c.043-.464.01-.934-.096-1.389a4.409 4.409 0 0 0-.523-1.307l-1.664 1.5a.327.327 0 0 0-.083.151.373.373 0 0 0 .261.44l2.105.606ZM13.214 10.548l1.802-1.279a4.176 4.176 0 0 0-2.476-1.197l.123 2.243c.014.054.028.11.07.15.123.152.33.18.48.083ZM11.246 8.1l-.22.04a4.197 4.197 0 0 0-2.05 1.129l1.83 1.307c.041.027.11.041.165.041a.377.377 0 0 0 .372-.358l.123-2.2-.22.04ZM9.953 11.553l-1.637-1.459a4.429 4.429 0 0 0-.619 2.697l2.132-.62a.274.274 0 0 0 .165-.11.366.366 0 0 0-.04-.508ZM10.132 13.451l-2.187.372c.33.907.949 1.664 1.72 2.16l.839-2.023a.394.394 0 0 0 .013-.22.371.371 0 0 0-.385-.289ZM12.003 16.67c.33 0 .647-.04.963-.11.061-.018.122-.034.182-.049.075-.019.148-.038.217-.06l-1.06-1.913a.585.585 0 0 0-.164-.151c-.152-.083-.33-.028-.44.096l-1.087 1.967c.44.138.908.22 1.389.22ZM14.328 15.982a4.368 4.368 0 0 0 1.32-1.334c.18-.261.317-.537.4-.84l-2.201-.37a.44.44 0 0 0-.193.04.37.37 0 0 0-.193.427l.867 2.078Z"
    />
    <path
      fill="#323544"
      d="M12.003 2.294c.193 0 .385.041.564.124l6.961 3.315c.358.18.633.51.716.895l1.72 7.47c.096.399 0 .811-.262 1.128l-4.815 5.984a1.311 1.311 0 0 1-1.032.496H8.137a1.31 1.31 0 0 1-1.032-.495L2.29 15.226a1.377 1.377 0 0 1-.261-1.128l1.72-7.47c.096-.4.357-.73.715-.895l6.961-3.329c.18-.069.385-.11.578-.11Zm6.961 11.212c-.013 0-.027 0-.027-.014a.17.17 0 0 1-.041-.006 2.824 2.824 0 0 1-.077-.012 1.577 1.577 0 0 0-.226-.023c-.041 0-.083 0-.138-.014h-.013c-.29-.027-.523-.054-.743-.123a.268.268 0 0 1-.152-.152c0-.007-.003-.01-.007-.013-.003-.004-.006-.007-.006-.014l-.18-.055a5.441 5.441 0 0 0-.096-1.94c-.15-.641-.41-1.25-.77-1.802l.138-.124v-.028c0-.068.013-.137.068-.206.158-.145.354-.264.588-.407l.032-.02a.547.547 0 0 1 .061-.034c.02-.01.042-.02.062-.034.083-.041.152-.083.234-.138l.023-.018c.014-.01.03-.02.046-.037.005-.005.01-.008.015-.011.007-.005.012-.008.012-.016.193-.165.234-.44.097-.62a.391.391 0 0 0-.317-.15.511.511 0 0 0-.302.11l-.028.027c-.014.007-.024.017-.034.027-.01.01-.02.021-.035.028v.001a2.271 2.271 0 0 0-.205.22.351.351 0 0 1-.07.068 3.496 3.496 0 0 1-.55.495.222.222 0 0 1-.124.041c-.027 0-.055 0-.082-.014h-.028l-.165.11c-.179-.192-.371-.357-.564-.522a5.494 5.494 0 0 0-2.875-1.142l-.014-.179-.028-.027-.015-.016c-.039-.037-.083-.079-.095-.163-.013-.205.01-.434.036-.687l.005-.056v-.014c0-.041.014-.096.028-.138.014-.082.028-.165.041-.26v-.125c0-.247-.192-.454-.426-.454-.11 0-.22.055-.303.138a.436.436 0 0 0-.124.316v.11c0 .097.014.18.042.262.007.022.01.044.014.069.003.02.007.043.013.068v.014l.018.166c.024.21.045.402.023.577-.012.084-.055.126-.094.163l-.016.016-.027.027-.014.18a5.304 5.304 0 0 0-3.467 1.65l-.137-.096h-.028c-.014 0-.027.003-.041.007a.173.173 0 0 1-.041.006.222.222 0 0 1-.124-.04 3.647 3.647 0 0 1-.577-.54c-.02-.022-.042-.047-.07-.066a2.275 2.275 0 0 0-.179-.193.185.185 0 0 0-.023-.018c-.013-.01-.03-.02-.045-.037l-.015-.011c-.008-.004-.013-.008-.013-.016a.48.48 0 0 0-.303-.11.391.391 0 0 0-.316.151c-.138.179-.096.454.096.62.007 0 .01.003.014.006.003.003.007.007.014.007.013.007.024.017.034.027.01.01.02.021.034.028.083.055.152.096.234.138a.555.555 0 0 1 .124.068l.03.019c.235.143.431.263.59.408.068.069.068.137.068.206v.028l.138.123a.83.83 0 0 1-.025.034c-.018.025-.034.048-.044.077a5.358 5.358 0 0 0-.77 3.632l-.18.055c0 .006-.003.01-.006.013-.004.004-.007.007-.007.014a.32.32 0 0 1-.152.151c-.206.07-.453.097-.742.124h-.014c-.041 0-.096 0-.138.014-.072 0-.144.01-.225.022l-.036.005c-.014 0-.028.004-.041.007a.17.17 0 0 1-.042.007c-.013 0-.027 0-.041.014a.451.451 0 0 0-.358.509c.042.193.22.316.44.316.042 0 .07 0 .11-.013.042 0 .07-.028.11-.028a1.32 1.32 0 0 0 .248-.096.488.488 0 0 0 .062-.027c.02-.01.041-.021.062-.028h.014c.261-.097.495-.179.715-.207h.028c.077 0 .13.036.17.063l.009.006c.007 0 .01.004.013.007.004.004.007.007.014.007l.193-.027a5.441 5.441 0 0 0 1.802 2.586c.193.151.385.275.592.399l-.083.179c0 .007.004.01.007.014.003.003.007.006.007.013.027.055.055.124.027.22a3.87 3.87 0 0 1-.357.647v.014c-.014.02-.028.038-.042.055a1.953 1.953 0 0 0-.152.214l-.04.06a.298.298 0 0 0-.042.07c0 .013-.013.027-.013.027-.11.234-.028.495.179.592.055.027.11.041.165.041.165 0 .33-.11.412-.261 0-.014.014-.028.014-.028.014-.027.028-.055.041-.069.028-.064.043-.116.059-.168l.024-.08.041-.123.033-.093c.08-.233.147-.425.256-.595.044-.065.096-.088.143-.108a.617.617 0 0 0 .036-.016c.014 0 .014 0 .027-.014l.097-.178a5.375 5.375 0 0 0 1.926.357c.399 0 .812-.041 1.197-.137.242-.055.481-.123.715-.207l.083.152c.014 0 .014 0 .027.013a.255.255 0 0 1 .179.124c.101.178.18.39.266.627l.023.061v.014l.041.124c.01.027.017.055.025.082.015.055.03.11.058.165a.304.304 0 0 0 .02.035c.007.01.014.02.021.034 0 .014.014.028.014.028a.467.467 0 0 0 .412.261c.056 0 .11-.014.166-.041a.41.41 0 0 0 .206-.248.498.498 0 0 0-.027-.344c0-.007-.004-.01-.007-.014-.004-.003-.007-.007-.007-.013-.014-.028-.028-.055-.042-.07a1.243 1.243 0 0 0-.15-.22l-.042-.054a.747.747 0 0 1-.041-.055v-.014l-.025-.039c-.142-.218-.268-.413-.333-.608-.022-.076-.01-.126.004-.178a.826.826 0 0 0 .01-.042c0-.007.003-.01.006-.014.004-.003.007-.006.007-.013l-.068-.165a5.332 5.332 0 0 0 1.816-1.775 5.33 5.33 0 0 0 .577-1.238l.165.027c.007 0 .01-.003.014-.007.004-.003.007-.006.014-.006a.563.563 0 0 0 .04-.023c.038-.023.077-.046.139-.046h.027c.22.027.454.11.716.206h.013c.021.007.042.017.062.027.02.01.042.021.062.028.083.041.152.069.248.096a.17.17 0 0 1 .041.007c.014.004.028.007.041.007.014 0 .028 0 .042.014a.463.463 0 0 0 .55-.303c0-.165-.151-.385-.399-.454h-.014Z"
    />
  </svg>
);
export default SvgKubernetes;
