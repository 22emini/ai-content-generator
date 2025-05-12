import { ArrowRight, Bot, FileText, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex min-h-screen  flex-col">
      {/* Header */}
      <header className="sticky top-0 px-3 z-50 w-full border-b bg-white">
        <div className="container  flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
          <Link href="/" className="">
            <Image src="/logo.svg" width="130" height="40" alt="logo" className="w-32 md:w-36 lg:w-40" />
          </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
           <SignedIn>
            
                <Link
                  className="text-sm mr-3 font-medium bg-purple-600 text-white py-3 rounded-lg px-5 hover:bg-primary/90 transition-colors"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              
            </SignedIn>
            <SignedOut>
             
                <SignInButton className="bg-purple-600 px-4 py-2 text-white rounded-lg hover:bg-purple-700"></SignInButton>
          
            </SignedOut>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-90" />
          <div className="container relative py-20 md:py-32 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Generate Amazing Content with AI</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Create high-quality blog posts, articles, and social media content in seconds with our advanced AI
                content generator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <SignUpButton className="text-sm font-medium  bg-white text-purple-900 hover:bg-gray-100  py-3 rounded-lg px-5 transition-colors shadow-lg">Get Started</SignUpButton>
            
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Content Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI-powered platform helps you create engaging content for any purpose
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Blog Posts & Articles</h3>
                <p className="text-gray-600">
                  Generate SEO-optimized blog posts and articles on any topic with just a few clicks.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Social Media Content</h3>
                <p className="text-gray-600">
                  Create engaging social media posts tailored for different platforms and audiences.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Content</h3>
                <p className="text-gray-600">
                  Generate product descriptions, email newsletters, and more with our versatile AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-3 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Generate high-quality content in three simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Choose Content Type</h3>
                <p className="text-gray-600">
                  Select the type of content you want to generate from our wide range of options.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Provide Basic Details</h3>
                <p className="text-gray-600">
                  Enter your topic, keywords, and preferences to guide the AI generation process.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Generate & Edit</h3>
                <p className="text-gray-600">
                  Review the generated content, make edits if needed, and export in your preferred format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that works best for your content needs</p>
            </div>

            <div className=" flex justify-center items-center  max-w-5xl mx-auto">
             

              <div className="border-2 border-purple-600 rounded-lg  px-36 py-12 shadow-lg relative">
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <p className="text-gray-600 mb-6">For growing businesses and social Media Presence</p>
                <div className="text-3xl font-bold mb-6">
                  FREE<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">50,000 words per month</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">All content types</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Advanced editing tools</span>
                  </li>
                </ul>
             <SignUpButton className="w-full bg-purple-600 text-white   py-3 rounded-lg border border-purple-600 hover:bg-white  hover:text-purple-600">Get Started</SignUpButton>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Content Creation?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of content creators, marketers, and businesses who are saving time and creating better
              content with ContentAI.
            </p>
            <SignUpButton size="lg" className="bg-purple-600 text-white   py-3 rounded-lg border px-3 border-purple-600 hover:bg-white  hover:text-purple-600">
              Start Your Free Trial
            </SignUpButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 ">
     
        
          <div className="border-t border-gray-800  pt-4 text-sm text-center">
            <p>© {new Date().getFullYear()} ContentAI. All rights reserved.</p>
          </div>
       
      </footer>
    </div>
  )
}
