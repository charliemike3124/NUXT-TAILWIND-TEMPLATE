// @ts-ignore
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user-store",
  state: () => {
    return {
      name: "Example User",
    };
  },
  actions: {},
});
