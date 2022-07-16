<template>
  <b-container style="margin-top: 100px">
    <b-row>
      <b-col cols="12" md="12" lg="6">
        <b-card no-body class="card-statistics">
          <b-card-header>
            <b-card-title>Contact Me</b-card-title>
          </b-card-header>
          <b-card-body class="statistics-body">
            <validation-observer ref="form">
              <b-row>
                <FormInput
                  label="Full  Name"
                  storeKey="FullName"
                  :module="module"
                  lg="12"
                  md="12"
                />
                <FormInput
                  label="Email"
                  storeKey="Email"
                  :module="module"
                  lg="12"
                  md="12"
                />
                <FormInput
                  label="Subject"
                  storeKey="Subject"
                  :module="module"
                  lg="12"
                  md="12"
                />
                <b-col class="mb-1">
                  <validation-provider
                    #default="{ errors }"
                    name="Message"
                    rules="required"
                  >
                    <label>Message</label>
                    <b-form-textarea
                      id="textarea-default"
                      v-model="message"
                      rows="6"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-col>
              </b-row>
            </validation-observer>
            <b-button @click="send" variant="primary" class="mt-4">
              Send Message
            </b-button>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col cols="12" md="12" lg="6" class="ps-lg-5 mt-4">
        <h2 class="mb-4">Contact Details</h2>

        <div>
          <b-button variant="flat-dark" class="btn-icon fs-4 ps-0">
            <font-awesome-icon icon="fa-solid fa-at" />
            <span class="mail">abdelmomenelshatory@gmail.com</span>
          </b-button>
        </div>
        <div>
          <b-button variant="flat-dark" class="btn-icon fs-4 ps-0">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span>+201064053748</span>
          </b-button>
        </div>
        <div>
          <b-button variant="flat-dark" class="btn-icon fs-4 ps-0">
            <font-awesome-icon icon="fa-solid fa-mobile" />
            <span>+201556005562</span>
          </b-button>
        </div>
      </b-col>
    </b-row>
    <hr />
    <LandingPageSocial />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      module: "landingPage",
      message: null,
    };
  },
  methods: {
    send() {
      this.$refs.form.validate().then((res) => {
        if (res) {
          this.$store.dispatch("landingPage/addToDB");
        }
      });
    },
  },
  watch: {
    message(newValue, oldValue) {
      this.$store.commit("landingPage/setMessage", {
        key: "Message",
        value: newValue,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
hr {
  margin-block: 80px;
}

.btn-icon {
  &:hover {
    background-color: unset !important;
  }
  &:active {
    background-color: unset !important;
    color: unset !important;
  }
  &:focus {
    background-color: unset !important;
    // color: #212529 !important;
  }
}

.mail {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 50px;
}
</style>