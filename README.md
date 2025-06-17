# Zētheon

A premium tech and gaming marketplace built with React, TypeScript, and TailwindCSS.

## Features

- Modern, responsive design
- Premium UI components
- Type-safe with TypeScript
- Tailwind CSS for styling
- Component-based architecture
- Real-time search and filtering
- Shopping cart functionality
- User authentication ready

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd zetheon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── common/        # Reusable components
  │   ├── layout/        # Layout components
  │   ├── products/      # Product-related components
  │   └── categories/    # Category-related components
  ├── data/             # Mock data
  ├── types/            # TypeScript types/interfaces
  ├── App.tsx          # Main application component
  └── index.css        # Global styles
```

## Built With

- React
- TypeScript
- Tailwind CSS
- Vite
- Heroicons

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Adding New Features

1. Create new components in the appropriate directory
2. Update types if needed
3. Add mock data in `data/mockData.ts`
4. Import and use components in `App.tsx`

## License

MIT
