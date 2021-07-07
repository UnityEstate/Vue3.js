<template>
  <div class="container-fluid px-4">
    <h1>เพิ่มข้อมูล</h1>
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="ืname" class="form-label">ชื่อประเภทสินค้า</label>
            <input v-model="name" type="text" class="form-control" id="name" />
            {{ name }}
          </div>
          <button type="submit" class="btn btn-primary">บันทึก</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; //เปิดเพจใหม่คล้าย router-link
import Swal from "sweetalert2";
import {BASE_API_URL} from "../../constants";

export default {
  name: "CategoryAdd",
  setup() {
    const name = ref("");
    const router = useRouter();

    const onSubmit = async () => {
      const response = await axios.post(
        `${BASE_API_URL}/api/category`,
        {
          name: name.value,
        }
      );
      // alert(response.data.message);
      Swal.fire(
        response.data.message,
        "ผลการทำงาน",
        "success"
        );
      router.replace("/category");
    };

    return { name, onSubmit };
  },
};
</script>

<style>
</style>