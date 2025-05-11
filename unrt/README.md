# UNRT Library

A modern React component library built with TypeScript and Rollup.

## Installation

```bash
npm install unrt
```

## Usage

```tsx
import { UnrtButton } from "unrt";
import "unrt/dist/styles.css";

function App() {
  return (
    <UnrtButton
      label="Click me"
      variant="primary"
      onClick={() => console.log("clicked")}
    />
  );
}
```

## Available Components

### UnrtButton

A customizable button component with multiple variants.

#### Props

| Prop     | Type                                  | Default   | Description          |
| -------- | ------------------------------------- | --------- | -------------------- |
| label    | string                                | required  | Button text          |
| variant  | 'default' \| 'primary' \| 'secondary' | 'default' | Button style variant |
| onClick  | () => void                            | undefined | Click handler        |
| disabled | boolean                               | false     | Disable the button   |

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

This will start the library in watch mode, rebuilding on file changes.

### Building

```bash
npm run build
```

This will create the following files in the `dist` directory:

- `index.js` - UMD bundle
- `index.esm.js` - ES Module bundle
- `index.d.ts` - TypeScript declarations
- `styles.css` - Extracted CSS

## Project Structure

```
unrt/
├── src/
│   ├── components/     # React components
│   ├── types/         # TypeScript type definitions
│   └── index.ts       # Main entry point
├── dist/              # Build output
├── rollup.config.js   # Rollup configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project metadata and dependencies
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test in the sandbox environment
4. Submit a pull request

## License

[Add your license here]
