import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAppleMusicAlt = ({
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
      d="M10.374 14.349v-3.254h-.021l-1.31 3.254h-.5l-1.311-3.254H7.21v3.254h-.614V9.928h.78l1.405 3.523h.024l1.402-3.523h.783v4.421h-.617Zm4.012 0h-.623v-.545h-.015c-.175.386-.497.603-.981.603-.69 0-1.111-.456-1.111-1.195v-2.086h.65v1.958c0 .49.229.753.677.753.47 0 .753-.33.753-.833v-1.878h.65v3.223Zm1.781-3.281c.738 0 1.216.416 1.238 1.01h-.611c-.037-.312-.262-.508-.627-.508-.352 0-.587.175-.587.432 0 .202.145.34.488.42l.515.12c.647.152.894.41.894.875 0 .589-.54.993-1.285.993-.792 0-1.268-.395-1.328-1.008h.644c.06.337.286.503.684.503.39 0 .632-.166.632-.43 0-.208-.118-.33-.464-.41l-.515-.122c-.602-.141-.9-.435-.9-.904 0-.576.494-.971 1.222-.971Zm1.76-.794a.375.375 0 1 1 .75 0c0 .208-.165.38-.373.38a.38.38 0 0 1-.376-.38Zm.052.852h.65v3.223h-.65v-3.223Zm3.395 1.109c-.066-.343-.32-.616-.744-.616-.502 0-.833.426-.833 1.118 0 .708.334 1.119.84 1.119.4 0 .662-.224.737-.598H22c-.07.686-.608 1.152-1.37 1.152-.905 0-1.495-.631-1.495-1.673 0-1.023.59-1.67 1.49-1.67.815 0 1.312.534 1.369 1.168h-.62ZM4.608 10.359c-.168.201-.435.36-.702.337-.035-.272.099-.561.25-.738.168-.208.458-.355.696-.367.029.284-.081.561-.244.769Zm.24.39c.151.012.585.06.863.477-.023.018-.515.307-.51.914.007.725.626.966.631.973-.005.017-.098.341-.323.677-.197.295-.4.584-.724.59-.312.005-.417-.189-.775-.189-.359 0-.475.183-.77.194-.312.012-.55-.312-.746-.607-.405-.595-.712-1.68-.295-2.41.202-.365.573-.595.972-.601.307-.006.59.206.775.206.186 0 .515-.247.903-.224Z"
    />
  </svg>
);
export default SvgAppleMusicAlt;
