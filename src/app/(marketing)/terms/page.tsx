export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Agreement to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using InstaBooster (&quot;Service&quot;), you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Service Description
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              InstaBooster provides a platform that allows users to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Connect their Instagram accounts securely</li>
              <li>Manage Instagram API access tokens</li>
              <li>
                Access Instagram data in compliance with Instagram&apos;s
                policies
              </li>
              <li>Control data access and permissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              User Accounts
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Account Creation
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    You must provide accurate and complete information when
                    creating an account
                  </li>
                  <li>
                    You are responsible for safeguarding your account
                    credentials
                  </li>
                  <li>
                    You must notify us immediately of any unauthorized use of
                    your account
                  </li>
                  <li>
                    One person or legal entity may maintain only one account
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Account Responsibilities
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    You are responsible for all activities that occur under your
                    account
                  </li>
                  <li>
                    You must comply with Instagram&apos;s Terms of Use and
                    Community Guidelines
                  </li>
                  <li>
                    You must not use the service for any illegal or unauthorized
                    purpose
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Instagram Integration
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Authorization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  By connecting your Instagram account, you authorize us to
                  access your Instagram data according to the permissions you
                  grant. You can revoke this authorization at any time through
                  your account dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Compliance
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Our service complies with Instagram&apos;s Platform Policy
                  </li>
                  <li>We only access data that you explicitly authorize</li>
                  <li>
                    We respect Instagram&apos;s rate limits and usage guidelines
                  </li>
                  <li>
                    We do not store Instagram content beyond what is necessary
                    for service provision
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Acceptable Use
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>
                Use automated tools to access the service without permission
              </li>
              <li>Interfere with or disrupt the service</li>
              <li>Create multiple accounts to circumvent restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Data and Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of
              personal information is governed by our Privacy Policy. By using
              our service, you agree to our data practices as described in our
              Privacy Policy.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We implement industry-standard security measures</li>
              <li>We comply with GDPR and other applicable privacy laws</li>
              <li>You retain ownership of your data</li>
              <li>You can request data deletion at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Service Availability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide reliable service but cannot guarantee 100%
              uptime. We reserve the right to modify, suspend, or discontinue
              the service with reasonable notice. We may also impose limits on
              certain features or restrict access to parts of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Intellectual Property
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Our Rights
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and its original content, features, and
                  functionality are owned by InstaBooster and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Your Rights
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to your data and content. By using our
                  service, you grant us a limited license to use your data
                  solely for providing the service as described in our Privacy
                  Policy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Disclaimers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
              <li>Accuracy, reliability, or availability of the service</li>
              <li>That the service will be uninterrupted or error-free</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
              InstaBooster BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
              LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Termination
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  By You
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may terminate your account at any time by using the
                  account deletion feature in your dashboard or by contacting
                  us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  By Us
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account immediately if you
                  breach these terms or for any other reason at our sole
                  discretion, with or without notice.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of significant changes via email or through our
              service. Your continued use of the service after such
              modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="font-medium text-foreground">Legal Department</p>
              <p className="text-muted-foreground">
                Email: legal@InstaBooster.com
              </p>
              <p className="text-muted-foreground">
                Address: [Your Company Address]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
