import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Trash2,
  User,
  Settings,
  ShieldCheck,
  ArrowRight,
  Instagram,
} from "lucide-react";

export default function DeleteRequest() {
  const deletionSteps = [
    {
      icon: User,
      title: "Login to your account",
      description:
        "Access your account on our platform using your credentials.",
    },
    {
      icon: Settings,
      title: "Navigate to Account Settings",
      description: "Go to your Account Settings or Dashboard section.",
    },
    {
      icon: Trash2,
      title: 'Click "Delete Facebook/Instagram Data"',
      description: "Find and click the deletion button to remove your data.",
    },
    {
      icon: ShieldCheck,
      title: "Immediate deletion",
      description:
        "All Facebook- and Instagram-related data is permanently removed from our servers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background mt-4">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium text-foreground mb-4">
              Delete Request
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete control over your data with transparent deletion
              processes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="instagram-card mb-8">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-4">
                User Data Deletion Instructions
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                If you have linked your Facebook or Instagram account to our
                platform and wish to delete your associated data, you can do so
                at any time.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <h3 className="mb-6 text-foreground">
                  To request deletion of your data:
                </h3>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deletionSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative p-6 rounded-lg border border-instagram-border bg-card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full instagram-gradient flex items-center justify-center text-white">
                          <step.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-foreground">
                          {index + 1}. {step.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Important Notice */}
              <div className="bg-muted/30 p-6 rounded-lg border border-accent/20">
                <div className="flex items-start space-x-3">
                  <Instagram className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-accent mb-2">
                      Immediate Data Deletion
                    </h4>
                    <p className="text-muted-foreground">
                      This will <strong>immediately delete</strong> all
                      Facebook- and Instagram-related data associated with your
                      account from our servers. This action is permanent and
                      cannot be undone.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Gets Deleted */}
              <div className="space-y-4">
                <h4 className="text-foreground">What will be deleted:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Instagram access tokens",
                    "Connected account information",
                    "Message data and history",
                    "Profile data and settings",
                    "Usage analytics and logs",
                    "Cached Instagram content",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="instagram-card">
              <CardContent className="p-8">
                <h3 className="text-xl mb-4 text-foreground">
                  Need to delete your data?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Login to your account to access the data deletion options in
                  your dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="instagram-button">
                    Access Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Contact Support</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Information */}
          <div className="mt-12 text-center space-y-4">
            <h4 className="text-foreground">Need Help?</h4>
            <p className="text-muted-foreground">
              If you have questions about data deletion or need assistance with
              the process, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Email:</strong>{" "}
                support@instaconnect.com
              </div>
              <div>
                <strong className="text-foreground">Response Time:</strong>{" "}
                Within 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
