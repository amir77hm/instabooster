"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  CheckCircle,
  Trash2,
  Clock,
  Shield,
} from "lucide-react";

export default function DeleteRequest() {
  const [formData, setFormData] = useState({
    email: "",
    accountType: "personal",
    reason: "",
    additionalInfo: "",
    confirmDeletion: false,
    confirmUnderstanding: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const deleteReasons = [
    "No longer need the service",
    "Privacy concerns",
    "Found alternative solution",
    "Account security concerns",
    "Too complicated to use",
    "Other (please specify below)",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason for deletion";
    }

    if (!formData.confirmDeletion) {
      newErrors.confirmDeletion =
        "You must confirm that you want to delete your account";
    }

    if (!formData.confirmUnderstanding) {
      newErrors.confirmUnderstanding =
        "You must acknowledge that this action cannot be undone";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, this would submit to your backend
      console.log("Delete request submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <Card className="border-green-200">
            <CardHeader className="text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-green-800">
                Request Submitted Successfully
              </CardTitle>
              <CardDescription>
                Your account deletion request has been received and is being
                processed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  <strong>Processing Time:</strong> Your request will be
                  processed within 30 days as required by GDPR. You will receive
                  a confirmation email once the deletion is complete.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h3 className="font-medium text-foreground">
                  What happens next:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>
                      We will verify your identity to ensure the security of
                      your request
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>
                      All your personal data will be permanently deleted from
                      our systems
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>
                      Instagram access tokens will be revoked immediately
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>You will receive a final confirmation email</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Need assistance or have questions about your deletion request?
                </p>
                <Button variant="outline">Contact Support</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium text-foreground mb-4">
            Account Deletion Request
          </h1>
          <p className="text-muted-foreground">
            We&apos;re sorry to see you go. Please fill out this form to request
            deletion of your account and all associated data.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trash2 className="h-5 w-5 text-destructive" />
              <span>Delete My Account</span>
            </CardTitle>
            <CardDescription>
              This action will permanently delete your account, all data, and
              revoke Instagram access tokens. This cannot be undone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter the email associated with your account"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Account Type */}
              <div className="space-y-3">
                <Label>Account Type</Label>
                <RadioGroup
                  value={formData.accountType}
                  onValueChange={(value) =>
                    handleInputChange("accountType", value)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="personal" />
                    <Label htmlFor="personal">Personal Account</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">Business Account</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Reason for Deletion */}
              <div className="space-y-3">
                <Label>Reason for Account Deletion *</Label>
                <RadioGroup
                  value={formData.reason}
                  onValueChange={(value) => handleInputChange("reason", value)}
                  className="space-y-2"
                >
                  {deleteReasons.map((reason, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={reason} id={`reason-${index}`} />
                      <Label htmlFor={`reason-${index}`} className="text-sm">
                        {reason}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.reason && (
                  <p className="text-sm text-destructive">{errors.reason}</p>
                )}
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  placeholder="Please provide any additional details about your deletion request..."
                  rows={4}
                />
              </div>

              <Separator />

              {/* Important Information */}
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important:</strong> Account deletion is permanent and
                  cannot be undone. All your data, including Instagram access
                  tokens, will be permanently removed from our systems within 30
                  days.
                </AlertDescription>
              </Alert>

              {/* Data Deletion Information */}
              <div className="space-y-4">
                <h3 className="font-medium text-foreground">
                  What will be deleted:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Your account information and profile data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>All Instagram access tokens and permissions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Usage history and analytics data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Any cached Instagram data</span>
                  </li>
                </ul>
              </div>

              {/* Confirmation Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="confirmDeletion"
                    checked={formData.confirmDeletion}
                    onCheckedChange={(checked) =>
                      handleInputChange("confirmDeletion", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="confirmDeletion"
                    className="text-sm leading-relaxed"
                  >
                    I confirm that I want to permanently delete my account and
                    all associated data. *
                  </Label>
                </div>
                {errors.confirmDeletion && (
                  <p className="text-sm text-destructive ml-6">
                    {errors.confirmDeletion}
                  </p>
                )}

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="confirmUnderstanding"
                    checked={formData.confirmUnderstanding}
                    onCheckedChange={(checked) =>
                      handleInputChange(
                        "confirmUnderstanding",
                        checked as boolean
                      )
                    }
                  />
                  <Label
                    htmlFor="confirmUnderstanding"
                    className="text-sm leading-relaxed"
                  >
                    I understand that this action cannot be undone and that I
                    will lose access to all my data. *
                  </Label>
                </div>
                {errors.confirmUnderstanding && (
                  <p className="text-sm text-destructive ml-6">
                    {errors.confirmUnderstanding}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" variant="destructive" className="flex-1">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Submit Deletion Request
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Have questions about account deletion or need assistance?
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Email:</strong> support@instagramconnect.com
            </p>
            <p>
              <strong>Response Time:</strong> Within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
