import React from 'react';

interface LinkSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const sections: LinkSection[] = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', href: '#' },
      { label: 'New Arrivals', href: '#' },
      { label: 'Best Sellers', href: '#' },
      { label: 'Deals', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-8 md:gap-16">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}