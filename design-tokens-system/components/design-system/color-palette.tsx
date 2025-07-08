import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const colorPalettes = [
  {
    name: "Brand",
    colors: [
      { name: "100", value: "#F5F5F5", class: "bg-brand-100" },
      { name: "200", value: "#E6E6E6", class: "bg-brand-200" },
      { name: "300", value: "#D9D9D9", class: "bg-brand-300" },
      { name: "400", value: "#B3B3B3", class: "bg-brand-400" },
      { name: "500", value: "#757575", class: "bg-brand-500" },
      { name: "600", value: "#444444", class: "bg-brand-600" },
      { name: "700", value: "#383838", class: "bg-brand-700" },
      { name: "800", value: "#2C2C2C", class: "bg-brand-800" },
      { name: "900", value: "#1E1E1E", class: "bg-brand-900" },
      { name: "1000", value: "#111111", class: "bg-brand-1000" },
    ],
  },
  {
    name: "Green",
    colors: [
      { name: "100", value: "#EBFFEE", class: "bg-green-100" },
      { name: "200", value: "#CFF7D3", class: "bg-green-200" },
      { name: "300", value: "#AFF4C6", class: "bg-green-300" },
      { name: "400", value: "#85E0A3", class: "bg-green-400" },
      { name: "500", value: "#14AE5C", class: "bg-green-500" },
      { name: "600", value: "#009951", class: "bg-green-600" },
      { name: "700", value: "#008043", class: "bg-green-700" },
      { name: "800", value: "#02542D", class: "bg-green-800" },
      { name: "900", value: "#024023", class: "bg-green-900" },
      { name: "1000", value: "#062D1B", class: "bg-green-1000" },
    ],
  },
  {
    name: "Red",
    colors: [
      { name: "100", value: "#FEE9E7", class: "bg-red-100" },
      { name: "200", value: "#FDD3D0", class: "bg-red-200" },
      { name: "300", value: "#FCB3AD", class: "bg-red-300" },
      { name: "400", value: "#F4776A", class: "bg-red-400" },
      { name: "500", value: "#EC221F", class: "bg-red-500" },
      { name: "600", value: "#C00F0C", class: "bg-red-600" },
      { name: "700", value: "#900B09", class: "bg-red-700" },
      { name: "800", value: "#690807", class: "bg-red-800" },
      { name: "900", value: "#4D0B0A", class: "bg-red-900" },
      { name: "1000", value: "#300603", class: "bg-red-1000" },
    ],
  },
  {
    name: "Yellow",
    colors: [
      { name: "100", value: "#FFFBEB", class: "bg-yellow-100" },
      { name: "200", value: "#FFF1C2", class: "bg-yellow-200" },
      { name: "300", value: "#FFE8A3", class: "bg-yellow-300" },
      { name: "400", value: "#E8B931", class: "bg-yellow-400" },
      { name: "500", value: "#E5A000", class: "bg-yellow-500" },
      { name: "600", value: "#BF6A02", class: "bg-yellow-600" },
      { name: "700", value: "#975102", class: "bg-yellow-700" },
      { name: "800", value: "#682D03", class: "bg-yellow-800" },
      { name: "900", value: "#522504", class: "bg-yellow-900" },
      { name: "1000", value: "#401B01", class: "bg-yellow-1000" },
    ],
  },
]

export default function ColorPalette() {
  return (
    <div className="space-y-600">
      {colorPalettes.map((palette) => (
        <Card key={palette.name}>
          <CardHeader>
            <CardTitle className="heading">{palette.name} Palette</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-200">
              {palette.colors.map((color) => (
                <div key={color.name} className="text-center">
                  <div
                    className={`${color.class} w-full h-1200 rounded-200 border border-gray-200 dark:border-gray-700 mb-200`}
                  />
                  <div className="body-small text-gray-600 dark:text-gray-400">{color.name}</div>
                  <div className="text-scale-01 text-gray-500 dark:text-gray-500 font-mono">{color.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
