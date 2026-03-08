import SEO from "../components/SEO";
import { contactInfo, getPhoneLink, getEmailLink, getFullAddress } from "../data/contactInfo";

export default function TermsOfServicePage() {
  const updatedDate = "March 1, 2026";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <SEO
        title="Terms of Service"
        description="BBQ Pioneer terms of service - Read our terms and conditions for using our website and purchasing our products."
        canonical="/terms-of-service"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-gray-900 tracking-wider mb-4">
          TERMS OF SERVICE
        </h1>
        <p className="text-gray-500 mb-8">Last Updated: {updatedDate}</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using bbqpioneer.com (the "Website"), you accept and agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
              using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">2. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions, specifications, and pricing. However, we do not warrant that 
              product descriptions, images, or other content on this site are accurate, complete, reliable, current, or error-free.
            </p>
            <p className="mt-4">
              Products are subject to availability. We reserve the right to discontinue any product at any time. Prices are 
              subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">3. Orders and Payments</h2>
            <h3 className="text-xl text-gray-900 font-semibold mb-2">Order Acceptance</h3>
            <p>
              We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, 
              errors in pricing or product information, or suspected fraudulent or unauthorized transactions.
            </p>

            <h3 className="text-xl text-gray-900 font-semibold mb-2 mt-4">Pricing</h3>
            <p>
              All prices are listed in US Dollars (USD) and do not include applicable taxes or shipping fees unless otherwise stated. 
              We reserve the right to correct any pricing errors on our website.
            </p>

            <h3 className="text-xl text-gray-900 font-semibold mb-2 mt-4">Payment</h3>
            <p>
              Payment is required at the time of purchase. We accept major credit cards and other payment methods as displayed 
              at checkout. All payment information is processed securely through our payment processor.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">4. Shipping and Delivery</h2>
            <p>
              Shipping times and costs vary based on destination and product. Estimated delivery times are provided but not 
              guaranteed. Risk of loss and title for products pass to you upon delivery to the carrier. For detailed shipping 
              information, see our <a href="/shipping-policy" className="text-fire-500 hover:text-fire-400">Shipping Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">5. Returns and Refunds</h2>
            <p>
              Our return policy is outlined in our <a href="/refund-policy" className="text-fire-500 hover:text-fire-400">Refund Policy</a>. 
              Please review it carefully before making a purchase. Products must be returned in their original condition with 
              all packaging and accessories.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">6. Warranties</h2>
            <p>
              All products come with manufacturer warranties as specified in the product description. Warranty terms vary by 
              product. BBQ Pioneer LLC acts as a retailer and directs warranty claims to the respective manufacturers.
            </p>
            <p className="mt-4">
              Except as expressly stated, all products are provided "as is" without warranties of any kind, either express or implied.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">7. User Accounts</h2>
            <p>
              If you create an account on our website, you are responsible for maintaining the confidentiality of your account 
              information and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">8. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of BBQ Pioneer LLC 
              or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, 
              distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">9. Prohibited Uses</h2>
            <p>You agree not to use our website:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>For any unlawful purpose or to solicit illegal activity</li>
              <li>To violate any international, federal, or state regulations</li>
              <li>To infringe upon our intellectual property rights</li>
              <li>To transmit viruses or malicious code</li>
              <li>To collect or track personal information of others</li>
              <li>To spam, phish, or engage in fraudulent activities</li>
              <li>To interfere with or circumvent security features</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, BBQ Pioneer LLC shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising from 
              your use of our website or products.
            </p>
            <p className="mt-4">
              Our total liability for any claim arising out of or relating to these terms or our products shall not exceed the 
              amount you paid for the product giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless BBQ Pioneer LLC and its affiliates, officers, directors, employees, 
              and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our website or 
              violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">12. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, United States, 
              without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Austin, Texas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">13. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated 
              to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting 
              on this page with an updated revision date. Your continued use of our website after changes constitutes acceptance 
              of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-4">15. Contact Information</h2>
            <p>For questions about these Terms of Service, contact:</p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold text-gray-900">{contactInfo.legalName}</p>
              <p>Email: <a href={getEmailLink('legal')} className="text-fire-500 hover:text-fire-400">{contactInfo.email.legal}</a></p>
              <p>Phone: <a href={getPhoneLink()} className="text-fire-500 hover:text-fire-400">{contactInfo.phone.display}</a></p>
              <p>Address: {getFullAddress()}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
