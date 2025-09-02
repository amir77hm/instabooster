import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Home,
  Settings,
  Key,
  Activity,
  Users,
  LogOut,
  Instagram,
  Shield,
  FileText,
  Delete,
} from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "InstaBooster Panel",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      path: "/dashboard/tokens",
      label: "API Tokens",
      icon: Key,
    },
    {
      path: "/dashboard/delete-request",
      label: "Delete account",
      icon: Delete,
    },
    {
      path: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  const onLogout = () => {
    console.log("on logout");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 instagram-gradient rounded-lg flex items-center justify-center">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold">InstaConnect</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <Link href={item.path}>
                        <SidebarMenuButton isActive={"test" === item.path}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Legal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="privacy">
                      <SidebarMenuButton>
                        <Shield className="h-4 w-4" />
                        <span>Privacy Policy</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="terms">
                      <SidebarMenuButton>
                        <FileText className="h-4 w-4" />
                        <span>Terms of Service</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-auto">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1">
          <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-4 lg:px-6">
              <SidebarTrigger />
              <div className="ml-auto flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  test@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
