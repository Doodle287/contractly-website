import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Navigation Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-600">
            Last updated: April 2026
          </p>
          <p className="text-sm text-slate-600 mt-1">
            Effective Date: April 15, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-700 leading-relaxed">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Contractly AI ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, Contractly AI (the "App"), and the services we provide through it.
            </p>
            <p className="mt-4">
              Contractly AI is an AI-powered contract analysis application designed to help you understand, extract insights from, and manage your legal documents with ease. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our App.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>

            <div className="space-y-6">
              {/* Account Information */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Account Information</h3>
                <p>
                  When you create an account, we collect information necessary to authenticate and identify you, including your email address, display name or username, password (hashed for security), phone number (optional), and profile information you choose to provide. We also collect authentication data, including login timestamps and authentication methods used.
                </p>
              </div>

              {/* Uploaded Documents */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Uploaded Documents</h3>
                <p>
                  Any contracts or legal documents you upload to the App for analysis are collected and stored on our secure servers. This includes PDF files, images, and other document formats you submit for processing. We retain your uploaded documents as long as your account remains active and you choose to keep them stored in the App.
                </p>
              </div>

              {/* Extracted and Processed Data */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Extracted and Processed Data</h3>
                <p>
                  When you request analysis, we extract text and data from your uploaded documents using optical character recognition (OCR) and other processing technologies. The extracted content is processed through our AI analysis engine to generate insights, summaries, key terms identification, risk assessments, and other analytical outputs. This processed data and the analysis results are stored as part of your analysis history.
                </p>
              </div>

              {/* Usage Data */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Usage Data</h3>
                <p>
                  We collect information about your interactions with the App, including which features you use, how frequently you use them, the types of analyses you perform, documents you upload, analysis results you view, and how long you spend in the App. This data helps us understand usage patterns and improve our service.
                </p>
              </div>

              {/* Device Information */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Device Information</h3>
                <p>
                  We collect technical information about the devices you use to access the App, including device type (iPhone, iPad, Android device), operating system and version, app version, unique device identifiers, mobile network information, and device settings related to the App's functionality.
                </p>
              </div>

              {/* Purchase Information */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Purchase Information</h3>
                <p>
                  If you purchase credits, analysis packages, or premium features through the App, we collect purchase-related information including transaction IDs, purchase amounts, subscription tier information, and billing period details. Payment processing is handled by third-party payment platforms (Apple App Store and Google Play Store), and we do not directly collect or store complete credit card information.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Providing, maintaining, and improving the Contractly AI service and user experience</li>
              <li>Processing your uploaded documents through our AI analysis engine to generate requested analyses</li>
              <li>Maintaining your analysis history and enabling you to access previous analyses and documents</li>
              <li>Authenticating your account and ensuring the security of your data</li>
              <li>Communicating with you about your account, updates, or changes to our service</li>
              <li>Sending you transactional emails (purchase confirmations, subscription updates, account notifications)</li>
              <li>Analyzing usage patterns to enhance app functionality and performance</li>
              <li>Complying with legal obligations, court orders, and government requests</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Protecting the rights, property, and safety of Contractly AI, our users, and the public</li>
            </ul>
          </section>

          {/* 4. AI Processing */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. AI Processing and Language Models</h2>
            <p className="mb-4">
              Contractly AI uses advanced artificial intelligence and language models to analyze your uploaded documents and provide insights. Here's what you should know about this process:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Your uploaded contracts are processed using AI language models to extract information, identify key terms, assess risks, and generate analysis summaries</li>
              <li>To provide these AI-powered analysis features, extracted data from your documents may be sent to third-party AI service providers who operate and maintain the language models we use</li>
              <li>We have data processing agreements in place with all third-party AI providers to ensure appropriate security and confidentiality measures</li>
              <li>We do <strong>not</strong> use your uploaded contracts, extracted content, or analysis results to train, fine-tune, or improve AI models</li>
              <li>Your documents are processed with appropriate safeguards to protect sensitive information, though you should avoid uploading documents containing extremely sensitive personal information if you have concerns</li>
            </ul>
          </section>

          {/* 5. Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Third-Party Services and Integrations</h2>
            <p className="mb-4">
              Contractly AI uses several third-party services to operate and provide functionality. These third parties may collect and process information as described below:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>App Store Platforms:</strong> Apple App Store and Google Play Store handle distribution, downloads, and app management. These platforms may collect data subject to their own privacy policies</li>
              <li><strong>AI Processing Providers:</strong> Third-party AI and machine learning services process your document content to generate analyses as described in Section 4</li>
              <li><strong>Analytics Providers:</strong> We use analytics tools to understand app usage, user behavior, and performance metrics. These tools may collect anonymized or aggregated usage data</li>
              <li><strong>Subscription Management Platforms:</strong> We use third-party subscription management platforms to manage recurring subscriptions, process purchases, and handle billing cycles</li>
              <li><strong>Cloud Storage and Infrastructure Providers:</strong> We use reputable cloud service providers to host our infrastructure, store data, and ensure service reliability</li>
            </ul>
            <p className="mt-4">
              We do not sell, trade, or share your personal information with third parties for their marketing purposes. Third parties are contractually obligated to use your information only as necessary to provide the services they offer to Contractly AI.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Here's our retention approach:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Analysis History:</strong> Your analysis history is retained while your account remains active, allowing you to review previous analyses and documents</li>
              <li><strong>Uploaded Documents:</strong> Documents you upload are retained while your account is active. Once you delete a document from the App, we do not retain it for analysis purposes</li>
              <li><strong>Account Data:</strong> When you delete your account, all associated data including account information, documents, and analysis history are removed from our systems within a reasonable timeframe</li>
              <li><strong>Legal Requirements:</strong> We may retain certain information longer if required by law, regulation, or legal proceedings</li>
              <li><strong>Usage Data:</strong> Aggregated and anonymized usage data may be retained for longer periods to improve our service</li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Data Security</h2>
            <p className="mb-4">
              We implement comprehensive security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Encryption of data in transit using industry-standard TLS/SSL protocols</li>
              <li>Encryption of sensitive data at rest on our secure servers</li>
              <li>Secure authentication mechanisms and password hashing</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls limiting employee access to personal information to authorized personnel only</li>
              <li>Secure deletion procedures for data when it is no longer needed</li>
            </ul>
            <p className="mt-4">
              While we employ reasonable security measures, no method of transmission over the internet or storage is completely secure. We cannot guarantee absolute security, and any transmission of data is at your own risk. We encourage you to use strong passwords and keep your account credentials confidential.
            </p>
          </section>

          {/* 8. Your Privacy Rights */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Access:</strong> You have the right to access the personal information we hold about you and request a copy</li>
              <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete personal information</li>
              <li><strong>Deletion:</strong> You have the right to request deletion of your personal information, subject to certain legal exceptions</li>
              <li><strong>Data Portability:</strong> Where applicable, you may request your data in a structured, commonly used, machine-readable format</li>
              <li><strong>Opt-Out of Communications:</strong> You can opt out of promotional emails or non-essential communications by following the unsubscribe instructions in our messages</li>
              <li><strong>Object to Processing:</strong> In certain circumstances, you may object to how we process your information</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please use the in-app support option under <strong>Settings → Help</strong> with your request and account details. A direct support channel will be published here once available.
            </p>
          </section>

          {/* 8a. EEA / UK Users (GDPR) */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8a. Additional Rights for EEA and UK Users (GDPR)</h2>
            <p className="mb-4">
              If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR) and the UK GDPR.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Lawful Basis for Processing</h3>
                <p>
                  We process your personal information on the following lawful bases: (i) <strong>performance of a contract</strong> with you (to provide the Contractly AI service); (ii) your <strong>consent</strong> (where required, for example for non-essential analytics); (iii) our <strong>legitimate interests</strong> in operating, securing, and improving the service; and (iv) <strong>compliance with legal obligations</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">International Data Transfers</h3>
                <p>
                  Your information, including uploaded documents and extracted content, may be transferred to and processed in countries outside the EEA or UK, including the United States, where our AI processing providers and cloud infrastructure are located. Where we transfer personal data outside the EEA or UK, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses (SCCs), the UK International Data Transfer Addendum, or adequacy decisions where applicable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Right to Lodge a Complaint</h3>
                <p>
                  You have the right to lodge a complaint with your local data protection supervisory authority if you believe our processing of your personal information violates applicable law. A list of EEA supervisory authorities is available at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>. UK users may contact the Information Commissioner's Office at <a href="https://ico.org.uk" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Withdrawing Consent</h3>
                <p>
                  Where we rely on your consent, you may withdraw it at any time without affecting the lawfulness of processing carried out before withdrawal. To withdraw consent, please use the in-app support option under <strong>Settings → Help</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* 8b. California Residents (CCPA / CPRA) */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8b. Additional Rights for California Residents (CCPA / CPRA)</h2>
            <p className="mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), provides you with additional rights regarding your personal information.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Categories of Personal Information We Collect</h3>
                <p>
                  In the preceding 12 months we have collected the following categories of personal information described in Section 2 of this Policy: identifiers (e.g., email, account ID), commercial information (purchases), internet or other electronic network activity (usage data), geolocation (general, derived from IP), and inferences drawn from the foregoing. Sensitive personal information is limited to account credentials.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">No Sale or Sharing of Personal Information</h3>
                <p>
                  We do <strong>not</strong> sell your personal information, and we do <strong>not</strong> share your personal information for cross-context behavioral advertising as those terms are defined under the CCPA/CPRA.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Your California Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                  <li>Know what personal information we collect, use, disclose, and the categories of sources and recipients</li>
                  <li>Request deletion of your personal information, subject to certain exceptions</li>
                  <li>Correct inaccurate personal information we maintain about you</li>
                  <li>Limit the use and disclosure of sensitive personal information</li>
                  <li>Not be discriminated against for exercising your privacy rights</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">How to Exercise Your Rights</h3>
                <p>
                  To exercise any of these rights, use the in-app support option under <strong>Settings → Help</strong> while signed in to the account associated with your request. We may need to verify your identity before fulfilling your request. You may also designate an authorized agent to make requests on your behalf, in which case we will require written authorization and verification.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Account Deletion */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Account Deletion</h2>
            <p className="mb-4">
              You can delete your Contractly AI account at any time through the settings or account management section of the App. When you delete your account:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Your account information is removed from our active systems</li>
              <li>Your uploaded documents are permanently deleted</li>
              <li>Your analysis history is removed</li>
              <li>Your profile and all associated data are erased</li>
              <li>Any active subscriptions or memberships are cancelled</li>
            </ul>
            <p className="mt-4">
              For detailed instructions on how to delete your account, please visit our <Link to="/delete-account" className="text-blue-600 hover:text-blue-800 underline">account deletion page</Link>.
            </p>
            <p className="mt-4">
              Note that some information may be retained in backup systems for a limited period for security and legal compliance purposes, but will not be accessible through your account.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Children's Privacy</h2>
            <p>
              Contractly AI is not intended for use by children under the age of 13, or under the applicable age of digital consent in your jurisdiction (which may be as high as 16 in parts of the European Economic Area). We do not knowingly collect personal information from children under these ages. If we become aware that a child under the applicable age has provided us with personal information, we will take steps to delete such information and terminate the child's account promptly.
            </p>
            <p className="mt-4">
              If you are a parent or guardian and believe your child has created an account with us, please reach us through the in-app support option under <strong>Settings → Help</strong> so we can act promptly.
            </p>
          </section>

          {/* 11. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Last updated" date at the top of this page and, for significant changes, we may provide additional notice such as a prominent alert in the App or an email notification.
            </p>
            <p className="mt-4">
              Your continued use of Contractly AI following the posting of revised Privacy Policy means that you accept and agree to the changes. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy, our privacy practices, or how we handle your personal information, please contact us through the in-app support option:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
              <p>
                <strong>Company Name:</strong> <span>Contractly AI</span>
              </p>
              <p>
                <strong>Support:</strong> In-app, under <strong>Settings → Help</strong>
              </p>
              <p>
                <strong>Mailing Address:</strong>
                <br />
                Address available upon request
              </p>
              <p className="text-sm text-slate-600">
                A direct contact email and address will be published here once available.
              </p>
            </div>
            <p className="mt-4">
              We will respond to your inquiry within 30 days or as required by applicable law. For data subject access requests or other formal privacy inquiries, we will provide you with the information or assistance you need in compliance with applicable regulations.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-8 mt-12 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Thank you for trusting Contractly AI with your important documents. We're committed to protecting your privacy while delivering the powerful contract analysis capabilities you need.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
