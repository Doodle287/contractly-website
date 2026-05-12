import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { IOS_APP_URL } from '../config/links';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = 'Contractly AI';
  const domain = 'contractly.ai';

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Download', href: IOS_APP_URL, external: true },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/support' },
        { label: 'Delete Account', href: '/delete-account' },
        { label: 'Contact', href: `mailto:support@${domain}` },
      ],
    },
  ];

  const renderLink = (link) => {
    if (link.external) {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
        >
          {link.label}
        </a>
      );
    }

    if (link.href.startsWith('mailto:')) {
      return (
        <a
          key={link.label}
          href={link.href}
          className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
        >
          {link.label}
        </a>
      );
    }

    if (link.href === '#' || link.href.startsWith('/#')) {
      return (
        <a
          key={link.label}
          href={link.href}
          className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.href}
        className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">{companyName}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI-powered contract analysis for everyone.
            </p>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} {companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200 text-xs"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-slate-500 hover:text-slate-300 transition-colors duration-200 text-xs"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
