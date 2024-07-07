import React from "react";
import { Button } from "./ui/button";

const uploadCsv = () => {
  return (
    <section className="w-full max-w-md mx-auto py-12 md:py-16 text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Upload a CSV File
          </h2>
          <p className="text-muted-foreground">
            Drag and drop a CSV file to analyse the data
          </p>
        </div>
        <div className="flex justify-center">
          <div className="group relative flex h-32 w-full max-w-lg cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-indigo-600 bg-background transition-colors hover:border-primary-foreground">
            <UploadIcon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
            <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-primary-foreground">
              Drop files here or click to upload
            </p>
            <input
              type="file"
              accept=".csv"
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="w-full bg-indigo-600 text-white">
            Upload File
          </Button>
        </div>
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

export default uploadCsv;
