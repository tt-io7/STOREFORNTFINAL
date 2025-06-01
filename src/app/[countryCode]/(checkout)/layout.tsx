import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000"
  ),
  title: {
    template: "%s | AndMore Tech",
    default: "AndMore Tech",
  },
  description:
    "Discover cutting-edge technology products at AndMore Tech. Your premier destination for tech innovation.",
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-dark relative small:min-h-screen">
      <div className="h-16 bg-dark-light border-b border-dark-lighter">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-small-semi text-dark-text flex items-center gap-x-2 uppercase flex-1 basis-0 hover:text-[#A78BFA] transition-colors duration-300"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:block txt-compact-plus text-dark-muted hover:text-dark-text ">
              Back to shopping cart
            </span>
            <span className="mt-px block small:hidden txt-compact-plus text-dark-muted hover:text-dark-text">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus text-dark-text hover:text-[#A78BFA] uppercase font-bold transition-colors duration-300"
            data-testid="store-link"
          >
            AndMore Tech
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative bg-dark min-h-screen" data-testid="checkout-container">{children}</div>
      <div className="py-4 w-full flex items-center justify-center bg-dark">
        <MedusaCTA />
      </div>
    </div>
  )
}
