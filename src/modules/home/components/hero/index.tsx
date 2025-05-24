import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-accent-dark/70 z-10"></div>
      <div className="absolute inset-0">
        <div className="bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center h-full w-full bg-no-repeat"></div>
      </div>
      
      <div className="content-container relative z-20 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovation for the <span className="text-secondary-light">Digital Age</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg">
            Discover cutting-edge technology solutions that transform the way you work, play, and connect.
          </p>
          <div className="flex flex-wrap gap-4">
            <LocalizedClientLink href="/store">
              <Button variant="secondary" className="px-6 py-3 bg-white text-primary-dark hover:bg-grey-5 font-medium text-base">
                Shop Now
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/categories/featured">
              <Button variant="transparent" className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white/10 font-medium text-base">
                Featured Products
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  )
}

export default Hero
