import SEO from "../components/SEO";
import { contactInfo, getPhoneLink, getEmailLink } from "../data/contactInfo";

export default function ShippingPolicyPage() {
  const updatedDate = "March 1, 2026";

  return (
    <div className="min-h-screen bg-coal-950 text-coal-200">
      <SEO
        title="Shipping Policy"
        description="BBQ Pioneer shipping policy - Learn about our shipping rates, delivery times, and freight shipping for large grills."
        canonical="/shipping-policy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
          SHIPPING POLICY
        </h1>
        <p className="text-coal-400 mb-8">Last Updated: {updatedDate}</p>

        <div className="prose prose-invert prose-coal max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">1. Shipping Overview</h2>
            <p>
              BBQ Pioneer ships premium grills and smokers throughout the United States. Due to the size and weight of our products, 
              most items ship via freight delivery. We work with trusted carriers to ensure your investment arrives safely.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">2. Shipping Rates</h2>
            <p>Shipping costs are calculated based on:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Product weight and dimensions</li>
              <li>Destination address</li>
              <li>Shipping method selected</li>
            </ul>
            <p className="mt-4">
              <strong>Free Shipping:</strong> We offer free standard freight shipping on orders over $3,000 to the contiguous 
              United States. Expedited shipping and deliveries to Alaska, Hawaii, and US territories incur additional charges.
            </p>
            <p className="mt-4">
              Exact shipping costs will be calculated and displayed at checkout before you complete your purchase.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">3. Processing Time</h2>
            <p>
              Orders are typically processed within 1-3 business days. Processing includes payment verification, inventory allocation, 
              and preparation for shipment. You will receive an email confirmation with tracking information once your order ships.
            </p>
            <p className="mt-4">
              Please note: Processing time does not include shipping time. Custom or made-to-order items may require additional 
              processing time (typically 2-4 weeks).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">4. Delivery Times</h2>
            <h3 className="text-xl text-white font-semibold mb-2">Standard Freight Shipping</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contiguous US:</strong> 5-10 business days after shipment</li>
              <li><strong>Alaska & Hawaii:</strong> 10-15 business days after shipment</li>
              <li><strong>US Territories:</strong> 15-20 business days after shipment</li>
            </ul>

            <h3 className="text-xl text-white font-semibold mb-2 mt-4">Expedited Options</h3>
            <p>
              Expedited shipping is available for select smaller items. Contact our customer service team at 
              <a href={getPhoneLink()} className="text-fire-500 hover:text-fire-400 ml-1">{contactInfo.phone.display}</a> to inquire about 
              expedited delivery options for your specific order.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">5. Freight Delivery</h2>
            <h3 className="text-xl text-white font-semibold mb-2">Curbside Delivery</h3>
            <p>
              Standard freight shipments include curbside delivery. The carrier will deliver your item to the curb or driveway 
              at your delivery address. You are responsible for moving the item from the curb to its final location.
            </p>

            <h3 className="text-xl text-white font-semibold mb-2 mt-4">White Glove Delivery (Optional)</h3>
            <p>
              For an additional fee, we offer white glove delivery service, which includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Scheduled delivery appointment</li>
              <li>Inside delivery to room of choice</li>
              <li>Unpacking and placement</li>
              <li>Debris removal</li>
            </ul>
            <p className="mt-4">
              Contact us at <a href="mailto:shipping@bbqpioneer.com" className="text-fire-500 hover:text-fire-400">shipping@bbqpioneer.com</a> for 
              white glove delivery pricing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">6. Order Tracking</h2>
            <p>
              Once your order ships, you will receive a shipping confirmation email with tracking information. You can track your 
              shipment using the carrier's website or contact our customer service team for assistance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">7. Delivery Requirements</h2>
            <p>Please ensure:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Someone 18+ is available to sign for delivery</li>
              <li>The delivery address is accessible for large freight trucks</li>
              <li>There is adequate space to maneuver large, heavy items</li>
              <li>You inspect the shipment for damage before signing</li>
            </ul>
            <p className="mt-4">
              <strong>Important:</strong> Note any visible damage on the delivery receipt before signing. This is crucial for 
              processing damage claims.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">8. Damaged or Lost Shipments</h2>
            <h3 className="text-xl text-white font-semibold mb-2">Visible Damage</h3>
            <p>
              If your shipment arrives with visible damage, note it on the delivery receipt and contact us immediately at 
              <a href={getEmailLink('support')} className="text-fire-500 hover:text-fire-400 ml-1">{contactInfo.email.support}</a>. 
              Take photos of the damage and packaging. Do not dispose of damaged items or packaging until instructed.
            </p>

            <h3 className="text-xl text-white font-semibold mb-2 mt-4">Concealed Damage</h3>
            <p>
              If you discover damage after delivery, contact us within 48 hours. We will work with you to file a claim with the 
              carrier and arrange for replacement or repair.
            </p>

            <h3 className="text-xl text-white font-semibold mb-2 mt-4">Lost Shipments</h3>
            <p>
              If your tracking information shows delivered but you have not received your order, contact us immediately. We will 
              investigate with the carrier and resolve the issue promptly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">9. Address Changes</h2>
            <p>
              To change your shipping address, contact us as soon as possible at 
              <a href={getEmailLink('orders')} className="text-fire-500 hover:text-fire-400 ml-1">{contactInfo.email.orders}</a>. 
              Once an order has shipped, we cannot modify the delivery address. In such cases, contact the carrier directly using 
              your tracking number.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">10. Refused or Undeliverable Shipments</h2>
            <p>
              If a shipment is refused or undeliverable due to an incorrect address or unavailability on your part, you will be 
              responsible for return shipping costs and may incur a restocking fee. Please ensure your contact information is 
              accurate and make arrangements to receive your delivery.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">11. International Shipping</h2>
            <p>
              At this time, BBQ Pioneer ships only within the United States and its territories. We do not offer international 
              shipping. For inquiries about international orders, please contact us at 
              <a href="mailto:international@bbqpioneer.com" className="text-fire-500 hover:text-fire-400 ml-1">international@bbqpioneer.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">12. Contact Us</h2>
            <p>For shipping questions or assistance, contact:</p>
            <div className="mt-4 p-4 bg-coal-800 rounded-lg">
              <p className="font-semibold text-white">{contactInfo.businessName} Shipping Support</p>
              <p>Email: <a href={getEmailLink('support')} className="text-fire-500 hover:text-fire-400">{contactInfo.email.support}</a></p>
              <p>Phone: <a href={getPhoneLink()} className="text-fire-500 hover:text-fire-400">{contactInfo.phone.display}</a></p>
              <p>Hours: {contactInfo.hours.support}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
