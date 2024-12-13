import React from 'react';
import { Store } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterSocial } from './FooterSocial';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand and Social */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Store className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                StyleStore
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Discover the latest trends in fashion and lifestyle products. Quality meets
              style at StyleStore.
            </p>
            <FooterSocial />
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <FooterLinks />
          </div>

          {/* Newsletter */}
          <FooterNewsletter />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {currentYear} StyleStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}