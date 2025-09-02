"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && password === confirmPassword) {
      router.push("/dashboard");
    }
  };

  const isFormValid =
    email && password && confirmPassword && password === confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Brand */}
        <div className="text-center">
          <h1 className="instagram-gradient-text text-3xl font-bold mb-2">
            InstaConnect
          </h1>
          <p className="text-muted-foreground">Create your account</p>
        </div>

        <Card className="instagram-card">
          <CardHeader className="space-y-1 text-center">
            <CardTitle>Get started</CardTitle>
            <CardDescription>
              Create an account to access Instagram API tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input-background border-border focus:border-accent focus:ring-accent/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-input-background border-border focus:border-accent focus:ring-accent/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-input-background border-border focus:border-accent focus:ring-accent/20"
                />
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-sm text-destructive">
                    Passwords do not match
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full instagram-button"
                disabled={!isFormValid}
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/login">
                  <button className="text-accent hover:underline font-medium">
                    Sign in
                  </button>
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link href="/">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← Back to home
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          By creating an account, you agree to our{" "}
          <Link href="/terms">
            <button className="text-accent hover:underline">
              Terms of Service
            </button>
          </Link>{" "}
          and{" "}
          <Link href="privacy">
            <button className="text-accent hover:underline">
              Privacy Policy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
