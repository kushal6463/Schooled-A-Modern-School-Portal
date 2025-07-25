"use client"

import * as React from "react"
import { Ellipsis, TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"


const chartData = [
  { name: "Group A", value: 92, fill: "#11bbfa" },
  { name: "Group B", value: 8, fill: "#fac811" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  "Group A": {
    label: "Group A",
    color: "##11bbfa",
  },
  "Group B": {
    label: "Group B",
    color: "#fac811",
  },
} satisfies ChartConfig


export function Performance() {
  const totalValue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row justify-between items-center pb-0">
        <CardTitle>Performance</CardTitle>
        <CardDescription><Ellipsis/></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
              startAngle={180}
              endAngle={0}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {/* {totalValue.toLocaleString()} */}
                          9.2
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          of 10 max LTS
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-semibold text-lg">
          1st Semester - 2nd Semester
        </div>
      </CardFooter>
    </Card>
  )
}
