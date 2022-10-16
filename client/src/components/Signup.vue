<template>
  <section class="bg-gradient-to-r from-slate-800 via-sky-700 to-slate-900">
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
          mb-10
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
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
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
            Create and account
          </h1>
          <form @submit="onSubmit"
            class="space-y-4 md:space-y-6 flex flex-col items-center"
            action="#"
          >
            <div class="w-full">
              <label
                for="full-name"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                "
                >Full Name</label
              >
              <input
               v-model="fullName"
                type="text"
                
                placeholder="Full Name"
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
              @click.prevent="register"
              type="submit"
              class="
                w-2/4
                text-white
                bg-primary-600
                hover:bg-primary-700
                focus:ring-4 focus:outline-none focus:ring-primary-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                dark:bg-primary-600
                dark:hover:bg-primary-700
                dark:focus:ring-primary-800
              "
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <router-link
                to="/login"
                class="
                  font-medium
                  text-primary-600
                  hover:underline
                  dark:text-primary-500
                "
                >Login here</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
    
<script>
import { signup } from "../service/UserService";

export default {

  data() {
    return {
      fullName: "Test Case",
      email: "test@test.com",
      password: "test",
    };
  },

  methods: {
    register() {
      console.log("###################@@@@@@@@@@@@@@");
      signup(this.fullName, this.email, this.password).then((response) => {
        if(response.data){
          this.$router.push('/login')
        }
      });
    },
  },
};
</script>
