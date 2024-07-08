import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@/components/ui/checkicon";
import { XIcon } from "@/components/ui/xicon";

export default function PricingSection() {
  return (
    <section
      className="grid gap-6 md:gap-8 py-12 md:py-16 max-w-5xl mx-auto px-10"
      id="pricing"
    >
      <div className="grid gap-2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
          Discover Our Pricing Plans 💸
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Choose the plan that suits your needs.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-black">
        <Card className="flex flex-col">
          <CardHeader className="p-6">
            <CardTitle>Free</CardTitle>
            <CardDescription>Start for free</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 flex-1">
            <div className="text-4xl font-bold">$0</div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Basic Tweet Sentiment Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Basic CSV File Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />5 CSV File Uploads
                per Month
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                Watermarked Reports
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                No Priority Support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md text-white bg-indigo-600 border main-color-border main-color-border-hover px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:main-color-text focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-border">
              Try for Free
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>Enhanced Tweet Sentiment Analysis</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 flex-1">
            <div className="text-4xl font-bold">$9</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              / month
            </div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Enhanced Tweet Sentiment Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Advanced CSV File Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                20 CSV File Uploads per Month
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                No Watermarked Reports
              </li>
              <li className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <XIcon className="w-5 h-5" />
                No Priority Support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full inline-flex h-9 items-center bg-indigo-600 justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-white shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg">
              Select
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>Unlimited Analysis Capabilities</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 flex-1">
            <div className="text-4xl font-bold">$49</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              / month
            </div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Unlimited Tweet Sentiment Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Advanced CSV File Analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Unlimited CSV File Uploads
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                No Watermarked Reports
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                Priority Support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button className="w-full inline-flex h-9 items-center justify-center rounded-md main-color px-4 py-2 text-sm font-medium text-white bg-indigo-600 shadow transition-colors main-color-hover focus-visible:outline-none main-color-focus disabled:pointer-events-none disabled:opacity-50 main-color-dark-bg">
              Select
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
