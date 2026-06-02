# Hello World - Next.js with Vanilla CSS

A simple and elegant "Hello World" website built with **Next.js 14** (App Router) and **vanilla CSS** - no Tailwind, no CSS-in-JS libraries, just pure modern web development.

## 🎯 Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Vanilla CSS with CSS variables
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations (fade-in, slide effects)
- ✅ Clean, well-commented code
- ✅ ESLint configuration
- ✅ No external UI frameworks

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css          # Global CSS styles with variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage (main content)
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
├── .eslintrc.json          # ESLint rules
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd Hello-World
   git checkout nextjs-hello-world
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Check code quality:
```bash
npm run lint
```

## 📝 File Descriptions

### `package.json`
Contains all project dependencies and scripts:
- **next**: Next.js framework
- **react**: React library
- **react-dom**: React DOM rendering
- **typescript**: TypeScript support
- **@types/** : Type definitions

### `tsconfig.json`
TypeScript configuration with:
- Strict type checking enabled
- Path aliases configured (@/*)
- Modern ES2020 target
- JSX support

### `next.config.js`
Next.js configuration with React Strict Mode enabled for development.

### `.eslintrc.json`
ESLint configuration extending Next.js core web vitals rules.

### `app/layout.tsx`
Root layout component that:
- Sets up HTML and body tags
- Imports global CSS styles
- Defines metadata (title, description, keywords)
- Wraps all pages with common layout

### `app/page.tsx`
Main homepage component featuring:
- Centered "Hello, World!" heading
- Descriptive paragraph
- Feature highlights
- Uses CSS classes for styling

### `app/globals.css`
Global CSS file containing:
- **CSS Variables**: Colors, fonts, sizes, animations timing
- **Base Styles**: Reset, typography, layouts
- **Animations**: Fade-in, slide-down, slide-up effects
- **Responsive Design**: Media queries for mobile, tablet, desktop
- **Flexbox Layout**: Centering content both horizontally and vertically
- **Gradient Background**: Beautiful purple gradient

## 🎨 Styling Details

### CSS Variables
The application uses CSS custom properties for easy customization:
- Colors: Primary, text, backgrounds
- Fonts: Font family, sizes (base, large, xl)
- Animations: Duration and timing functions

### Responsive Breakpoints
- **Desktop**: Default styling
- **Tablet** (768px and below): Adjusted font sizes
- **Mobile** (640px and below): Further optimization
- **Small Mobile** (480px and below): Minimum sizing

### Animations
- **fadeIn**: 0.8s fade-in on page load
- **slideDown**: 0.6s slide-down for heading
- **slideUp**: 0.6s slide-up for description (delayed 0.2s)

## 🔧 Customization

### Change Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --color-primary: #0070f3;
  --color-text: #1a1a1a;
  /* ... */
}
```

### Modify Content
Edit `app/page.tsx` to change the heading, description, and content.

### Adjust Animations
Modify keyframes in `app/globals.css`:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Deploy to Other Platforms
```bash
npm run build
npm start
```

Then host the `.next` directory or use containerization.

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve this project. Pull requests are welcome!

---

**Made with ❤️ using Next.js and vanilla CSS**
