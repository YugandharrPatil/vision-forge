import { Sidebar } from "./Sidebar";
import { cn } from "../lib/utils";
import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Bell, Settings, MoreVertical, AlertCircle } from "lucide-react";

const sampleImages = [
  "https://placehold.co/120x120?text=BAR",
  "https://placehold.co/120x120?text=WIDGET",
  "https://placehold.co/120x120?text=UNDERCUTS",
  "https://placehold.co/120x120?text=CLIP",
];

// Simple dropdown for demo (shadcn style, no extra packages)
function Dropdown({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);
  return (
    <div className="relative" ref={ref}>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted/60 transition border border-transparent hover:border-border text-muted-foreground cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        tabIndex={0}
      >
        <MoreVertical size={20} className="text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute right-0 bottom-10 z-30 min-w-[140px] bg-white border border-border rounded-lg shadow-lg py-1 animate-in fade-in zoom-in-95">
          {items.map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-2 text-sm hover:bg-muted/60 transition text-foreground cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-[oklch(1_0_0)]">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((c) => !c)} />
      <main className={cn(
        "flex-1 flex flex-col transition-all duration-200",
        sidebarCollapsed ? "px-2 md:px-4 py-4" : "px-4 md:px-8 py-4 md:py-6"
      )}>
        {/* Breadcrumb & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/toolpath" className="hover:underline cursor-pointer transition text-muted-foreground">Toolpath</Link>
            <span className="mx-1">/</span>
            <span className="font-semibold text-foreground">Projects</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-muted/60 cursor-pointer transition"><Bell size={20} className="text-muted-foreground" /></button>
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-muted/60 cursor-pointer transition"><Settings size={20} className="text-muted-foreground" /></button>
            <button className="bg-orange-600 text-white font-semibold px-4 md:px-5 py-2 rounded hover:bg-orange-700 text-sm whitespace-nowrap cursor-pointer transition">New Project</button>
          </div>
        </div>
        {/* Projects Title */}
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <input type="text" placeholder="Search" className="border border-input rounded-md px-3 py-2 w-full sm:w-64 bg-white" />
          <button className="border border-input rounded-md px-4 py-2 bg-white flex items-center gap-2 text-sm font-medium hover:bg-muted/60 cursor-pointer"><span className="w-4 h-4 bg-gray-300 rounded" />Filter</button>
        </div>
        {/* Project Cards Grid */}
        <div className="bg-card rounded-xl border border-border p-3 md:p-6 mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>2 of 4 Parts Processed</span>
            </div>
            <button className="border border-input rounded-md px-3 py-1 bg-white text-sm font-medium hover:bg-muted/60 cursor-pointer">Manage Tags</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Project Card 1 */}
            <Link to="/putter" className="bg-white border border-border rounded-lg p-4 flex flex-col gap-2 relative shadow-sm hover:shadow-md transition group cursor-pointer hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-ring" tabIndex={0}>
              <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">Issues to consider</span>
              <img src={sampleImages[0]} alt="Putter" className="w-full aspect-square object-cover rounded mb-2 border" />
              <div className="font-semibold truncate">Putter</div>
              <div className="text-xs text-muted-foreground truncate">AI Address</div>
              <div className="text-xs text-muted-foreground">Uploaded 3m ago</div>
              <div className="absolute bottom-2 right-2 z-10">
                <Dropdown items={["View Details", "Duplicate", "Archive", "Delete"]} />
              </div>
            </Link>
            {/* Project Card 2 */}
            <div className="bg-white border border-border rounded-lg p-4 flex flex-col gap-2 relative shadow-sm hover:shadow-md transition group cursor-pointer hover:bg-muted/60">
              <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">Processing</span>
              <img src={sampleImages[1]} alt="STEEL WIDGET" className="w-full aspect-square object-cover rounded mb-2 border" />
              <div className="font-semibold truncate">STEEL WIDGET</div>
              <div className="text-xs text-muted-foreground truncate">AI Address</div>
              <div className="text-xs text-muted-foreground">Uploaded 3m ago</div>
              <div className="absolute bottom-2 right-2 z-10">
                <Dropdown items={["View Details", "Duplicate", "Archive", "Delete"]} />
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-white border border-border rounded-lg p-4 flex flex-col gap-2 relative shadow-sm hover:shadow-md transition group cursor-pointer hover:bg-muted/60">
              <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">Processing</span>
              <img src={sampleImages[2]} alt="UNDERCUTS" className="w-full aspect-square object-cover rounded mb-2 border" />
              <div className="font-semibold truncate">UNDERCUTS</div>
              <div className="text-xs text-muted-foreground truncate">AI Address</div>
              <div className="text-xs text-muted-foreground">Uploaded 3m ago</div>
              <div className="absolute bottom-2 right-2 z-10">
                <Dropdown items={["View Details", "Duplicate", "Archive", "Delete"]} />
              </div>
            </div>
            {/* Project Card 4 */}
            <div className="bg-white border border-border rounded-lg p-4 flex flex-col gap-2 relative shadow-sm hover:shadow-md transition group cursor-pointer hover:bg-muted/60">
              <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded"> </span>
              <img src={sampleImages[3]} alt="Steel Clip" className="w-full aspect-square object-cover rounded mb-2 border" />
              <div className="font-semibold truncate">Steel Clip</div>
              <div className="text-xs text-muted-foreground truncate">AI Address</div>
              <div className="text-xs text-muted-foreground">Uploaded 3m ago</div>
              <div className="absolute bottom-2 right-2 z-10">
                <Dropdown items={["View Details", "Duplicate", "Archive", "Delete"]} />
              </div>
            </div>
            {/* Upload More Card */}
            <div className="border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center p-4 text-muted-foreground cursor-pointer hover:bg-muted/60 transition min-h-[120px]">
              <span className="text-2xl font-bold">+</span>
              <span className="text-xs">Upload More</span>
            </div>
          </div>
        </div>
        {/* File List Row */}
        <div className="bg-card rounded-xl border border-border p-3 md:p-6 mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <span className="text-sm text-muted-foreground">Showing 20 projects per page</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-input bg-white hover:bg-muted/60 cursor-pointer"><span className="w-4 h-4 bg-gray-300 rounded" /></button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-input bg-white hover:bg-muted/60 cursor-pointer"><span className="w-4 h-4 bg-gray-300 rounded" /></button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {['ProE.prt','ParaSolid_x_t','SolidWorks Part.SLDPRT','Catia Part.CATPart','Iges Part.iges','Step file.step'].map((file, i) => (
              <div key={file} className="flex flex-col items-center min-w-[100px]">
                <div className={cn("w-12 h-14 border border-border rounded bg-white flex items-center justify-center mb-1", i === 1 ? "relative" : "")}>{i === 1 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"><AlertCircle size={14} className="text-white" /></span>}<span className="w-8 h-10 bg-gray-200 rounded" /></div>
                <span className="text-xs text-center text-muted-foreground truncate w-20">{file}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-input bg-white hover:bg-muted/60 cursor-pointer"><span className="w-4 h-4 bg-gray-300 rounded" /></button>
            <span className="text-sm">1</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-input bg-white hover:bg-muted/60 cursor-pointer"><span className="w-4 h-4 bg-gray-300 rounded" /></button>
          </div>
        </div>
      </main>
    </div>
  );
} 