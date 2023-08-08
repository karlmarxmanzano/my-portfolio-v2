<template>
  <div
    class="py-16 border-t border-opacity-20 border-primary dark:bg-[#0f172af9] dark:text-slate-200 dark:border-t-0 dark:border-opacity-0"
  >
    <AppContainer>
      <div class="flex items-center justify-between">
        <IconLogo />

        <SocialContainer class="flex items-center gap-x-6">
          <SocialItem>
            <NuxtLink href="https://github.com/karlmarxmanzano" target="_blank">
              <IconGithub class="dark:text-slate-300" />
            </NuxtLink>
          </SocialItem>
          <SocialItem>
            <NuxtLink href="mailto:karlmarxmanzano@gmail.com">
              <IconGmail />
            </NuxtLink>
          </SocialItem>
          <SocialItem>
            <NuxtLink
              href="https://www.linkedin.com/in/karl-marx-manzano/"
              target="_blank"
            >
              <IconLinkedIn />
            </NuxtLink>
          </SocialItem>
        </SocialContainer>
      </div>
    </AppContainer>
  </div>
</template>
