"use client"

import { Home, Bot, Plus, BookOpen, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Bot, label: "AI Assistant", active: false },
  { icon: Plus, label: "Scan", isCenter: true },
  { icon: BookOpen, label: "Resources", active: false },
  { icon: User, label: "Profile", active: false },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-[var(--glass-border)] safe-bottom">
      <div className="flex items-center justify-around px-2 pt-2 pb-2 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          
          if (item.isCenter) {
            return (
              <button
                key={item.label}
                className="relative -mt-6 h-14 w-14 rounded-full gradient-purple flex items-center justify-center shadow-lg shadow-[#7B4DFF]/40 hover:shadow-[#7B4DFF]/60 transition-all duration-300 active:scale-95"
                aria-label={item.label}
              >
                <Icon className="h-7 w-7 text-white" />
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
              </button>
            )
          }
          
          return (
            <button
              key={item.label}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-200",
                item.active 
                  ? "text-[#7B4DFF]" 
                  : "text-[#64748B] hover:text-[#94A3B8]"
              )}
              aria-label={item.label}
            >
              <Icon className={cn("h-5 w-5", item.active && "drop-shadow-[0_0_8px_rgba(123,77,255,0.5)]")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
