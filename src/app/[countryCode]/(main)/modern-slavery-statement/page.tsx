import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Slavery Statement | AndMore Tech",
  description: "Modern Slavery Statement for AndMore Solutions LLC",
}

export default function ModernSlaveryStatementPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-light rounded-xl border border-dark-lighter p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Modern Slavery Statement
            </h1>
            <p className="text-dark-muted mb-8">
              <strong>Andmore Solutions LLC</strong><br />
              Financial Year Ending: December 31, 2024<br />
              Published: April 3, 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">1. Introduction</h2>
                <p className="text-dark-text leading-relaxed">
                  This statement is made pursuant to the Modern Slavery Act 2015 and the California Transparency in Supply Chains Act of 2010. It sets out the steps that Andmore Solutions LLC ("AndMore," "we," "us," or "our") has taken and continues to take to ensure that modern slavery and human trafficking are not taking place in our business or supply chains.
                </p>
              </section>

              <div className="bg-dark border border-dark-lighter rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-[#A78BFA] mb-3">Contact Information</h3>
                <p className="text-dark-text mb-4">
                  If you have concerns about potential modern slavery in our business or supply chains, please contact us:
                </p>
                <div className="text-dark-muted space-y-2">
                  <p><strong>Email:</strong> compliance@andmore-llc.com</p>
                  <p><strong>Confidential Hotline:</strong> Available through our website</p>
                  <p><strong>Address:</strong> Andmore Solutions LLC, New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 