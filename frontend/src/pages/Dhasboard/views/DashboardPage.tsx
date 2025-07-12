import { useState } from "react";
import { InputDiagnosa } from "../../../components/inputGejala";
import { Sidebar } from "../../../components/sideBar";

type TabType = "dashboard" | "diagnosa" | "pengetahuan" | "riwayat" | "pengaturan" | "result";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>("diagnosa");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        initialTab={activeTab}
        initialOpen={isSidebarOpen}
        onTabChange={setActiveTab}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="flex-1 overflow-auto p-6">
        {activeTab === "dashboard" && <div>Hellooo</div>}
        {activeTab === "diagnosa" && <InputDiagnosa />}
        {activeTab === "result" && <div>Hasil Diagnosa</div>}
        {activeTab === "pengetahuan" && <div>halloo lagi</div>}
        {activeTab === "riwayat" && <div>hallo lagi</div>}
        {activeTab === "pengaturan" && <div>hallo lagi</div>}
      </main>
    </div>
  );
}