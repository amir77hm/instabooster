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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  User,
  Key,
  Trash2,
  RefreshCw,
  Activity,
  AlertTriangle,
  CheckCircle,
  Instagram,
  Shield,
  Calendar,
} from "lucide-react";

export default function Dashboard() {
  const [tokens, setTokens] = useState([
    {
      id: "1",
      name: "Instagram Access Token",
      type: "instagram",
      status: "active",
      createdAt: "2024-01-15",
      lastUsed: "2024-01-20",
      permissions: ["basic", "user_profile", "user_media"],
    },
  ]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [tokenToDelete, setTokenToDelete] = useState<string | null>(null);

  const handleDeleteToken = (tokenId: string) => {
    setTokens(tokens.filter((token) => token.id !== tokenId));
    setIsDeleteDialogOpen(false);
    setTokenToDelete(null);
  };

  const handleRevokeToken = (tokenId: string) => {
    setTokens(
      tokens.map((token) =>
        token.id === tokenId ? { ...token, status: "revoked" } : token
      )
    );
  };

  const handleRefreshToken = (tokenId: string) => {
    setTokens(
      tokens.map((token) =>
        token.id === tokenId
          ? { ...token, lastUsed: new Date().toISOString().split("T")[0] }
          : token
      )
    );
  };

  const confirmDelete = (tokenId: string) => {
    setTokenToDelete(tokenId);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-medium text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your account and Instagram tokens
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              test@gmail.com
            </span>
          </div>
        </div>

        {/* Account Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="instagram-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold">
                Active Tokens
              </CardTitle>
              <div className="w-8 h-8 rounded-full instagram-gradient flex items-center justify-center">
                <Key className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {tokens.filter((token) => token.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">
                Currently connected
              </p>
            </CardContent>
          </Card>

          <Card className="instagram-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold">
                Instagram Connected
              </CardTitle>
              <div className="w-8 h-8 rounded-full instagram-gradient flex items-center justify-center">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {tokens.filter(
                  (token) =>
                    token.type === "instagram" && token.status === "active"
                ).length > 0
                  ? "Yes"
                  : "No"}
              </div>
              <p className="text-xs text-muted-foreground">Platform status</p>
            </CardContent>
          </Card>

          <Card className="instagram-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold">
                Account Status
              </CardTitle>
              <div className="w-8 h-8 rounded-full instagram-gradient flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">Active</div>
              <p className="text-xs text-muted-foreground">
                All systems operational
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Token Management */}
        <Card className="instagram-card">
          <CardHeader>
            <CardTitle className="instagram-gradient-text">
              Instagram Access Tokens
            </CardTitle>
            <CardDescription>
              Manage your Instagram API tokens and permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {tokens.length === 0 ? (
              <div className="text-center py-8">
                <Instagram className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No tokens found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Connect your Instagram account to get started
                </p>
                <Button>Connect Instagram</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {tokens.map((token) => (
                  <div
                    key={token.id}
                    className="border border-border rounded-lg p-4"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full instagram-gradient flex items-center justify-center">
                            <Instagram className="h-4 w-4 text-white" />
                          </div>
                          <h3 className="font-semibold text-foreground">
                            {token.name}
                          </h3>
                          <Badge
                            variant={
                              token.status === "active"
                                ? "default"
                                : "destructive"
                            }
                            className={`ml-2 ${
                              token.status === "active"
                                ? "bg-accent text-white"
                                : ""
                            }`}
                          >
                            {token.status}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Created: {token.createdAt}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4" />
                            <span>Last used: {token.lastUsed}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {token.permissions.map((permission) => (
                            <Badge
                              key={permission}
                              variant="outline"
                              className="text-xs"
                            >
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRefreshToken(token.id)}
                          disabled={token.status !== "active"}
                        >
                          <RefreshCw className="h-4 w-4 mr-1" />
                          Refresh
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRevokeToken(token.id)}
                          disabled={token.status !== "active"}
                        >
                          Revoke
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => confirmDelete(token.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card className="instagram-card">
          <CardHeader>
            <CardTitle className="instagram-gradient-text">
              Account Management
            </CardTitle>
            <CardDescription>
              Manage your account settings and data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh All Tokens
              </Button>
              <Button variant="outline" className="justify-start">
                <Key className="h-4 w-4 mr-2" />
                Generate New Token
              </Button>
            </div>

            <Separator />

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Deleting your account will permanently remove all your data and
                tokens. This action cannot be undone.
              </AlertDescription>
            </Alert>

            <Button variant="destructive" className="w-full sm:w-auto">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Account
            </Button>
          </CardContent>
        </Card>

        {/* Delete Token Dialog */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Token</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this token? This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 mt-4">
              <Button
                variant="outline"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() =>
                  tokenToDelete && handleDeleteToken(tokenToDelete)
                }
              >
                Delete Token
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <br></br>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="instagram-card p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Instagram className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Connected Apps</h3>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </div>

          <div className="instagram-card p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Active Tokens</h3>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>

          <div className="instagram-card p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-chart-3/10 rounded-lg">
                <Activity className="h-6 w-6 text-chart-3" />
              </div>
              <div>
                <h3 className="font-semibold">API Calls</h3>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="instagram-card p-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">Token generated</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">User authenticated</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">API call successful</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
