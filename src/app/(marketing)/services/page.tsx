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
      title: "Instagram API Integration",
      description:
        "Seamlessly connect to Instagram's official API with secure token management and real-time data access.",
      features: [
        "Secure token storage",
        "Real-time sync",
        "Rate limit management",
        "Error handling",
      ],
      pricing: "Free",
      popular: false,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security with GDPR compliance, encrypted data storage, and complete audit trails.",
      features: [
        "End-to-end encryption",
        "GDPR compliance",
        "Audit logs",
        "SOC 2 certified",
      ],
      pricing: "Contact us",
      popular: true,
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Comprehensive analytics dashboard with custom reporting and data visualization tools.",
      features: [
        "Custom dashboards",
        "Export capabilities",
        "Real-time metrics",
        "Historical data",
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
      description: "Sign up for a free account and verify your email address.",
    },
    {
      step: "2",
      title: "Connect Instagram",
      description:
        "Authorize our app to access your Instagram account with the permissions you choose.",
    },
    {
      step: "3",
      title: "Start Building",
      description:
        "Use our secure API endpoints to build amazing Instagram-integrated applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Instagram Developer Platform
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-medium text-foreground mb-6">
            Professional Instagram
            <span className="text-primary"> Integration Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build powerful applications with secure Instagram API access.
            Enterprise-grade security, GDPR compliance, and developer-friendly
            tools.
          </p>
          <Button size="lg" className="px-8">
            Get Started Free
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
              Everything you need to build secure, scalable Instagram
              integrations.
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
                Enterprise-Grade Compliance
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We take compliance seriously. Our platform meets the highest
                standards for data protection, privacy, and security to ensure
                your Instagram integrations are always compliant.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 border border-border rounded-lg">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">GDPR</h3>
                  <p className="text-sm text-muted-foreground">Compliant</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">SOC 2</h3>
                  <p className="text-sm text-muted-foreground">Type II</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">ISO 27001</h3>
                  <p className="text-sm text-muted-foreground">Certified</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <Instagram className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-foreground">Instagram</h3>
                  <p className="text-sm text-muted-foreground">Approved</p>
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
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Zero-knowledge architecture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Regular security audits</span>
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
                      <span>Right to data portability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Right to deletion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Transparent data usage</span>
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
