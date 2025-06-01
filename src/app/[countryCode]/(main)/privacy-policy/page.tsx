import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | AndMore Tech",
  description: "Privacy Policy for AndMore Solutions LLC",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-light rounded-xl border border-dark-lighter p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Privacy Policy Summary
            </h1>
            <p className="text-dark-muted mb-8">
              <strong>Andmore Solutions LLC</strong><br />
              Effective Date: April 3, 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">1. Introduction</h2>
                <p className="text-dark-text leading-relaxed">
                  At Andmore Solutions LLC ("Andmore," "we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy Summary explains how we collect, use, disclose, and safeguard your information when you visit our website andmore-llc.com (the "Site") or make purchases through our online store.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-dark-text mb-3">2.1. Personal Information</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-dark-text space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, mailing address, phone number</li>
                  <li><strong>Account Information:</strong> Username, password, purchase history, account preferences</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (note: full payment card details are processed by secure third-party payment processors)</li>
                  <li><strong>Order Information:</strong> Products purchased, shipping details, order status</li>
                  <li><strong>Communication Records:</strong> Customer service interactions, surveys, feedback</li>
                </ul>

                <h3 className="text-xl font-medium text-dark-text mb-3">2.2. Usage Data</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  We automatically collect certain information about your device and how you interact with our Site, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-dark-text space-y-2">
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device type</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referring websites</li>
                  <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">3. How We Use Your Information</h2>
                <p className="text-dark-text leading-relaxed mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-dark-text space-y-2">
                  <li><strong>Order Processing:</strong> To fulfill and manage your orders, process payments, and provide shipping updates</li>
                  <li><strong>Customer Service:</strong> To respond to inquiries, provide support, and address concerns</li>
                  <li><strong>Account Management:</strong> To create and maintain your account and provide account-related services</li>
                  <li><strong>Marketing:</strong> To send you promotional emails about new products, special offers, or other information we think you may find interesting (subject to your preferences)</li>
                  <li><strong>Improvement of Services:</strong> To analyze usage patterns, diagnose technical problems, and enhance our Site and offerings</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">4. Information Sharing and Disclosure</h2>
                
                <h3 className="text-xl font-medium text-dark-text mb-3">4.1. Third-Party Service Providers</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  We may share your information with trusted third parties who assist us in operating our Site, conducting our business, or servicing you, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-dark-text space-y-1">
                  <li>Payment processors</li>
                  <li>Shipping and fulfillment providers</li>
                  <li>Customer service providers</li>
                  <li>Technology and cloud service providers</li>
                </ul>
                <p className="text-dark-text leading-relaxed mb-4">
                  These service providers are contractually obligated to use your information only for the services they provide to us and are prohibited from selling your data.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">4.2. No Data Selling</h3>
                <p className="text-dark-text leading-relaxed">
                  We do not sell your personal information to third parties for their marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">5. Your Rights and Choices</h2>
                <p className="text-dark-text leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-dark-text space-y-2">
                  <li><strong>Access:</strong> The right to request information about the personal data we hold about you</li>
                  <li><strong>Correction:</strong> The right to request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> The right to request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> The right to opt out of marketing communications</li>
                  <li><strong>Data Portability:</strong> The right to receive your personal data in a structured format</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">6. Data Security</h2>
                <p className="text-dark-text leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-dark-text leading-relaxed">
                  Our Site uses cookies and similar tracking technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser settings, although disabling cookies may limit your ability to use certain features of our Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">8. Children's Privacy</h2>
                <p className="text-dark-text leading-relaxed">
                  Our Site is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
                </p>
              </section>

              <div className="bg-dark border border-dark-lighter rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-[#A78BFA] mb-3">Contact Information</h3>
                <p className="text-dark-text mb-4">
                  If you have questions or concerns about our privacy practices, please contact us at:
                </p>
                <div className="text-dark-muted">
                  <p><strong>Andmore Solutions LLC</strong></p>
                  <p>New York, NY</p>
                  <p>Email: privacy@andmore-llc.com</p>
                </div>
              </div>

              <div className="bg-[#A78BFA]/10 border border-[#A78BFA]/30 rounded-lg p-6 mt-6">
                <p className="text-dark-text text-sm">
                  <strong>Note:</strong> This is a summary of our privacy practices. A comprehensive Privacy Policy will be developed separately with additional details about our privacy practices and procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 