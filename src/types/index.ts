// Auto-generated types for react
import React from 'react';

export interface IconSvgObject {
  name: string;
  jsx: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  tier: 'free' | 'pro';
  style: 'stroke' | 'solid' | 'duotone' | 'bulk';
}

export interface LineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

export type IconName = 'LineIcon';

export interface IconRegistry {
  LineIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export declare const iconRegistry: IconRegistry;
