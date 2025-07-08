"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TypographyShowcase from "@/components/design-system/typography-showcase"
import ColorPalette from "@/components/design-system/color-palette"
import SpacingScale from "@/components/design-system/spacing-scale"
import ShadowExamples from "@/components/design-system/shadow-examples"
import ComponentExamples from "@/components/design-system/component-examples"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-brand-300 hover:bg-brand-100 dark:border-brand-700 dark:hover:bg-brand-800"
    >
      <Sun className="h-100 w-100 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-100 w-100 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function DesignSystemShowcase() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-400 py-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-1200">
            <div>
              <h1 className="title-hero text-brand-800 dark:text-brand-100 mb-300">Design System</h1>
              <p className="subtitle text-gray-600 dark:text-gray-400">
                Comprehensive design tokens and component library
              </p>
            </div>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <Card className="mb-800 shadow-200">
            <CardContent className="p-600">
              <nav className="flex flex-wrap gap-400">
                <Button
                  variant="ghost"
                  className="text-brand-700 hover:bg-brand-100 dark:text-brand-300 dark:hover:bg-brand-800"
                >
                  Typography
                </Button>
                <Button
                  variant="ghost"
                  className="text-brand-700 hover:bg-brand-100 dark:text-brand-300 dark:hover:bg-brand-800"
                >
                  Colors
                </Button>
                <Button
                  variant="ghost"
                  className="text-brand-700 hover:bg-brand-100 dark:text-brand-300 dark:hover:bg-brand-800"
                >
                  Spacing
                </Button>
                <Button
                  variant="ghost"
                  className="text-brand-700 hover:bg-brand-100 dark:text-brand-300 dark:hover:bg-brand-800"
                >
                  Shadows
                </Button>
                <Button
                  variant="ghost"
                  className="text-brand-700 hover:bg-brand-100 dark:text-brand-300 dark:hover:bg-brand-800"
                >
                  Components
                </Button>
              </nav>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-1200">
            <section id="typography">
              <h2 className="title-page text-brand-800 dark:text-brand-100 mb-600">Typography</h2>
              <TypographyShowcase />
            </section>

            <section id="colors">
              <h2 className="title-page text-brand-800 dark:text-brand-100 mb-600">Color Palettes</h2>
              <ColorPalette />
            </section>

            <section id="spacing">
              <h2 className="title-page text-brand-800 dark:text-brand-100 mb-600">Spacing & Layout</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-800">
                <SpacingScale />
                <ShadowExamples />
              </div>
            </section>

            <section id="components">
              <h2 className="title-page text-brand-800 dark:text-brand-100 mb-600">Component Examples</h2>
              <ComponentExamples />
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-2400 pt-800 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="body-small text-gray-500">Design System built with comprehensive design tokens</p>
              <p className="body-small text-gray-400 mt-200">
                Supports light and dark modes with semantic color mapping
              </p>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}
