import Link from 'next/link'
import { ArrowLeft, Code, Database, Zap, Shield, Globe, Palette } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: Code,
      title: 'TypeScript First',
      description: 'Built with TypeScript from the ground up for better developer experience and type safety.',
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Self-Hosted',
      description: 'Deploy anywhere you want. Keep your data secure and maintain full control over your infrastructure.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'API First',
      description: 'REST and GraphQL APIs out of the box. Build any frontend or integrate with any service.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Built-in authentication, authorization, and security best practices to keep your data safe.',
      color: 'red'
    },
    {
      icon: Globe,
      title: 'Multi-Platform',
      description: 'Use with React, Next.js, Vue, or any frontend framework. Deploy to any platform.',
      color: 'purple'
    },
    {
      icon: Palette,
      title: 'Customizable',
      description: 'Extend and customize everything. Build exactly what you need without limitations.',
      color: 'pink'
    }
  ]

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600'
  }

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
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
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
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Powerful Features for Modern Development
          </h1>
          
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Payload CMS provides everything you need to build exceptional content experiences 
            with the flexibility and power that developers demand.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="http://localhost:3000" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Try It Now
            </Link>
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