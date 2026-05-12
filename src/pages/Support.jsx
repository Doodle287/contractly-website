import { Link } from 'react-router-dom';
import {
  Smartphone,
  BookOpen,
  CreditCard,
  User,
  BarChart3,
  Zap,
  Lock,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

export default function Support() {
  const helpTopics = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description:
        'Learn how to use the Contractly AI app and analyze your first contract in minutes.',
    },
    {
      icon: CreditCard,
      title: 'Credits & Purchases',
      description:
        'Understand how credits work, purchase more, and restore your previous purchases.',
    },
    {
      icon: User,
      title: 'Account Management',
      description:
        'Manage your profile, update settings, and learn about account deletion.',
    },
    {
      icon: BarChart3,
      title: 'Analysis & Results',
      description:
        'Understand your analysis results, accuracy information, and result interpretations.',
    },
    {
      icon: Zap,
      title: 'Technical Issues',
      description:
        'Troubleshoot app crashes, upload problems, and device compatibility issues.',
    },
    {
      icon: Lock,
      title: 'Privacy & Security',
      description:
        'Learn how we handle your data, document security, and privacy protections.',
    },
  ];

  const beforeContacting = [
    'Check our FAQ section for quick answers',
    'Ensure your app is updated to the latest version',
    'Take note of the steps that lead to the issue',
    'Describe the problem clearly so we can help faster',
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How Can We Help?
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're here to support you every step of the way. Find answers to
            common questions below.
          </p>
        </div>
      </section>

      {/* In-App Support Card */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100 p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl shrink-0">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Get Help Inside the App
                </h2>
                <p className="text-slate-600 mb-4">
                  For account questions, billing, or technical issues, use the
                  in-app support option under <strong>Settings → Help</strong>.
                  We typically respond within{' '}
                  <strong>24–48 business hours</strong>.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    A direct contact channel will be added here soon.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Help Topics */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Common Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-slate-600">{topic.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before Contacting Support */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-8">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Before Contacting Support
                </h3>
                <ul className="space-y-3">
                  {beforeContacting.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/privacy"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <span className="font-medium text-slate-700 group-hover:text-blue-600">
                Privacy Policy
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
            <Link
              to="/terms"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <span className="font-medium text-slate-700 group-hover:text-blue-600">
                Terms & Conditions
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
            <Link
              to="/delete-account"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <span className="font-medium text-slate-700 group-hover:text-blue-600">
                Delete Account
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
