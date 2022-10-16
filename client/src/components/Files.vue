<template>
  <div class="w-screen grid xl:grid-cols-6 lg:grid-cols-4  md:grid-cols-4 sm:grid-cols-3 gap-y-10">
    <div class="" v-for="file in allFiles" :key="file._id">
      <file-cards @details="fileDetails"
        @delete-file="(e)=>deleteFiles(e)"
        :type="file.fileName.split('.').pop()"
        :name="file.fileName"
      ></file-cards>
    </div>
  </div>
</template>

<script>
import FileCards from "./FileCards.vue";
import { files } from "../service/UserService";
import { delete_file } from "../service/FileService";

export default {
  components: {
    FileCards,
  },
  data() {
    return {
      allFiles: [],
    };
  },
  mounted() {
    this.fetchFiles();
  },
  methods: {
    fileDetails(e){
       this.$emit('detail',e)
    },
    fetchFiles() {
      files(sessionStorage.getItem("id"), sessionStorage.getItem("auth_token"))
        .then((response) => {
          
          this.allFiles = response.data.user;
        })
        .catch((err) => {

            console.log(err,"@@@@@@@@@@@@@@")
          });
    },
    deleteFiles(name) {
      delete_file(name)
        .then((result) => {
          console.log(result);
          this.fetchFiles();
        })
        .catch((err) => console.log(err,"##########"));
    },
  },
};
</script>