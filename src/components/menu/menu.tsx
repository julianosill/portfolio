'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '@/components/logo'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'

import { MenuItem } from './menu-item'

export function Menu() {
  const [open, setOpen] = useState(false)

  function handleCloseMenu() {
    setOpen(false)
  }

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={twMerge(
        'fixed z-10 w-full transition-all duration-300 ease-in-out max-sm:overflow-hidden',
        'border-zinc-200/50 bg-zinc-100/50',
        'dark:border-zinc-700/75 dark:bg-zinc-900/50',
        'max-sm:h-12 max-sm:border-b max-sm:backdrop-blur-md',
        'max-sm:data-[state=open]:h-full',
        'sm:absolute sm:top-12 sm:bg-transparent sm:dark:bg-transparent',
      )}
    >
      <div
        className={twMerge(
          'relative mx-auto w-10/12 max-w-2xl',
          'flex gap-4 max-sm:flex-col sm:gap-12',
        )}
      >
        <div className="flex items-center justify-between max-sm:h-12">
          <Link
            href="/"
            aria-label="Acessar página inicial"
            className="outline-offset-4 focus-visible:outline-primary"
          >
            <Logo className="size-7 fill-muted-50 sm:size-8" />
          </Link>

          <Collapsible.Trigger
            onClick={handleCloseMenu}
            className="text-highlighted outline-offset-2 focus-visible:outline-primary sm:hidden"
          >
            {open ? (
              <>
                <X className="size-6" />
                <span className="sr-only">Fechar menu</span>
              </>
            ) : (
              <>
                <MenuIcon className="size-6" />
                <span className="sr-only">Abrir menu</span>
              </>
            )}
          </Collapsible.Trigger>
        </div>

        <Collapsible.Content
          forceMount
          className="flex items-center gap-12 max-sm:flex-col sm:flex-1 sm:justify-between"
        >
          <nav className="flex max-sm:w-full max-sm:flex-col max-sm:divide-y max-sm:divide-zinc-200 max-sm:dark:divide-zinc-700 sm:gap-8 sm:text-sm">
            <MenuItem href="#about-me" onClick={handleCloseMenu}>
              Sobre mim
            </MenuItem>
            <MenuItem href="#projects" onClick={handleCloseMenu}>
              Projetos
            </MenuItem>
            <MenuItem href="#career" onClick={handleCloseMenu}>
              Trajetória
            </MenuItem>
            <MenuItem href="#contact" onClick={handleCloseMenu}>
              Contato
            </MenuItem>
          </nav>
          <ThemeSwitcher />
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}
