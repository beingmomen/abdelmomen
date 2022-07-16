<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <img src="/img/code.png" alt="logo" />
        <h2 class="brand-text text-primary ml-1">Abdelmo’men</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img
            fluid
            :src="require('~/assets/images/pages/login-v2.svg')"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title class="mb-1 font-weight-bold" title-tag="h2">
            {{ $t("login.welcome") }} 👋
          </b-card-title>
          <b-card-text class="mb-2">
            {{ $t("login.please") }}
          </b-card-text>

          <!-- form -->
          <ValidationObserver v-slot="{ handleSubmit, invalid }">
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <!-- email -->
              <ValidationProvider
                rules="required|email"
                v-slot="{ errors, classes }"
              >
                <b-form-group
                  :label="$t('inputs.email')"
                  label-for="login-email"
                  :class="classes"
                >
                  <b-form-input
                    id="login-email"
                    v-model="login.email"
                    :state="errors.length > 0 ? false : null"
                    :class="classes"
                    autocomplete="off"
                    name="Email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-form-group>
              </ValidationProvider>

              <!-- forgot password -->
              <ValidationProvider rules="required" v-slot="{ errors, classes }">
                <b-form-group :class="classes">
                  <div class="d-flex justify-content-between">
                    <label for="login-password">{{
                      $t("inputs.password")
                    }}</label>
                    <nuxt-link to="/auth/forgot-password">
                      <small>{{ $t("inputs.forget") }}</small>
                    </nuxt-link>
                  </div>
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="login.password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      autocomplete="off"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <MainEyeIcon
                        :visibility="passwordFieldType"
                        @click.native="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </b-form-group>
              </ValidationProvider>

              <!-- submit buttons -->
              <b-button
                type="submit"
                class="mt-3"
                variant="primary"
                :disabled="invalid"
                block
              >
                {{ $t("buttons.login") }}
              </b-button>
            </b-form>
          </ValidationObserver>

          <b-card-text class="text-center mt-3">
            <span>{{ $t("login.new_platform") }} </span>
            <nuxt-link to="/auth/register">
              <span>{{ $t("login.new_account") }}</span>
            </nuxt-link>
          </b-card-text>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { HelpCircleIcon, EyeIcon, CoffeeIcon } from "vue-feather-icons";

export default {
  name: "login",
  layout: "auth",
  data() {
    return {
      login: {
        email: "admin@admin.com",
        password: "password",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        let res = await this.$auth.loginWith("local", {
          data: this.login,
        });

        let position = this.$i18n.locale == "en" ? "top-right" : "top-left";

        this.$toast(`Welcome ${res.data.email}`, {
          hideProgressBar: true,
          position,
          icon: CoffeeIcon,
          closeOnClick: false,
          showCloseButtonOnHover: true,
        });
      } catch (err) {
        this.$toast.error(err.response.data.error.message);
      }
    },
  },
  components: {
    HelpCircleIcon,
    EyeIcon,
    CoffeeIcon,
  },
};
</script>