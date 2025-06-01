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
    <div className="bg-dark text-dark-text">
      {/* Split-Screen Welcome Panel */}
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side - Brand Statement */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-dark-light to-dark flex items-center justify-center p-8 md:p-16">
          <div className="max-w-lg">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6 leading-tight">
              TECHNOLOGY FOR BUSINESS & BEYOND
            </h1>
            <p className="text-dark-muted text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Innovative solutions that elevate your business performance and transform the way you work.
            </p>
            <LocalizedClientLink href="/store">
              <Button variant="secondary" className="px-8 py-4 bg-[#A78BFA] text-white hover:bg-[#8B5CF6] font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
        
        {/* Right Side - Image Slideshow */}
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dark/30 to-transparent z-10"></div>
          <HeroSlideshow />
        </div>
      </div>
      
      {/* Benefits Bar */}
      <div className="bg-dark-light py-12 border-y border-dark-lighter">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center p-4 rounded-lg bg-dark/30 backdrop-blur-sm">
              <ShoppingBag className="text-[#A78BFA] w-7 h-7 mr-4" />
              <span className="text-dark-text font-medium">Free shipping over $150</span>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-dark/30 backdrop-blur-sm">
              <Gift className="text-[#A78BFA] w-7 h-7 mr-4" />
              <span className="text-dark-text font-medium">30-day returns</span>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-dark/30 backdrop-blur-sm">
              <Headphones className="text-[#A78BFA] w-7 h-7 mr-4" />
              <span className="text-dark-text font-medium">Expert customer support</span>
            </div>
            <div className="flex items-center p-4 rounded-lg bg-dark/30 backdrop-blur-sm">
              <CreditCard className="text-[#A78BFA] w-7 h-7 mr-4" />
              <span className="text-dark-text font-medium">Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Showcase */}
      <div className="content-container py-24">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-dark-text">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          <CategoryCard 
            image="/images/categories/phones.jpg"
            title="Phones"
            link="/categories/phones"
          />
          <CategoryCard
            image="/images/categories/software.jpg"
            title="Software"
            link="/categories/software"
          />
          <CategoryCard
            image="/images/categories/accessories.jpg"
            title="Accessories"
            link="/categories/accessories"
          />
          <CategoryCard
            image="/images/categories/security.jpg"
            title="Security"
            link="/categories/security"
          />
          <CategoryCard
            image="/images/categories/merch.jpg"
            title="Merch"
            link="/categories/merch"
          />
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="bg-dark-light py-24">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-text">Featured Products</h2>
            <LocalizedClientLink href="/store" className="text-[#A78BFA] hover:text-[#C4B5FD] font-semibold mt-4 md:mt-0 transition-colors duration-300">
              View All Products →
            </LocalizedClientLink>
          </div>
          <ul className="flex flex-col gap-y-16">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
      
      {/* Why Choose AndMore Tech */}
      <div className="content-container py-24">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-dark-text">Why Choose AndMore Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 hover:shadow-2xl transition-all duration-300 rounded-xl bg-dark-light/50 backdrop-blur-sm border border-dark-lighter hover:border-[#A78BFA]/50">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3 text-dark-text">Quality Solutions</h3>
            <p className="text-dark-muted leading-relaxed">Premium business technology solutions built to last</p>
          </div>
          <div className="text-center p-8 hover:shadow-2xl transition-all duration-300 rounded-xl bg-dark-light/50 backdrop-blur-sm border border-dark-lighter hover:border-[#A78BFA]/50">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3 text-dark-text">Expert Support</h3>
            <p className="text-dark-muted leading-relaxed">Dedicated consultation and technical assistance</p>
          </div>
          <div className="text-center p-8 hover:shadow-2xl transition-all duration-300 rounded-xl bg-dark-light/50 backdrop-blur-sm border border-dark-lighter hover:border-[#A78BFA]/50">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3 text-dark-text">Competitive Pricing</h3>
            <p className="text-dark-muted leading-relaxed">Top value without compromising quality</p>
          </div>
          <div className="text-center p-8 hover:shadow-2xl transition-all duration-300 rounded-xl bg-dark-light/50 backdrop-blur-sm border border-dark-lighter hover:border-[#A78BFA]/50">
            <div className="w-20 h-20 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3 text-dark-text">Business-Focused</h3>
            <p className="text-dark-muted leading-relaxed">Products selected to enhance business performance</p>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-dark-light to-dark py-20">
        <div className="content-container max-w-2xl mx-auto text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-dark-text">Stay Connected</h3>
          <p className="text-dark-muted mb-10 text-lg leading-relaxed">
            Subscribe to receive updates on new products, special offers, and business technology insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-grow p-4 border border-dark-lighter rounded-lg focus:outline-none focus:border-[#A78BFA] bg-dark-light text-dark-text placeholder-dark-muted transition-colors duration-300"
            />
            <Button variant="primary" className="bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#7C3AED] text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
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
    <LocalizedClientLink href={link}>
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-dark-light border border-dark-lighter hover:border-[#A78BFA]/50">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-dark-muted text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
            Explore our {title.toLowerCase()} collection
          </p>
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#A78BFA]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
