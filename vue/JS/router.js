import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("@page/Index"),
        },
    ],
});

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title || "Apple";
//     return next();
// });

export default router;
