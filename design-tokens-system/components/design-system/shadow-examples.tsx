import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const shadowLevels = [
  { name: "100", class: "shadow-100" },
  { name: "200", class: "shadow-200" },
  { name: "300", class: "shadow-300" },
  { name: "400", class: "shadow-400" },
  { name: "500", class: "shadow-500" },
  { name: "600", class: "shadow-600" },
]

export default function ShadowExamples() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="heading">Drop Shadow Scale</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-800">
          {shadowLevels.map((shadow) => (
            <div key={shadow.name} className="text-center">
              <div
                className={`${shadow.class} bg-white dark:bg-gray-800 w-full h-1600 rounded-200 border border-gray-100 dark:border-gray-700 mb-400 flex items-center justify-center`}
              >
                <span className="body-small text-gray-600 dark:text-gray-400">Shadow {shadow.name}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
