import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import data from "@/store/data";
export default {
      namespaced:true,
      state(){
            return {
                  coaches:data
            }
      },
      getters,
      mutations,
      actions,


}
