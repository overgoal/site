import type { HTMLAttributes } from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function ColorSwatch({ name, varToken, className = "" }: { name: string; varToken: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 rounded-md border border-[--color-border] bg-[--color-surface] p-3 ${className}`}>
      <div
        aria-hidden
        className="h-8 w-8 rounded-md border border-[--color-border]"
        style={{ backgroundColor: `var(${varToken})` }}
      />
      <div className="text-sm">
        <div className="font-medium text-[--color-foreground]">{name}</div>
        <div className="text-[--color-muted]">{varToken}</div>
      </div>
    </div>
  )
}

function Group({ title, children, className = "" }: { title: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[--color-muted]">{title}</h3>
      <div className="grid gap-3">{children}</div>
    </div>
  )
}

export function DesignSystemExample() {
  return (
    <Section className="mt-32 py-12 w-full max-w-7xl h-full flex flex-col items-center justify-center"> 
      <div className="space-y-8">
        <header className="flex items-end justify-between">
          <div>
            <h1 className="font-chakra text-3xl font-bold leading-tight text-[--color-foreground]">Overgoal Design System</h1>
            <p className="mt-1 text-[--color-muted]">Primitives and tokens preview</p>
          </div>
          <Badge>v0.1</Badge>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-[--color-foreground]">Colors</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Group title="Backgrounds" className="sm:col-span-2">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <ColorSwatch name="Base" varToken="--bg-base" />
                    <ColorSwatch name="Surface" varToken="--bg-surface" />
                  </div>
                </Group>
                <Group title="Text">
                  <ColorSwatch name="Main" varToken="--text-main" />
                  <ColorSwatch name="Muted" varToken="--text-muted" />
                </Group>
                <Group title="Brand">
                  <ColorSwatch name="Primary" varToken="--primary" />
                  <ColorSwatch name="Primary Hover" varToken="--primary-hover" />
                  <ColorSwatch name="Secondary" varToken="--secondary" />
                  <ColorSwatch name="Accent" varToken="--accent" />
                </Group>
                <Group title="State">
                  <ColorSwatch name="Success" varToken="--success" />
                  <ColorSwatch name="Danger" varToken="--danger" />
                  <ColorSwatch name="Highlight" varToken="--highlight" />
                </Group>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-[--color-foreground]">Buttons & Badges</h2>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Primary sm</Button>
                    <Button>Primary md</Button>
                    <Button size="lg">Primary lg</Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button asChild>
                      <a href="#" aria-label="Anchor button example">
                        asChild anchor
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="muted">Muted</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <h2 className="text-lg font-semibold text-[--color-foreground]">Form</h2>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@overgoal.gg" aria-required aria-label="Email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more..." aria-label="Message" />
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit">Submit</Button>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="text-xs text-[--color-muted]">
              Inputs use focus-visible rings with `--color-primary` and surface/background tokens.
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  )
}

export default DesignSystemExample


