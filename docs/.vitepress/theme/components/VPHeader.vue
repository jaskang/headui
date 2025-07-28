<script lang="ts" setup>
import { Button, Switch } from 'headui'
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useData } from 'vitepress'
import { ref } from 'vue'
import { useThemeStore } from '../composables/theme'
const store = useThemeStore()
const { primary } = storeToRefs(store)
const { isDark } = useData()
</script>

<template>
  <header class="bg-background sticky top-0 z-50 w-full">
    <div class="container-wrapper 3xl:fixed:px-0 px-6">
      <div class="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
        <Button
          data-slot="popover-trigger"
          class="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-invalid hover:text-accent-foreground has-[&gt;svg]:px-3 extend-touch-target flex h-8 shrink-0 touch-manipulation items-center justify-start gap-2.5 rounded-md !p-0 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent disabled:pointer-events-none disabled:opacity-50 lg:hidden dark:hover:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-«Rmplb»"
          data-state="closed"
        >
          <div class="relative flex h-8 w-4 items-center justify-center">
            <div class="relative size-4">
              <span class="bg-foreground absolute top-1 left-0 block h-0.5 w-4 transition-all duration-100"></span
              ><span class="bg-foreground absolute top-2.5 left-0 block h-0.5 w-4 transition-all duration-100"></span>
            </div>
            <span class="sr-only">Toggle Menu</span>
          </div>
          <span class="flex h-8 items-center text-lg leading-none font-medium">Menu</span>
        </Button>
        <Button href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            ></line>
          </svg>
          <span class="sr-only">headui/ui</span>
        </Button>
        <nav class="hidden items-center gap-0.5 lg:flex">
          <Button variant="ghost" href="/"> Home </Button>
          <Button variant="ghost" href="/components/button"> Components </Button>
          <Button variant="ghost" href="/CHANGELOG"> 更新日志 </Button>
        </nav>
        <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <div class="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            <button
              data-slot="dialog-trigger"
              class="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-invalid hover:bg-secondary/80 has-[&gt;svg]:px-3 bg-surface text-surface-foreground/60 dark:bg-card relative inline-flex h-8 w-full shrink-0 items-center justify-start gap-2 rounded-md px-4 py-2 pl-2.5 text-sm font-normal whitespace-nowrap shadow-none transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-56 xl:w-64 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-«R66plb»"
              data-state="closed"
            >
              <span class="hidden lg:inline-flex">Search documentation...</span
              ><span class="inline-flex lg:hidden">Search...</span>
              <div class="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
                <kbd
                  class="bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3"
                  >⌘</kbd
                ><kbd
                  class="bg-background text-muted-foreground pointer-events-none flex aspect-square h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3"
                  >K</kbd
                >
              </div>
            </button>
          </div>
          <div
            data-orientation="vertical"
            role="none"
            data-slot="separator"
            class="bg-border ml-2 hidden shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px lg:block"
          ></div>
          <Button variant="ghost">
            <svg viewBox="0 0 438.549 438.549">
              <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
              ></path>
            </svg>
            <!--$-->
            <span class="text-muted-foreground w-8 text-xs tabular-nums">91.0k</span>
            <!--/$-->
          </Button>
          <div
            data-orientation="vertical"
            role="none"
            data-slot="separator"
            class="bg-border 3xl:flex hidden shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
          ></div>
          <Button variant="ghost">
            <span class="sr-only">Toggle layout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-gallery-horizontal"
            >
              <path d="M2 3v18"></path>
              <rect width="12" height="18" x="6" y="3" rx="2"></rect>
              <path d="M22 3v18"></path>
            </svg>
          </Button>
          <div
            data-orientation="vertical"
            role="none"
            data-slot="separator"
            class="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
          ></div>
          <Switch v-model:value="isDark">
            <template #icon-on>
              <MoonIcon />
            </template>
            <template #icon-off>
              <SunIcon />
            </template>
          </Switch>
        </div>
      </div>
    </div>
  </header>
</template>
