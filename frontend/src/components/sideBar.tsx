import { useState, useEffect } from "react";

type TabType = "dashboard" | "diagnosa" | "pengetahuan" | "riwayat" | "pengaturan" | "result";

interface SidebarProps {
  initialTab?: TabType;
  initialOpen?: boolean;
  onTabChange?: (tab: TabType) => void;
  onToggle?: () => void;
}

export const Sidebar = ({
  initialTab = "diagnosa",
  initialOpen = true,
  onTabChange,
  onToggle
}: SidebarProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isSidebarOpen, setSidebarOpen] = useState(initialOpen);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    setSidebarOpen(initialOpen);
  }, [initialOpen]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  const handleToggle = () => {
    setSidebarOpen(!isSidebarOpen);
    onToggle?.();
  };
    return(
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white p-4 shadow-md transition-all duration-300`}>
        <div className="border-b border-blue-700 pb-4 mb-4 flex items-center justify-between">
          {isSidebarOpen ? (
            <h2 className="text-xl font-bold">SISTEM PAKAR DIAGNOSA PENYAKIT TERNAK SAPI</h2>
          ) : (
            <div className="w-8 h-8 bg-white rounded-full"></div>
          )}
          <button onClick={handleToggle} className="p-2 rounded-full hover:bg-blue-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-2">
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors ${activeTab === "dashboard" && "bg-blue-700"}`}
            onClick={() => handleTabChange("dashboard")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {isSidebarOpen && "Dashboard"}
          </li>
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors ${activeTab === "diagnosa" && "bg-blue-700"}`}
            onClick={() => handleTabChange("diagnosa")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {isSidebarOpen && "Diagnosa Penyakit"}
          </li>
          <li className={`flex items-center p-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors ${activeTab === "result" && "bg-blue-700"}`}
            onClick={() => handleTabChange("result")}>
              <svg 
                className="w-5 h-5 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ikon Clipboard List (Alternatif 1) */}
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
                />

                {/* Alternatif 2 (Chart Bar): */}
                {/* <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                /> */}

                {/* Alternatif 3 (Check Circle): */}
                {/* <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                /> */}
              </svg>
              {isSidebarOpen && "Hasil Diagnosa"}
          </li>

          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors ${activeTab === "pengetahuan" && "bg-blue-700"}`}
            onClick={() => handleTabChange("pengetahuan")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {isSidebarOpen && "Basis Pengetahuan"}
          </li>
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors ${activeTab === "riwayat" && "bg-blue-700"}`}
            onClick={() => handleTabChange("riwayat")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {isSidebarOpen && "Riwayat Diagnosa"}
          </li>
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors ${activeTab === "pengaturan" && "bg-blue-700"}`}
            onClick={() => handleTabChange("pengaturan")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isSidebarOpen && "Pengaturan"}
          </li>
        </ul>
      </aside>
    )
}