import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter,useRoute } from "vue-router"; //เปิดเพจใหม่คล้าย router-link
import Swal from "sweetalert2";
import {BASE_API_URL} from "../../../constants";

export function useAdd() {
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
}

export function useEdit(){
    const id = ref(0);
    const name = ref("");
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      id.value = route.params.id;
      // alert(id.value);
      getCategoryByID(id.value);
    });

    const getCategoryByID = async (id) => {
      const response = await axios.get(`${BASE_API_URL}/api/category/${id}`);
      name.value = response.data.name;
    }

    const onSubmit = async () => {
      const response = await axios.put(`${BASE_API_URL}/api/category`,{
        id: id.value,
        name: name.value,
        });
      // alert(response.data.message);
      Swal.fire(
        response.data.message,
        "ผลการทำงาน",
        "success"
        );
      router.replace("/category");
    };
    return { name, onSubmit };
}

export function useIndex(){
    const categories = ref([]); //data ส่งมาเป็น array ชื่อเป็นพหูพจน์
    const errorMessage = ref(""); //string
    const loading = ref(false); //ยังไม่ให้แสดงตัวช่วยโหลด
    const page = ref(1); //เริ่มต้นที่หน้า 1
    const totalPage = ref(0);

    const getData = async (page) => {
      try {
        loading.value = true; //ถ้าค่า = true ให้เริ่มหมุน
        const response = await axios.get(`${BASE_API_URL}/api/category?page=${page}&page_size=10`);
        categories.value = response.data.last_data; //[{id:...}] กรณีที่ใช้ axios ต้อง .data1 เสมอ  /.data2 ไม่มีเนื่องจากที่ postman ไม่ได้ส่งมา
        // console.log(products.data);
        totalPage.value = response.data.last_page;
      } catch (error) {
        //400, 500
        console.log(error);
        errorMessage.value = "เกิดข้อผิดพลาด กรุณาลองใหม่";
      } finally {
        loading.value = false; //ถ้าค่า loading = false ให้หยุดหมุน
      }
    };

    onMounted(() => {
      getData(page.value); //เริ่มต้นหน้า 1 
    });

    const deleteCategoryById = async (id) => {
      const isConfirm = window.confirm("แน่ใจว่าต้องการลบข้อมูลนี้");
      if (isConfirm === true) {
        const response = await axios.delete(
          `${BASE_API_URL}/api/category/${id}`
        );
        await Swal.fire(response.data.message, "ผลการทำงาน", "success");
        history.go(0);
      }
    };
    return { categories, errorMessage, Loading, deleteCategoryById, page, totalPage, getData };

}