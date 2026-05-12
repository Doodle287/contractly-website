import { Link } from 'react-router-dom';
import {
  Mail,
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

const SUPPORT_EMAIL_HREF = (subject) =>
  `mailto:support@contractly.ai?subject=${encodeURIComponent(subject)}`;

const SUPPORT_EMAIL = 'support@contractly.ai';

export default function Support() {
  const helpTopics = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description:
        'Learn how to use the Contractly AI app and analyze your first contract in minutes.',
      emailSubject: 'Getting Started — Help Request',
    },
    {
      icon: CreditCard,
      title: 'Credits & Purchases',
      description:
        'Understand how credits work, purchase more, and restore your previous purchases.',
      emailSubject: 'Credits & Purchases — Help Request',
    },
    {
      icon: User,
      title: 'Account Management',
      description:
        'Manage your profile, update settings, and learn about account deletion.',
      emailSubject: 'Account Management — Help Request',
    },
    {
      icon: BarChart3,
      title: 'Analysis & Results',
      description:
        'Understand your analysis results, accuracy information, and result interpretations.',
      emailSubject: 'Analysis & Results — Help Request',
    },
    {
      icon: Zap,
      title: 'Technical Issues',
      description:
        'Troubleshoot app crashes, upload problems, and device compatibility issues.',
      emailSubject: 'Technical Issues — Help Request',
    },
    {
      icon: Lock,
      title: 'Privacy & Security',
      description:
        'Learn how we handle your data, document security, and privacy protections.',
      emailSubject: 'Privacy & Security — Help Request',
    },
  ];

  const beforeContacting = [
    'Check our FAQ section for quick answers',
    'Ensure your app is updated to the latest version',
    'Include relevant details and screenshots in your email',
    'Describe the issue step-by-step for faster resolution',
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
            We're here to support you every step of the way. Find answers to common
            questions or reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100 p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-slate-600 mb-4">
                  Email us at:{' '}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    We typically respond within <strong>24-48 business hours</strong>
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
                <a
                  key={index}
                  href={SUPPORT_EMAIL_HREF(topic.emailSubject)}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-blue-200 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-slate-600">{topic.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 mt-1" />
                  </div>
                </a>
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

      {/* Footer */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-600">
            Can't find what you're looking for?{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Reach out to our team
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
