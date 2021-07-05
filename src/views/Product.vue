<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>สินค้า</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ชื่อคอร์ส</th>
              <th scope="col">รายละเอียด</th>
              <th scope="col">View</th>
              <th scope="col">รูปภาพ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.detail }}</td>
              <td>{{ item.view }}</td>
              <td>
                <img :src="item.picture" width="80" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "Product",
  setup() {
    const products = ref([]); //data ส่งมาเป็น array
    const getData = async () => {
      const response = await axios.get(
        "https://api.codingthailand.com/api/course"
      );
      products.value = response.data.data; //[{id:...}] กรณีที่ใช้ axios ต้อง .data1 เสมอ  /.data2 เป็นค่าที่ backend ส่งมา

      // console.log(products.value);
    };

    onMounted(() => {
      getData();
    });

    return { products };
  },
};
</script>
<style></style>
