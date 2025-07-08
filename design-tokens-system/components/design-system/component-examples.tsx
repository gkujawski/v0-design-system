import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react"

export default function ComponentExamples() {
  return (
    <div className="space-y-600">
      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="heading">Button Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-400">
          <div className="flex flex-wrap gap-300">
            <Button className="bg-brand-800 hover:bg-brand-900 text-brand-100">Primary Button</Button>
            <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300 text-gray-900">
              Secondary Button
            </Button>
            <Button variant="outline" className="border-brand-600 text-brand-800 hover:bg-brand-100 bg-transparent">
              Outline Button
            </Button>
            <Button variant="ghost" className="text-brand-700 hover:bg-brand-100">
              Ghost Button
            </Button>
          </div>

          <div className="flex flex-wrap gap-300">
            <Button className="bg-green-500 hover:bg-green-600 text-green-100">Success Button</Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-1000">Warning Button</Button>
            <Button className="bg-red-500 hover:bg-red-600 text-red-100">Danger Button</Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="heading">Form Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-400">
            <div className="space-y-200">
              <Label className="body-small font-semibold text-gray-700 dark:text-gray-300">Email Address</Label>
              <Input
                placeholder="Enter your email"
                className="border-gray-300 dark:border-gray-600 focus:border-brand-600 focus:ring-brand-600"
              />
            </div>
            <div className="space-y-200">
              <Label className="body-small font-semibold text-gray-700 dark:text-gray-300">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="border-gray-300 dark:border-gray-600 focus:border-brand-600 focus:ring-brand-600"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="heading">Badge Components</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-300">
            <Badge className="bg-brand-800 text-brand-100">Default</Badge>
            <Badge className="bg-green-500 text-green-100">Success</Badge>
            <Badge className="bg-yellow-400 text-yellow-1000">Warning</Badge>
            <Badge className="bg-red-500 text-red-100">Error</Badge>
            <Badge variant="outline" className="border-brand-600 text-brand-800">
              Outline
            </Badge>
            <Badge variant="secondary" className="bg-gray-200 text-gray-900">
              Secondary
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="heading">Alert Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-400">
          <Alert className="border-green-200 bg-green-100 dark:border-green-800 dark:bg-green-900">
            <CheckCircle className="h-100 w-100 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert className="border-yellow-200 bg-yellow-100 dark:border-yellow-800 dark:bg-yellow-900">
            <AlertTriangle className="h-100 w-100 text-yellow-600 dark:text-yellow-400" />
            <AlertDescription className="text-yellow-800 dark:text-yellow-200">
              Please review your information before proceeding.
            </AlertDescription>
          </Alert>

          <Alert className="border-red-200 bg-red-100 dark:border-red-800 dark:bg-red-900">
            <XCircle className="h-100 w-100 text-red-600 dark:text-red-400" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              An error occurred while processing your request.
            </AlertDescription>
          </Alert>

          <Alert className="border-brand-200 bg-brand-100 dark:border-brand-800 dark:bg-brand-900">
            <Info className="h-100 w-100 text-brand-600 dark:text-brand-400" />
            <AlertDescription className="text-brand-800 dark:text-brand-200">
              This is an informational message for your reference.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
