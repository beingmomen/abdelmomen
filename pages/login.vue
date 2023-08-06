<template>
  <div>
    <UiAuthContainer image="login-light.png" :page="$t('signIn')">
      <template #inputs>
        <FormInput
          v-model="signInFields.email"
          :label="$t('emailAddress')"
          icon="i-heroicons-envelope"
          type="email"
        />
        <FormInput
          v-model="signInFields.password"
          :label="$t('password')"
          icon="i-heroicons-lock-closed"
          placeholder="*************"
          type="password"
        />

        <UButton
          variant="link"
          :to="localePath('/auth/forget-password')"
          style="margin-top: 0.6rem !important"
          :ui="{
            base: '',
          }"
        >
          {{ $t("forgetPassword") }}
        </UButton>

        <UButton
          icon="i-humbleicons-logout"
          :label="$t('signIn')"
          color="primary"
          :trailing="true"
          size="md"
          :class="{ 'cursor-not-allowed': loading }"
          :disabled="loading"
          :loading="loading"
          :ui="{
            wrapper: '',
            base: 'px-4 w-full flex justify-center',
            icon: {
              base: `${useAR() === 'rtl' ? 'rotate-180' : ''}`,
            },
          }"
          @click="signIn()"
        />

        <div class="flex gap-2 justify-center items-center">
          <p class="mb-0">{{ $t("newOnOurPlatform") }}</p>
          <UButton variant="link" :to="localePath('/auth/register')">
            {{ $t("createAnAccount") }}
          </UButton>
        </div>
      </template>
    </UiAuthContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const { signIn, signInFields, loading } = useAuthentication();
</script>

<style lang="scss" scoped>
</style>


