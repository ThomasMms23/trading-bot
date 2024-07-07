import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TwittSection = () => {
  const [tweetText, setTweetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleTextareaChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTweetText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setResult(null);
      
      const response = await fetch("http://localhost:8000/api/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: tweetText }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-screen bg-background">
      <div className="max-w-md w-full space-y-4">
        <h3 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-xl text-center mb-6">
          Tweet Sentiment Analysis
        </h3>
        <Textarea
          placeholder="Enter the tweet's text here..."
          value={tweetText}
          onChange={handleTextareaChange}
          className="p-4 rounded-md border border-input bg-white text-black focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button
          onClick={handleSubmit}
          className={`w-full ${loading ? "bg-gray-400" : "bg-indigo-600"} text-white`}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Check"}
        </Button>
        {result && (
          <div className="mt-4 p-4 rounded-md bg-indigo-100 text-indigo-700">
            <h4 className="text-lg font-bold">Analysis Result:</h4>
            <p><strong>Tweet:</strong> {result.tweet}</p>
            <p><strong>Sentiment Score:</strong> {result.sentiment_score}</p>
            <p><strong>Investment Entities:</strong> {result.investment_entities.join(', ')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TwittSection;
