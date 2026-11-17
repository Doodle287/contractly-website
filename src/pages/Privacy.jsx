import React from 'react';
import { Link } from 'react-router-dom';
import { SUPPORT_EMAIL } from '../config/links';

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
            Last updated: November 2026
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
              Contractly AI is an AI-powered application that helps you understand contracts and other documents: their risks, key dates and the questions worth asking before you sign. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our App.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Account Information</h3>
                <p>
                  When you sign in we receive your email address and, if you provide it, your name. You can sign in with Apple, with Google, or with a one-time code sent to your email address. Apple and Google give us an account identifier and, depending on your choices, your name and email (Apple may give us a private relay address instead). Accounts created with earlier versions of the App may have a password; passwords are handled by our authentication provider and stored only in hashed form.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Your Documents</h3>
                <p>
                  The PDF files and photos you choose stay on your phone. They are not uploaded to our servers. The App reads the text of the document on your phone (for photos, using the phone's own text recognition) and, when you ask for an analysis, sends only that text to our server. We store the document's name, its type and page count, a one-way fingerprint (hash) of the text that lets us recognise the same document if you analyse it again, and the analysis result. The result includes short quotes of the lines it refers to (so you can see where each finding comes from) and the key dates it found.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Usage and Diagnostic Data</h3>
                <p>
                  We use an analytics service to understand how the App is used: for example that a sign-in succeeded and with which method, that an analysis started, finished or failed (with the document type, the overall risk level, the number of findings and the reason for a failure), and when the App is opened or closed. These events include the device model, operating system, app version, language, time zone and network type. They do not include your name, email, account identifier or any document text, and they are not linked to your account.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">App Installation Information</h3>
                <p>
                  To keep your credit balance correct, the App sends a random installation identifier created by the App, together with the device model, operating system version and app version. This identifier is not your phone's advertising identifier or hardware identifier.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Free-Credit Abuse Prevention</h3>
                <p>
                  New accounts receive a few free welcome credits once per person and once per phone. To enforce this, when the App asks for those credits we check a one-way, keyed hash of your sign-in identifier (your email address, or your Apple or Google account ID) and a phone check: on iPhone, Apple's DeviceCheck service, which lets us keep one yes/no flag with Apple saying that this iPhone already received free credits; on Android, the app-specific Android ID, which is hashed on your phone before it is sent and hashed again with a secret key on our servers. We never store your raw email, account ID or Android ID for this purpose. These values are used only to prevent abuse of the free credits. They are not used for advertising, tracking, analytics or profiling, and they are not shared with anyone (on iPhone, Apple's DeviceCheck service sees only Apple's own device token).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Purchase Information</h3>
                <p>
                  Credits are one-time in-app purchases; there is no subscription. Payments are processed by Apple (App Store) or Google (Google Play); we never receive your card details. Our purchase provider, RevenueCat, receives your App account identifier and the store's purchase details so that credits are added to the right account. We keep a record of credits added and used.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">What We Do Not Collect</h3>
                <p>
                  The App does not use your location, contacts, microphone or advertising identifier, does not show ads and does not track you across other companies' apps or websites. The camera and photo library are used only when you choose to scan or pick a document, and those images stay on your phone.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To analyse the documents you choose and show you the results, including your analysis history</li>
              <li>To sign you in, keep your account secure and send you sign-in and account-deletion codes by email</li>
              <li>To add, track and restore your credits</li>
              <li>To prevent abuse of the free welcome credits and other fraud</li>
              <li>To understand, in aggregate, how the App is used and to fix problems</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-4">We do not use your information for advertising, and we do not sell it.</p>
          </section>

          {/* 4. AI Processing */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. AI Processing</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Before your first analysis the App asks for your consent to send document text for AI processing.</li>
              <li>The text read from your document is sent from our server to OpenAI, which runs the language model that produces the analysis. OpenAI processes it on our behalf; under OpenAI's API terms it is not used to train their models and may be kept by OpenAI for a limited period (up to 30 days) for abuse monitoring.</li>
              <li>We do <strong>not</strong> use your documents, their text or your analysis results to train or improve AI models.</li>
              <li>Analyses are generated automatically and can be wrong or incomplete. They are information to help you understand a document, not legal advice.</li>
            </ul>
          </section>

          {/* 5. Service Providers */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Service Providers</h2>
            <p className="mb-4">We use these providers to run the App. They process data only on our behalf and under their own security commitments:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Supabase</strong> — hosting of our database, sign-in and server functions</li>
              <li><strong>OpenAI</strong> — AI analysis of document text (Section 4)</li>
              <li><strong>RevenueCat</strong> — management of in-app purchases</li>
              <li><strong>PostHog</strong> — usage analytics that are not linked to your account</li>
              <li><strong>Resend</strong> — delivery of sign-in and account-deletion code emails</li>
              <li><strong>Apple and Google</strong> — Sign in with Apple / Google, app distribution, payments, and Apple DeviceCheck</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent or share your personal information with third parties for their own marketing.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Analyses:</strong> kept until you delete them in History or delete your account</li>
              <li><strong>Your files and photos:</strong> stay on your phone; the App's private copy is removed when you sign out or delete your account</li>
              <li><strong>Account data:</strong> deleted when you delete your account, together with your analyses and credit records</li>
              <li><strong>Free-credit records:</strong> when you delete your account, we keep the keyed one-way hash of your sign-in identifier (and, on Android, of the phone identifier) only to stop the free welcome credits from being claimed again. It cannot be turned back into your email or ID, is no longer linked to your account, and is used for nothing else</li>
              <li><strong>Installation records:</strong> the random installation identifier with device model and versions (Section 2) may be kept after account deletion; it is not linked to your name or email</li>
              <li><strong>Purchase records:</strong> Apple, Google and RevenueCat keep records of purchases under their own policies, as required for payments and refunds</li>
              <li><strong>Analytics:</strong> usage events that are not linked to your account may be kept in aggregate to improve the App</li>
              <li><strong>Legal requirements:</strong> we may keep information longer where the law requires it</li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Data Security</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>All data the App sends travels encrypted (HTTPS/TLS)</li>
              <li>Each account can access only its own data (database access rules enforced on the server)</li>
              <li>Your sign-in session is kept in your phone's secure storage</li>
              <li>Original files are kept in the App's private storage and excluded from device backups</li>
            </ul>
            <p className="mt-4">
              No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 8. Your Privacy Rights */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on where you live, you may have the right to access, correct, delete or receive a copy of your personal information, and to object to or restrict certain processing.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>You can see your analyses in History and delete any of them there</li>
              <li>You can change your name in Profile</li>
              <li>You can delete your account in Profile → Delete account (see Section 9)</li>
            </ul>
            <p className="mt-4">
              For any other request, contact us through our <Link to="/support" className="text-blue-600 hover:text-blue-800 underline">support page</Link> from the email address of your account.
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
                  We process your personal information on the following lawful bases: (i) <strong>performance of a contract</strong> with you (to provide the Contractly AI service); (ii) your <strong>consent</strong> (for sending document text for AI processing); (iii) our <strong>legitimate interests</strong> in operating, securing and improving the service, including analytics that are not linked to your account and preventing abuse of free credits; and (iv) <strong>compliance with legal obligations</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">International Data Transfers</h3>
                <p>
                  Your information, including the text read from your documents, may be transferred to and processed in countries outside the EEA or UK, including the United States, where our AI processing providers and cloud infrastructure are located. Where we transfer personal data outside the EEA or UK, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses (SCCs), the UK International Data Transfer Addendum, or adequacy decisions where applicable.
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
                  Where we rely on your consent, you may withdraw it at any time without affecting the lawfulness of processing carried out before withdrawal. To withdraw consent, stop requesting analyses and contact us through our <Link to="/support" className="text-blue-600 hover:text-blue-800 underline">support page</Link>; you can also delete your account at any time.
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
                  In the preceding 12 months we have collected the following categories of personal information described in Section 2 of this Policy: identifiers (e.g., email, account ID), commercial information (purchases), internet or other electronic network activity (usage data not linked to your account), and the content of documents you choose to analyse. We do not collect precise geolocation.
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
                  To exercise any of these rights, contact us through our <Link to="/support" className="text-blue-600 hover:text-blue-800 underline">support page</Link> from the email address of the account concerned. We may need to verify your identity before fulfilling your request. You may also designate an authorized agent to make requests on your behalf, in which case we will require written authorization and verification.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Account Deletion */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Account Deletion</h2>
            <p className="mb-4">
              You can delete your Contractly AI account at any time in the App under <strong>Profile → Delete account</strong>. When you delete your account:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Your account, profile and sign-in details are deleted</li>
              <li>Your analyses, their results and your credit records are deleted</li>
              <li>The App removes its private copies of your files from your phone</li>
              <li>If you signed in with Apple, we ask Apple to revoke the App's access</li>
              <li>Unused credits are lost; purchases already made are not refunded by deletion</li>
            </ul>
            <p className="mt-4">
              For detailed instructions on how to delete your account, please visit our <Link to="/delete-account" className="text-blue-600 hover:text-blue-800 underline">account deletion page</Link>.
            </p>
            <p className="mt-4">
              Some records are kept after deletion as described in Section 6: the free-credit hashes, installation records, and purchase records held by Apple, Google and RevenueCat.
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
              If you are a parent or guardian and believe your child has created an account with us, please contact us through our <Link to="/support" className="text-blue-600 hover:text-blue-800 underline">support page</Link> so we can act promptly.
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
              If you have questions, concerns, or requests regarding this Privacy Policy, our privacy practices, or how we handle your personal information, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
              <p>
                <strong>Company Name:</strong> <span>Contractly AI</span>
              </p>
              <p>
                <strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:text-blue-800 underline">{SUPPORT_EMAIL}</a>
              </p>
              <p>
                <strong>Support page:</strong> <Link to="/support" className="text-blue-600 hover:text-blue-800 underline">contractly-ai.vercel.app/support</Link>
              </p>
              <p>
                <strong>Mailing Address:</strong>
                <br />
                Address available upon request
              </p>
            </div>
            <p className="mt-4">
              We will respond to your inquiry within 30 days or as required by applicable law. For data subject access requests or other formal privacy inquiries, we will provide you with the information or assistance you need in compliance with applicable regulations.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-8 mt-12 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Thank you for trusting Contractly AI with your important documents.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
