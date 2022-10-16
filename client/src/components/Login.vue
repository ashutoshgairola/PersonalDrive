<template>
  <section
    class="bg-gradient-to-r from-slate-800 via-sky-700 to-slate-900 h-screen"
  >
    <div
      class="
        flex flex-col
        items-center
        justify-center
        px-6
        py-8
        mx-auto
        md:h-screen
        lg:py-0
      "
    >
      <router-link
        to="/pd"
        class="
          flex
          items-center
          mb-12
          text-2xl
          font-semibold
          text-gray-900
          dark:text-white
        "
      >
        <span class="text-sky-400 mr-2"
          ><i class="fa-solid fa-cloud-arrow-up"></i
        ></span>
        Personal Drive
      </router-link>
      <div
        class="
          w-full
          bg-white
          rounded-lg
          shadow
          dark:border
          md:mt-0
          sm:max-w-md
          xl:p-0
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <div class="p-6 space-y-8 md:space-y-6 sm:p-8">
          <h1
            class="
              text-xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
              md:text-2xl
              dark:text-white
            "
          >
            Sign in to your account
          </h1>
          <form
            class="space-y-6 md:space-y-8 flex flex-col items-center"
            action="#"
          >
            <div class="w-full">
              <label
                for="email"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                "
                >Your email</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-primary-600 focus:border-primary-600
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div class="w-full">
              <label
                for="password"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                "
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-primary-600 focus:border-primary-600
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                required=""
              />
            </div>

            <button
              @click.prevent="signin"
              class="
                w-2/5
                text-white
                bg-primary-600
                hover:bg-primary-700
                focus:ring-4 focus:outline-none focus:ring-primary-300
                font-medium
                rounded-lg
                text-sm
                px-4
                py-2.5
                text-center
                dark:bg-primary-600
                dark:hover:bg-primary-700
                dark:focus:ring-primary-800
              "
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <router-link
                to="/signup"
                class="
                  font-medium
                  text-primary-600
                  hover:underline
                  dark:text-primary-500
                "
                >Sign up</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
    
<script>
import { login } from "../service/UserService";

export default {
  data() {
    return {
      email: "test@test.com",
      password: "test",
    };
  },

  methods: {
    signin() {
      login(this.email, this.password)
        .then((response) => {
          sessionStorage.setItem("auth_token", response.data.token);
          sessionStorage.setItem("fullname", response.data.name);
          sessionStorage.setItem("email", response.data.email);
          sessionStorage.setItem("id", response.data._id);
          sessionStorage.setItem("isLoggedIn", true);
          sessionStorage.setItem("files", JSON.stringify(response.data.files));

          setTimeout(() => {
            sessionStorage.clear();
            this.$router.push("/login");
          }, 1000 * 60 *60);
          this.$router.push({ path: "/user" });
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
