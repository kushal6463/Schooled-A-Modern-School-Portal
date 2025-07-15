"use client";

import { Ellipsis, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

export const description = "A multiple bar chart";

const chartData = [
  { day: "Mon", present: 186, absent: 80 },
  { day: "Tues", present: 305, absent: 200 },
  { day: "Wed", present: 237, absent: 120 },
  { day: "Thur", present: 73, absent: 190 },
  { day: "Fri", present: 209, absent: 130 },
];

const chartConfig = {
  present: {
    label: "Present",
    color: "#4FC3F7",
  },
  absent: {
    label: "Absent",
    color: "#F7C948",
  },
} satisfies ChartConfig;

export function AttendanceChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between items-center pb-0">
        <CardTitle>Attendance</CardTitle>
        <CardDescription>
          <Ellipsis />
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-2 text-sm pb-4">
        <div className="flex justify-center gap-16">
          <div className="flex  gap-2">
            <div className="w-5 h-5 bg-blue-400 rounded-full" />
            <h1 className="font-bold">present</h1>
          </div>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-yellow-400 rounded-full" />
            <h1 className="font-bold">absent</h1>
          </div>
        </div>
      </CardFooter>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}>
            <CartesianGrid vertical={false} />
            {/* Add YAxis with custom ticks */}
            <YAxis
              ticks={[0, 100, 200, 300, 400]}
              domain={[0, 400]}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="present"
              fill="var(--color-present)"
              radius={4}
            />
            <Bar
              dataKey="absent"
              fill="var(--color-absent)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
