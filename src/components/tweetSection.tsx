import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const twittSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen bg-background">
      <div className="max-w-md w-full space-y-4">
        <Textarea
          placeholder="Enter the tweet's text here..."
          className="p-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button className="w-full bg-indigo-600 text-white">Check</Button>
      </div>
    </section>
  );
};

export default twittSection;
