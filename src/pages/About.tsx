"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  Globe,
  Award,
  CheckCircle,
  Sparkles,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const About = () => {
  // Team Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Vahab kp",
      designation: "CEO, Founder",
      quote: "Leading the vision and strategy to innovate the future.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "NidhinLal p",
      designation: "CTO, Founder",
      quote: "Architecting the technology that powers our solutions.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Ladeed",
      designation: "COO, Co-founder",
      quote: "Ensuring operational excellence and seamless execution.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Nirmal",
      designation: "Crew-1",
      quote: "Building robust and scalable features for our users.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Akhil",
      designation: "Crew-2",
      quote: "Crafting elegant code and solving complex challenges.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Junaid",
      designation: "Crew-3",
      quote:
        "Driving growth and building strong business relations in the UAE market.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Vignesh",
      designation: "Crew-4",
      quote:
        "Connecting people and products through impactful marketing strategies.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Ajin",
      designation: "Crew-5",
      quote:
        "Turning opportunities into results with innovative sales approaches.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
    {
      name: "Abhijith",
      designation: "Crew-6",
      quote:
        "Building trust and delivering value through customer-focused solutions.",
      image:
        "https://thumbs.dreamstime.com/b/bearded-man-silhouette-vector-portrait-profile-placeholder-minimalist-designed-use-as-image-illustration-356561454.jpg",
    },
  ];

  const stats = [
    { number: "5+", label: "Platforms Supported", icon: Globe },
    { number: "1000+", label: "Fitness Professionals", icon: Users },
    { number: "24/7", label: "Customer Support", icon: Shield },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Heart,
      title: "Health First",
      description:
        "We believe fitness and health should be accessible to everyone, everywhere.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Every feature we build helps businesses and users achieve their fitness goals.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your data is protected with enterprise-grade security and privacy measures.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuously evolving with cutting-edge technology for the fitness industry.",
    },
  ];

  // Fixed: Calculate correct number of slides and indicators
  const maxSlideIndex = Math.max(0, teamMembers.length - slidesToShow);
  const totalIndicators = maxSlideIndex + 1;

  // Team Slider Functions
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay, slidesToShow]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    // Fixed: Ensure index is within bounds
    if (index >= 0 && index <= maxSlideIndex) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background-secondary" />

      {/* Animated background elements - removed bounce effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-success/20 rounded-full blur-2xl animate-float animate-delay-1s" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-success/15 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-primary/10 rounded-full blur-xl animate-spin-slow" />

      {/* Hero Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-border-subtle mb-6 animate-glow-pulse">
                <Sparkles className="h-4 w-4 text-primary animate-spin-slow" />
                <span className="text-sm font-medium">About Unevee</span>
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
                Transforming{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow">
                  Fitness
                </span>
                <br />
                One Business at a Time
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delayed">
                We bridge the gap between fitness businesses and
                health-conscious users through innovative B2B management
                solutions and free B2C health tracking applications.
              </p>
            </div>

            {/* Stats - removed bounce effects */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl border border-border-subtle hover:shadow-glow transition-all duration-500 animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-foreground mb-2 animate-counter">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-8 lg:p-12 rounded-2xl border border-border-subtle animate-fade-in-up hover:shadow-glow-primary transition-all duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-right">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Our{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow">
                      Mission
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    To create a universal sports and fitness platform that
                    empowers businesses to streamline operations while giving
                    users the tools they need to track, train, and transform
                    their health journey.
                  </p>
                  <div className="space-y-3">
                    <div
                      className="flex items-center gap-3 animate-slide-left"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <CheckCircle className="w-5 h-5 text-success animate-pulse-glow" />
                      <span className="text-foreground">
                        Digitize fitness businesses across India
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-3 animate-slide-left"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <CheckCircle className="w-5 h-5 text-success animate-pulse-glow" />
                      <span className="text-foreground">
                        Provide free health tracking for everyone
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-3 animate-slide-left"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <CheckCircle className="w-5 h-5 text-success animate-pulse-glow" />
                      <span className="text-foreground">
                        Bridge the gap between gyms and members
                      </span>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-8 rounded-xl border border-border-subtle animate-slide-left hover:shadow-glow transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Our Impact
                  </h3>
                  <div className="space-y-4">
                    <div
                      className="flex justify-between items-center animate-fade-in"
                      style={{ animationDelay: "0.8s" }}
                    >
                      <span className="text-muted-foreground">
                        Businesses Digitized
                      </span>
                      <span className="text-2xl font-bold text-success animate-counter">
                        1000+
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center animate-fade-in"
                      style={{ animationDelay: "1s" }}
                    >
                      <span className="text-muted-foreground">
                        Active Users
                      </span>
                      <span className="text-2xl font-bold text-primary animate-counter">
                        50,000+
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center animate-fade-in"
                      style={{ animationDelay: "1.2s" }}
                    >
                      <span className="text-muted-foreground">
                        Workouts Tracked
                      </span>
                      <span className="text-2xl font-bold text-foreground animate-pulse">
                        ∞
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow">
                  Values
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make and every
                feature we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-xl border border-border-subtle hover:bg-card/50 hover:shadow-glow transition-all duration-500 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Team Section */}
      <section className="relative z-10 py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-secondary/50 via-transparent to-background-secondary/50" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary/10 rounded-full blur-3xl animate-world-pulse" />
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-success/10 rounded-full blur-3xl animate-world-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl animate-world-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow">
                Visionary Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The minds revolutionizing global fitness connections
            </p>
          </div>

          {/* Fixed Slider Container */}
          <div
            className="relative max-w-7xl mx-auto"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 glass-card rounded-full border border-border-subtle hover:border-primary/50 transition-all duration-300 flex items-center justify-center group hover:shadow-glow-cyan"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 glass-card rounded-full border border-border-subtle hover:border-primary/50 transition-all duration-300 flex items-center justify-center group hover:shadow-glow-cyan"
              style={{ transform: "translate(50%, -50%)" }}
            >
              <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
            </button>

            {/* Fixed Slider Track */}
            <div className="overflow-hidden mx-8">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesToShow)
                  }%)`,
                }}
              >
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="flex-shrink-0 px-4"
                    style={{
                      width: `${100 / slidesToShow}%`, // Fixed: Correct width calculation
                    }}
                  >
                    <div
                      className="group glass-card rounded-2xl border border-border-subtle hover:border-primary/30 transition-all duration-700 hover:shadow-glow-cyan relative overflow-hidden h-full animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-success/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                      <div className="p-8 relative z-10 h-full flex flex-col">
                        {/* Profile Image */}
                        <div className="relative mb-6">
                          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-3 border-border-subtle group-hover:border-primary/50 transition-all duration-500 relative">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>

                          {/* Floating connection dots */}
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full animate-pulse-glow shadow-lg" />
                          <div
                            className="absolute -bottom-1 -left-1 w-4 h-4 bg-success rounded-full animate-pulse-glow shadow-lg"
                            style={{ animationDelay: "1s" }}
                          />
                        </div>

                        {/* Member Info */}
                        <div className="text-center mb-4 flex-grow">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 animate-slide-up">
                            {member.name}
                          </h3>
                          <p className="text-sm text-primary font-medium mb-4 animate-fade-in">
                            {member.designation}
                          </p>
                        </div>

                        {/* Quote */}
                        <div className="relative mt-auto">
                          <Quote className="w-5 h-5 text-primary/50 mb-3 group-hover:text-primary transition-colors duration-300" />
                          <p className="text-sm text-muted-foreground leading-relaxed italic group-hover:text-foreground transition-colors duration-300">
                            "{member.quote}"
                          </p>
                        </div>

                        {/* Connection Lines Effect */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none">
                          <svg className="w-full h-full">
                            <line
                              x1="0"
                              y1="50%"
                              x2="100%"
                              y2="50%"
                              stroke="url(#gradient)"
                              strokeWidth="2"
                              className="animate-connect-line"
                            />
                            <line
                              x1="50%"
                              y1="0"
                              x2="50%"
                              y2="100%"
                              stroke="url(#gradient)"
                              strokeWidth="2"
                              className="animate-connect-line"
                              style={{ animationDelay: "0.5s" }}
                            />
                            <defs>
                              <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="hsl(var(--primary))"
                                  stopOpacity="0"
                                />
                                <stop
                                  offset="50%"
                                  stopColor="hsl(var(--primary))"
                                  stopOpacity="1"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="hsl(var(--primary))"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Dots Indicator - Only show correct number */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: totalIndicators }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 relative overflow-hidden ${
                    index === currentSlide
                      ? "bg-primary shadow-glow-cyan scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                  }`}
                >
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-success animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Global Connection Message */}
          <div
            className="text-center mt-16 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card border border-border-subtle hover:shadow-glow transition-all duration-500 animate-glow-pulse">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow" />
              <p className="text-sm text-foreground font-medium">
                Connecting fitness communities across continents
              </p>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-2xl border border-border-subtle hover:shadow-glow-primary transition-all duration-700 animate-scale-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-slide-up">
                Ready to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-flow">
                  Join Us?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in-delayed">
                Whether you're a fitness business looking to digitize or a user
                wanting to track your health journey, we're here to help.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-success hover:shadow-glow-cyan transition-all duration-300 text-lg px-8 py-6 group"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-card glass-effect text-lg px-8 py-6 hover:shadow-glow transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations - removed bounce effects */}
      <style jsx>{`
        @keyframes connect-line {
          0% {
            stroke-dasharray: 0 100%;
          }
          100% {
            stroke-dasharray: 100% 0;
          }
        }

        @keyframes world-pulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.7;
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

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
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

        @keyframes counter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-connect-line {
          animation: connect-line 2s ease-in-out infinite;
        }
        .animate-world-pulse {
          animation: world-pulse 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-counter {
          animation: counter 1s ease-out forwards;
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

export default About;
