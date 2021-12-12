import {createStore} from "vuex";
import {postModule} from "./postModule";

export default createStore({
  modules: {
    post: postModule,
  }
})