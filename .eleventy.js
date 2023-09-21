module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy(".src/style.css")
    eleventyConfig.addPassthroughCopy(".src/menu.json")
    return {
        dir: {
            input: "src",
            output: "public",
        },
    }
}