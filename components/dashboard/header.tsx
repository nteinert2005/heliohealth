"use client"

import { Bell, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-4 safe-top">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 ring-2 ring-[var(--neon-purple)]/30">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
          <AvatarFallback className="bg-gradient-to-br from-[#7B4DFF] to-[#A855F7] text-white text-sm font-medium">
            NM
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-xs text-[#94A3B8]">Good morning</span>
          <span className="text-sm font-medium text-white">Nurse Mary</span>
        </div>
      </div>
      
      <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-white tracking-tight">
        MamaVision AI
      </h1>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-10 w-10 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--neon-purple)]/20 transition-all duration-300"
        >
          <Bell className="h-5 w-5 text-[#94A3B8]" />
          <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#EF4444] ring-2 ring-[#0B1220]" />
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
    </header>
  )
}
