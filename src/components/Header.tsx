import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 text-transparent">
        <div className="flex items-center gap-3">
          <img src="https://cdn.poehali.dev/projects/f8626176-734e-491d-a1c0-c85177d828fb/bucket/b7dea77f-30a5-4b68-aabc-3bcd7cd5de3b.jpg" alt="Геометрия чистоты" width={56} height={56} className="h-14 w-14 object-contain rounded-full" />
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button
              className="bg-primary text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              style={{ paddingLeft: "24px", paddingRight: "16px" }}
            >
              Вызвать специалиста <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}