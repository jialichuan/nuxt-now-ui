module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  router: {
    base: "/",
    linkExactActiveClass: "active",
    scrollBehavior: (to) => {
      if (to.hash) {
        return { selector: to.hash };
      } else {
        return { x: 0, y: 0 };
      }
    },
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700",
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        crossorigin: "anonymous",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/sass/now-ui-kit.scss",
    "~/assets/sass/demo.scss",
    "vue-essential-slices/src/styles/styles.scss",
  ],
  script: [
    {
      src:
        "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList",
    },
    {
      src:
        "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js",
    },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/globalDirectives.js", ssr: false },
    { src: "~/plugins/element-ui.js" },
    { src: "~/plugins/now-ui-kit" },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    [
      "@nuxtjs/prismic",
      {
        endpoint: "https://1214jetpulp.cdn.prismic.io/api/v2",
        apiOptions: {
          routes: [
            {
              type: "page",
              path: "/:uid",
            },
          ],
        },
      },
    ],
    ["nuxt-sm"],
  ],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: process.env.NODE_ENV === "production",
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ["vue-slicezone", "nuxt-sm"],
  },
};
