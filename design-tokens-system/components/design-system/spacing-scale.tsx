import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const spacingTokens = [
  { name: "0", value: "0px", class: "w-0" },
  { name: "050", value: "2px", class: "w-050" },
  { name: "100", value: "4px", class: "w-100" },
  { name: "150", value: "6px", class: "w-150" },
  { name: "200", value: "8px", class: "w-200" },
  { name: "300", value: "12px", class: "w-300" },
  { name: "400", value: "16px", class: "w-400" },
  { name: "600", value: "24px", class: "w-600" },
  { name: "800", value: "32px", class: "w-800" },
  { name: "1200", value: "48px", class: "w-1200" },
  { name: "1600", value: "64px", class: "w-1600" },
  { name: "2400", value: "96px", class: "w-2400" },
]

export default function SpacingScale() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="heading">Spacing Scale</CardTitle>
      </CardHeader>
      <CardContent className="space-y-400">
        {spacingTokens.map((token) => (
          <div key={token.name} className="flex items-center gap-400">
            <div className="body-small font-mono w-1200 text-gray-600 dark:text-gray-400">{token.name}</div>
            <div className="body-small w-1600 text-gray-500">{token.value}</div>
            <div className={`${token.class} h-600 bg-brand-500 rounded-100`} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
