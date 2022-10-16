

<template>
  <div class="h-screen bg-slate-500 bg-opacity-50">
    <navbar @side="toggleSide" :userPanel="true" :user="'fixed top-0 z-20'"></navbar>
    <div class="flex">
      <sidebar v-if="showSide" @toggleUpload="(e) => (uploadMenu = e)"></sidebar>
      <div class="flex justify-center w-screen h-screen items-center xl:ml-[30vh] lg:ml-[15vw] sm:ml-0">
        <div
          class="
            flex flex-col
            bg-white
            py-32
            px-48
            bg-opacity-80
            rounded-lg
            border border-gray-200
            shadow-md
            hover:bg-gray-100
          "
        >
          <div class="">
            <label class="mb-4 text-xl font-medium text-gray-900" for="files"
              >Upload multiple files (drag & drop or choose)</label
            >
            <input
              class="
                py-10
                px-5
                mt-4
                w-full
                text-sm text-gray-900
                bg-gray-50
                rounded-lg
                border border-gray-300
                cursor-pointer
                dark:text-gray-400
                focus:outline-none
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400

              "
              
              type="file"
              id="files"
              ref="files"
              multiple
              v-on:change="handleFilesUpload()"
            />
          </div>
          <div class="m-4">
            <div
              v-for="(file, key) in files"
              class="flex justify-around"
              :key="key"
            >
              {{ file.name }}
              <span class="text-red-600 text-lg" v-on:click="removeFile(key)"
                ><i class="fa-solid fa-square-xmark"></i
              ></span>
            </div>
          </div>

          <div class="flex justify-evenly">
           

            <button
            v-on:click="addFiles()"
              
              class="
                relative
                inline-flex
                items-center
                justify-center
                p-0.5
                mb-2
                mr-2
                overflow-hidden
                text-sm
                font-medium
                text-gray-900
                rounded-lg
                group
                bg-gradient-to-br
                from-cyan-500
                to-blue-500
                group-hover:from-cyan-500 group-hover:to-blue-500
                hover:text-white
                dark:text-white
                focus:ring-4 focus:outline-none focus:ring-cyan-200
                dark:focus:ring-cyan-800
              "
            >
              <span
                class="
                  relative
                  px-8
                  py-3
                  transition-all
                  ease-in
                  duration-75
                  bg-white
                  dark:bg-slate-800
                  
                  rounded-md
                  group-hover:bg-opacity-0
                "
              >
                 Add Files
              </span>
            </button>
             <button
              v-on:click="submitFiles()"
              type="button"
              class="
                text-white
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                hover:bg-gradient-to-bl
                focus:ring-4 focus:outline-none focus:ring-cyan-300
                dark:focus:ring-cyan-800
                font-medium
                rounded-lg
                text-sm
                px-8
                py-2.5
                text-center
                mr-2
                mb-2
              "
            >Submit
             
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { upload } from "../service/FileService";
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Sidebar,
    Navbar,

  },
  data() {
    return {
      files: [],
      uploadMenu: false,
      showSide:false
    };
  },
    mounted() {
        if(screen.width>1024)
        {
            this.showSide=true
            console.log(screen.width,"#####",this.showSide);
        }
    },
  methods: {
    toggleSide(){
        this.showSide =!this.showSide
    },
    addFiles() {
      this.$refs.files.click();
    },

    submitFiles() {
      let formData = new FormData();

      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("files", file);
      }
      console.log(sessionStorage.getItem("id"));
      console.log(sessionStorage.getItem("auth_token"));
      upload(formData)
        .then((result) => {
          console.log("SUCCESS!!");
          if (result.data) {
            this.$router.push("/user");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },

    removeFile(key) {
      this.files.splice(key, 1);
    },
  },
};
</script>