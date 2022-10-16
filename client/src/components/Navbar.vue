<template>
  <div>
    <nav class="w-screen bg-white border-gray-200 pl-2 xl:px-4 py-2.5 dark:bg-slate-900" :class="user">
      <div
        class="  flex  justify-between items-center lg:mx-14 sm:mx-5"
      >
        <button @click="redir('/login')" class="flex items-center">
          <span
            class="
              self-center
              text-[1.75rem]
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            ><i class="fa-solid fa-cloud-arrow-up text-sky-400 mr-2"></i
            >Personal Drive</span
          >
        </button>
        <div class="flex justify-between lg:w-1/2 ">
          <div class="flex items-center md:order-2">
            <div
              v-if="userPanel"
              @click="toggleMenu"
              class="
                flex
                mr-3
                text-sm
                bg-gray-800
                rounded-full
                md:mr-0
                hover:ring-4 hover:ring-gray-300
                dark:hover:ring-gray-600
              "
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src="https://miro.medium.com/max/640/1*B8c1ED3QV_yaa6PAWqDgMw.png"
                alt="user photo"
              />
            </div>
            <div v-else class="flex space-x-4">
              <button @click="redir('/signup')"
                
                class="
                  text-white
                  bg-gradient-to-r
                  from-sky-500
                  to-blue-500
                  hover:bg-gradient-to-bl
                  focus:ring-4 focus:outline-none focus:ring-sky-300
                  dark:focus:ring-sky-800
                  font-medium
                  rounded-lg
                  text-lg
                  px-5
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
                  text-lg
                  font-medium
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
                    px-5
                    py-2.5
                    transition-all
                    ease-in
                    duration-75
                    bg-white
                    dark:bg-gray-900
                    rounded-md
                    group-hover:bg-opacity-0
                  "
                >
                  Log in
                </span>
                            </button>

            </div>
            <!-- Dropdown menu -->
            <div
              v-if="userMenu"
              class="
                z-50
                top-10
                right-10
                my-4
                text-base
                list-none
                bg-white
                rounded
                divide-y divide-gray-100
                shadow
                dark:bg-gray-700 dark:divide-gray-600
              "
              style="
                position: absolute;

                margin: 0px;
                transform: translate3d(0px, 10.4px, 0px);
              "
            >
              <div class="py-3 px-4">
                <span class="block text-sm text-gray-900 dark:text-white"
                  >{{name}}</span
                >
                <span
                  class="
                    block
                    text-sm
                    font-medium
                    text-gray-500
                    truncate
                    dark:text-gray-400
                  "
                  >{{email}}</span
                >
              </div>
              <div class="py-1" aria-labelledby="user-menu-button">
                <li>
                  <router-link to="/user"
                  
                    class="
                      block
                      py-2
                      px-4
                      text-sm text-gray-700
                      hover:bg-gray-100
                      dark:hover:bg-gray-600
                      dark:text-gray-200
                      dark:hover:text-white
                    "
                    >Dashboard</router-link>
                </li>
                <li>
                  <router-link to="/user/settings"
                   
                    class="
                      block
                      py-2
                      px-4
                      text-sm text-gray-700
                      hover:bg-gray-100
                      dark:hover:bg-gray-600
                      dark:text-gray-200
                      dark:hover:text-white
                    "
                    >Settings</router-link>
                </li>
                <li>
                  <div
                    @click="signOut"
                    class="
                      block
                      py-2
                      px-4
                      text-sm text-gray-700
                      hover:bg-gray-100
                      dark:hover:bg-gray-600
                      dark:text-gray-200
                      dark:hover:text-white
                    "
                    >Sign out</div>
                </li>
              </div>
            </div>
            <button
              @click="$emit('side')"
              type="button"
              class="
                inline-flex
                items-center
                p-2
                ml-1
                text-sm text-gray-500
                rounded-lg
                lg:hidden
                hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-gray-200
                dark:text-gray-400
                dark:hover:bg-gray-700
                dark:focus:ring-gray-600
              "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div 
            class="
              hidden
              justify-between
              items-center
              w-full
              md:flex md:w-auto md:order-1
            "
          >
            <ul v-if="!userPanel"
              class="
                flex flex-col
                p-4
                mt-4
                bg-gray-50
                rounded-lg
                border border-gray-100
                md:flex-row
                md:space-x-8
                md:mt-0
                md:text-sm
                md:font-medium
                md:border-0
                md:bg-white
                dark:bg-gray-800
                md:dark:bg-gray-900
                dark:border-gray-700
              "
            >
              <li>
                <router-link to="/pd"
                  
                  class="
                    text-xl
                    block
                    py-2
                    pr-4
                    pl-3
                    text-white
                    bg-blue-700
                    rounded
                    md:bg-transparent md:text-blue-700 md:p-0
                    dark:text-white
                  "
                  aria-current="page"
                  >Home</router-link>
              </li>
              <li>
                <router-link to="/about" 
                  
                  class="
                    text-xl
                    block
                    py-2
                    pr-4
                    pl-3
                    text-gray-300
                    rounded
                    hover:bg-gray-100
                    md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                    dark:text-gray-200
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                    dark:border-gray-700
                  "
                  >About</router-link>
              </li>

              <li>
                <router-link to="/pricing" 
                  
                  class="
                    text-xl
                    block
                    py-2
                    pr-4
                    pl-3
                    text-gray-700
                    rounded
                    hover:bg-gray-100
                    md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                    dark:text-gray-200
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                    dark:border-gray-700
                  "
                  >Pricing</router-link>
              </li>
              <li>
                <router-link to="/contact" 
                  
                  class="
                    text-xl
                    block
                    py-2
                    pr-4
                    pl-3
                    text-gray-700
                    rounded
                    hover:bg-gray-100
                    md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                    dark:text-gray-200
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                    dark:border-gray-700
                  "
                  >Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["userPanel","user"],
  data() {
    return {
      name:sessionStorage.getItem("fullname"),
      email:sessionStorage.getItem("email"),
      userMenu: false,
    };
  },
  methods: {
    redir(e){
      if(sessionStorage.getItem("isLoggedIn")){
        this.$router.push('/user')
      }else
      this.$router.push(e)
    },
    toggleMenu() {
      this.userMenu = !this.userMenu;
    },
    signOut(){
      sessionStorage.clear()
      this.$router.push('/login')
    }
  },

};
</script>

<style>

</style>