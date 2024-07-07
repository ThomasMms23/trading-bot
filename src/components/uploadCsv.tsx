import React, { useState } from "react";
import { Button } from "./ui/button";

const UploadCsv = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setResult(null); // Clear previous result when a new file is selected
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          setResult(data);
          setLoading(false);
        }, 1000);
      } else {
        console.error("Error:", response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-md mx-auto py-12 md:py-16 text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-indigo-600">
            Upload a CSV File
          </h2>
          <p className="text-gray-600">
            Drag and drop a CSV file to analyze the data. Make sure the file
            contains the following columns: Date, Open, High, Low, Close, Volume.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div
              className={`group relative flex h-32 w-full max-w-lg cursor-pointer flex-col items-center justify-center rounded-md border-2 ${
                file ? "border-green-600 bg-green-100" : "border-dashed border-indigo-600 bg-white"
              } transition-colors hover:border-indigo-800`}
            >
              <UploadIcon className="h-8 w-8 text-indigo-600 group-hover:text-indigo-800" />
              <p className={`mt-2 text-sm font-medium ${file ? "text-green-600" : "text-gray-600"} group-hover:text-indigo-800`}>
                {file ? file.name : "Drop files here or click to upload"}
              </p>
              <input
                type="file"
                accept=".csv"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              type="submit"
              className={`w-full ${loading ? "bg-gray-400" : "bg-indigo-600"} text-white`}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload File"}
            </Button>
          </div>
        </form>
        {result && (
          <div className="mt-4 p-4 rounded-md bg-indigo-100 text-indigo-700">
            <h4 className="text-lg font-bold">Analysis Result:</h4>
            <p className="text-2xl font-bold text-indigo-800">{result.decision}</p>
            <p className="mt-2"><strong>Justification:</strong></p>
            <ul className="list-disc list-inside">
              {result.justification.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-2"><strong>Indicators:</strong></p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(result.indicators).map(([key, value]) => (
                <div key={key} className="p-2 bg-white rounded-md shadow-sm">
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
            {result.warning && (
              <p className="mt-2 text-red-600"><strong>Warning:</strong> {result.warning}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

function UploadIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

export default UploadCsv;
