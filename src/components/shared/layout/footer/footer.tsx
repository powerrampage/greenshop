import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const serviceCards = [
  {
    id: 1,
    title: "Garden Care",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    icon: "/images/svg/garden-care.svg",
  },
  {
    id: 2,
    title: "Plant Renovation",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    icon: "/images/svg/plant-renovation.svg",
  },
  {
    id: 3,
    title: "Watering Garden",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    icon: "/images/svg/watering-garden.svg",
  },
];

const contactInfo = [
  {
    id: 1,
    icon: <MapPin className="text-primary" />,
    text: "70 West Buckingham Ave. Farmingdale, NY 11735",
    href: "#",
  },
  {
    id: 2,
    icon: <Mail className="text-primary" />,
    text: "kyotyt@gmail.com",
    href: "mailto:kyotyt@gmail.com",
  },
  {
    id: 3,
    icon: <Phone className="text-primary" />,
    text: "+998 91 410 58 39",
    href: "tel:+998914105839",
  },
];

const footerLinks = [
  {
    id: 1,
    title: "My Account",
    links: [
      { name: "My Account", href: "#" },
      { name: "Our stores", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Career", href: "#" },
      { name: "Specials", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Help & Guide",
    links: [
      { name: "Help Center", href: "#" },
      { name: "How to Buy", href: "#" },
      { name: "Shipping & Delivery", href: "#" },
      { name: "Product Policy", href: "#" },
      { name: "How to Return", href: "#" },
    ],
  },
  {
    id: 3,
    title: "Categories",
    links: [
      { name: "House Plants", href: "#" },
      { name: "Potter Plants", href: "#" },
      { name: "Seeds", href: "#" },
      { name: "Small Plants", href: "#" },
      { name: "Accessories", href: "#" },
    ],
  },
];

const socialLinks = [
  { id: 1, icon: <Facebook size={16} />, href: "#" },
  { id: 2, icon: <Instagram size={16} />, href: "#" },
  { id: 3, icon: <Twitter size={16} />, href: "#" },
  { id: 4, icon: <Linkedin size={16} />, href: "#" },
  { id: 5, icon: <Youtube size={16} />, href: "#" },
];

const paymentMethods = [
  {
    id: 1,
    name: "PayPal",
    icon: "/images/svg/paypal-icon.svg",
  },
  {
    id: 2,
    name: "Mastercard",
    icon: "/images/svg/master-card-icon.svg",
  },
  {
    id: 3,
    name: "Visa",
    icon: "/images/svg/visa-icon.svg",
  },
  {
    id: 4,
    name: "American Express",
    icon: "/images/svg/american-express-icon.svg",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white">
      {/* Newsletter and info section */}
      <div className="ui-container grid grid-cols-1 lg:grid-cols-[1fr_25rem] gap-8 py-6 bg-overlay">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center sm:items-start text-center sm:text-left pr-4 pl-3 sm:border-r border-primary/10 last:border-r-0"
            >
              <Image src={card.icon} alt={card.title} width={90} height={90} />
              <h3 className="text-lg font-bold mb-2 mt-3">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">
            Would you like to join newsletters?
          </h3>
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 rounded-r-none"
            />
            <Button className="rounded-l-none">Join</Button>
          </div>
          <p className="text-sm text-gray-600">
            We usually post offers and challenges in newsletter. We&apos;re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>

      {/* Contact info section */}
      <div className="ui-container bg-primary/10 py-6 border-y border-y-primary/10">
        <div className="ui-container grid items-center grid-cols-1 md:grid-cols-4 gap-4">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={150}
              height={34.3}
            />
          </Link>
          {contactInfo.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="flex items-center gap-2"
            >
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Links section */}
      <div className="ui-container py-8 bg-overlay border-b border-b-primary/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-sm:gap-2">
          {footerLinks.map((category) => (
            <div key={category.id} className="space-y-4">
              <h4 className="font-bold text-lg">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social media and payment methods */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Social Media</h4>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <h4 className="font-bold text-lg mt-6">We accept</h4>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((payment) => (
                <Link
                  href="#"
                  key={payment.id}
                  className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center"
                  title={payment.name}
                >
                  <Image
                    src={payment.icon}
                    alt={payment.name}
                    width={50}
                    height={26}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-gray-200 py-4">
        <div className="ui-container text-center text-sm text-gray-500">
          © {currentYear} GreenShop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
