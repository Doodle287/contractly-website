import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Back to Home */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-600 text-sm">
            Last updated: April 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          {/* 1. Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              By accessing and using the Contractly AI application and services, you agree to be bound by these Terms & Conditions. If you do not agree to any part of these terms, you may not use our service. Your continued use of Contractly AI signifies your acceptance of these Terms & Conditions.
            </p>
          </section>

          {/* 2. Description of Service */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Contractly AI is an AI-powered contract analysis application that enables users to upload contracts and receive structured analysis. Our service provides the following features:
            </p>
            <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-2 mb-4">
              <li>Contract upload and storage</li>
              <li>AI-generated contract summaries</li>
              <li>Risk flag identification</li>
              <li>Key clause extraction and analysis</li>
              <li>Explanations of contract terms and provisions</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Contractly AI is designed to assist users in understanding contract documents and identifying important elements. The service is available exclusively through our mobile application.
            </p>
          </section>

          {/* 3. Account Registration */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              3. Account Registration
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To use Contractly AI, you must create an account. When registering, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-2">
              <li>Provide accurate, complete, and current information</li>
              <li>Maintain only one account per user</li>
              <li>Keep your account credentials confidential and secure</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          {/* 4. Credits and Purchases */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              4. Credits and Purchases
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Contractly AI operates on a credits-based model:
            </p>
            <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-2 mb-4">
              <li>New users receive starter credits upon account creation</li>
              <li>Additional credits are available for purchase directly within the application</li>
              <li>All purchases are processed through the Apple App Store or Google Play Store</li>
              <li>Your purchases are subject to the respective app store's terms of service and refund policies</li>
              <li>Credits are non-transferable and cannot be exchanged for cash or other benefits</li>
              <li>We reserve the right to modify credit pricing and allocation at any time</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              For questions about billing or purchases, please contact our support team using the information provided at the end of this document.
            </p>
          </section>

          {/* 5. Acceptable Use */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              5. Acceptable Use
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You agree to use Contractly AI only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behaviors include:
            </p>
            <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-2 mb-4">
              <li>Reverse engineering, decompiling, or disassembling the application</li>
              <li>Attempting to gain unauthorized access to our systems or servers</li>
              <li>Using automated tools, bots, or scrapers to access the service</li>
              <li>Uploading malicious content, viruses, or malware</li>
              <li>Circumventing security measures or access controls</li>
              <li>Using the service for illegal activities or in violation of any laws</li>
              <li>Attempting to interfere with the proper functioning of the application</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to suspend or terminate your access if we determine you have violated these acceptable use terms.
            </p>
          </section>

          {/* 6. AI-Generated Content Disclaimer - CRITICAL */}
          <section className="mb-10 border-2 border-amber-200 bg-amber-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              6. AI-Generated Content Disclaimer
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p className="font-semibold text-amber-900">
                IMPORTANT: PLEASE READ CAREFULLY
              </p>
              <p>
                All analysis, summaries, risk flags, and explanations provided by Contractly AI are generated by artificial intelligence and are provided for <strong>informational purposes only</strong>.
              </p>
              <p>
                <strong>Contractly AI analysis is NOT legal advice.</strong> It is not a substitute for professional legal counsel from a qualified attorney. While our AI is designed to identify common patterns and risks in contracts, it may miss important details, misinterpret provisions, or fail to identify all potential issues.
              </p>
              <p>
                <strong>We do not guarantee the accuracy, completeness, or reliability</strong> of any AI-generated analysis. The service is provided on an "as-is" basis, and we make no representations about the suitability of the analysis for any particular purpose.
              </p>
              <p>
                <strong>For any legal decisions, you should consult with a qualified legal professional.</strong> Do not rely solely on Contractly AI analysis for contract negotiations, execution, or legal determinations. A licensed attorney should always review important contracts before you sign.
              </p>
              <p>
                <strong>Contractly AI is not a law firm</strong> and does not provide legal services. Your use of Contractly AI does not create an attorney-client relationship.
              </p>
            </div>
          </section>

          {/* 7. Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              All content, features, and functionality of the Contractly AI application—including but not limited to software, code, design, text, graphics, interfaces, and the AI analysis engine—are owned by Contractly AI, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You may not reproduce, distribute, transmit, display, perform, publish, license, create derivative works from, or sell any content, application, or services obtained through Contractly AI without our express written permission. However, you retain full ownership of any documents or contracts you upload to our service.
            </p>
          </section>

          {/* 8. User Content */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              8. User Content
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You are solely responsible for the contracts and documents you upload to Contractly AI. By uploading content, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-2 mb-4">
              <li>You own or have the right to use the content you upload</li>
              <li>The content does not infringe upon any third-party intellectual property rights</li>
              <li>The content does not violate any applicable laws or regulations</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              By uploading documents to Contractly AI, you grant us a limited, non-exclusive license to access, process, analyze, and store your documents solely for the purpose of providing our services to you. We will not use your documents for any other purpose without your explicit consent.
            </p>
          </section>

          {/* 9. Privacy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              9. Privacy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Your use of Contractly AI is also governed by our Privacy Policy. Please review our <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link> to understand our practices regarding the collection and use of your personal information and uploaded documents.
            </p>
          </section>

          {/* 10. Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, Contractly AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunity, arising out of or related to your use of the service, even if we have been advised of the possibility of such damages.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our total liability for any claim arising out of or relating to these Terms & Conditions or the service shall not exceed the amount you have paid to Contractly AI in the twelve (12) months preceding the claim, or $100, whichever is greater.
            </p>
          </section>

          {/* 11. Disclaimers */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              11. Disclaimers
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>AS-IS BASIS:</strong> Contractly AI is provided on an "as-is" and "as-available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the service or the information, content, or materials provided through the service.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>NO WARRANTY OF ACCURACY:</strong> While we strive to provide accurate AI analysis, we make no warranty that the analysis is accurate, complete, reliable, or free from errors. AI-generated content may contain mistakes or may fail to identify important issues.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>NO GUARANTEE OF SERVICE:</strong> We do not guarantee that the service will be uninterrupted, secure, or error-free. Contractly AI may experience downtime, service disruptions, or technical issues beyond our control.
            </p>
          </section>

          {/* 12. Service Modifications */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              12. Service Modifications
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Contractly AI reserves the right to modify, suspend, or discontinue any feature or functionality of the service at any time without notice. We may also:
            </p>
            <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-2 mb-4">
              <li>Change the pricing structure or credit allocation</li>
              <li>Modify the user interface or features</li>
              <li>Update these Terms & Conditions</li>
              <li>Suspend the service temporarily for maintenance or updates</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              We will attempt to provide notice of significant changes, but your continued use of Contractly AI constitutes acceptance of any modifications.
            </p>
          </section>

          {/* 13. Account Termination */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              13. Account Termination
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Termination by Us:</strong> We reserve the right to suspend or terminate your account if we believe you have violated these Terms & Conditions or for any other reason at our sole discretion.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Termination by You:</strong> You may delete your account at any time. To learn about the account deletion process, please visit our <Link to="/delete-account" className="text-blue-600 hover:text-blue-700 underline">Delete Account</Link> page.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Upon account termination, your access to the service will be revoked, although we may retain certain information as required by law or for legitimate business purposes.
            </p>
          </section>

          {/* 14. Governing Law */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              14. Governing Law
            </h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* 15. Dispute Resolution */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              15. Dispute Resolution
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have a dispute with Contractly AI, we encourage you to attempt resolution through good faith negotiation. Please contact our support team to discuss any concerns.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Any dispute that cannot be resolved through good faith negotiation within thirty (30) days shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in the State of Delaware, United States. Each party shall bear its own costs of arbitration unless the arbitrator determines otherwise. You may opt out of this arbitration agreement by sending written notice to support@contractly.ai within 30 days of first accepting these Terms.
            </p>
          </section>

          {/* 16. Contact Information */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              16. Contact Information
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have questions about these Terms & Conditions or need to report a violation, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg text-slate-700 space-y-2">
              <p>
                <strong>Email:</strong> support@contractly.ai
              </p>
              <p>
                <strong>Mailing Address:</strong>
              </p>
              <p className="ml-4">
                Address available upon request
              </p>
            </div>
          </section>

          {/* Effective Date Notice */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              <strong>Effective Date:</strong> April 15, 2026
            </p>
            <p className="text-sm text-slate-600 mt-2">
              These Terms & Conditions were last updated in April 2026. We reserve the right to update these terms at any time. Your continued use of Contractly AI following any updates constitutes your acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
