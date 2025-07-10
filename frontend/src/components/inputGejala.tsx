export const InputDiagnosa = () => {
    return(
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
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Umur Sapi</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Sapi</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`symptom-${index}`} className="ml-2 block text-sm text-gray-700">
                        {symptom}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Proses Diagnosa
                </button>
              </div>
            </div>
          </div>
    )
}