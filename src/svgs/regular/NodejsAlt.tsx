import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNodejsAlt = ({
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
      d="M6.177 9.769a.231.231 0 0 1 .115.2l-.004 2.968c0 .041-.022.08-.057.1a.113.113 0 0 1-.116 0l-1.137-.652a.234.234 0 0 1-.116-.2v-1.387a.23.23 0 0 0-.116-.2l-.484-.279a.226.226 0 0 0-.231 0l-.485.28a.23.23 0 0 0-.115.2v1.386a.234.234 0 0 1-.116.2l-1.139.653a.11.11 0 0 1-.114 0 .114.114 0 0 1-.058-.1L2 9.97c0-.083.044-.16.116-.201L4.03 8.667a.228.228 0 0 1 .105-.03h.02a.224.224 0 0 1 .106.03L6.177 9.77Zm9.122 1.796a.058.058 0 0 0 .03-.05v-.76c0-.02-.012-.04-.03-.05l-.658-.38a.059.059 0 0 0-.058 0l-.657.38a.058.058 0 0 0-.029.05v.76c0 .02.011.04.03.05l.657.38c.018.01.04.01.058 0l.657-.38Zm.092-5.673a.116.116 0 0 1 .115-.001l1.14.636a.232.232 0 0 1 .119.202v5.512a.232.232 0 0 1-.116.2l-1.916 1.107a.233.233 0 0 1-.231 0l-1.916-1.106a.232.232 0 0 1-.116-.2V10.03a.23.23 0 0 1 .116-.2l1.916-1.106a.231.231 0 0 1 .231 0l.48.277a.081.081 0 0 0 .121-.07V5.99c0-.04.022-.078.057-.1ZM22 10.536a.231.231 0 0 1-.115.2l-1.149.667a.116.116 0 0 1-.116 0 .117.117 0 0 1-.058-.1v-.545a.115.115 0 0 0-.057-.1l-.6-.346a.114.114 0 0 0-.116 0l-.6.346a.115.115 0 0 0-.057.1v.694c0 .04.022.08.058.1l1.927 1.105a.116.116 0 0 1 0 .202l-1.152.64a.23.23 0 0 1-.227-.002l-1.903-1.085a.232.232 0 0 1-.116-.2V10a.23.23 0 0 1 .115-.2l1.916-1.105a.231.231 0 0 1 .231 0L21.885 9.8A.232.232 0 0 1 22 10v.536Zm-10.115 7.589a.38.38 0 0 1-.19-.05l-.602-.358c-.09-.05-.046-.068-.017-.078a1.22 1.22 0 0 0 .273-.124c.014-.008.031-.005.045.003l.463.275c.017.009.04.009.056 0l1.806-1.043a.057.057 0 0 0 .028-.049v-2.084c0-.02-.01-.04-.028-.05l-1.805-1.041a.055.055 0 0 0-.056 0l-1.805 1.041a.058.058 0 0 0-.029.05V16.7c0 .02.011.039.028.048l.495.286c.268.134.432-.024.432-.183v-2.057c0-.03.024-.052.053-.052h.229c.028 0 .052.022.052.052v2.058c0 .358-.196.563-.535.563-.105 0-.187 0-.417-.113l-.473-.273a.382.382 0 0 1-.19-.33v-2.083a.38.38 0 0 1 .19-.33l1.808-1.043a.396.396 0 0 1 .38 0l1.805 1.044c.117.067.19.193.19.329v2.084a.382.382 0 0 1-.19.33l-1.806 1.042a.38.38 0 0 1-.19.051Zm.558-1.436c-.79 0-.956-.363-.956-.667 0-.03.024-.052.053-.052h.233c.026 0 .047.018.051.044.036.238.14.358.618.358.381 0 .543-.087.543-.288 0-.117-.046-.203-.638-.26-.494-.05-.8-.159-.8-.554 0-.364.308-.582.823-.582.578 0 .864.201.9.632a.052.052 0 0 1-.052.057h-.235a.052.052 0 0 1-.05-.04c-.057-.25-.193-.33-.564-.33-.416 0-.464.144-.464.253 0 .132.057.17.617.244.556.074.82.178.82.568 0 .393-.33.619-.901.619l.002-.002Zm2.197-2.209h.061c.05 0 .06-.034.06-.055 0-.053-.037-.053-.058-.053h-.062v.108Zm-.073-.17h.134c.046 0 .137 0 .137.103 0 .071-.046.086-.074.095.053.004.057.038.064.085v.004l.001.004c.004.031.01.082.02.1h-.083l-.001-.013-.014-.11c-.005-.023-.013-.034-.04-.034h-.069v.157h-.075v-.391Zm-.162.194Zm.64 0a.349.349 0 1 1-.348-.348c.188 0 .348.152.348.349Zm4.792-3.872a.044.044 0 0 1 .045 0l.367.212a.045.045 0 0 1 .023.039v.424c0 .016-.009.03-.023.038l-.367.213a.044.044 0 0 1-.045 0l-.367-.213a.044.044 0 0 1-.022-.038v-.424c0-.016.008-.03.022-.039l.367-.212ZM9.545 8.756a.235.235 0 0 0-.237 0L7.34 9.891a.235.235 0 0 0-.118.206v2.273c0 .084.046.163.12.205l1.966 1.136a.235.235 0 0 0 .237 0l1.966-1.136a.238.238 0 0 0 .119-.205v-2.273a.238.238 0 0 0-.119-.206L9.545 8.756Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNodejsAlt;
