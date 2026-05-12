import { Link } from 'react-router-dom';
import {
  Home,
  Settings,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Mail,
  Shield,
  ChevronRight,
} from 'lucide-react';

const DELETION_TIMEFRAME = '30 days';

export default function DeleteAccount() {
  const deletionSteps = [
    {
      number: 1,
      title: 'Open Contractly AI',
      description: 'Launch the Contractly AI app on your mobile device',
    },
    {
      number: 2,
      title: 'Go to Settings',
      description: 'Tap the Settings icon or go to Account Settings',
    },
    {
      number: 3,
      title: 'Find Account',
      description: 'Look for "Account" or "Account Management" option',
    },
    {
      number: 4,
      title: 'Delete Account',
      description: 'Tap "Delete Account" button at the bottom of account settings',
    },
    {
      number: 5,
      title: 'Confirm',
      description:
        'Confirm your decision by entering your password or using biometric authentication',
    },
    {
      number: 6,
      title: 'Complete',
      description: 'Your account deletion request has been submitted for processing',
    },
  ];

  const whatGetsDeleted = [
    'Your account and profile information',
    'Saved analysis history and documents',
    'Remaining credit balance',
    'All associated usage data',
  ];

  const importantNotes = [
    {
      icon: AlertTriangle,
      text: 'Deletion is permanent and cannot be undone',
    },
    {
      icon: Shield,
      text: 'Cancel any active subscriptions through the app store before deletion',
    },
    {
      icon: Clock,
      text: `Full deletion may take up to ${DELETION_TIMEFRAME} to completely process`,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-xl">
              <Trash2 className="w-7 h-7 text-red-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Account Deletion
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">
            We're sorry to see you go. Below is how to permanently delete your
            Contractly AI account.
          </p>
        </div>
      </section>

      {/* How to Delete Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
            How to Delete Your Account
          </h2>
          <div className="space-y-6">
            {deletionSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Step Number */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  {index < deletionSteps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-blue-300 to-slate-200" />
                  )}
                </div>

                {/* Step Content */}
                <div className="pb-6 pt-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Gets Deleted Section */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
            What Gets Deleted
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <ul className="space-y-4">
              {whatGetsDeleted.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full shrink-0">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Important Notes
          </h2>
          <div className="space-y-4">
            {importantNotes.map((note, index) => {
              const IconComponent = note.icon;
              const isWarning = IconComponent === AlertTriangle;

              return (
                <div
                  key={index}
                  className={`rounded-lg border p-6 flex items-start gap-4 ${
                    isWarning
                      ? 'bg-red-50 border-red-200'
                      : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <IconComponent
                    className={`w-6 h-6 shrink-0 mt-0.5 ${
                      isWarning ? 'text-red-600' : 'text-blue-600'
                    }`}
                  />
                  <p className="text-slate-700 leading-relaxed">{note.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Need Help?
                </h3>
                <p className="text-slate-600 mb-6">
                  If you cannot access the Contractly AI app to delete your
                  account, please use the in-app support option under{' '}
                  <strong>Settings → Help</strong> from a device that is still
                  signed in. A direct support channel will be added here soon.
                </p>
                <Link
                  to="/support"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 font-medium rounded-lg transition-colors duration-200"
                >
                  <span>View Full Support</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors duration-200 group"
          >
            <Home className="w-4 h-4 group-hover:text-slate-900" />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
