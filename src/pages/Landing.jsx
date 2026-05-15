import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Zap,
  AlertTriangle,
  FileText,
  Lightbulb,
  Upload,
  Clock,
  CheckCircle,
  X as XIcon,
  ChevronDown,
  Lock,
  Smartphone,
  BarChart3,
  Users,
  Shield,
} from 'lucide-react';
import { IOS_APP_URL, ANDROID_APP_URL } from '../config/links';

const Landing = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Contractly AI?',
      answer:
        'Contractly AI is an AI-powered mobile app that analyzes contracts in seconds. Upload any contract, and our AI extracts key clauses, flags risks, and provides a plain-English summary — without any legal jargon.',
    },
    {
      question: 'How does the AI analysis work?',
      answer:
        'Simply upload or photograph your contract. Our AI engine processes the document, identifies important clauses, detects potential risks, and structures the analysis into an easy-to-understand format. The entire process takes just seconds.',
    },
    {
      question: 'Is this legal advice?',
      answer:
        'No. Contractly AI provides AI-generated analysis for informational purposes only. It is not a substitute for professional legal advice. Always consult with a qualified attorney for legal guidance.',
    },
    {
      question: 'What types of contracts can I analyze?',
      answer:
        'Contractly AI is sharpest on UAE employment offers, Ejari tenancy contracts, DIFC and free-zone agreements, freelance/consultancy contracts, NDAs, and vendor agreements. Most other contracts work too — these are just our sharpest categories.',
    },
    {
      question: 'How do credits work?',
      answer:
        'Every new user gets 3 free analyses on signup — no card required. After that, 1 credit = 1 contract analysis. Buy more anytime: Starter pack (3 credits) for $0.99, or larger packs from $4.99. No subscription, no auto-renew, credits never expire.',
    },
    {
      question: 'What languages are supported?',
      answer:
        'English now. Arabic, Russian, and Hindi coming soon. The app already understands contracts written in those languages — the analysis just outputs in English for now.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes. All data is encrypted in transit and at rest. Contracts are processed securely and not permanently stored on our servers. You maintain full control over your data and can delete your account anytime.',
    },
    {
      question: 'Can I delete my account and data?',
      answer:
        'Absolutely. You can delete your account and all associated data at any time from your account settings. Your data will be permanently removed from our servers within 30 days.',
    },
    {
      question: 'What file formats are supported?',
      answer:
        'Contractly AI supports PDF files, image uploads (JPG, PNG), and direct camera capture. You can photograph a physical contract or upload a digital version — we handle all formats.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base font-semibold text-blue-600 mb-4 tracking-wide uppercase">
            Built for the UAE · Useful across the GCC
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Don&apos;t Sign What You Didn&apos;t Read
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contractly is the AI contract reviewer that finds the red flags hiding in your UAE employment offer, Ejari tenancy, freelance agreement, or NDA — in 30 seconds, in plain English.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download for iOS
            </a>
            <a
              href={ANDROID_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download for Android
            </a>
          </div>

          <p className="text-sm text-slate-500">
            3 free analyses · No card · 1 credit = 1 contract
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              The traps you&apos;d miss. We find them in seconds.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Most contracts in the UAE bury the real terms in clause 18, page 9. We read every page so you don&apos;t have to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">📄</div>
              <p className="text-lg font-semibold text-slate-900 mb-2">
                Employment Offers
              </p>
              <p className="text-slate-600">
                Probation traps, gratuity-shrinking basic-salary structures, GCC-wide non-competes, IP grabs, asymmetric notice periods, clawback clauses.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🏠</div>
              <p className="text-lg font-semibold text-slate-900 mb-2">
                Tenancy &amp; Ejari
              </p>
              <p className="text-slate-600">
                Hidden maintenance liabilities, renewal-rate traps, security deposit clauses, early-exit penalties, eviction-risk language.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🤝</div>
              <p className="text-lg font-semibold text-slate-900 mb-2">
                Freelance &amp; NDAs
              </p>
              <p className="text-slate-600">
                Overbroad IP assignment, GCC-wide non-competes, indefinite confidentiality, payment terms, scope-creep traps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need to Review a Contract
            </h2>
            <p className="text-lg text-slate-600">
              Powerful features designed to save you time and protect your interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                AI Contract Summary
              </h3>
              <p className="text-slate-600">
                Get an instant structured overview of any contract in plain English, highlighting the most important terms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Risk Detection
              </h3>
              <p className="text-slate-600">
                Automatic flagging of concerning clauses and potentially unfavorable terms that could impact you.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Key Clause Extraction
              </h3>
              <p className="text-slate-600">
                Identifies the clauses that matter most, so you know exactly what to pay attention to.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Full Explanation
              </h3>
              <p className="text-slate-600">
                Complex legal language broken down into clear, simple terms anyone can understand.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Upload className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Multiple Upload Methods
              </h3>
              <p className="text-slate-600">
                PDF, photo upload, or direct camera capture. Upload however is easiest for you.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Saved History
              </h3>
              <p className="text-slate-600">
                Access past analyses anytime. Build a personal contract library you can reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Three Steps. Zero Legal Jargon.
            </h2>
            <p className="text-lg text-slate-600">
              Get clarity on any contract in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 text-center">
                  Upload Your Contract
                </h3>
                <p className="text-slate-600 text-center">
                  PDF, photo, or snap with your camera. We handle all formats.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-slate-300" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 text-center">
                  AI Analyzes Instantly
                </h3>
                <p className="text-slate-600 text-center">
                  Extracts text, identifies risks, and pulls out key clauses in seconds.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-slate-300" />
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3 text-center">
                  Review Your Results
                </h3>
                <p className="text-slate-600 text-center">
                  Structured summary, risk flags, and full explanation. All crystal clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not ChatGPT Section */}
      <section id="why-not-chatgpt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Why Not Just Use ChatGPT or Claude?
            </h2>
            <p className="text-lg text-slate-600">
              General AI tools are powerful, but they're not designed for contracts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Generic AI */}
            <div className="rounded-2xl p-10 bg-slate-50 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                General AI Chat
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <XIcon className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Requires Prompt Writing</p>
                    <p className="text-sm text-slate-600">You need to know what to ask</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <XIcon className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Unstructured Responses</p>
                    <p className="text-sm text-slate-600">Results vary by prompt quality</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <XIcon className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">No Saved History</p>
                    <p className="text-sm text-slate-600">You need to store and organize results</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <XIcon className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">No Dedicated Workflow</p>
                    <p className="text-sm text-slate-600">Not built specifically for contracts</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <XIcon className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Inconsistent Results</p>
                    <p className="text-sm text-slate-600">Same contract, different analysis each time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contractly AI */}
            <div className="rounded-2xl p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contractly AI
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">No Prompts Needed</p>
                    <p className="text-sm text-slate-600">Upload and get instant analysis</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Structured Analysis</p>
                    <p className="text-sm text-slate-600">Consistent format every time</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Saved History</p>
                    <p className="text-sm text-slate-600">Access all past analyses in one place</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Purpose-Built Workflow</p>
                    <p className="text-sm text-slate-600">Designed specifically for contracts</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">Reliable Results</p>
                    <p className="text-sm text-slate-600">Same quality analysis every time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 text-center">
            <p className="text-lg text-slate-700">
              General AI tools are powerful, but they're not designed for contract review. <span className="font-semibold">Contractly AI is a focused product</span> that gives you structured, reliable results — without needing to know what to ask.
            </p>
          </div>
        </div>
      </section>

      {/* Why Users Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Built for Real People, Not Lawyers
            </h2>
            <p className="text-lg text-slate-600">
              Works for anyone reviewing a contract
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Freelancer */}
            <div className="rounded-2xl p-8 bg-white border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Freelancer
              </h3>
              <p className="text-slate-600">
                "I review client contracts constantly. Contractly AI saves me hours and catches terms I'd miss."
              </p>
            </div>

            {/* Tenant */}
            <div className="rounded-2xl p-8 bg-white border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Tenant
              </h3>
              <p className="text-slate-600">
                "Reviewing a lease is intimidating. Contractly AI made it clear and gave me confidence."
              </p>
            </div>

            {/* Small Business Owner */}
            <div className="rounded-2xl p-8 bg-white border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Business Owner
              </h3>
              <p className="text-slate-600">
                "Vendor agreements and supplier contracts are complex. This tool is essential for my business."
              </p>
            </div>

            {/* Job Seeker */}
            <div className="rounded-2xl p-8 bg-white border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Job Seeker
              </h3>
              <p className="text-slate-600">
                "Employment offers are long and confusing. Contractly AI helped me negotiate better terms."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits / Pricing Teaser Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Start Free. Pay Only When You Need More.
          </h2>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            New users get generous starter credits to analyze contracts for free. Each analysis uses credits based on document length. Buy more anytime you need them. Simple, fair, and transparent pricing.
          </p>

          <a
            href={IOS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            Download and Get Your Free Credits
          </a>
        </div>
      </section>

      {/* Trust / Disclaimer Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Important Information
          </h2>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Not Legal Advice
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Contractly AI provides AI-generated analysis for informational purposes only. It is not a substitute for professional legal advice. Always consult with a qualified attorney before signing any contract or making important legal decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <Lock className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Data Processed Securely
                </h4>
                <p className="text-sm text-slate-600">
                  All documents are encrypted in transit and at rest
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Not Permanently Stored
                </h4>
                <p className="text-sm text-slate-600">
                  Contracts are not permanently stored on our servers
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Delete Anytime
                </h4>
                <p className="text-sm text-slate-600">
                  Delete your account and data whenever you want
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-900 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-slate-600 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-0 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stop Signing Blind.
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            3 free analyses. No card. No subscription. Just upload your UAE contract and see what it actually says.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download for iOS
            </a>
            <a
              href={ANDROID_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 border border-blue-400"
            >
              <Download size={20} />
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
