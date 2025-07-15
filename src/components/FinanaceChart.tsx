"use client";

import { Ellipsis, GitCommitHorizontal, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "Jan", income: 186, expense: 80 },
  { month: "Feb", income: 305, expense: 200 },
  { month: "Mar", income: 237, expense: 120 },
  { month: "Apr", income: 73, expense: 190 },
  { month: "May", income: 209, expense: 130 },
  { month: "June", income: 214, expense: 140 },
  { month: "July", income: 186, expense: 80 },
  { month: "Aug", income: 305, expense: 200 },
  { month: "Sept", income: 237, expense: 120 },
  { month: "Oct", income: 73, expense: 190 },
  { month: "Nov", income: 209, expense: 130 },
  { month: "Dec", income: 214, expense: 140 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "#39f50f",
  },
  expense: {
    label: "Expense",
    color: "#f5910f",
  },
} satisfies ChartConfig;

export function FinanceChart() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center pb-0">
        <CardTitle>Finanace</CardTitle>
        <CardDescription>
          <Ellipsis />
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col items-center gap-2 text-sm pb-4">
        <div className="flex justify-center gap-16">
          <div className="flex  gap-2">
            <GitCommitHorizontal color="#39f50f" />
            <h1 className="font-bold">Income</h1>
          </div>
          <div className="flex gap-2">
            <GitCommitHorizontal color="#f5910f" />
            <h1 className="font-bold">Expense</h1>
          </div>
        </div>
      </CardFooter>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={false} />
            {/* Add YAxis with custom ticks */}
            <YAxis
              ticks={[0,100, 200, 300, 400]}
              domain={[100, 400]}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              dataKey="income"
              type="monotone"
              stroke="var(--color-income)"
              strokeWidth={3}
              //   dot={{
              //     fill: "#39f50f",
              //   }}
              //   activeDot={{ r: 6 }}
            />
            <Line
              dataKey="expense"
              type="monotone"
              stroke="var(--color-expense)"
              strokeWidth={3}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
