import { createStore } from "vuex";
import getJobs from "@/api/getJobs";
export const LOGIN_USER = "LOGIN_USER";
export const RECIEVED_JOBS = "RECIEVED_JOBS";
export const FETCHED_JOBS = "FETCHED_JOBS";
export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};
export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECIEVED_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};
export const actions = {
  [FETCHED_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECIEVED_JOBS, jobListings); // RECIEVE
  },
};
const store = createStore({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
