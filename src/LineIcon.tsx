import React from 'react';

export interface IconData {
  name: string;
  svg: string;
  viewBox: string;
  defaultFill?: string;
  defaultStroke?: string;
  hasFill: boolean;
  hasStroke: boolean;
  hasStrokeWidth: boolean;
}

export interface LineIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'icon'> {
  icon: IconData;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}


export const LineIcon: React.FC<LineIconProps> = ({
  icon,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  className,
  style,
  ...otherProps
}) => {
  // Process the SVG content to replace placeholders
  const processedSvgContent = React.useMemo(() => {
    let content = icon.svg;
    
    // Replace color placeholders
    if (icon.hasFill) {
      content = content.replace(/fill="{color}"/g, `fill="${color}"`);
    }
    if (icon.hasStroke) {
      content = content.replace(/stroke="{color}"/g, `stroke="${color}"`);
    }
    
    // Replace stroke width placeholders
    if (strokeWidth && icon.hasStrokeWidth) {
      content = content.replace(/stroke-width="{strokeWidth}"/g, `stroke-width="${strokeWidth}"`);
    }
    
    return content;
  }, [icon.svg, color, strokeWidth, icon.hasFill, icon.hasStroke, icon.hasStrokeWidth]);

  // Prepare SVG props
  const svgProps: React.SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: icon.viewBox,
    fill: icon.defaultFill || 'none',  // restore fill if present
    stroke: icon.defaultStroke || 'none',
    className,
    ...otherProps,
  };

  // Apply color as fallback if no placeholders were found
  if (icon.hasFill && !processedSvgContent.includes('fill=')) {
    svgProps.fill = color;
  } else if (icon.hasStroke && !processedSvgContent.includes('stroke=')) {
    svgProps.stroke = color;
  }

  // Apply stroke width as fallback
  if (strokeWidth && icon.hasStrokeWidth && !processedSvgContent.includes('stroke-width=')) {
    svgProps.strokeWidth = strokeWidth;
  }

  return (
    <svg {...svgProps} dangerouslySetInnerHTML={{ __html: processedSvgContent }} />
  );
};

export default LineIcon;