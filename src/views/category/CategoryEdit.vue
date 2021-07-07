<template>
  <div class="container-fluid px-4">
    <h1>แก้ไขข้อมูล {{name}}</h1>
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="ืname" class="form-label">ประเภทข้อมูลสินค้า</label>
            <input v-model="name" type="text" class="form-control" id="name" />
            {{ name }}
          </div>
          <button type="submit" class="btn btn-primary">แก้ไข</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import { useEdit } from "./use/crud-category";

export default {
  name: "CategoryEdit",
  setup() {
    const { name, onSubmit } = useEdit();
    return { name, onSubmit };
  },
};
</script>

<style>
</style>