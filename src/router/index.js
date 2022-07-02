import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/views/Home.vue";
// import JobResultsView from "@/views/JobResultsView.vue";
// import JobView from "@/views/JobView.vue";
const Home = () => import("@/views/Home.vue");
const JobResultsView = () =>
  import(/* webPackChunkName: "jobs" */ "@/views/JobResultsView");
const JobView = () => import(/* webPackChunkName: "jobs" */ "@/views/JobView");
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
