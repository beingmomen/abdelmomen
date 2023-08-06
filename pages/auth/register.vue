<template>
  <div>
    <UiAuthContainer image="register-light.png" :page="$t('signUp')">
      <template #inputs>
        <FormInput
          v-model="signUpFields.name"
          :label="$t('name')"
          :placeholder="$t('name')"
          icon="i-fa6-solid-signature"
        />

        <FormInput
          v-model="signUpFields.email"
          :label="$t('emailAddress')"
          icon="i-heroicons-envelope"
          type="email"
        />

        <FormInput
          v-model="signUpFields.password"
          :label="$t('password')"
          icon="i-heroicons-lock-closed"
          placeholder="*************"
          type="password"
        />

        <FormInput
          v-model="signUpFields.passwordConfirm"
          :label="$t('passwordConfirm')"
          icon="i-heroicons-lock-closed"
          placeholder="*************"
          type="password"
        />

        <UButton
          icon="i-humbleicons-logout"
          :label="$t('signUp')"
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
          @click="signUp()"
        />
        <div class="flex gap-2 justify-center items-center">
          <p class="mb-0">
            {{ $t("alreadyHaveAnAccount") }}
          </p>
          <UButton variant="link" :to="localePath('/login')">
            {{ $t("signInInstead") }}
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

const { signUp, signUpFields, loading } = useAuthentication();
</script>

<style lang="scss" scoped>
</style>