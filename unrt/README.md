# unrt

A React component library built with TypeScript.

## Installation

```bash
npm install unrt
```

## Usage

```tsx
import { UnrtButton } from "unrt";

function App() {
  return (
    <UnrtButton
      label="Click me!"
      variant="primary"
      onClick={() => console.log("Button clicked!")}
    />
  );
}
```

## Components

### UnrtButton

A customizable button component.

#### Props

- `label` (string, required): The text to display on the button
- `onClick` (function, optional): Click handler function
- `variant` ('primary' | 'secondary', optional): Button style variant. Defaults to 'primary'

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the library: `npm run build`
4. For development with watch mode: `npm run dev`
