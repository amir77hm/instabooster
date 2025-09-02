import { Button } from "@/components/ui/button";

export default function TokensPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">API Tokens</h1>
          <p className="text-muted-foreground">
            Manage your Instagram API tokens
          </p>
        </div>
        <Button className="instagram-button">Generate New Token</Button>
      </div>

      <div className="instagram-card p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h3 className="font-semibold">Production Token</h3>
              <p className="text-sm text-muted-foreground">
                Created 2 days ago
              </p>
              <p className="text-xs font-mono bg-muted px-2 py-1 rounded mt-2">
                ••••••••••••••••••••••••••••••••••••••••
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">
                Active
              </span>
              <Button variant="outline" size="sm">
                Revoke
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h3 className="font-semibold">Development Token</h3>
              <p className="text-sm text-muted-foreground">
                Created 1 week ago
              </p>
              <p className="text-xs font-mono bg-muted px-2 py-1 rounded mt-2">
                ••••••••••••••••••••••••••••••••••••••••
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                Inactive
              </span>
              <Button variant="outline" size="sm">
                Activate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
