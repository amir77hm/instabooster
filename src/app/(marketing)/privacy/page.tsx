export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At InstaBooster, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our service that integrates with
              Instagram&apos;s API.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Email address (for account creation and communication)
                  </li>
                  <li>
                    Username and profile information from Instagram (when you
                    connect your account)
                  </li>
                  <li>
                    Instagram access tokens (stored securely and encrypted)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Instagram Data
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Basic profile information (username, profile picture)</li>
                  <li>Media content (photos, videos) as authorized by you</li>
                  <li>
                    Engagement metrics (likes, comments, followers) if
                    applicable
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Technical Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Usage patterns and feature interactions</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our service</li>
              <li>To authenticate your identity and manage your account</li>
              <li>To access Instagram data as authorized by you</li>
              <li>To improve our service and develop new features</li>
              <li>To communicate with you about service updates</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Data Sharing and Disclosure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties, except in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>
                With service providers who assist in our operations (under
                strict confidentiality agreements)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Instagram API Usage
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our use of Instagram&apos;s API is governed by Instagram&apos;s
              Platform Policy and Terms of Use. We:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Only access data that you explicitly authorize</li>
              <li>Store Instagram tokens securely and encrypted</li>
              <li>Comply with Instagram&apos;s data use policies</li>
              <li>Allow you to revoke access at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. This includes
              encryption of sensitive data, secure server infrastructure, and
              regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under GDPR and other applicable privacy laws, you have the right
              to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary
              to provide our services and comply with legal obligations.
              Instagram access tokens are deleted immediately when you revoke
              access or delete your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium text-foreground">Privacy Officer</p>
              <p className="text-muted-foreground">
                Email: privacy@InstaBooster.com
              </p>
              <p className="text-muted-foreground">
                Address: [Your Company Address]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date. Your
              continued use of our service after any changes constitutes
              acceptance of the new Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
