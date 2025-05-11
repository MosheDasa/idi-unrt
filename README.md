# UNRT - React Component Library

UNRT is a modern React component library built with TypeScript and Rollup.

## Project Structure

The project consists of two main parts:

1. `unrt/` - The main component library
2. `unrt-sandbox/` - A development environment for testing components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd idi-unrt
```

2. Install dependencies for both projects:

```bash
# Install library dependencies
cd unrt
npm install

# Install sandbox dependencies
cd ../unrt-sandbox
npm install
```

### Development

#### Library Development

```bash
cd unrt
npm run dev
```

This will start the library in watch mode, rebuilding on file changes.

#### Sandbox Development

```bash
cd unrt-sandbox
npm run dev
```

This will start the development server at http://localhost:3000

### Building

#### Library Build

```bash
cd unrt
npm run build
```

This will create the following files in the `dist` directory:

- `index.js` - UMD bundle
- `index.esm.js` - ES Module bundle
- `index.d.ts` - TypeScript declarations
- `styles.css` - Extracted CSS

#### Sandbox Build

```bash
cd unrt-sandbox
npm run build
```

## Project Configuration

### Library Configuration

The library uses:

- Rollup for bundling
- TypeScript for type safety
- PostCSS for CSS processing
- Jest for testing (coming soon)

### Sandbox Configuration

The sandbox uses:

- Rollup for bundling
- TypeScript for type safety
- PostCSS for CSS processing
- Development server with live reload

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test in the sandbox environment
4. Submit a pull request

## License

[Add your license here]
