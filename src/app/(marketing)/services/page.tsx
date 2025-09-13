import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  Shield,
  Zap,
  Users,
  BarChart3,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: Instagram,
      title: "Instagram Messaging Hub",
      description:
        "Manage all your Direct Messages and comments from one secure dashboard.",
      features: [
        "Unified inbox for DMs and comments",
        "Reply to multiple users at once",
        "Message search & filters",
        "Notifications for new activity",
      ],
      pricing: "Free",
      popular: true,
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "We keep your Instagram data safe with encrypted token storage and full user control.",
      features: [
        "Encrypted token storage",
        "Permissions transparency",
        "Easy account disconnect",
        "Data deletion on request",
      ],
      pricing: "Included",
      popular: false,
    },
    {
      icon: BarChart3,
      title: "AI Insights & Smart Replies",
      description:
        "Boost engagement with AI-powered reply suggestions, sentiment-to-emoji responses, and performance insights.",
      features: [
        "Smart reply suggestions",
        "Sentiment-based emojis",
        "Best-time-to-post tips",
        "Engagement analytics",
      ],
      pricing: "From $29/month",
      popular: false,
    },
  ];

  const features = [
    {
      icon: Lock,
      title: "Secure Token Management",
      description:
        "Your Instagram tokens are encrypted and stored securely with automatic rotation capabilities.",
    },
    {
      icon: Users,
      title: "User Account Control",
      description:
        "Complete control over user accounts with easy registration, management, and deletion processes.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed and reliability with 99.9% uptime and lightning-fast response times.",
    },
    {
      icon: CheckCircle,
      title: "GDPR Compliant",
      description:
        "Fully compliant with GDPR and other privacy regulations with transparent data practices.",
    },
  ];

  const integrationSteps = [
    {
      step: "1",
      title: "Create Account",
      description:
        "Sign up for a free InstaBooster account and verify your email to get started.",
    },
    {
      step: "2",
      title: "Connect Instagram",
      description:
        "Securely log in with Instagram and grant permissions to manage messages and comments.",
    },
    {
      step: "3",
      title: "Start Managing",
      description:
        "Access your dashboard to reply to DMs, manage comments, and use AI-powered smart replies.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Instagram Management Platform
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-medium text-foreground mb-6">
            Smarter
            <span className="text-primary"> Instagram Engagement</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Manage your Instagram Direct Messages and comments from one secure
            dashboard. Boost your productivity with AI-powered reply
            suggestions, sentiment-based emojis, and engagement insights — all
            while keeping your data private and secure.
          </p>
          <Button size="lg" className="px-8">
            Connect with Instagram
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tools designed to help businesses and creators manage Instagram
              more efficiently — from smart DM handling to comment moderation
              and audience engagement insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className={`relative border-border hover:shadow-lg transition-shadow ${
                  service.popular ? "border-primary" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-foreground">
                      {service.pricing}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={service.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for developers, designed for compliance, optimized for
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Simple Integration Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get up and running in minutes with our streamlined integration
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrationSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < integrationSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
                Privacy & Security First
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We keep your Instagram data safe with encrypted token storage,
                clear permissions, and full user control. You decide what to
                share and can disconnect anytime.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 border border-border rounded-lg">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">Encrypted</h3>
                  <p className="text-sm text-muted-foreground">Token Storage</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">Permissions</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent Access
                  </p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">Data Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Delete Anytime
                  </p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <Instagram className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">Meta</h3>
                  <p className="text-sm text-muted-foreground">API Compliant</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Data Protection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Encrypted token storage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Permissions transparency</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Easy account disconnect</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>User Rights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Access to personal data</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Account & data deletion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Clear data usage policies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of developers building amazing Instagram integrations
            with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
