import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TypographyShowcase() {
  return (
    <div className="space-y-600">
      <Card>
        <CardHeader>
          <CardTitle className="heading">Typography Scale</CardTitle>
        </CardHeader>
        <CardContent className="space-y-600">
          <div>
            <h1 className="title-hero text-brand-800 dark:text-brand-100">Hero Title</h1>
            <p className="body-small text-gray-500 mt-200">72px / Bold / Inter / -3% letter spacing</p>
          </div>

          <div>
            <h2 className="title-page text-brand-800 dark:text-brand-100">Page Title</h2>
            <p className="body-small text-gray-500 mt-200">48px / Bold / Inter / -2% letter spacing</p>
          </div>

          <div>
            <h3 className="subtitle text-brand-700 dark:text-brand-200">Subtitle Text</h3>
            <p className="body-small text-gray-500 mt-200">32px / Regular / Inter</p>
          </div>

          <div>
            <h4 className="heading text-brand-800 dark:text-brand-100">Heading Text</h4>
            <p className="body-small text-gray-500 mt-200">24px / Semibold / Inter / -2% letter spacing</p>
          </div>

          <div>
            <h5 className="subheading text-brand-700 dark:text-brand-200">Subheading Text</h5>
            <p className="body-small text-gray-500 mt-200">20px / Regular / Inter</p>
          </div>

          <div>
            <p className="body-base text-gray-900 dark:text-gray-100">
              This is body text that demonstrates the base typography style. It uses 16px size with regular weight and
              proper line height for optimal readability.
            </p>
            <p className="body-small text-gray-500 mt-200">16px / Regular / Inter / 140% line height</p>
          </div>

          <div>
            <p className="body-strong text-gray-900 dark:text-gray-100">This is strong body text for emphasis</p>
            <p className="body-small text-gray-500 mt-200">16px / Semibold / Inter / 140% line height</p>
          </div>

          <div>
            <p className="body-small text-gray-700 dark:text-gray-300">
              This is small body text for secondary information
            </p>
            <p className="body-small text-gray-500 mt-200">14px / Regular / Inter / 140% line height</p>
          </div>

          <div>
            <code className="body-code bg-gray-100 dark:bg-gray-800 px-200 py-100 rounded-100">
              const example = "code text";
            </code>
            <p className="body-small text-gray-500 mt-200">16px / Regular / Roboto Mono / 100% line height</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
