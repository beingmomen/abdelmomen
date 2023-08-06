<template>
  <div>
    <UiAuthContainer
      image="register-light.png"
      :page="$t('resetPassword')"
      :text="false"
    >
      <template #inputs>
        <FormInput
          v-model="resetPasswordFields.password"
          :label="$t('password')"
          icon="i-heroicons-lock-closed"
          placeholder="*************"
          type="password"
        />

        <FormInput
          v-model="resetPasswordFields.passwordConfirm"
          :label="$t('passwordConfirm')"
          icon="i-heroicons-lock-closed"
          placeholder="*************"
          type="password"
        />

        <UButton
          icon="i-humbleicons-logout"
          :label="$t('send')"
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
          @click="setNewPassword(params.token)"
        />
        <div class="flex gap-2 justify-center items-center">
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

const { setNewPassword, resetPasswordFields, loading } = useAuthentication();

const { params } = useRoute();
</script>

<style lang="scss" scoped>
</style>