import React from "react";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom"; 

// Links Data Mapping
const accountLinks = [
  { label: "Sign In", path: "/signin" },
  { label: "Register", path: "/register" },
  { label: "Order History", path: "/track-order" },
  { label: "Wishlist", path: "/wishlist" }
];

const infoLinks = [
  /* CHANGED HERE: Replaced "About Us" with "Customer Reviews" pointing down to /reviews */
  { label: "Customer Reviews", path: "/reviews" },
  { label: "Shipping Policy", path: "/faq" },
  { label: "Returns & Refunds", path: "/faq" },
  { label: "Privacy Policy", path: "/faq" } 
];

const supportLinks = [
  { label: "Contact Us", path: "/contact" },
  { label: "FAQs", path: "/faq" },
  { label: "Size Guide", path: "/faq" },
  { label: "Track Order", path: "/track-order" }
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        
        {/* My Account */}
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">My Account</h4>
          <ul className="space-y-2 text-sm">
            {accountLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">Information</h4>
          <ul className="space-y-2 text-sm">
            {infoLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-2 hover:text-primary transition-colors">
            <a href="mailto:srimathisilks@gmail.com">srimathisilks@gmail.com</a>
          </p>
          <p className="text-sm mb-4 hover:text-primary transition-colors">
            <a href="tel:+919885222227">+91 98852 22227</a>
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a href="#" target="_blank" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/LSrimathi Silksatnellore/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            {/* Youtube */}
            <a href="#" target="_blank" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            {/* Twitter */}
            <a href="#" target="_blank" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © 2026 Srimathi Silks. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
