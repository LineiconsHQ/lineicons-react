import React from 'react';

export interface LineIconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    className?: string;
  }>;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const LineIcon: React.FC<LineIconProps> = ({
  icon: IconComponent,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  ...props
}) => {
  // Create props object conditionally
  const iconProps: any = {
    size,
    color,
    className,
    ...props
  };

  // Only add strokeWidth if it's not the default value (1.5)
  // This prevents passing strokeWidth to icons that don't support it
  if (strokeWidth !== 1.5) {
    iconProps.strokeWidth = strokeWidth;
  }

  return (
    <IconComponent {...iconProps} />
  );
};

export default LineIcon;

