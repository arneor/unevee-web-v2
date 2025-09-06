import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUp,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Globe,
  Smartphone,
  Monitor,
  Chrome,
  Apple,
  Github,
  Heart,
  Sparkles,
  Zap,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        {
          name: "Partner Platform",
          href: "#",
          description: "Business management tools",
        },
        { name: "User App", href: "#", description: "Free health tracking" },
        {
          name: "Features",
          href: "/#features",
          description: "Platform capabilities",
        },
        {
          name: "Pricing",
          href: "/#pricing",
          description: "Simple & transparent",
        },
      ],
    },
    {
      title: "Platforms",
      links: [
        { name: "Android", href: "#", icon: Smartphone },
        { name: "iOS", href: "#", icon: Apple },
        { name: "Web App", href: "#", icon: Chrome },
        { name: "macOS", href: "#", icon: Apple },
        { name: "Windows", href: "#", icon: Monitor },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#", description: "Get support" },
        { name: "Blog", href: "/blog", description: "Latest insights" },
        { name: "FAQ", href: "/faq", description: "Common questions" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", description: "Our story" },
        { name: "Contact", href: "/#contact", description: "Get in touch" },
        {
          name: "Privacy Policy",
          href: "#",
          description: "Your data protection",
        },
        { name: "Terms of Service", href: "#", description: "Usage terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/uneveeapp",
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/UneveeHQ",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/uneveeapp",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/107111103",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:uneveeapp@gmail.com",
      color: "hover:text-success",
    },
  ];

  const stats = [
    { label: "Development Phase", value: "Beta Testing" },
    { label: "Expected Launch", value: "2026" },
    { label: "Early Access", value: "Coming Soon" },
    { label: "Target Market", value: "India & Global" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border-subtle">
      {/* Background with gradient - Same as CTA */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background-secondary" />

      {/* Animated background elements - Same as CTA */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-success/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-4 group mb-6">
                <div className="relative">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-cyan transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden border-2 border-primary/30">
                    <img
                      src="/logo.png"
                      alt="Unevee Logo"
                      className="w-full h-full object-contain rounded-full scale-125"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-success to-success/70 rounded-full animate-pulse-glow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Unevee
                  </span>
                  <span className="text-sm text-muted-foreground -mt-1 group-hover:text-primary transition-colors">
                    Sports & Fitness
                  </span>
                </div>
              </Link>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed max-w-sm">
                Universal sports & fitness platform bridging businesses and
                health-conscious users with innovative technology.
              </p>

              {/* Contact Info in glass cards */}
              <div className="space-y-3 mb-6">
                <div className="glass-card p-3 rounded-xl border border-border-subtle flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <a
                      href="tel:+919744880311"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      +91 9744880311
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Mon–Fri, 10:00–18:00 IST
                    </p>
                  </div>
                </div>
                <div className="glass-card p-3 rounded-xl border border-border-subtle flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <a
                      href="mailto:uneveeapp@gmail.com"
                      className="text-foreground hover:text-success transition-colors font-medium"
                    >
                      uneveeapp@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
                <div className="glass-card p-3 rounded-xl border border-border-subtle flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium">
                      Bangalore, India
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Primary market
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl glass-card border border-border-subtle text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-glow group`}
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="text-foreground font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary to-success rounded-full" />
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
                      >
                        {link.icon && (
                          <div className="w-8 h-8 rounded-lg glass-card border border-border-subtle flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                            <link.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                          </div>
                        )}
                        <div className="flex-1">
                          <span className="block group-hover:text-primary transition-colors font-medium">
                            {link.name}
                          </span>
                          {link.description && (
                            <span className="text-xs text-muted-foreground block">
                              {link.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-12 border-t border-border-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Newsletter */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Get the latest fitness insights, platform updates, and
                  exclusive content delivered to your inbox.
                </p>

                {!isSubscribed ? (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex max-md:flex-col gap-3"
                  >
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-6 py-4 glass-card border border-border-subtle rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
                      />
                      <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-primary text-background font-semibold rounded-xl hover:shadow-glow-cyan transition-all duration-300 flex items-center gap-2 group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Subscribe
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 p-4 glass-card bg-success/10 border border-success/30 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-success font-semibold">
                      Thank you for subscribing!
                    </span>
                  </div>
                )}

                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 glass-card border border-border-subtle rounded-xl hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-subtle glass-card">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-muted-foreground">
                <span>© 2025 Unevee. All rights reserved.</span>
                <div className="flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2">
                    Made with{" "}
                    <Heart className="w-4 h-4 text-red-400 animate-pulse" /> for
                    the fitness community
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 glass-card bg-success/10 rounded-full border border-success/30">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-success font-semibold text-sm">
                    Free User App Available
                  </span>
                </div>

                <button
                  onClick={scrollToTop}
                  className="p-3 glass-card border border-border-subtle hover:border-primary/50 rounded-full text-primary hover:text-primary transition-all duration-300 group hover:shadow-glow-primary"
                >
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .shadow-glow {
          box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.3);
        }
        .shadow-glow-cyan {
          box-shadow: 0 0 25px rgba(0, 212, 255, 0.4);
        }
        .shadow-glow-primary {
          box-shadow: 0 0 35px rgba(var(--primary-rgb), 0.25);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
