"use client";

import { Ellipsis, TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

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

export const description = "A radial chart";

const chartData = [
  { name: "girls", count: 50, fill: "#F7C948" }, // stronger yellow
  { name: "boys", count: 70, fill: "#4FC3F7" }, // stronger blue
  { name: "total", count: 120, fill: "#E5E7EB" }, // light-gray instead of white
];

const chartConfig = {
  count: {
    label: "Students", // y‑axis / metric label
  },
  total: {
    label: "total",
    color: "E5E7EB", // or any CSS variable you prefer
  },
  girls: {
    label: "girls",
    color: "#F7C948",
  },
  boys: {
    label: "boys",
    color: "#4FC3F7",
  },
} satisfies ChartConfig;

export function CountChart() {
  return (
    <Card className="flex flex-col h-[450px]">
      <CardHeader className="flex justify-between items-center pb-0">
        <CardTitle>Radial Chart</CardTitle>
        <CardDescription>
          <Ellipsis />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart
            data={chartData}
            innerRadius={30}
            outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  nameKey="name"
                />
              }
            />
            <RadialBar
              dataKey="count"
              background
              cornerRadius={20}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-blue-400 rounded-full" />
            <h1 className="font-bold">70</h1>
            <h2 className="text-xs text-gray-500">Boys (65%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-yellow-400 rounded-full" />
            <h1 className="font-bold">50</h1>
            <h2 className="text-xs text-gray-500">Girls (35%)</h2>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
