<template>
  <header
    class="py-6 border-b border-opacity-20 border-primary dark:bg-[#0f172af9] dark:text-slate-200 dark:border-b-0 dark:border-opacity-0"
  >
    <AppContainer>
      <div class="flex items-center justify-between">
        <IconLogo />

        <!-- Right side menu -->
        <div class="flex items-center gap-x-2">
          <AppNav>
            <AppNavItem>Home</AppNavItem>
            <AppNavItem>About</AppNavItem>
            <AppNavItem>Portfolio</AppNavItem>
            <AppNavItem>Services</AppNavItem>
          </AppNav>

          <div class="flex items-center gap-x-2 lg:ml-4 lg:block">
            <AppThemeColorSwitch />
            <AppNavDropdown class="lg:hidden" />
          </div>
        </div>
      </div>
    </AppContainer>
  </header>
</template>
