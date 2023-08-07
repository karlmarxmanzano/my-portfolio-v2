<template>
  <div
    class="py-16 border-t border-opacity-20 border-primary dark:bg-[#0f172af9] dark:text-slate-200 dark:border-t-0 dark:border-opacity-0"
  >
    <AppContainer>
      <div class="flex items-center justify-between">
        <IconLogo />

        <SocialContainer class="flex items-center gap-x-6">
          <SocialItem>
            <a href="https://github.com/karlmarxmanzano" target="_blank">
              <IconGithub class="dark:text-slate-300" />
            </a>
          </SocialItem>
          <SocialItem>
            <a href="mailto:karlmarxmanzano@gmail.com">
              <IconGmail />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.linkedin.com/in/karl-marx-manzano-9331b8209/"
              target="_blank"
            >
              <IconLinkedIn />
            </a>
          </SocialItem>
        </SocialContainer>
      </div>
    </AppContainer>
  </div>
</template>
