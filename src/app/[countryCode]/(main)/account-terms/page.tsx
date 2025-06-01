import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Account Terms | AndMore Tech",
  description: "Account Terms of Use for AndMore Solutions LLC",
}

export default function AccountTermsPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-light rounded-xl border border-dark-lighter p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Account Terms of Use
            </h1>
            <p className="text-dark-muted mb-8">
              <strong>Andmore Solutions LLC</strong><br />
              Last Updated: April 3, 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">1. Account Registration</h2>
                <p className="text-dark-text leading-relaxed mb-4">
                  To create an account with AndMore Tech, you must be at least 18 years old or have reached the age of majority in your jurisdiction. By creating an account, you represent and warrant that you meet these age requirements.
                </p>
                <p className="text-dark-text leading-relaxed">
                  You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>
              </section>

              <div className="bg-dark border border-dark-lighter rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-[#A78BFA] mb-3">Account Support</h3>
                <p className="text-dark-text mb-4">
                  If you have questions about your account or these terms, please contact us:
                </p>
                <div className="text-dark-muted space-y-2">
                  <p><strong>Email:</strong> accounts@andmore-llc.com</p>
                  <p><strong>Customer Service:</strong> contact@andmore-llc.com</p>
                  <p><strong>Account Dashboard:</strong> Available when logged in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 