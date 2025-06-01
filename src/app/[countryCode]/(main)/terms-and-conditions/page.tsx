import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | AndMore Tech",
  description: "Terms and Conditions of Sale for AndMore Solutions LLC",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="content-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-light rounded-xl border border-dark-lighter p-8 md:p-12 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-2">
              Terms and Conditions of Sale
            </h1>
            <p className="text-dark-muted mb-8">
              <strong>Andmore Solutions LLC</strong><br />
              Last Updated: April 3, 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">1. Introduction and Acceptance</h2>
                <p className="text-dark-text leading-relaxed mb-4">
                  These Terms and Conditions of Sale ("Terms") govern your purchase of products from Andmore Solutions LLC ("Andmore," "we," "us," or "our") through our website andmore-llc.com (the "Site"). By placing an order through our Site, you accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site or place orders.
                </p>
                <p className="text-dark-text leading-relaxed">
                  Andmore reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">2. Orders and Acceptance</h2>
                
                <h3 className="text-xl font-medium text-dark-text mb-3">2.1. Order Placement</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  By placing an order, you make an offer to purchase products subject to these Terms. All orders are subject to acceptance by Andmore. We reserve the right to refuse any order at our sole discretion without liability.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">2.2. Order Confirmation</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  Upon successful placement of an order, you will receive an order confirmation via email. This confirmation does not constitute acceptance of your order, but rather acknowledges that we have received it.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">2.3. Order Acceptance</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  An order is accepted and a binding contract is formed only when we dispatch the products to you and send a dispatch confirmation email. If we cannot accept your order, we will notify you and refund any payment already made.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">2.4. Product Availability</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  All products are subject to availability. We reserve the right to discontinue any product at any time and to limit quantities sold to any person or entity.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">2.5. Guest Checkout</h3>
                <p className="text-dark-text leading-relaxed">
                  You may complete purchases as a guest without creating an account. However, to access certain features of our Site, you may need to register an account subject to our Account Terms of Use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">3. Pricing and Payment</h2>
                
                <h3 className="text-xl font-medium text-dark-text mb-3">3.1. Product Prices</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  All prices are displayed in US Dollars and exclude applicable taxes and shipping costs, which will be added at checkout.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">3.2. Price Changes</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  We reserve the right to change prices for products at any time without notice. The price applicable to your order will be the price displayed at the time of checkout.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">3.3. Pricing Errors</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  Despite our efforts to provide accurate pricing information, errors may occur. If we discover an error in the price of products you have ordered, we will inform you and give you the option of continuing with your order at the correct price or canceling it.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">3.4. Payment Methods</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  We accept major credit cards, debit cards, and other payment methods as indicated on our Site. By submitting an order, you represent that you are authorized to use the designated payment method.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">3.5. Payment Processing</h3>
                <p className="text-dark-text leading-relaxed">
                  Payment must be received in full before we dispatch your order. We reserve the right to verify your payment information and decline or cancel orders where payment verification fails.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">4. Shipping and Delivery</h2>
                
                <h3 className="text-xl font-medium text-dark-text mb-3">4.1. Processing Time</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  Orders are typically processed within 1-3 business days following payment confirmation. Processing times may vary during peak periods or promotional events.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">4.2. Shipping Methods</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  We provide global tracked shipping on all orders. Shipping options, timeframes, and costs are displayed at checkout.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">4.3. Delivery Timeframes</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  Estimated delivery timeframes are provided at checkout but are not guaranteed. We are not responsible for delays beyond our control, including but not limited to carrier delays, weather conditions, or customs processing for international shipments.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">4.4. Risk of Loss</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  Risk of loss or damage to products passes to you when the products are delivered to the shipping carrier. Title to products passes to you upon our delivery to the carrier.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">4.5. Delivery Address</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  You are responsible for providing accurate shipping information. We are not liable for any loss or delay resulting from incorrect or incomplete delivery information.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">4.6. International Shipping</h3>
                <p className="text-dark-text leading-relaxed">
                  For international orders, you are responsible for all import duties, customs fees, taxes, and any other charges imposed by your country of residence. These fees are not included in the purchase price or shipping costs and will be collected by the shipping carrier or local customs authority.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-dark-text mb-4">5. Returns and Refunds</h2>
                
                <h3 className="text-xl font-medium text-dark-text mb-3">5.1. Return Policy</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  You may return products within 30 days of delivery, provided that:
                </p>
                <ul className="list-disc pl-6 mb-4 text-dark-text">
                  <li>The product is in its original, unopened packaging</li>
                  <li>The product is in new, unused condition</li>
                  <li>You have proof of purchase</li>
                </ul>

                <h3 className="text-xl font-medium text-dark-text mb-3">5.2. Non-Returnable Items</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  The following items are non-returnable:
                </p>
                <ul className="list-disc pl-6 mb-4 text-dark-text">
                  <li>Software licenses and digital keys once delivered</li>
                  <li>Products marked as "Final Sale" or "Non-Returnable"</li>
                  <li>Promotional items marked as non-refundable</li>
                </ul>

                <h3 className="text-xl font-medium text-dark-text mb-3">5.3. Return Process</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  To initiate a return, you must contact our customer service team for authorization and return instructions. Unauthorized returns may be refused.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">5.4. Return Shipping Costs</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  You are responsible for the cost of return shipping unless the return is due to our error (such as sending an incorrect or defective item), which must be verified by Andmore.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">5.5. Refunds</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  Approved refunds will be issued to the original payment method within 14 business days of receiving and inspecting the returned product. Refunds do not include original shipping costs unless the return is due to our error.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">5.6. Exchanges</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  We do not offer direct exchanges. If you wish to exchange an item, you must return the original item for a refund and place a new order for the desired item.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">5.7. Damaged or Defective Items</h3>
                <p className="text-dark-text leading-relaxed mb-4">
                  If you receive a damaged or defective item, contact our customer service team within 48 hours of delivery with photos of the damage or defect. We may request additional information to process your claim.
                </p>

                <h3 className="text-xl font-medium text-dark-text mb-3">5.8. Charitable Merchandise</h3>
                <p className="text-dark-text leading-relaxed">
                  Products in our Merch category, where profits are donated to the UNICEF Children's Emergency Fund, are subject to the same return policy as other products. The charitable aspect of these sales does not affect your statutory rights regarding returns for defective items.
                </p>
              </section>

              <div className="bg-dark border border-dark-lighter rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-[#A78BFA] mb-3">Contact Information</h3>
                <p className="text-dark-text">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 text-dark-muted">
                  <p><strong>Andmore Solutions LLC</strong></p>
                  <p>New York, NY</p>
                  <p>Email: contact@andmore-llc.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 