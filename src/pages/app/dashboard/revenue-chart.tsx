import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";

const data = [
  { date: "05/10", revenue: 1200 },
  { date: "06/10", revenue: 850 },
  { date: "07/10", revenue: 720 },
  { date: "08/10", revenue: 670 },
  { date: "09/10", revenue: 980 },
  { date: "10/10", revenue: 1120 },
  { date: "11/10", revenue: 1320 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width={"100%"} height={240}>
          <LineChart
            data={data}
            style={{
              fontSize: 12,
            }}
          >
            <XAxis
              dataKey={"date"}
              stroke="#888"
              tickLine={false}
              axisLine={false}
              dy={16}
            />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
              width={80}
            />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke="hsla(var(--primary))"
              // dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
