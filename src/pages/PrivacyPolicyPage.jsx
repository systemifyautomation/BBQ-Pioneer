import SEO from "../components/SEO";
import { contactInfo, getPhoneLink, getEmailLink, getFullAddress } from "../data/contactInfo";

export default function PrivacyPolicyPage() {
  const updatedDate = "March 1, 2026";

  return (
    <div className="min-h-screen bg-coal-950 text-coal-200">
      <SEO
        title="Privacy Policy"
        description="BBQ Pioneer privacy policy - Learn how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-4">
          PRIVACY POLICY
        </h1>
        <p className="text-coal-400 mb-8">Last Updated: {updatedDate}</p>

        <div className="prose prose-invert prose-coal max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">1. Introduction</h2>
            <p>
              BBQ Pioneer LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website bbqpioneer.com and purchase our products.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">2. Information We Collect</h2>
            <h3 className="text-xl text-white font-semibold mb-2">Personal Information</h3>
            <p>When you make a purchase or create an account, we collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email, phone number, shipping address)</li>
              <li>Billing information and payment details (processed securely through our payment processor)</li>
              <li>Order history and preferences</li>
              <li>Communications with customer service</li>
            </ul>

            <h3 className="text-xl text-white font-semibold mb-2 mt-4">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate about your purchases, including shipping updates</li>
              <li>Provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website, products, and services</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">4. Information Sharing</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Payment processors, shipping carriers, email service providers</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. 
              You can control cookie preferences through your browser settings. Disabling cookies may limit some website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including SSL encryption for data transmission 
              and secure storage systems. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to or restrict certain processing activities</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@bbqpioneer.com" className="text-fire-500 hover:text-fire-400">privacy@bbqpioneer.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">8. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
              comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">9. Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal information 
              from children under 18. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">10. International Users</h2>
            <p>
              Our website is operated in the United States. If you access our site from outside the US, your information may be 
              transferred to and processed in the United States where data protection laws may differ.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy periodically. We will notify you of significant changes by posting the new policy 
              on this page and updating the "Last Updated" date. Your continued use of our website constitutes acceptance of changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">12. Contact Us</h2>
            <p>For questions about this privacy policy or our data practices, contact:</p>
            <div className="mt-4 p-4 bg-coal-800 rounded-lg">
              <p className="font-semibold text-white">{contactInfo.legalName}</p>
              <p>Email: <a href={getEmailLink('privacy')} className="text-fire-500 hover:text-fire-400">{contactInfo.email.privacy}</a></p>
              <p>Phone: <a href={getPhoneLink()} className="text-fire-500 hover:text-fire-400">{contactInfo.phone.display}</a></p>
              <p>Address: {getFullAddress()}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
