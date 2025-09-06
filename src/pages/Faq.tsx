"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  Sparkles,
  Building2,
  Users,
  Smartphone,
  CreditCard,
  Headphones,
  Zap,
  CheckCircle,
  AlertCircle,
  Clock,
  Shield,
  Globe,
  Download,
} from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const categories = [
    { name: "All", icon: Sparkles },
    { name: "General", icon: AlertCircle },
    { name: "Partner App", icon: Building2 },
    { name: "User App", icon: Users },
    { name: "Technical", icon: Smartphone },
    { name: "Pricing", icon: CreditCard },
    { name: "Support", icon: Headphones },
  ];

  const faqData = [
    // General Questions
    {
      id: 0,
      category: "General",
      question: "What is Unevee and how does it work?",
      answer:
        "Unevee is a comprehensive fitness ecosystem with two main products: a B2B Partner App for gym owners and fitness businesses to manage operations (CRM, attendance, billing, workout plans), and a free B2C User App for individuals to track their health and fitness journey. We bridge the gap between fitness businesses and health-conscious users through seamless integration.",
      featured: true,
    },
    {
      id: 1,
      category: "General",
      question: "What makes Unevee different from other fitness platforms?",
      answer:
        "Unlike single-purpose fitness apps, Unevee offers a complete ecosystem. Gym owners get powerful business management tools while their members enjoy a free, feature-rich tracking app. Our platform supports 5+ platforms (iOS, Android, Web, macOS, Windows), offers 24/7 support, and is designed specifically for the Indian fitness market with local payment integration and regional preferences.",
    },
    {
      id: 2,
      category: "General",
      question: "Is Unevee available in my region?",
      answer:
        "Unevee primarily serves the Indian market with our headquarters in Bangalore. We support local payment methods like UPI, understand regional fitness preferences, and provide customer support in local languages. We're expanding to other South Asian markets and have plans for global expansion by 2025.",
    },

    // Partner App Questions
    {
      id: 3,
      category: "Partner App",
      question: "How much does the Partner App cost for gym owners?",
      answer:
        "We offer flexible pricing tiers based on your gym size and needs. Our basic plan starts from ₹2,999/month for small gyms (up to 100 members), with enterprise plans available for large fitness chains. All plans include CRM, attendance tracking, billing reminders, and basic analytics. Contact our sales team for custom pricing and a free 14-day trial.",
    },
    {
      id: 4,
      category: "Partner App",
      question: "How quickly can I digitize my gym with Unevee?",
      answer:
        "Most gyms are fully operational within 5-7 days. Our setup process includes: Day 1-2: Account setup and data migration, Day 3-4: Staff training and system configuration, Day 5-6: Member onboarding and testing, Day 7: Go-live with full support. Our team handles the technical setup while you focus on your members.",
    },
    {
      id: 5,
      category: "Partner App",
      question: "Can I migrate my existing member data to Unevee?",
      answer:
        "Yes! We provide free data migration services for all partner app subscribers. Our team can import member profiles, payment history, attendance records, and workout plans from Excel files, other gym management software, or manual records. The migration is typically completed within 24-48 hours with zero data loss.",
    },
    {
      id: 6,
      category: "Partner App",
      question: "Does the Partner App work offline?",
      answer:
        "Yes, the Partner App has robust offline capabilities. You can mark attendance, access member profiles, create workout plans, and record payments even without internet connectivity. All data automatically syncs when your connection is restored, ensuring uninterrupted gym operations.",
    },
    {
      id: 7,
      category: "Partner App",
      question: "Can I customize workout plans for different member goals?",
      answer:
        "Absolutely! The Partner App includes a comprehensive workout builder with 500+ exercises, customizable sets/reps, progression tracking, and goal-based templates (weight loss, muscle gain, endurance, strength). You can create personalized plans or use our AI-suggested routines based on member assessments and fitness goals.",
    },

    // User App Questions
    {
      id: 8,
      category: "User App",
      question: "Is the User App really free? What's the catch?",
      answer:
        "Yes, the User App is completely free with no hidden costs, ads, or premium tiers. We monetize through our Partner App subscriptions from gyms and fitness businesses. Free users get unlimited workout tracking, progress analytics, nutrition logging, and community features. It's our way of making fitness accessible to everyone.",
    },
    {
      id: 9,
      category: "User App",
      question: "Can I use the User App if I'm not a gym member?",
      answer:
        "Absolutely! The User App is designed for everyone - gym members, home fitness enthusiasts, runners, cyclists, yoga practitioners, and anyone interested in health tracking. You can log workouts, track nutrition, set fitness goals, and connect with the fitness community regardless of gym membership.",
    },
    {
      id: 10,
      category: "User App",
      question: "How does the User App sync with my gym's system?",
      answer:
        "If your gym uses Unevee's Partner App, your workout plans, attendance, and progress automatically sync between both apps. You'll see trainer-assigned workouts, gym check-ins, and progress updates in real-time. For non-Unevee gyms, you can manually log activities or connect with fitness trackers and wearables.",
    },
    {
      id: 11,
      category: "User App",
      question: "What fitness trackers and devices does the User App support?",
      answer:
        "The User App integrates with popular fitness wearables including Apple Watch, Fitbit, Samsung Galaxy Watch, Mi Band, and Google Fit. We also support manual entry for any activity. Health data syncs automatically while maintaining your privacy and data security.",
    },

    // Technical Questions
    {
      id: 12,
      category: "Technical",
      question: "What platforms and devices does Unevee support?",
      answer:
        "Unevee supports 5+ platforms: iOS (iPhone/iPad), Android (phones/tablets), Web browsers (Chrome, Safari, Firefox), macOS (desktop app), and Windows (desktop app). All platforms sync in real-time, so you can switch between devices seamlessly. Minimum requirements: iOS 12+, Android 8+, or modern web browsers.",
    },
    {
      id: 13,
      category: "Technical",
      question: "How secure is my data on Unevee?",
      answer:
        "Data security is our top priority. We use enterprise-grade encryption (AES-256), secure cloud infrastructure (AWS/Google Cloud), regular security audits, GDPR compliance, and secure API communications. Your fitness data, payment information, and personal details are protected with bank-level security. We never sell or share your data with third parties.",
    },
    {
      id: 14,
      category: "Technical",
      question: "Can Unevee integrate with my existing gym equipment?",
      answer:
        "Yes! Unevee integrates with popular gym equipment brands including Technogym, Life Fitness, Precor, and smart fitness devices. We support QR code scanning for equipment usage tracking, automatic workout logging from connected machines, and integration with modern gym access control systems.",
    },
    {
      id: 15,
      category: "Technical",
      question: "What happens if I lose internet connectivity?",
      answer:
        "Both apps work offline with automatic sync when connectivity returns. The Partner App stores member data locally for attendance and payments, while the User App saves workout logs and progress offline. Critical features remain available, ensuring uninterrupted fitness tracking and gym operations.",
    },

    // Pricing Questions
    {
      id: 16,
      category: "Pricing",
      question: "Are there any setup fees or hidden charges?",
      answer:
        "No hidden charges! Partner App pricing is transparent with no setup fees, data migration costs, or surprise charges. You pay only the monthly subscription based on your gym size. The User App is completely free. We also offer discounts for annual payments and multi-location gym chains.",
    },
    {
      id: 17,
      category: "Pricing",
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime with 30 days' notice. We don't lock you into long-term contracts. During the notice period, you can export all your data, and we provide transition support. No cancellation fees apply, and you retain access to your subscription until the end of your billing period.",
    },
    {
      id: 18,
      category: "Pricing",
      question: "Do you offer discounts for multiple gym locations?",
      answer:
        "Yes! We offer attractive volume discounts for gym chains and franchises. Discounts start at 15% for 2-4 locations, 25% for 5-10 locations, and custom enterprise pricing for 10+ locations. Multi-location accounts also get centralized reporting, unified member management, and dedicated account support.",
    },

    // Support Questions
    {
      id: 19,
      category: "Support",
      question: "What kind of customer support do you provide?",
      answer:
        "We provide 24/7 customer support through multiple channels: live chat, phone support (+91 9744880311), email (uneveeapp@gmail.com), and video calls for technical issues. Our support team includes fitness industry experts and technical specialists. Average response time is under 2 hours, with critical issues resolved within 24 hours.",
    },
    {
      id: 20,
      category: "Support",
      question: "Do you provide training for gym staff?",
      answer:
        "Yes! All Partner App subscriptions include comprehensive staff training. We provide: initial onboarding sessions (2-4 hours), video tutorials, user manuals, ongoing training for new features, and 1-on-1 support calls. We ensure your entire team is confident using Unevee before going live.",
    },
    {
      id: 21,
      category: "Support",
      question: "How do I get started with Unevee?",
      answer:
        "Getting started is simple: 1) Contact our sales team for a personalized demo, 2) Choose your subscription plan, 3) We handle setup and data migration, 4) Staff training and system testing, 5) Go live with full support. For the User App, simply download from the App Store or Google Play and start tracking immediately. Both apps offer guided onboarding.",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.icon || AlertCircle;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background-secondary" />

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-success/20 rounded-full blur-2xl animate-float animate-delay-1s" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-3xl animate-pulse-slow" />

      {/* Hero Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-border-subtle mb-6 animate-glow-pulse">
                <Sparkles className="h-4 w-4 text-primary animate-spin-slow" />
                <span className="text-sm font-medium">
                  Frequently Asked Questions
                </span>
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
                Got{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow">
                  Questions?
                </span>
                <br />
                We Have Answers
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delayed">
                Everything you need to know about Unevee's fitness platform,
                from getting started to advanced features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 rounded-xl border border-border-subtle mb-12 animate-scale-in">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search frequently asked questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category.name
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : "bg-background/50 text-muted-foreground hover:bg-card hover:text-foreground"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="glass-card p-6 rounded-xl border border-border-subtle text-center animate-scale-in">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-2">
                  {" "}
                  2hrs
                </div>
                <div className="text-sm text-muted-foreground">
                  Avg Response Time
                </div>
              </div>
              <div
                className="glass-card p-6 rounded-xl border border-border-subtle text-center animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              >
                <Shield className="w-8 h-8 text-success mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Customer Support
                </div>
              </div>
              <div
                className="glass-card p-6 rounded-xl border border-border-subtle text-center animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              >
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-2">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Platforms Supported
                </div>
              </div>
              <div
                className="glass-card p-6 rounded-xl border border-border-subtle text-center animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-2">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">
                  Uptime Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const CategoryIcon = getCategoryIcon(faq.category);
                const isOpen = openItems.has(faq.id);

                return (
                  <div
                    key={faq.id}
                    className={`glass-card rounded-xl border transition-all duration-500 animate-scale-in ${
                      faq.featured
                        ? "border-primary/30 shadow-glow-primary"
                        : "border-border-subtle hover:border-primary/20"
                    } ${isOpen ? "shadow-glow" : "hover:shadow-lg"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-card/30 transition-all duration-300 rounded-xl"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            faq.featured ? "bg-primary/20" : "bg-background/50"
                          }`}
                        >
                          <CategoryIcon
                            className={`w-6 h-6 ${
                              faq.featured
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {faq.featured && (
                              <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                                Popular
                              </span>
                            )}
                            <span className="px-2 py-1 bg-card text-muted-foreground text-xs rounded-full">
                              {faq.category}
                            </span>
                          </div>
                          <h3
                            className={`font-semibold text-left ${
                              faq.featured ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 animate-slide-down">
                        <div className="pl-16">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No questions found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-2xl border border-border-subtle text-center animate-scale-in hover:shadow-glow-primary transition-all duration-700">
              <div className="w-20 h-20 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-10 h-10 text-primary" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Still Have{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow">
                  Questions?
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our fitness and technology experts are here to help. Get
                personalized answers and explore how Unevee can transform your
                fitness journey or business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-success hover:shadow-glow-cyan transition-all duration-300 text-lg font-medium rounded-xl group">
                  <Headphones className="w-5 h-5 group-hover:animate-pulse" />
                  Contact Support
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 border border-border hover:bg-card glass-effect text-lg font-medium rounded-xl transition-all duration-300 group">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Schedule Demo
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-success" />
                  Average response: Under 2 hours
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Available 24/7
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Expert fitness & tech support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(var(--primary-rgb), 0.3);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-delay-1s {
          animation-delay: 1s;
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQ;
