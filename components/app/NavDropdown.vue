<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { Bars3BottomRightIcon } from '@heroicons/vue/20/solid';
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full p-2 text-sm font-medium text-white border rounded-md bg-primary bg-opacity-20 dark:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <Bars3BottomRightIcon
          class="w-6 h-6 text-primary dark:text-slate-300"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-[#151C2F] ring-1 ring-black ring-opacity-5 focus:outline-none dark:border dark:border-slate-700"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active
                  ? 'bg-slate-300 text-primary'
                  : 'text-gray-900 dark:text-slate-300',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
              ]"
            >
              Home
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active
                  ? 'bg-slate-300 text-primary'
                  : 'text-gray-900 dark:text-slate-300',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
              ]"
            >
              About
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active
                  ? 'bg-slate-300 text-primary'
                  : 'text-gray-900 dark:text-slate-300',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
              ]"
            >
              Projects
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
