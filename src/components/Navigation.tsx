"use client";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Zap,
  Download,
  Monitor,
  Smartphone,
  Apple,
  Chrome,
  ChevronDown,
  Sparkles,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

// Platform detection hook
const useUserPlatform = () => {
  const [platform, setPlatform] = useState<string>("");
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform("iOS");
    } else if (/android/.test(userAgent)) {
      setPlatform("Android");
    } else if (/macintosh|mac os x/.test(userAgent)) {
      setPlatform("macOS");
    } else if (/windows/.test(userAgent)) {
      setPlatform("Windows");
    } else if (/linux/.test(userAgent)) {
      setPlatform("Linux");
    } else {
      setPlatform("Web");
    }
  }, []);
  return platform;
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const userPlatform = useUserPlatform();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "Platforms", href: "/#platforms" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  const partnerAppDownloads = [
    {
      platform: "macOS",
      icon: Apple,
      label: "Download for Mac",
      available: true,
      size: "~45MB",
      version: "v2.1.0",
    },
    {
      platform: "Windows",
      icon: Monitor,
      label: "Download for Windows",
      available: true,
      size: "~52MB",
      version: "v2.1.0",
    },
    {
      platform: "iOS",
      icon: Apple,
      label: "Download for iPhone",
      available: true,
      size: "~28MB",
      version: "v2.1.0",
    },
    {
      platform: "Android",
      icon: Smartphone,
      label: "Download for Android",
      available: true,
      size: "~25MB",
      version: "v2.1.0",
    },
    {
      platform: "Web",
      icon: Chrome,
      label: "Open Web App",
      available: true,
      size: "Instant",
      version: "Latest",
    },
  ];

  const userAppDownloads = [
    {
      platform: "iOS",
      icon: Apple,
      label: "iPhone & iPad",
      available: true,
      size: "~18MB",
      version: "v1.8.0",
    },
    {
      platform: "Android",
      icon: Smartphone,
      label: "Android Phones",
      available: true,
      size: "~15MB",
      version: "v1.8.0",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDownloadOpen(false);
      }
    };

    if (isDownloadOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isDownloadOpen]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "macOS":
        return Apple;
      case "iOS":
        return Apple;
      case "Windows":
        return Monitor;
      case "Android":
        return Smartphone;
      case "Linux":
        return Monitor;
      default:
        return Chrome;
    }
  };

  const handlePlatformClick = (platform: string) => {
    setShowComingSoon(true);
    setIsDownloadOpen(false);
  };

  return (
    <>
      {/* Navigation Bar - Enhanced Glassmorphism */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/20 backdrop-blur-3xl"
            : "bg-black/10 backdrop-blur-2xl"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link
              to="/"
              className="flex items-center gap-4 group animate-slide-right"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-cyan transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden border-2 border-primary/30">
                  <img
                    src="/logo.png"
                    alt="Unevee Logo"
                    className="w-full h-full object-contain rounded-full scale-125"
                  />
                </div>

                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-success to-success/70 rounded-full animate-pulse-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Unevee
                </span>
                <span className="text-xs text-muted-foreground -mt-1 group-hover:text-primary transition-colors">
                  Sports & Fitness
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative px-4 py-2 text-foreground-secondary hover:text-foreground transition-all duration-300 group rounded-xl hover:bg-white/5 animate-slide-down"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  smooth
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-primary to-success group-hover:w-8 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Download Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect border-primary/30 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group px-6 py-3"
                  onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      isDownloadOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {/* Enhanced Download Dropdown */}
                {isDownloadOpen && (
                  <div className="absolute top-14 right-0 w-[420px] bg-black/90 backdrop-blur-2xl rounded-2xl border border-primary/20 shadow-2xl p-6 animate-slide-down z-50">
                    <div className="space-y-6">
                      {/* Partner App Section */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold text-foreground">
                                Partner App
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                For Gym & Business Owners
                              </p>
                            </div>
                          </div>
                          <div className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded-full">
                            FREE
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {partnerAppDownloads.map((app) => (
                            <button
                              key={app.platform}
                              onClick={() => handlePlatformClick(app.platform)}
                              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group border ${
                                app.platform === userPlatform
                                  ? "border-primary/40 bg-primary/10"
                                  : "border-transparent hover:border-primary/20 hover:bg-white/5"
                              }`}
                            >
                              <app.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                              <div className="text-left flex-1">
                                <div
                                  className={`text-sm font-medium ${
                                    app.platform === userPlatform
                                      ? "text-primary"
                                      : "text-foreground"
                                  } group-hover:text-primary`}
                                >
                                  {app.platform}
                                  {/* {app.platform === userPlatform && (
                                    <span className="ml-2 text-xs px-2 py-0.5 bg-success/20 text-success rounded-full">
                                      Recommended
                                    </span>
                                  )} */}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {app.size}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

                      {/* User App Section */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-success/20 to-success/10 rounded-xl flex items-center justify-center">
                              <Users className="w-5 h-5 text-success" />
                            </div>
                            <div>
                              <h3 className="font-bold text-foreground">
                                User App
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                Free Health Tracking
                              </p>
                            </div>
                          </div>
                          <div className="px-3 py-1 bg-success/20 text-success text-xs font-medium rounded-full">
                            FREE
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {userAppDownloads.map((app) => (
                            <button
                              key={app.platform}
                              onClick={() => handlePlatformClick(app.platform)}
                              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 group border border-transparent hover:border-success/20"
                            >
                              <app.icon className="w-6 h-6 text-muted-foreground group-hover:text-success transition-colors" />
                              <div className="text-center">
                                <div className="text-sm font-medium text-foreground group-hover:text-success">
                                  {app.platform}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {app.size}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Start Free Button */}
              <Button
                size="sm"
                className="bg-gradient-to-r from-success to-success/80 hover:shadow-glow-cyan transition-all duration-300 group relative overflow-hidden px-6 py-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin relative z-10" />
                <span className="relative z-10">Start Free</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden p-3 text-foreground hover:bg-white/5 rounded-2xl transition-all duration-300 group border border-transparent hover:border-primary/30"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-6 border-t border-primary/20 animate-slide-down">
              <div className="space-y-6">
                {/* Mobile Nav Items */}
                <div className="grid grid-cols-2 gap-3">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center p-4 glass-card rounded-xl border border-border-subtle hover:border-primary/30 hover:shadow-glow transition-all duration-300 group animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setIsOpen(false)}
                      smooth
                    >
                      <span className="text-foreground-secondary group-hover:text-foreground font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Download Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-3">
                    <Download className="w-5 h-5 text-primary" />
                    Download Apps
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  </h3>

                  {/* Partner App Mobile */}
                  <div className="glass-card p-5 rounded-xl border border-border-subtle">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-6 h-6 text-primary" />
                      <div className="flex-1">
                        <span className="font-bold text-foreground">
                          Partner App
                        </span>
                        <p className="text-xs text-muted-foreground">
                          For Business Owners
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        FREE
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {partnerAppDownloads.slice(0, 4).map((app) => (
                        <button
                          key={app.platform}
                          onClick={() => handlePlatformClick(app.platform)}
                          className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-primary/20"
                        >
                          <app.icon className="w-5 h-5 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {app.platform}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* User App Mobile */}
                  <div className="glass-card p-5 rounded-xl border border-border-subtle">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-success" />
                      <div className="flex-1">
                        <span className="font-bold text-foreground">
                          User App
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Free Health Tracking
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-success/20 text-success text-xs font-medium rounded-full">
                        FREE
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {userAppDownloads.map((app) => (
                        <button
                          key={app.platform}
                          onClick={() => handlePlatformClick(app.platform)}
                          className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-success/20"
                        >
                          <app.icon className="w-6 h-6 text-muted-foreground" />
                          <div className="text-center">
                            <div className="text-sm font-medium text-foreground">
                              {app.platform}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {app.size}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Auth Button */}
                <div className="pt-4 border-t border-primary/20">
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-success to-success/80 hover:shadow-glow-cyan transition-all duration-300 group"
                  >
                    <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowComingSoon(false)}
          />

          {/* Modal */}
          <div className="relative bg-background/95 backdrop-blur-2xl rounded-2xl border border-primary/20 shadow-2xl p-8 max-w-md mx-4 animate-scale-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                Coming Soon!
              </h3>

              <p className="text-muted-foreground mb-6">
                We're working hard to bring you the best fitness platform
                experience. Downloads will be available soon!
              </p>

              <Button
                onClick={() => setShowComingSoon(false)}
                className="bg-gradient-to-r from-primary to-success hover:shadow-glow-cyan transition-all duration-300"
              >
                Got it!
              </Button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowComingSoon(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        .animate-slide-down {
          animation: slide-down 0.5s ease-out forwards;
        }
        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
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

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default Navigation;
