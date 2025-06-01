import React from "react"
import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Phone, ShoppingBag, Gift, CreditCard, Headphones } from "lucide-react"
import HeroSlideshow from "@modules/home/components/hero-slideshow"

export const metadata: Metadata = {
  title: "AndMore Tech | Technology for Business & Beyond",
  description:
    "Discover cutting-edge technology solutions at AndMore Tech. Shop the latest devices, software, and accessories for your business needs.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      {/* Split-Screen Welcome Panel */}
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side - Brand Statement */}
        <div className="w-full md:w-1/2 bg-[#8B5CF6] flex items-center justify-center p-8 md:p-16">
          <div className="max-w-lg">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              TECHNOLOGY FOR BUSINESS & BEYOND
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg">
              Innovative solutions that elevate your business performance and transform the way you work.
            </p>
            <LocalizedClientLink href="/store">
              <Button variant="secondary" className="px-8 py-4 bg-[#F59E0B] text-white hover:bg-[#D97706] font-medium text-base">
                Shop Now
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
        
        {/* Right Side - Image Slideshow */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-transparent z-10"></div>
          <HeroSlideshow />
        </div>
      </div>
      
      {/* Benefits Bar */}
      <div className="bg-white py-8 border-y border-[#E5E7EB]">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <ShoppingBag className="text-[#8B5CF6] w-6 h-6 mr-3" />
              <span className="text-gray-800">Free shipping over $150</span>
            </div>
            <div className="flex items-center">
              <Gift className="text-[#8B5CF6] w-6 h-6 mr-3" />
              <span className="text-gray-800">30-day returns</span>
            </div>
            <div className="flex items-center">
              <Headphones className="text-[#8B5CF6] w-6 h-6 mr-3" />
              <span className="text-gray-800">Expert customer support</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="text-[#8B5CF6] w-6 h-6 mr-3" />
              <span className="text-gray-800">Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Showcase */}
      <div className="content-container py-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            image="https://images.unsplash.com/photo-1551355738-a9e12c9a6709?q=80&w=3264&auto=format&fit=crop"
            title="Phones"
            link="/categories/phones"
          />
          <CategoryCard
            image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=3024&auto=format&fit=crop"
            title="Software"
            link="/categories/software"
          />
          <CategoryCard
            image="https://images.unsplash.com/photo-1600003263720-95b45a4035d5?q=80&w=3025&auto=format&fit=crop"
            title="Accessories"
            link="/categories/accessories"
          />
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="bg-[#F9FAFB] py-20">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Featured Products</h2>
            <LocalizedClientLink href="/store" className="text-[#8B5CF6] hover:text-[#6D28D9] font-medium mt-4 md:mt-0">
              View All Products
            </LocalizedClientLink>
          </div>
          <ul className="flex flex-col gap-y-16">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
      
      {/* Why Choose AndMore Tech */}
      <div className="content-container py-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Why Choose AndMore Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg">
            <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Quality Solutions</h3>
            <p className="text-gray-600">Premium business technology solutions built to last</p>
          </div>
          <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg">
            <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Dedicated consultation and technical assistance</p>
          </div>
          <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg">
            <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p className="text-gray-600">Top value without compromising quality</p>
          </div>
          <div className="text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg">
            <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Business-Focused</h3>
            <p className="text-gray-600">Products selected to enhance business performance</p>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-[#F9FAFB] py-16">
        <div className="content-container max-w-2xl mx-auto text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Stay Connected</h3>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates on new products, special offers, and business technology insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B5CF6]"
            />
            <Button variant="primary" className="bg-[#8B5CF6] hover:bg-[#6D28D9] text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

// Category Card Component
function CategoryCard({ 
  image, 
  title, 
  link 
}: { 
  image: string; 
  title: string; 
  link: string;
}) {
  return (
    <LocalizedClientLink href={link} className="group">
      <div className="relative overflow-hidden rounded-lg h-80 border border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 to-transparent z-10"></div>
        <div className="bg-cover bg-center h-full w-full transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#8B5CF6]/40 transition-opacity duration-500 z-20">
          <span className="text-white font-heading text-2xl font-semibold px-6 py-3 border-2 border-white">Shop Now</span>
        </div>
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="text-white font-heading text-2xl font-semibold">{title}</h3>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
