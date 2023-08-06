export const useAuthentication = () => {
  const { setToken, setUser } = useAuthStore();

  const loading = ref(false);

  const signInFields = reactive({
    email: "",
    password: "",
  });

  const signUpFields = reactive({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const forgetPasswordFields = reactive({
    email: "",
  });

  const resetPasswordFields = reactive({
    password: null,
    passwordConfirm: null,
  });

  const signIn = async () => {
    loading.value = true;

    const { data, error } = await useFetch("/api/auth/login", {
      method: "POST",
      body: signInFields,
    });

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    if (data.value.status == "success") {
      await setToken(data.value.token);
      await setUser(data.value.data);
      loading.value = false;
      await navigateTo(localePath("/"));
    }
  };

  const signUp = async () => {
    loading.value = true;

    const { data, error } = await useFetch("/api/auth/register", {
      method: "POST",
      body: signUpFields,
    });

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    if (data.value.status == "success") {
      useHandleRequestSuccess(data, "/login");
      loading.value = false;
    }
  };

  const sendEmail = async () => {
    loading.value = true;

    const { data, error } = await useFetch("/api/auth/forgetPassword", {
      method: "POST",
      body: forgetPasswordFields,
    });

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    if (data.value.status == "success") {
      useHandleRequestSuccess(data, "/login");
      loading.value = false;
    }
  };

  const setNewPassword = async (token) => {
    loading.value = true;

    const { data, error } = await useFetch(`/api/auth/resetPassword/${token}`, {
      method: "POST",
      body: resetPasswordFields,
    });

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    if (data.value.status == "success") {
      useHandleRequestSuccess(data, "/login");
      loading.value = false;
    }
  };

  return {
    signIn,
    signUp,
    sendEmail,
    setNewPassword,
    signInFields,
    signUpFields,
    forgetPasswordFields,
    resetPasswordFields,
    loading,
  };
};
