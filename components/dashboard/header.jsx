"use client"

import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-5 pt-5 pb-4 safe-top">
      {/* Avatar + greeting */}
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 ring-2 ring-[#F59E0B]/40 shadow-lg shadow-[#F59E0B]/10">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
          <AvatarFallback className="bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] text-[#0A0A0B] text-sm font-bold">
            NM
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-xs text-[#6B7280] tracking-wide uppercase">Good morning</span>
          <span className="text-sm font-semibold text-white leading-tight">Nurse Mary</span>
        </div>
      </div>

      {/* Brand title with amber underline accent */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
        <h1 className="text-base font-bold text-white tracking-tight">MamaVision AI</h1>
        <span className="block h-px w-10 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent rounded-full" />
      </div>

      {/* Notification bell */}
      <Button
        variant="ghost"
        size="icon"
        className="relative h-10 w-10 rounded-full solid-card hover:border-[#F59E0B]/40 hover:bg-[#F59E0B]/10 transition-all duration-300"
      >
        <Bell className="h-5 w-5 text-[#9CA3AF]" />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#DC2626] ring-[1.5px] ring-[#0A0A0B]" />
        <span className="sr-only">Notifications</span>
      </Button>
    </header>
  )
}
