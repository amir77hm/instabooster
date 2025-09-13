import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Shield, Users, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Reply to Direct Messages",
      description:
        "Read and respond to all your Instagram DMs from a simple, secure dashboard.",
    },
    {
      icon: Users,
      title: "Manage Comments Easily",
      description:
        "Moderate and reply to comments on your posts without switching apps.",
    },
    {
      icon: Zap,
      title: "AI-Powered Assistance",
      description:
        "Get smart reply suggestions, sentiment-based emojis, and engagement insights powered by AI.",
    },
  ];

  const benefits = [
    "Transparent data usage and practices",
    "Simple account deletion process",
    "Secure and encrypted token management",
    "GDPR-compliant data handling",
    "Clear and accessible privacy policies",
    "24/7 customer support",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Manage Your Instagram Smarter{" "}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Connect your Instagram account securely and manage your Direct
                Messages, Comments, and Engagement — all from one simple
                dashboard. Powered by AI to help you reply faster and smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/login">
                  <Button size="lg" className="px-8 instagram-button">
                    Get Started
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY4MDA2MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Social media dashboard"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We prioritize security, transparency, and user control in every
              aspect of our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="instagram-card hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full instagram-gradient flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
                Your Privacy, Our Priority
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We believe in complete transparency about how we handle your
                data. Your privacy and security are at the core of everything we
                do.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="instagram-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Create your account today and experience secure Instagram
                integration with full control over your data.
              </p>
              <Link href="/auth/login">
                <Button className="w-full instagram-button">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 instagram-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Join Thousands of Satisfied Users
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the most secure and user-friendly Instagram integration
            platform.
          </p>
          <Link href="/auth/login">
            <Button
              variant="secondary"
              size="lg"
              className="px-8 hover:scale-105 transition-transform duration-200"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
