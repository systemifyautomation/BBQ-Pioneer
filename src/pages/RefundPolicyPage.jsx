import SEO from "../components/SEO";
import { contactInfo, getPhoneLink, getEmailLink } from "../data/contactInfo";

export default function RefundPolicyPage() {
  const updatedDate = "March 1, 2026";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <SEO
        title="Refund & Return Policy"
        description="BBQ Pioneer refund and return policy - Learn about our 30-day return guarantee and warranty support."
        canonical="/refund-policy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-gray-900 tracking-wider mb-4">
          REFUND & RETURN POLICY
        </h1>
        <p className="text-gray-500 mb-8">Last Updated: {updatedDate}</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">1. Our Satisfaction Guarantee</h2>
            <p>
              At BBQ Pioneer, we stand behind the quality of our products. We want you to be completely satisfied with your purchase. 
              If you're not happy with your order for any reason, we offer a 30-day return policy on most items.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">2. Return Eligibility</h2>
            <p>To be eligible for a return, items must meet the following conditions:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Return requested within 30 days of delivery</li>
              <li>Item is unused and in original condition</li>
              <li>All original packaging, accessories, and documentation included</li>
              <li>Product has not been assembled or installed (unless defective)</li>
              <li>Item must be in resalable condition</li>
            </ul>
            <p className="mt-4">
              <strong>Note:</strong> Custom-ordered or personalized items are not eligible for return unless defective or damaged.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">3. How to Initiate a Return</h2>
            <p>To start a return:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Contact our customer service team at <a href={getEmailLink('returns')} className="text-fire-500 hover:text-fire-400">{contactInfo.email.returns}</a> or 
                call <a href={getPhoneLink()} className="text-fire-500 hover:text-fire-400">{contactInfo.phone.display}</a></li>
              <li>Provide your order number and reason for return</li>
              <li>We will issue you a Return Merchandise Authorization (RMA) number</li>
              <li>Package the item securely in its original packaging</li>
              <li>Include the RMA number on the outside of the package</li>
              <li>Ship the item using a trackable shipping method</li>
            </ol>
            <p className="mt-4">
              <strong>Important:</strong> Do not return products without an RMA number. Unauthorized returns will not be accepted.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">4. Return Shipping Costs</h2>
            <h3 className="text-xl text-gray-900 font-semibold mb-2">Standard Returns</h3>
            <p>
              For customer-initiated returns (buyer's remorse, changed mind, etc.), the customer is responsible for return shipping costs. 
              Given the size and weight of our products, return shipping can be expensive. We recommend purchasing shipping insurance.
            </p>

            <h3 className="text-xl text-gray-900 font-semibold mb-2 mt-4">Defective or Damaged Items</h3>
            <p>
              If your item arrives damaged or defective, BBQ Pioneer will cover the cost of return shipping. We will provide a prepaid 
              shipping label or reimburse your return shipping costs upon receipt and inspection.
            </p>

            <h3 className="text-xl text-gray-900 font-semibold mb-2 mt-4">Wrong Item Shipped</h3>
            <p>
              If we ship the wrong item, we will cover all return shipping costs and expedite the correct item to you at no additional charge.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">5. Restocking Fee</h2>
            <p>
              A 15% restocking fee applies to non-defective returns of opened or tested products. This fee covers inspection, 
              repackaging, and restocking costs. The restocking fee will be deducted from your refund.
            </p>
            <p className="mt-4">
              <strong>No restocking fee applies to:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Defective or damaged items</li>
              <li>Items returned in unopened, original packaging</li>
              <li>Items we shipped incorrectly</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">6. Refund Processing</h2>
            <p>Once we receive your return:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>We will inspect the item within 3-5 business days</li>
              <li>If approved, your refund will be processed to your original payment method</li>
              <li>Refunds typically appear within 5-10 business days, depending on your financial institution</li>
              <li>You will receive an email confirmation once your refund is processed</li>
            </ul>
            <p className="mt-4">
              <strong>Note:</strong> Original shipping charges are non-refundable unless the return is due to our error or a defective product.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">7. Exchanges</h2>
            <p>
              We do not offer direct exchanges. If you need a different product, please return the original item for a refund and 
              place a new order. If you received a defective item, we will expedite a replacement at no additional cost once we 
              receive your return.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">8. Defective Products</h2>
            <p>
              If you receive a defective product, contact us immediately. Please provide:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Order number</li>
              <li>Detailed description of the defect</li>
              <li>Photos or video of the issue</li>
            </ul>
            <p className="mt-4">
              We will work with you to determine the best solution, which may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Replacement of the defective item</li>
              <li>Replacement parts shipped directly to you</li>
              <li>Full refund including shipping costs</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">9. Warranty Support</h2>
            <p>
              Issues arising after the 30-day return period may be covered under the manufacturer's warranty. Warranty terms vary by 
              product and are specified in the product description and included documentation.
            </p>
            <p className="mt-4">
              For warranty claims, contact our warranty support team at 
              <a href="mailto:warranty@bbqpioneer.com" className="text-fire-500 hover:text-fire-400 ml-1">warranty@bbqpioneer.com</a> with 
              your order number, product details, and description of the issue.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">10. Non-Returnable Items</h2>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom-made or personalized products (unless defective)</li>
              <li>Clearance or final sale items</li>
              <li>Items returned without RMA authorization</li>
              <li>Products damaged due to misuse, abuse, or improper installation</li>
              <li>Used items showing wear or alteration</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">11. Cancellations</h2>
            <p>
              You may cancel your order at no charge before it ships. Once shipped, standard return policies apply. To cancel an order, 
              contact us immediately at <a href={getEmailLink('orders')} className="text-fire-500 hover:text-fire-400">{contactInfo.email.orders}</a> 
              or <a href={getPhoneLink()} className="text-fire-500 hover:text-fire-400">{contactInfo.phone.display}</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">12. Late or Missing Refunds</h2>
            <p>
              If you haven't received your refund within the expected timeframe:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Check your bank account again</li>
              <li>Contact your credit card company (processing can take time)</li>
              <li>Contact your bank (processing delays may occur)</li>
              <li>If you've done all of this and still haven't received your refund, contact us at 
                <a href="mailto:refunds@bbqpioneer.com" className="text-fire-500 hover:text-fire-400 ml-1">refunds@bbqpioneer.com</a></li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">13. Contact Us</h2>
            <p>For return and refund questions, contact:</p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold text-gray-900">{contactInfo.businessName} Returns Department</p>
              <p>Email: <a href={getEmailLink('returns')} className="text-fire-500 hover:text-fire-400">{contactInfo.email.returns}</a></p>
              <p>Phone: <a href={getPhoneLink()} className="text-fire-500 hover:text-fire-400">{contactInfo.phone.display}</a></p>
              <p>Hours: {contactInfo.hours.support}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
