import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Return Policy | AndMore Tech",
  description: "Return Policy for AndMore Solutions LLC",
}

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-light rounded-xl border border-dark-lighter p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Return Policy
            </h1>
            <p className="text-dark-muted mb-8">
              <strong>Andmore Solutions LLC</strong><br />
              Last Updated: April 3, 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">1. Return Window</h2>
                <p className="text-dark-text leading-relaxed mb-4">
                  You may return most items within <strong>30 days</strong> of delivery for a full refund. The return period begins on the day you receive your order.
                </p>
                <p className="text-dark-text leading-relaxed">
                  To be eligible for a return, items must be in their original condition, unopened, and in their original packaging with all accessories and documentation included.
                </p>
              </section>

              <div className="bg-dark border border-dark-lighter rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-[#A78BFA] mb-3">Need Help?</h3>
                <p className="text-dark-text mb-4">
                  If you have questions about returns or need assistance, please contact us:
                </p>
                <div className="text-dark-muted space-y-2">
                  <p><strong>Email:</strong> returns@andmore-llc.com</p>
                  <p><strong>Customer Service:</strong> contact@andmore-llc.com</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 