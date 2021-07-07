<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>ประเภทสินค้า</h1>
        <router-link to="/category/add" class="btn btn-primary"
          >เพิ่มข้อมูล</router-link
        >

        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>

        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <table class="table" v-if="categories.length">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ชื่อประเภทสินค้า</th>
              <th scope="col">เครื่องมือ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>
                <router-link
                  :to="{ name: 'CategoryEdit', params: { id: item.id } }"
                >
                  แก้ไข
                </router-link>
                |
                <a href="#" @click.prevent="deleteCategoryById(item.id)">
                  ลบ
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div v-if="categories.length" >
          <v-pagination
          v-model="page"
          :pages="totalPage"
          :range-size="1"
          active-color="#DCEDFF"
          @update:modelValue="getData"
          />
        </div>        
      </div>
    </div>
  </div>
</template>
<script>

import { useIndex } from "./use/crud-category";
import VPagination from "@hennge/vue3-pagination";

export default {
  name: "CategoryIndex",
  components: {
    VPagination,
  },
  setup() {
    const { categories, errorMessage, Loading, deleteCategoryById, page, totalPage, getData } = useIndex();
    return { categories, errorMessage, Loading, deleteCategoryById, page, totalPage, getData };   
  },
};
</script>
<style></style>
