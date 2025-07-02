import { cn } from "../lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutGrid,
  Scissors,
  Book,
  Users,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  UserCircle,
  AlertCircle,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const { location } = useRouterState();
  return (
    <aside
      className={cn(
        "flex flex-col min-h-screen bg-[oklch(0.985_0_0)] border-r border-[oklch(0.92_0.004_286.32)] px-4 py-6 text-[oklch(0.141_0.005_285.823)] transition-all duration-200 z-20",
        collapsed ? "w-20 px-2" : "w-64 px-4"
      )}
    >
      {/* Logo */}
      <div className={cn("flex items-center gap-2 mb-8", collapsed ? "justify-center px-0" : "px-2") }>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">VF</div>
        {!collapsed && <span className="font-semibold text-lg tracking-tight">Vision Forge</span>}
      </div>
      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <Link to="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md font-medium transition cursor-pointer hover:bg-[oklch(0.967_0.001_286.375)] hover:text-[oklch(0.21_0.006_285.885)]",
                collapsed ? "justify-center" : "",
                location.pathname === "/" && !collapsed && "bg-[oklch(0.967_0.001_286.375)] text-[oklch(0.21_0.006_285.885)]"
              )}
            >
              <LayoutGrid size={20} className="text-muted-foreground" />
              {!collapsed && "Projects"}
            </Link>
          </li>
          <li>
            <Link to="/cut-configs"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md font-medium transition cursor-pointer hover:bg-[oklch(0.967_0.001_286.375)] hover:text-[oklch(0.21_0.006_285.885)]",
                collapsed ? "justify-center" : "",
                location.pathname === "/cut-configs" && !collapsed && "bg-[oklch(0.967_0.001_286.375)] text-[oklch(0.21_0.006_285.885)]"
              )}
            >
              <Scissors size={20} className="text-muted-foreground" />
              {!collapsed && "Cut Configs"}
            </Link>
          </li>
          <li>
            <Link to="/libraries"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md font-medium transition cursor-pointer hover:bg-[oklch(0.967_0.001_286.375)] hover:text-[oklch(0.21_0.006_285.885)]",
                collapsed ? "justify-center" : "",
                location.pathname === "/libraries" && !collapsed && "bg-[oklch(0.967_0.001_286.375)] text-[oklch(0.21_0.006_285.885)]"
              )}
            >
              <Book size={20} className="text-muted-foreground" />
              {!collapsed && "Libraries"}
            </Link>
          </li>
          <li>
            <Link to="/team"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md font-medium transition cursor-pointer hover:bg-[oklch(0.967_0.001_286.375)] hover:text-[oklch(0.21_0.006_285.885)]",
                collapsed ? "justify-center" : "",
                location.pathname === "/team" && !collapsed && "bg-[oklch(0.967_0.001_286.375)] text-[oklch(0.21_0.006_285.885)]"
              )}
            >
              <Users size={20} className="text-muted-foreground" />
              {!collapsed && "Team"}
            </Link>
          </li>
        </ul>
      </nav>
      {/* Help & Collapse */}
      <div className={cn("mt-8 space-y-2", collapsed && "flex flex-col items-center space-y-0 gap-2") }>
        {!collapsed && (
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:underline cursor-pointer"><HelpCircle size={20} className="text-muted-foreground" />Help</button>
        )}
        {collapsed ? (
          <button
            className="flex items-center justify-center w-full text-muted-foreground hover:underline cursor-pointer hover:bg-muted/60 rounded transition"
            onClick={onToggle}
            aria-label="Expand sidebar"
            style={{ minHeight: 36 }}
          >
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        ) : (
          <button
            className={cn("flex items-center gap-2 text-sm text-muted-foreground hover:underline cursor-pointer", collapsed ? "justify-center w-full" : "")}
            onClick={onToggle}
            aria-label="Collapse sidebar"
          >
            <ChevronLeft size={20} className="text-muted-foreground" />
            {!collapsed && "Collapse"}
          </button>
        )}
      </div>
      {/* Upgrade CTA */}
      {!collapsed && (
        <div className="mt-6 mb-4">
          <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 flex flex-col items-center">
            <span className="text-xs font-medium text-orange-700 mb-2 flex items-center gap-1"><AlertCircle size={16} className="text-orange-600" />14 days left in trial</span>
            <button className="bg-orange-600 text-white text-xs font-semibold px-4 py-1 rounded hover:bg-orange-700 cursor-pointer">UPGRADE NOW</button>
          </div>
        </div>
      )}
      {/* User Info */}
      <div className={cn("flex items-center gap-2 mt-auto", collapsed ? "justify-center" : "") }>
        <UserCircle size={28} className="text-muted-foreground bg-gray-200 rounded-full" />
        {!collapsed && <span className="font-medium">Vision Forge</span>}
      </div>
      {/* Footer */}
      {!collapsed && (
        <div className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
          Made with <span className="text-blue-600 font-bold">Y</span>isily
        </div>
      )}
    </aside>
  );
}

export default Sidebar; 