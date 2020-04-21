module.exports = {
  title: "My blog",
  description: "This is another blog.",
  base: "/my-blog",
  theme: "@vuepress/blog",
  themeConfig: {
    directories: [
      {
        // Unique ID of current classification
        id: "post",
        // Target directory
        dirname: "_posts",
        // Path of the `entry page` (or `list page`)
        path: "/posts/",
      }
    ],
    nav: [
      {
        text: "Blog",
        link: "/posts/",
      },
    ]
  }
}