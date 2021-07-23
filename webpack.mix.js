const mix = require("laravel-mix");
const path = require("path");

mix.js("./vue/JS/app.js", "public/js")
    .vue()
    .css("./vue/CSS/app.css", "public/css")
    .alias({
        "@": path.resolve(__dirname, "vue"),
        "@page": path.resolve(__dirname, "vue/Page"),
        "@js": path.resolve(__dirname, "vue/JS")
    })
    .disableNotifications();
