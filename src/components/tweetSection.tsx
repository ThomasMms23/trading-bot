import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TwittSection = () => {
  const [tweetText, setTweetText] = useState("");

  const handleTextareaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTweetText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://your-api-endpoint.com/api/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: tweetText }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-screen bg-background">
      <div className="max-w-md w-full space-y-4">
        <h3 className="text-4xl font-bold tracking-tight text-white sm:text-xl text-center mb-6">
          Tweet Sentiment Analysis
        </h3>
        <Textarea
          placeholder="Enter the tweet's text here..."
          value={tweetText}
          onChange={handleTextareaChange}
          className="p-4 rounded-md border border-input bg-background text-black focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white"
        >
          Check
        </Button>
      </div>
    </section>
  );
};

export default TwittSection;
