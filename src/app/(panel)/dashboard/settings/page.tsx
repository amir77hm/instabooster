import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and application settings
        </p>
      </div>

      <div className="space-y-6">
        <div className="instagram-card p-6">
          <h3 className="font-semibold mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <p className="text-sm text-muted-foreground">test@gmail.com</p>
            </div>
            <Button variant="outline" size="sm">
              Change Password
            </Button>
          </div>
        </div>

        <div className="instagram-card p-6">
          <h3 className="font-semibold mb-4">Application Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">App Name</label>
              <p className="text-sm text-muted-foreground">InstaConnect API</p>
            </div>
            <div>
              <label className="text-sm font-medium">Webhook URL</label>
              <p className="text-sm text-muted-foreground">
                https://your-app.com/webhook
              </p>
            </div>
            <Button variant="outline" size="sm">
              Update Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
