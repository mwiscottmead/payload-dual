import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Payload CMS</div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link 
              href="http://localhost:3000" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to App
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Payload CMS
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Payload CMS is a modern, self-hosted content management system built for developers. 
              We believe that content management should be powerful, flexible, and developer-friendly.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-8">
              To provide developers with the tools they need to build exceptional content experiences 
              without compromising on performance, security, or flexibility.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
              Why We Built This
            </h2>
            <p className="text-gray-600 mb-8">
              Traditional CMS platforms often force developers into rigid frameworks that limit creativity 
              and performance. We wanted to create something different - a CMS that puts developers first, 
              with full TypeScript support, modern APIs, and the flexibility to build anything.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
              What Makes Us Different
            </h2>
            <ul className="text-gray-600 space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>TypeScript First:</strong> Built with TypeScript from day one for better developer experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Self-Hosted:</strong> Keep your data secure and maintain full control</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>API First:</strong> REST and GraphQL APIs for maximum flexibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span><strong>Developer Friendly:</strong> Built by developers, for developers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Payload CMS. Built with ❤️ for developers.</p>
        </div>
      </footer>
    </div>
  )
} 