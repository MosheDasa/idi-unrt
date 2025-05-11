# UNRT Sandbox

A development environment for testing and showcasing UNRT components.

## Overview

The sandbox provides a development environment where you can:

- Test components in isolation
- See component variations
- Develop new components
- Debug styling and behavior

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will:

1. Start the development server at http://localhost:3000
2. Enable live reload for instant feedback
3. Open your default browser automatically

### Building

```bash
npm run build
```

This will create a production build in the `dist` directory.

## Project Structure

```
unrt-sandbox/
├── src/
│   ├── components/     # Example component usage
│   ├── index.html     # Main HTML template
│   └── index.tsx      # Application entry point
├── dist/              # Build output
├── rollup.config.js   # Rollup configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project metadata and dependencies
```

## Development Workflow

1. Make changes to components in the `unrt` library
2. See changes reflected immediately in the sandbox
3. Test different component variations
4. Debug styling and behavior

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run serve` - Serve production build

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test in the sandbox environment
4. Submit a pull request

## License

[Add your license here]
