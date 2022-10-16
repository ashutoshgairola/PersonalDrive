<template>
  <div class="bg-gradient-to-r from-slate-800 via-sky-700 to-slate-900">
    <div class="h-screen">
      <div>
        <navbar :userPanel="false"></navbar>
      </div>
      <div class="flex h-[85%]">
        <div class="w-1/2 flex flex-col justify-center items-center space-y-12">
          <div class="text-8xl text-white font-semibold">Welcome</div>
          <div class="text-5xl text-white font-semibold">To Your</div>
          
            <div
              class="
                flex
                items-center
                mb-10
                text-6xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              <span class="relative text-sky-400 mr-5 ">
                <i class=" fa-solid fa-cloud"></i>
                <iframe
                    src="https://giphy.com/embed/gFKMiZk6kj7T5OC0wE"
                    width="100%"
                    height="100%"
                    style="position: absolute;
                    top:25px"
                    frameBorder="0"
                    allowFullScreen
                  >
                  </iframe>
              </span>
              <span class="text-sky-400">P</span>ersonal <span class="ml-5 text-sky-400">D</span>rive

            </div>
           <div class="flex space-x-4">
              <button @click="redir('/signup')"
                class="
                  text-white
                  bg-gradient-to-r
                  from-sky-500
                  to-blue-500
                  hover:bg-gradient-to-bl
                  focus:ring-4 focus:outline-none focus:ring-sky-300
                  dark:focus:ring-sky-800
                  font-semibold
                  rounded-lg
                  text-2xl
                  px-10
                  py-2.5
                  text-center
                  mr-2
                  mb-2
                "
              >
                Signup!
              </button>
              <button @click="redir('/login')"
                class="
                  relative
                  inline-flex
                  items-center
                  justify-center
                  p-0.5
                  mb-2
                  mr-2
                  overflow-hidden
                  text-2xl
                  font-semibold
                  text-gray-900
                  rounded-lg
                  group
                  bg-gradient-to-br
                  from-sky-500
                  to-blue-500
                  group-hover:from-sky-500 group-hover:to-blue-500
                  hover:text-white
                  dark:text-white
                  focus:ring-4 focus:outline-none focus:ring-sky-200
                  dark:focus:ring-sky-800
                "
              >
                <span
                  class="
                    relative
                    px-10
                    py-2.5
                    transition-all
                    ease-in
                    duration-75
                    bg-white
                    dark:bg-slate-900
                    rounded-md
                    group-hover:bg-opacity-0
                  "
                >
                  Log in
                </span>
              </button>
            </div>
        </div>
        <div class="w-1/2 flex justify-center items-center">
          <img class="mt-14 mr-5" src="../../assets/web.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
export default {
  components: {
    Navbar,
  },
  methods: {
    redir(e){
      if(sessionStorage.getItem("isLoggedIn")){
        this.$router.push('/user')
      }else
      this.$router.push(e)
    },
  },
};
</script>