require("./bootstrap");

import Vue from "vue";
import App from "@page/App";
import router from "@js/router";
import store from "@js/store";

new Vue({
    store,
    router,
    render: load => load(App)
}).$mount("#app");
