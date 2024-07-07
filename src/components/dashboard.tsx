import { Card } from "@/components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

export default function Component() {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl text-black font-bold">
            Trading Bot Dashboard
          </h1>
          <p className="text-muted-foreground text-black">
            Get a comprehensive overview of your trading bot's performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-card text-card-foreground p-4 rounded-lg text-black">
            <div className="flex items-center gap-2">
              <DollarSignIcon className="w-6 h-6" />
              <div>
                <p className="text-sm text-muted-foreground text-gray-500">
                  Current Balance
                </p>
                <p className="text-2xl font-bold text-black">$15,234.56</p>
              </div>
            </div>
          </Card>
          <Card className="bg-card text-card-foreground p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingUpIcon className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground text-gray-500">
                  Profit/Loss
                </p>
                <p className="text-2xl font-bold text-green-500">+$1,234.56</p>
              </div>
            </div>
          </Card>
          <Card className="bg-card text-card-foreground p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <PercentIcon className="w-6 h-6 text-black" />
              <div>
                <p className="text-sm text-muted-foreground text-gray-500">
                  Win/Loss Ratio
                </p>
                <p className="text-2xl font-bold text-black">75%</p>
              </div>
            </div>
          </Card>
          <Card className="bg-card text-card-foreground p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingDownIcon className="w-6 h-6 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground text-gray-500">
                  Drawdown
                </p>
                <p className="text-2xl font-bold text-red-500">-$456.78</p>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <LinechartChart className="aspect-[9/4] text-black" />
        </div>
      </div>
    </div>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}

function PercentIcon(props) {
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
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function TrendingDownIcon(props) {
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
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function TrendingUpIcon(props) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
