import { create } from 'zustand'



// 1. Create Store
const authStore = () => ({
  token: null,
  user: [],
})




// 2. UseStore
const useAuthStore = create(authStore)


export default useAuthStore