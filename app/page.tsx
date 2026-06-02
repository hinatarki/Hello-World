/**
 * Home Page Component (app/page.tsx)
 * This is the main landing page of the application using Next.js App Router
 * 
 * The page displays:
 * - A large centered heading "Hello, World!"
 * - A descriptive paragraph below the heading
 * - Smooth animations and responsive design
 * - Responsive layout that works on mobile and desktop
 */

export default function Home() {
  return (
    <main className="container">
      {/* Main heading with large, bold text */}
      <h1>Hello, World! 👋</h1>

      {/* Description paragraph with introduction text */}
      <p className="description">
        Welcome to a simple Hello World website built with Next.js 14 App Router
        and vanilla CSS. This project demonstrates clean, minimal web development
        without external UI libraries or CSS-in-JS frameworks.
      </p>

      {/* Additional information section */}
      <p className="description" style={{ fontSize: '14px', opacity: 0.8 }}>
        ✨ Features: Responsive design, CSS animations, and fast performance
      </p>
    </main>
  )
}
