
import { createStore } from "vuex";
import axios from "axios";
import { BASE_API_URL} from "../constants";

export default createStore({
  state: {
    profile: null,

  },
  mutations: {
    SET_USER_PROFILE( state, newProfile) {
      state.profile = newProfile;  //change
    },
  },
  actions: {
  async getProfile ({commit}) {   
    //get profile from backend 
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const response = await axios.get(`${BASE_API_URL}/api/profile`,{
      headers: { Authorization: "Bearer " + token.access_token },
    });
      // const newProfile = { id:1, name:"Bogy", email: "Bogy@gmail.com"};
      // const newProfile = JSON.parse(response.data?.data?.user); //สามารถเขียนแบบนี้ได้เลยกรณ๊ที่ข้อมูลที่ส่งมาเป็น string 
      const newProfile = JSON.parse(JSON.stringify(response.data?.data?.user));//{id:1 , name: 'Bogy',...}    

      commit("SET_USER_PROFILE", newProfile);
    }
  }
  },
  modules: {},
});


