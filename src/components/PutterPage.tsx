import { useState } from "react";
import { MoreVertical, Settings, Download, ChevronDown, ChevronUp, AlertCircle, Search, Grid, Box, User, Users, Move3d, ZoomIn, ZoomOut, PlayCircle, MapPin, Bell, UserCircle } from "lucide-react";

const tabs = ["Overview", "Setups", "Tools", "Strategy", "Estimate"];

export default function PutterPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [machOpen, setMachOpen] = useState({2: true, 3: false});
  return (
    <div className="flex flex-col min-h-screen bg-[oklch(1_0_0)]">
      {/* Top bar - dark, app icon, search, user, notification, menu */}
      <div className="flex items-center justify-between px-0 py-0 border-b bg-[#23272e] h-12">
        {/* Left: App icon and nav */}
        <div className="flex items-center gap-2 h-full px-2">
          <div className="w-8 h-8 rounded bg-[#4caf50] flex items-center justify-center font-bold text-white text-lg">PP</div>
          <span className="text-white font-semibold text-sm ml-2">Peggy's Precision</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-xs text-white/80">Projects</span>
          <span className="mx-1 text-gray-400">/</span>
          <span className="text-xs text-white/80">Putter Sample</span>
          <span className="mx-1 text-gray-400">/</span>
          <select className="border-none bg-transparent text-xs text-white/80 focus:ring-0 focus:outline-none cursor-pointer">
            <option className="text-black">Sample Aluminum (Inch)</option>
          </select>
        </div>
        {/* Center: Search bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-[#2c313a] rounded px-2 py-1 w-64 max-w-full">
            <Search size={16} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-white text-sm w-full placeholder:text-gray-400" />
          </div>
        </div>
        {/* Right: User, notification, menu */}
        <div className="flex items-center gap-2 h-full pr-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2c313a] transition cursor-pointer"><Bell size={18} className="text-gray-300" /></button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2c313a] transition cursor-pointer"><UserCircle size={22} className="text-gray-300" /></button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2c313a] transition cursor-pointer"><MoreVertical size={18} className="text-gray-300" /></button>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex items-center gap-2 px-6 pt-4 bg-white border-b">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium rounded-t transition border-b-2 ${i === activeTab ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-muted-foreground hover:text-blue-600 hover:bg-muted/60 cursor-pointer"}`}
            onClick={() => setActiveTab(i)}
          >
            {tab} {tab === "Setups" && <span className="ml-1 text-xs bg-gray-200 rounded px-1">3</span>} {tab === "Tools" && <span className="ml-1 text-xs bg-gray-200 rounded px-1">7</span>}
          </button>
        ))}
      </div>
      {/* Main content */}
      <div className="flex flex-1">
        {/* Left: 3D viewer and controls */}
        <div className="flex-1 flex flex-col bg-[#f8f9fa] border-r">
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-6 py-2 border-b bg-white">
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><Grid size={18} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><Box size={18} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><User size={18} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><Users size={18} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><Move3d size={18} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><ZoomIn size={18} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><ZoomOut size={18} /></button>
            <div className="flex-1" />
            <div className="flex items-center gap-1 bg-white border rounded px-2 py-1">
              <Search size={16} className="text-muted-foreground" />
              <input type="text" className="w-12 text-xs bg-transparent outline-none" value="170" readOnly />
              <span className="text-xs">%</span>
            </div>
          </div>
          {/* 3D Viewer Image Full Fit */}
          <div className="flex-1 flex items-center justify-center bg-white border-b">
            <div className="w-[80%] h-[70%] rounded-lg flex items-center justify-center border border-dashed border-gray-300 overflow-hidden aspect-[16/9] bg-white">
              <img src="/putter-3d.png" alt="Putter 3D" className="object-cover w-full h-full" />
            </div>
          </div>
          {/* Video/size bar */}
          <div className="flex items-center gap-2 px-6 py-2 bg-white border-t">
            <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-muted/60 cursor-pointer"><PlayCircle size={16} /></button>
            <span className="text-xs">0:00 / 0:00</span>
            <div className="flex-1" />
            <span className="text-xs">4.43 x 1.1 x 0.91 in</span>
          </div>
        </div>
        {/* Right: Details panel */}
        <div className="w-[340px] flex flex-col bg-white border-l">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="font-semibold text-lg">Overview</span>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-600 cursor-pointer"><Settings size={18} />Settings</button>
          </div>
          <div className="px-6 py-4 border-b text-sm space-y-1">
            <div className="flex justify-between"><span>Machinable surface area</span><span>≈ 98%</span></div>
            <div className="flex justify-between"><span>Machine type</span><span>3 Axis</span></div>
            <div className="flex justify-between"><span>Cut config</span><span className="flex items-center gap-1"><MapPin size={14} />Sample Aluminum (Inch)</span></div>
            <div className="flex justify-between"><span>Stock size</span><span>4.5 x 1 x 1.5 in</span></div>
            <div className="flex justify-between"><span>Part volume</span><span>2.4 in³</span></div>
            <div className="flex justify-between"><span>Threaded holes</span><span>0 of 4 holes</span></div>
            <div className="flex justify-between"><span>First setup</span><span>/ Automatic</span></div>
          </div>
          <div className="px-6 py-4 border-b">
            <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 cursor-pointer transition mb-2"><Download size={18} />Export to Fusion <span className="bg-orange-200 text-orange-800 text-xs px-2 py-0.5 rounded ml-1">Beta</span></button>
          </div>
          <div className="px-6 py-4 border-b">
            <div className="font-semibold mb-2">Tool Recommendations</div>
            <div className="flex items-center gap-2 border rounded p-2 bg-muted/40 mb-2">
              <Grid size={18} className="text-muted-foreground" />
              <span>Kennametal 7/32" 3F Flat</span>
              <span className="text-xs text-muted-foreground">Resolves 2 machinability issues</span>
              <button className="ml-auto px-2 py-1 text-xs rounded bg-muted hover:bg-muted/60 cursor-pointer">+</button>
            </div>
          </div>
          <div className="px-6 py-4 border-b">
            <div className="font-semibold mb-2">Machinability</div>
            {/* SETUP 2 */}
            <div className="mb-2">
              <button className="flex items-center gap-2 text-sm font-semibold w-full hover:bg-muted/60 rounded cursor-pointer" onClick={() => setMachOpen(m => ({...m, 2: !m[2]}))}>
                SETUP 2
                <span className="ml-auto text-xs text-blue-600">2 issues</span>
                {machOpen[2] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {machOpen[2] && (
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 p-2 border rounded bg-red-50">
                    <AlertCircle size={18} className="text-red-500" />
                    <span className="text-sm font-medium text-red-700">Tool Accessibility Blind Hole #1</span>
                    <span className="text-xs text-muted-foreground ml-auto">The available tools cannot reach this feature.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded bg-red-50">
                    <AlertCircle size={18} className="text-red-500" />
                    <span className="text-sm font-medium text-red-700">Tool Accessibility Blind Hole #3</span>
                    <span className="text-xs text-muted-foreground ml-auto">The available tools cannot reach this feature.</span>
                  </div>
                </div>
              )}
            </div>
            {/* SETUP 3 */}
            <div>
              <button className="flex items-center gap-2 text-sm font-semibold w-full hover:bg-muted/60 rounded cursor-pointer" onClick={() => setMachOpen(m => ({...m, 3: !m[3]}))}>
                SETUP 3
                <span className="ml-auto text-xs text-blue-600">1 issue</span>
                {machOpen[3] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {machOpen[3] && (
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 p-2 border rounded bg-yellow-50">
                    <AlertCircle size={18} className="text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-700">Tool Accessibility Blind Hole #2</span>
                    <span className="text-xs text-muted-foreground ml-auto">The available tools cannot reach this feature.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 