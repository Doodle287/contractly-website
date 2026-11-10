import { Link } from 'react-router-dom';
import {
  Home,
  Trash2,
  AlertTriangle,
  Mail,
  Shield,
  Info,
  ChevronRight,
} from 'lucide-react';
import { SUPPORT_EMAIL } from '../config/links';

const EMAIL_REQUEST_DAYS = '30 days';

const deletionMailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  'Delete my Contractly AI account',
)}&body=${encodeURIComponent(
  'Please delete my Contractly AI account and its data.\n\nEmail I sign in with (or "Apple" / "Google"): \n',
)}`;

export default function DeleteAccount() {
  const deletionSteps = [
    {
      number: 1,
      title: 'Open Contractly AI',
      description: 'Open the app on your phone and sign in to the account you want to delete.',
    },
    {
      number: 2,
      title: 'Go to Profile',
      description: 'Tap the Profile tab at the bottom of the screen.',
    },
    {
      number: 3,
      title: 'Tap "Delete account"',
      description: 'It is at the bottom of the Profile screen, below "Log out".',
    },
    {
      number: 4,
      title: 'Confirm',
      description:
        'If you sign in with email, enter your password. If you sign in with Apple or Google, confirm with that account.',
    },
    {
      number: 5,
      title: 'Done',
      description:
        'Your account and its data are deleted right away and you are signed out.',
    },
  ];

  const whatGetsDeleted = [
    'Your account and profile (name, email, sign-in details)',
    'All saved analyses, document records and risk findings',
    'Your credit balance and credit history',
    'Original files and exported reports stored on the phone you delete from',
  ];

  const importantNotes = [
    {
      icon: AlertTriangle,
      warning: true,
      text: 'Deletion is permanent and cannot be undone. Unused credits are lost and cannot be restored or refunded through Contractly AI.',
    },
    {
      icon: Shield,
      text: 'Credit packs are one-time purchases, so there is no subscription to cancel. Apple, Google and RevenueCat (our purchase provider) keep their own purchase records under their own policies; after deletion those records are linked only to a random account ID, not to your name or email.',
    },
    {
      icon: Info,
      text: 'Original files and reports saved on another phone are removed when you sign out or delete the app on that phone.',
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
            You can delete your Contractly AI account and its data at any time,
            in the app or by email.
          </p>
        </div>
      </section>

      {/* How to Delete Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
            Delete in the App
          </h2>
          <div className="space-y-6">
            {deletionSteps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  {index < deletionSteps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-blue-300 to-slate-200" />
                  )}
                </div>
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

      {/* Request by Email Section */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  No Longer Have the App?
                </h2>
                <p className="text-slate-600 mb-4">
                  Email{' '}
                  <a
                    href={deletionMailto}
                    className="text-blue-600 font-medium underline underline-offset-2"
                  >
                    {SUPPORT_EMAIL}
                  </a>{' '}
                  from the email address you sign in with, with the subject
                  “Delete my Contractly AI account”. If you sign in with Apple
                  or Google, tell us which one and the email address of that
                  account.
                </p>
                <p className="text-slate-600 mb-6">
                  We may ask you to confirm the request from that address. We
                  delete the account and the data listed below within{' '}
                  {EMAIL_REQUEST_DAYS} and reply when it is done.
                </p>
                <a
                  href={deletionMailto}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request deletion by email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Deleted Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
            What Gets Deleted
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <ul className="space-y-4">
              {whatGetsDeleted.map((item) => (
                <li key={item} className="flex items-center gap-4">
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
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Important Notes
          </h2>
          <div className="space-y-4">
            {importantNotes.map((note) => {
              const IconComponent = note.icon;
              return (
                <div
                  key={note.text}
                  className={`rounded-lg border p-6 flex items-start gap-4 ${
                    note.warning
                      ? 'bg-red-50 border-red-200'
                      : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <IconComponent
                    className={`w-6 h-6 shrink-0 mt-0.5 ${
                      note.warning ? 'text-red-600' : 'text-blue-600'
                    }`}
                  />
                  <p className="text-slate-700 leading-relaxed">{note.text}</p>
                </div>
              );
            })}
          </div>
          <Link
            to="/support"
            className="mt-8 inline-flex items-center gap-2 px-5 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 font-medium rounded-lg transition-colors duration-200"
          >
            <span>Other questions? Visit Support</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
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
