import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Categories",
      links: [
        { name: "Electronics", href: "#" },
        { name: "Home Appliances", href: "#" },
        { name: "Outdoor Gear", href: "#" },
        { name: "Tools & Equipment", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Insurance", href: "#" },
        { name: "Safety Guide", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-rentpe-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                Rent<span className="text-rentpe-primary">Pe</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Making access to products affordable and sustainable through smart rentals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 RentPe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
