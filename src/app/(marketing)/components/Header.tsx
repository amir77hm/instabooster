"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 0, path: "/", label: "Home" },
    { key: 1, path: "/services", label: "Services" },
    { key: 2, path: "/privacy", label: "Privacy Policy" },
    { key: 3, path: "/terms", label: "Terms of Service" },
    { key: 4, path: "/delete-req", label: "Delete Request" },
  ];

  return (
    <nav className="bg-background border-b border-instagram-border sticky top-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <button
                className="instagram-gradient-text text-2xl tracking-tight"
                style={{ fontWeight: 700 }}
              >
                InstaBooster
              </button>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link href={item.path} key={item.path}>
                  <button
                    className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                      pathname === item.path
                        ? "instagram-gradient text-white shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-instagram-light-gray"
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="auth/login">
              <Button className="w-full instagram-button font-bold">
                Our Journey
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link href={item.path} key={item.path}>
                      <button
                        key={item.path}
                        className={`text-left px-3 py-2 rounded-lg transition-all duration-200 ml-2 ${
                          pathname === item.path
                            ? "instagram-gradient text-white shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-instagram-light-gray"
                        }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  ))}
                  <div className="border-t pt-4">
                    <Link href="auth/login">
                      <Button className="w-full instagram-button font-bold mx-2">
                        Our Journey
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
