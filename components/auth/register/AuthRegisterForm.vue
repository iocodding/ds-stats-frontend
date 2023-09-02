<script setup>
const { register } = useAuth();

const email = ref("");
const password = ref("");

const isLoading = ref(false);
function onSubmit() {
  isLoading.value = true;
  const formBody = {
    username: email.value,
    email: email.value,
    password: password.value,
  };
  register(formBody)
    .then(() => {
      alert("success");
      isLoading.value = false;
    })
    .catch(() => {
      isLoading.value = false;
    });
}
</script>
<template>
  <div class="max-w-sm mx-auto">
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full px-3">
        {{ email }} - {{ password }}
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

    <div class="flex flex-wrap -mx-3">
      <div class="w-full px-3">
        <button
          class="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full h-12 relative flex items-center"
        >
          <svg
            class="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
            />
          </svg>
          <span class="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
        </button>
      </div>
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
