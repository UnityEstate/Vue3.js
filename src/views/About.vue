<template>
  <div class="about px-4">
    <h1>เกี่ยวกับเรา</h1>
    <p>{{ email }}</p>
    <a :href="googleUrl">Google</a>
    <img :src="imgUrl.url" :alt="imgUrl.alt" v-if="isShow" />
    <br />
    <button class="btn btn-info" @click="greet">Click Me!</button>
    <br />
    <Logo />
    <div>
      <h1>ตัวอย่าง Upload File</h1>
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <input type="file" name="picture" ref="file" />  
        <button type="submit">Upload</button>
      </form>

    </div>


  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import { ref, reactive, onMounted, onUnmounted } from "vue";

export default {
  name: "About",
  components: {
    Logo,
  },
  setup() {
    const email = ref("test1@gmail.com"); //ค่าภายใต้ template จะเปลี่ยน
    const googleUrl = ref("https://google.com");
    const imgUrl = reactive({
      url: "https://via.placeholder.com/100",
      alt: "My Image",
    });
    const isShow = ref(false);
    const file = ref(null);  //กรณีเป็น ref ของ template ให้ใช้ null

    const onSubmit = () => {
      console.log(file.value.files[0]);  //อ้างไฟล์ที่ผู้ใช้ upload มา
      const fileUplaod = file.value.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileUplaod);
      //ผลลัพที่ onload
      reader.onload = (e) => {
        const base64Image = e.target.result;
        console.log(base64Image);
        //ให้ส่ง base64Image ไปอับโหลดที่ server โดยใช้ axios

      }    
    }

    onMounted(() => {
      // alert("Hello About Page");
    });
    onUnmounted(() => {
      // alert("Bye About Page");
    });

    const greet = () => {
      // alert("Hello Vue3");
      email.value = "John@gmail.com";
      // isShow.value = true;
      isShow.value = !isShow.value; //toggle
    };
    return { email, googleUrl, imgUrl, isShow, greet, onSubmit, file };
  },
};
</script>

<style scoped>
.about {
  color: red;
}
</style>
