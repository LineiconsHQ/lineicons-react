# Lineicons React - Essential UI Icons for React

Create stunning designs with 26082+ Free and Premium Icons. Find the perfect style and category to match your project’s unique needs.

React Components for [Lineicons](https://lineicons.com)

### [Explore and Download All 26082+ Icons](https://lineicons.com/)

## Installation

### Free Icons

```bash
npm install @lineiconshq/react-lineicons @lineiconshq/free-icons
```

## Usage

### Basic Usage

After installing the package import icon and use anywhere for example

```tsx
import React from "react";
import { LineIcon } from "@lineiconshq/react-lineicons";
import {
  Home2Outlined,
  CloudBolt1Bulk,
  CloudBolt1Outlined,
  CloudBolt1Duotone,
  CloudBolt1Solid,
} from "@lineiconshq/free-icons";

function App() {
  return (
    <div>
      <LineIcon icon={Home2Outlined} size={24} color="blue" strokeWidth={1.5} />
      <LineIcon icon={CloudBolt1Bulk} size={40} color="orange" />
      <LineIcon icon={CloudBolt1Outlined} size={50} color="blue" />
      <LineIcon icon={CloudBolt1Duotone} size={30} color="green" />
      <LineIcon icon={CloudBolt1Solid} size={24} />
    </div>
  );
}
```

## API Reference

### LineIcon

Main component for rendering icons.

```tsx
interface LineIconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}
```

**Props:**

- `icon` - The icon component to render
- `size` - Size of the icon (default: 24)
- `color` - Color of the icon (default: 'currentColor')
- `strokeWidth` - Stroke width for stroke icons (default: 1.5)
- `className` - CSS class name
- All other SVG props are passed through

## TypeScript Support

Full TypeScript support is included with type definitions for all components and icons.

## License

- **Free Icons**: MIT License

## Support

- [Documentation](https://lineicons.com/docs)
- [Support](https://lineicons.com/support)

[![lineicons-site](https://content.lineicons.com/wp-content/uploads/2023/01/lineicons-4.png)](https://lineicons.com/)

### [Lineicons Figma Plugin](https://www.figma.com/community/plugin/1217738304122072948/Lineicons)

### [Lineicons - Figma Source](https://www.figma.com/community/file/1198194066179400874)
