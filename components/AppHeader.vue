<template>
  <div class="py-6 border-b border-gray-100">
    <div class="container px-6 mx-auto sm:px-0 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div class="flex items-center justify-between">
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Portfolio</NavItem>
        </Nav>
        
        <IconLogo />

        <div class="flex items-center ml-4 gap-x-4">
          <DarkSwitch />
        </div>
      </div>
    </div>
  </div>
</template>
