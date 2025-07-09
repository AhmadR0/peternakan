import { useState } from "react";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("diagnosa");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-green-800 text-white p-4 shadow-md transition-all duration-300`}>
        <div className="border-b border-green-700 pb-4 mb-4 flex items-center justify-between">
          {isSidebarOpen ? (
            <h2 className="text-xl font-bold">SISTEM PAKAR DIAGNOSA PENYAKIT TERNAK SAPI</h2>
          ) : (
            <div className="w-8 h-8 bg-white rounded-full"></div>
          )}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-green-700 transition-colors"
          >
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
            className={`flex items-center p-2 rounded-lg hover:bg-green-700 cursor-pointer transition-colors ${activeTab === "dashboard" && "bg-green-700"}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {isSidebarOpen && "Dashboard"}
          </li>
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-green-700 cursor-pointer transition-colors ${activeTab === "diagnosa" && "bg-green-700"}`}
            onClick={() => setActiveTab("diagnosa")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {isSidebarOpen && "Diagnosa Penyakit"}
          </li>
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-green-700 cursor-pointer transition-colors ${activeTab === "pengetahuan" && "bg-green-700"}`}
            onClick={() => setActiveTab("pengetahuan")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {isSidebarOpen && "Basis Pengetahuan"}
          </li>
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-green-700 cursor-pointer transition-colors ${activeTab === "riwayat" && "bg-green-700"}`}
            onClick={() => setActiveTab("riwayat")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {isSidebarOpen && "Riwayat Diagnosa"}
          </li>
          <li 
            className={`flex items-center p-2 rounded-lg hover:bg-green-700 cursor-pointer transition-colors ${activeTab === "pengaturan" && "bg-green-700"}`}
            onClick={() => setActiveTab("pengaturan")}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isSidebarOpen && "Pengaturan"}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        {activeTab === "dashboard" && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard Sistem Pakar</h1>
              <p className="text-gray-600">Diagnosa penyakit ternak sapi menggunakan metode Certainty Factor</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                <h3 className="text-gray-500 font-medium">Total Penyakit</h3>
                <p className="text-3xl font-bold text-gray-800">15</p>
                <p className="text-sm text-gray-500 mt-2">Jenis penyakit yang terdaftar</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <h3 className="text-gray-500 font-medium">Total Gejala</h3>
                <p className="text-3xl font-bold text-gray-800">42</p>
                <p className="text-sm text-gray-500 mt-2">Gejala yang teridentifikasi</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
                <h3 className="text-gray-500 font-medium">Diagnosa Hari Ini</h3>
                <p className="text-3xl font-bold text-gray-800">8</p>
                <p className="text-sm text-gray-500 mt-2">Diagnosa dilakukan hari ini</p>
              </div>
            </div>

            {/* Grafik */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h3 className="text-lg font-semibold mb-4">Statistik Diagnosa Bulan Ini</h3>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Grafik statistik akan ditampilkan di sini</p>
              </div>
            </div>

            {/* Penyakit Terbanyak */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">5 Penyakit Terbanyak Didiagnosa</h3>
              <div className="space-y-3">
                {[
                  { name: "Antraks", count: 24, percentage: 32 },
                  { name: "Brucellosis", count: 18, percentage: 24 },
                  { name: "Demam Q", count: 12, percentage: 16 },
                  { name: "Penyakit Mulut dan Kuku", count: 9, percentage: 12 },
                  { name: "Tuberkulosis", count: 6, percentage: 8 }
                ].map((disease, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{disease.name}</span>
                      <span className="text-gray-600">{disease.count} kasus ({disease.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${disease.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "diagnosa" && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Diagnosa Penyakit Ternak Sapi</h1>
              <p className="text-gray-600">Pilih gejala yang dialami oleh ternak sapi</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Identitas Pasien</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pemilik</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Umur Sapi</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Sapi</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Pilih Jenis Sapi</option>
                      <option value="sapi_perah">Sapi Perah</option>
                      <option value="sapi_potong">Sapi Potong</option>
                      <option value="sapi_balangan">Sapi Balangan</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Gejala yang Dialami</h3>
                <div className="space-y-3">
                  {[
                    "Demam tinggi (≥39.5°C)",
                    "Nafsu makan menurun drastis",
                    "Air liur berlebihan",
                    "Luka pada mulut atau lidah",
                    "Kaki pincang atau luka pada kuku",
                    "Pembengkakan kelenjar limfa",
                    "Sesak nafas",
                    "Diare parah",
                    "Produksi susu menurun",
                    "Keguguran pada sapi bunting"
                  ].map((symptom, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`symptom-${index}`} 
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`symptom-${index}`} className="ml-2 block text-sm text-gray-700">
                        {symptom}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Proses Diagnosa
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pengetahuan" && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Basis Pengetahuan</h1>
              <p className="text-gray-600">Daftar aturan penyakit dan gejala pada ternak sapi</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Cari penyakit atau gejala..." 
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Tambah Aturan
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penyakit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gejala</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CF</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: 1, disease: "Antraks", symptom: "Demam tinggi, Pembengkakan kelenjar limfa", cf: 0.8 },
                      { id: 2, disease: "Brucellosis", symptom: "Keguguran, Produksi susu menurun", cf: 0.7 },
                      { id: 3, disease: "Demam Q", symptom: "Demam tinggi, Sesak nafas", cf: 0.6 },
                      { id: 4, disease: "Penyakit Mulut dan Kuku", symptom: "Luka pada mulut, Kaki pincang", cf: 0.9 },
                      { id: 5, disease: "Tuberkulosis", symptom: "Nafsu makan menurun, Sesak nafas", cf: 0.7 }
                    ].map((rule) => (
                      <tr key={rule.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rule.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rule.disease}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{rule.symptom}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rule.cf}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Hapus</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "riwayat" && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Riwayat Diagnosa</h1>
              <p className="text-gray-600">Daftar hasil diagnosa yang telah dilakukan</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Cari berdasarkan nama atau penyakit..." 
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Filter Bulan</option>
                    <option value="1">Januari</option>
                    <option value="2">Februari</option>
                    <option value="3">Maret</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Filter Tahun</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Pemilik</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hasil Diagnosa</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CF Value</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { date: "12/05/2023", owner: "Budi Santoso", result: "Antraks", cf: 0.82 },
                      { date: "10/05/2023", owner: "Siti Aminah", result: "Brucellosis", cf: 0.75 },
                      { date: "08/05/2023", owner: "Joko Widodo", result: "Penyakit Mulut dan Kuku", cf: 0.91 },
                      { date: "05/05/2023", owner: "Ani Susanti", result: "Demam Q", cf: 0.68 },
                      { date: "02/05/2023", owner: "Rudi Hermawan", result: "Tuberkulosis", cf: 0.72 }
                    ].map((history, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{history.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{history.owner}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{history.result}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{history.cf}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-green-600 hover:text-green-900">Detail</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pengaturan" && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Pengaturan Sistem</h1>
              <p className="text-gray-600">Konfigurasi sistem pakar diagnosa penyakit ternak sapi</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Informasi Aplikasi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Aplikasi</label>
                      <input 
                        type="text" 
                        value="Sistem Pakar Diagnosa Penyakit Ternak Sapi" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Metode</label>
                      <input 
                        type="text" 
                        value="Certainty Factor" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Versi</label>
                      <input 
                        type="text" 
                        value="1.0.0" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Developer</label>
                      <input 
                        type="text" 
                        value="Tim Sistem Pakar UNISKA" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Pengaturan CF Threshold</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Threshold Diagnosa</label>
                      <input 
                        type="number" 
                        step="0.01"
                        min="0"
                        max="1"
                        value="0.5" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}