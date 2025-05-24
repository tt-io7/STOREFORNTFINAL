import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "AndMore Tech | Innovative Technology Solutions",
  description:
    "Discover cutting-edge technology solutions at AndMore Tech. Shop the latest devices, gadgets, and accessories.",
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
      <Hero />
      
      {/* Featured Categories */}
      <div className="content-container py-16">
        <h2 className="heading-2 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard 
            image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=3264&auto=format&fit=crop"
            title="Smart Home"
            description="Connect your living space"
            link="/categories/smart-home"
          />
          <CategoryCard
            image="https://images.unsplash.com/photo-1544117519-31a4a39e9a51?q=80&w=3024&auto=format&fit=crop"
            title="Audio"
            description="Premium sound quality"
            link="/categories/audio"
          />
          <CategoryCard
            image="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=3025&auto=format&fit=crop"
            title="Wearables"
            description="Technology on the go"
            link="/categories/wearables"
          />
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="bg-grey-5 py-16">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="heading-2">Featured Products</h2>
            <LocalizedClientLink href="/store" className="text-primary hover:text-primary-dark font-medium">
              View All Products
            </LocalizedClientLink>
          </div>
          <ul className="flex flex-col gap-y-16">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </div>
      
      {/* Promotional Banner */}
      <div className="relative overflow-hidden py-16 md:py-24 bg-primary text-white">
        <div className="content-container relative z-10">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Experience Unmatched Performance</h2>
            <p className="text-white/90 text-lg mb-8">
              Upgrade your tech setup with our premium products. Limited time offers available now.
            </p>
            <LocalizedClientLink href="/collections/on-sale">
              <Button variant="secondary" className="px-6 py-3 bg-white text-primary-dark hover:bg-grey-5 font-medium text-base">
                Shop Deals
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-dark transform skew-x-12 translate-x-1/3 z-0"></div>
      </div>
      
      {/* Newsletter & Testimonial Section */}
      <div className="content-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div className="bg-grey-5 p-8 rounded-lg">
            <h3 className="heading-3 mb-4">Stay Updated</h3>
            <p className="text-ui-fg-subtle mb-6">
              Subscribe to our newsletter for the latest product updates and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow p-3 border border-grey-20 rounded-lg focus:outline-none focus:border-primary"
              />
              <Button variant="primary" className="bg-primary hover:bg-primary-dark text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-accent/5 p-8 rounded-lg">
            <div className="mb-4 text-accent text-3xl">❝</div>
            <p className="text-ui-fg-base italic mb-6">
              AndMore Tech products have completely transformed how I work. The quality and innovation are unmatched in the industry.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-grey-20 mr-4"></div>
              <div>
                <p className="font-medium text-ui-fg-base">Sarah Johnson</p>
                <p className="text-ui-fg-subtle text-sm">CTO, FutureTech Inc.</p>
              </div>
            </div>
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
  description, 
  link 
}: { 
  image: string; 
  title: string; 
  description: string; 
  link: string;
}) {
  return (
    <LocalizedClientLink href={link} className="group">
      <div className="relative overflow-hidden rounded-lg h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-grey-90/80 to-grey-90/20 z-10"></div>
        <div className="bg-cover bg-center h-full w-full transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="text-white font-heading text-xl font-semibold">{title}</h3>
          <p className="text-white/80 mt-1">{description}</p>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
