<template>
  <div>
    <UiAuthContainer
      image="register-light.png"
      :page="$t('forgetPassword')"
      :text="false"
    >
      <template #inputs>
        <FormInput
          v-model="forgetPasswordFields.email"
          :label="$t('emailAddress')"
          icon="i-heroicons-envelope"
          type="email"
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
          @click="sendEmail()"
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

const { sendEmail, forgetPasswordFields, loading } = useAuthentication();
// const { sendEmail, forgetPasswordFields, loading } = useAuthentication();
</script>

<style lang="scss" scoped>
</style>