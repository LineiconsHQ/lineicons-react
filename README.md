# Lineicons React — Essential UI Icons for React

Lightweight React components for [Lineicons](https://lineicons.com).
Easily add scalable SVG icons to your React projects with simple props for size, color, and stroke.

---

## Installation

```bash
npm install @lineiconshq/react-lineicons @lineiconshq/free-icons
```

---

## Usage

```tsx
import React from "react";
import { LineIcons } from "@lineiconshq/react-lineicons";
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

export default App;
```

---

## API

### `<LineIcons />`

```tsx
interface LineIconsProps extends React.SVGProps<SVGSVGElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}
```

| Prop          | Type                                           | Default        | Description                               |
| ------------- | ---------------------------------------------- | -------------- | ----------------------------------------- |
| `icon`        | `React.ComponentType<SVGProps<SVGSVGElement>>` | — *(required)* | The icon component to render.             |
| `size`        | `number \| string`                             | `24`           | Icon size in pixels or any CSS size unit. |
| `color`       | `string`                                       | `currentColor` | Icon color.                               |
| `strokeWidth` | `number`                                       | `1.5`          | Stroke width for outlined icons.          |
| `className`   | `string`                                       | —              | Optional CSS class.                       |

All other valid SVG props are also supported.

---

## TypeScript Support

Fully typed — includes definitions for the `LineIcon` component and all icon exports.

---

## License

* **Free Icons:** [MIT License](https://opensource.org/licenses/MIT)

---

## Links

* [📖 Documentation](https://lineicons.com/docs)
* [💬 Support](https://lineicons.com/support)
* [🎨 Figma Plugin](https://www.figma.com/community/plugin/1217738304122072948/Lineicons)
* [📁 Figma Source](https://www.figma.com/community/file/1198194066179400874)

---

Would you like me to make this **even shorter** (just install + usage) for a minimal NPM readme, or keep this **feature-complete** for GitHub?
