import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Policy | AndMore Tech",
  description: "Shipping Policy for AndMore Solutions LLC",
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-light rounded-xl border border-dark-lighter p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Shipping Policy
            </h1>
            <p className="text-dark-muted mb-8">
              <strong>Andmore Solutions LLC</strong><br />
              Last Updated: April 3, 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">1. Shipping Coverage</h2>
                <p className="text-dark-text leading-relaxed mb-4">
                  We provide <strong>global tracked shipping</strong> on all orders. Whether you're located in the United States or anywhere else in the world, we'll deliver your AndMore Tech products directly to your door.
                </p>
                <p className="text-dark-text leading-relaxed">
                  All shipments include tracking information so you can monitor your order's progress from our warehouse to your location.
                </p>
              </section>

              <div className="bg-dark border border-dark-lighter rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-[#A78BFA] mb-3">Shipping Questions?</h3>
                <p className="text-dark-text mb-4">
                  If you have questions about shipping or need to track your order, please contact us:
                </p>
                <div className="text-dark-muted space-y-2">
                  <p><strong>Email:</strong> shipping@andmore-llc.com</p>
                  <p><strong>Customer Service:</strong> contact@andmore-llc.com</p>
                  <p><strong>Order Tracking:</strong> Available in your account dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 