"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  TrendingUp,
  Heart,
  Zap,
  Target,
  Filter,
  BookOpen,
  Sparkles,
} from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Business Tips",
    "Health & Wellness",
    "Technology",
    "Success Stories",
    "Updates",
  ];

  const featuredPost = {
    id: 1,
    title:
      "The Future of Fitness Business Management: 5 Trends to Watch in 2025",
    excerpt:
      "Discover how technology is reshaping the fitness industry and what gym owners need to know to stay competitive in the digital age.",
    category: "Business Tips",
    author: "Unevee Team",
    date: "September 5, 2025",
    readTime: "8 min read",
    image: "/blog/featured-post.jpg",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "How to Digitize Your Gym in 30 Days: A Complete Guide",
      excerpt:
        "Step-by-step roadmap for gym owners to transition from traditional operations to a fully digital fitness business.",
      category: "Business Tips",
      author: "Unevee Team",
      date: "September 3, 2025",
      readTime: "6 min read",
      image: "/blog/digitize-gym.jpg",
    },
    {
      id: 3,
      title: "The Science Behind Effective Workout Tracking",
      excerpt:
        "Understanding how data-driven fitness tracking can improve member retention and workout effectiveness.",
      category: "Health & Wellness",
      author: "Dr. Sarah Fitness",
      date: "September 1, 2025",
      readTime: "5 min read",
      image: "/blog/workout-tracking.jpg",
    },
    {
      id: 4,
      title: "Case Study: How FitZone Increased Member Retention by 40%",
      excerpt:
        "Real success story of a gym that transformed their business using Unevee's comprehensive management platform.",
      category: "Success Stories",
      author: "Unevee Team",
      date: "August 28, 2025",
      readTime: "7 min read",
      image: "/blog/case-study.jpg",
    },
    {
      id: 5,
      title: "Flutter vs React Native for Fitness Apps: Technical Deep Dive",
      excerpt:
        "Why we chose Flutter for building scalable fitness applications and what it means for performance.",
      category: "Technology",
      author: "Dev Team",
      date: "August 25, 2025",
      readTime: "10 min read",
      image: "/blog/flutter-tech.jpg",
    },
    {
      id: 6,
      title: "Building Healthy Habits: The Psychology of Fitness Tracking",
      excerpt:
        "Exploring how gamification and data visualization help users maintain consistent fitness routines.",
      category: "Health & Wellness",
      author: "Dr. Mind Fit",
      date: "August 22, 2025",
      readTime: "4 min read",
      image: "/blog/healthy-habits.jpg",
    },
    {
      id: 7,
      title: "Unevee Platform Update: New CRM Features and Analytics Dashboard",
      excerpt:
        "Latest product updates including enhanced customer management tools and powerful business insights.",
      category: "Updates",
      author: "Product Team",
      date: "August 20, 2025",
      readTime: "3 min read",
      image: "/blog/platform-update.jpg",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Business Tips":
        return TrendingUp;
      case "Health & Wellness":
        return Heart;
      case "Technology":
        return Zap;
      case "Success Stories":
        return Target;
      case "Updates":
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background-secondary" />

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-success/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-border-subtle mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Unevee Blog</span>
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Insights &{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Knowledge
                </span>
                <br />
                for Fitness Success
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest trends, tips, and insights from the
                fitness and technology world. Learn how to grow your business
                and achieve your health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 rounded-xl border border-border-subtle mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const IconComponent = getCategoryIcon(category);
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-background/50 text-muted-foreground hover:bg-card"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-2xl border border-border-subtle mb-16 animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-card text-muted-foreground text-sm rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="glass-card p-4 rounded-xl border border-border-subtle">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-success/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <div
                    key={post.id}
                    className="glass-card rounded-xl border border-border-subtle overflow-hidden hover:shadow-lg transition-all animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center">
                      <CategoryIcon className="w-12 h-12 text-primary/50" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-card text-muted-foreground text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-3 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4 glass-effect group"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-2xl border border-border-subtle text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Stay{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Updated
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest insights, tips, and updates delivered directly to
                your inbox. Join our community of fitness professionals and
                health enthusiasts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-all"
                />
                <Button className="bg-gradient-success hover:shadow-glow-cyan transition-all duration-300">
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
