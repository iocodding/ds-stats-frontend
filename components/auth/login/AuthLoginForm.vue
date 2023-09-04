<script setup>
const { login } = useAuth();

const email = ref("");
const password = ref("");

const isLoading = ref(false);
const error = ref(false);

function onSubmit() {
  isLoading.value = true;
  const formBody = {
    identifier: email.value,
    password: password.value,
  };
  login(formBody)
    .then(() => {
      navigateTo("/");
      isLoading.value = false;
    })
    .catch((e) => {
      console.log(e);
      isLoading.value = false;
      error.value = true;
      email.value = "";
      password.value = "";
    });
}
</script>
<template>
  <div class="max-w-sm mx-auto">
    <div class="flex flex-wrap -mx-3 mb-4">
      <div v-if="error" class="w-full px-3 pb-5">
        <DssAlert type="error"> Invalid Email or Password </DssAlert>
      </div>

      <div class="w-full px-3">
        <DssInput
          v-model="email"
          autofocus
          size="lg"
          placeholder="ex: email@gmail.com"
          label="Email"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full px-3">
        <DssInput
          v-model="password"
          size="lg"
          placeholder="********"
          label="Password"
          type="password"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full px-3">
        <div class="flex justify-between">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="text-gray-600 ml-2">Keep me signed in</span>
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mt-6 px-3">
      <DssButton
        fullWidth
        size="lg"
        text="Sign in"
        @click="onSubmit"
        :loading="isLoading"
      />
    </div>

    <div class="flex items-center my-6">
      <div class="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
      <div class="text-gray-600 italic">Or</div>
      <div class="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
    </div>

    <div class="text-gray-600 text-center mt-6">
      Don’t you have an account?
      <router-link
        to="/register"
        class="text-blue-600 hover:underline transition duration-150 ease-in-out"
        >Sign up</router-link
      >
    </div>
  </div>
</template>
