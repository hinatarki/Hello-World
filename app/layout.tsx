import type { Metadata } from 'next'
import './globals.css'

/**
 * Metadata configuration for the entire application
 * This sets the page title, description, and other SEO-related information
 */
export const metadata: Metadata = {
  title: 'Hello World | Next.js App',
  description: 'A simple Hello World website built with Next.js and vanilla CSS',
  keywords: ['Next.js', 'React', 'Hello World', 'CSS'],
}

/**
 * RootLayout Component
 * This is the root layout component that wraps all pages in the application.
 * It's the top-level layout and sets the HTML and body tags.
 * 
 * @param children - The child components/pages to be rendered
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
