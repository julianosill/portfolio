'use client'

import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function ThemeSwitcher({ className, ...props }: Switch.SwitchProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  function handleToggleTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    if (theme === 'system') {
      const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)')
      isDarkPreferred.matches ? setTheme('dark') : setTheme('light')
    }
    setMounted(true)
  }, [setTheme, theme])

  if (!mounted) {
    return null
  }

  return (
    <Switch.Root
      checked={theme === 'dark'}
      onCheckedChange={handleToggleTheme}
      title="Alterar tema"
      className={twMerge(
        'relative flex items-center rounded-full border border-zinc-200 bg-zinc-200/50 outline-none transition-colors',
        'dark:border-zinc-800 dark:bg-zinc-900/50',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500',
        className,
      )}
      {...props}
    >
      <Switch.Thumb className="absolute size-5 rounded-full bg-zinc-50 transition-all ease-in-out data-[state=checked]:translate-x-[100%] dark:bg-zinc-600" />
      <Sun className="relative m-1 size-3 text-zinc-500 dark:text-zinc-600" />
      <Moon className="relative m-1 size-3 text-zinc-400 " />
    </Switch.Root>
  )
}
