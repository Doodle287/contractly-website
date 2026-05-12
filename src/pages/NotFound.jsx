import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50">
          <AlertCircle className="h-10 w-10 text-red-500" />
        </div>

        <p className="text-sm font-semibold text-blue-600 mb-3">404 error</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          Page not found
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow-md"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/support"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
