import { ArrowLeft, ChevronRight, User as UserIcon, Bell, Mail, MapPin, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const settingsItems = [
  { icon: UserIcon, label: "Account Details", path: "#" },
  { icon: Bell, label: "Notifications", path: "#" },
  { icon: Mail, label: "Email", path: "#" },
  { icon: MapPin, label: "Location Services", path: "#" },
];

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto max-w-lg px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="flex-1 text-xl font-bold">Account</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pb-6">
        {/* Profile Section */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-20 w-20 overflow-hidden rounded-full bg-primary">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
              alt="Alex Richards"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Alex Richards</h2>
            <p className="text-sm text-muted-foreground">alex.richards@example.com</p>
          </div>
        </div>

        {/* Settings */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-bold">Settings</h3>
          <div className="space-y-2">
            {settingsItems.map((item) => (
              <button
                key={item.label}
                className="flex w-full items-center gap-4 rounded-xl bg-card p-4 text-left shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="flex-1 font-medium">{item.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-bold">Support</h3>
          <button className="flex w-full items-center gap-4 rounded-xl bg-card p-4 text-left shadow-sm transition-all hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Mail className="h-5 w-5" />
            </div>
            <span className="flex-1 font-medium">Contact Us</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Logout Button */}
        <Button
          variant="destructive"
          className="w-full rounded-full py-6 text-base font-semibold"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Log Out
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Account;
