"use strict";
(() => {
var exports = {};
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4582:
/***/ ((module) => {

module.exports = require("feed");

/***/ }),

/***/ 7958:
/***/ ((module) => {

module.exports = require("front-matter");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 8871:
/***/ ((module) => {

module.exports = require("prismjs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 8160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Sairin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8974);
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7958);
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(front_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4582);
/* harmony import */ var feed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(feed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8871);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_2__]);
marked__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








class Sairin {
    async request(query) {
        const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://api.github.com/graphql", query, {
            headers: this.authHeaders
        });
        return res.data.data;
    }
    constructor(config){
        this.config = config;
        this.resolvedConfig = (()=>{
            const ghToken = process.env.GITHUB_TOKEN || undefined;
            const repo = process.env.REPO || `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`;
            const [ghUserName, repoSlug] = repo.split("/");
            return {
                ghToken,
                repo,
                ghUserName,
                repoSlug
            };
        })();
        this.PAGE_PATH_PLACEHOLDER = "path";
        this.REVALIDATE = 60;
        this.allowUsers = [
            this.resolvedConfig.ghUserName
        ].concat(this.config?.allowUsers || []);
        this.authHeaders = this.resolvedConfig.ghToken ? {
            Authorization: `bearer ${this.resolvedConfig.ghToken}`
        } : {};
        this.getPostList = async ()=>{
            const result = await this.request((0,_queries__WEBPACK_IMPORTED_MODULE_7__/* .GetPostsQuery */ .f)({
                owner: this.resolvedConfig.ghUserName,
                repo: this.resolvedConfig.repoSlug
            }));
            const resultLast = await this.request((0,_queries__WEBPACK_IMPORTED_MODULE_7__/* .GetPostsQueryLast */ .J)({
                owner: this.resolvedConfig.ghUserName,
                repo: this.resolvedConfig.repoSlug
            }));
            // console.log('result', result, resultLast);
            let postList = [];
            // 还不知道怎么分页 暂时写两份
            if (result?.repository?.issues?.nodes && resultLast?.repository?.issues?.nodes) {
                const list = [
                    ...result.repository.issues.nodes,
                    ...resultLast.repository.issues.nodes, 
                ];
                postList = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.uniqBy)(list, "id");
            // console.log('listFiltered', listFiltered.length);
            }
            const posts = postList.filter((post)=>{
                return this.allowUsers.indexOf(post.author.login) !== -1;
            }).map((post)=>{
                const { html: html1 , attributes  } = this.processBody(post.body);
                post.comments.nodes = post.comments.nodes.map((comment)=>{
                    const { html  } = this.processBody(comment.body);
                    return {
                        ...comment,
                        html
                    };
                });
                return {
                    ...post,
                    html: html1,
                    attributes
                };
            });
            return posts || [];
        };
        this.getStaticPaths = async ()=>{
            const posts = await this.getPostList();
            return {
                paths: posts.map((p)=>{
                    // TODO: the fallback path should be issue id
                    return `/${p.attributes.path || p.id || ""}`;
                }),
                fallback: true
            };
        };
        this.getHomePageStaticProps = async ()=>{
            const posts = (await this.getPostList()).map((post)=>{
                return (0,lodash__WEBPACK_IMPORTED_MODULE_4__.omit)(post, [
                    "body",
                    "html"
                ]);
            });
            return {
                props: {
                    // TODO: reduce post body size
                    posts,
                    themeConfig: this.config.themeConfig || {}
                },
                revalidate: this.REVALIDATE
            };
        };
        this.getPostPageStaticProps = async (ctx)=>{
            const posts = await this.getPostList();
            const post = posts.find((p)=>(p.attributes.path || p.id) === ctx.params[this.PAGE_PATH_PLACEHOLDER].join("/")
            ) || null;
            return {
                props: {
                    post,
                    themeConfig: this.config?.themeConfig || {}
                },
                revalidate: this.REVALIDATE
            };
        };
        this.generateFeed = async ()=>{
            const feed = new feed__WEBPACK_IMPORTED_MODULE_5__.Feed({
                title: this.config.siteConfig.title,
                copyright: this.config.siteConfig.title,
                id: this.config.siteConfig.title,
                author: {
                    name: this.config.siteConfig.author || this.resolvedConfig.ghUserName
                }
            });
            if (!this.config.siteConfig.url) {
                return feed.atom1();
            }
            const posts = await this.getPostList();
            posts.forEach((post)=>{
                feed.addItem({
                    date: new Date(post.updatedAt),
                    link: `${this.config.siteConfig.url}/${post.attributes.path || post.id || ""}`,
                    title: post.title,
                    content: post.html
                });
            });
            return feed.atom1();
        };
        this.rssHandler = async (req, res)=>{
            res.setHeader("Content-Type", "application/xml");
            // https://vercel.com/docs/concepts/edge-network/caching#stale-while-revalidate
            res.setHeader("Cache-Control", `s-maxage=1 stale-while-revalidate=${10 * 60}`);
            res.send(await this.generateFeed());
        };
        this.DocumentHead = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: this.config?.theme.Head && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(this.config.theme.Head, {
                    sairinConfig: this.config
                })
            })
        ;
    }
    processBody(body) {
        const { body: rawBody , attributes  } = front_matter__WEBPACK_IMPORTED_MODULE_3___default()(body);
        marked__WEBPACK_IMPORTED_MODULE_2__.marked.use({
            renderer: {
                code (code, lang, escaped) {
                    code = this.options.highlight(code, lang);
                    if (!lang) {
                        return `<pre><code>${code}</code></pre>`;
                    }
                    var langClass = "language-" + lang;
                    return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
                }
            }
        });
        const parsed = marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(rawBody, {
            highlight: (code, lang)=>{
                if (prismjs__WEBPACK_IMPORTED_MODULE_6__.languages[lang]) {
                    return prismjs__WEBPACK_IMPORTED_MODULE_6__.highlight(code, prismjs__WEBPACK_IMPORTED_MODULE_6__.languages[lang], lang);
                } else {
                    return code;
                }
            }
        });
        return {
            html: parsed,
            attributes
        };
    }
    async getUser(username) {
        const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://api.github.com/users/${username}`);
        return res.data;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ GetPostsQueryLast),
/* harmony export */   "f": () => (/* binding */ GetPostsQuery)
/* harmony export */ });
const GetPostsQuery = (variables)=>({
        query: `
      query GetPosts($owner: String!, $repo: String!) { 
  repository(owner: $owner, name: $repo) {
    issues(first: 100, orderBy: {
      field: CREATED_AT, direction: DESC
    }) {
      nodes {
        id,
        url,
        title,
        updatedAt,
        createdAt,
        body,
        comments (first: 100) {
          nodes {
            createdAt,
            url,
            author {
              login,
              url,
              avatarUrl,
            },
            body
          }
        },
        reactionGroups {
          content,
          reactors {
            totalCount,
          }
        },
        author {
          login,
          url,
          avatarUrl
        }
      }
    }
  }
}
    `,
        variables
    })
;
const GetPostsQueryLast = (variables)=>({
        query: `
      query GetPosts($owner: String!, $repo: String!) { 
  repository(owner: $owner, name: $repo) {
    issues(last: 100, orderBy: {
      field: CREATED_AT, direction: DESC
    }) {
      nodes {
        id,
        url,
        title,
        updatedAt,
        createdAt,
        body,
        comments (first: 100) {
          nodes {
            createdAt,
            url,
            author {
              login,
              url,
              avatarUrl,
            },
            body
          }
        },
        reactionGroups {
          content,
          reactors {
            totalCount,
          }
        },
        author {
          login,
          url,
          avatarUrl
        }
      }
    }
  }
}
    `,
        variables
    })
;


/***/ }),

/***/ 596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ sairin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sairinjs_core_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8160);
/* harmony import */ var _sairin_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sairinjs_core_src__WEBPACK_IMPORTED_MODULE_1__]);
_sairinjs_core_src__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import theme style

const sairin = new _sairinjs_core_src__WEBPACK_IMPORTED_MODULE_1__/* .Sairin */ .C(_sairin_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ _jsx(Component, {
        ...pageProps
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MyApp)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(596);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app__WEBPACK_IMPORTED_MODULE_0__]);
_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app__WEBPACK_IMPORTED_MODULE_0__/* .sairin.rssHandler */ .l.rssHandler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sairin_config)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(7262);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_namespaceObject);
;// CONCATENATED MODULE: ./@sairinjs/sairin-theme-minimal/src/Footer.tsx

function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-sm",
        children: [
            "Powered by ",
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "underline",
                target: "_blank",
                href: "https://github.com/djyde/sairin",
                children: "Sairin"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./@sairinjs/sairin-theme-minimal/src/Home.tsx





function Home(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: props.themeConfig.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto max-w-2xl mt-24 px-4 sm:px-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-3xl font-bold mb-4",
                        children: props.themeConfig.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2 mb-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex gap-2",
                            children: props.themeConfig.links?.map((link, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "underline",
                                            target: "_blank",
                                            href: link.url,
                                            children: link.title
                                        }, link.url),
                                        index !== props.themeConfig.links.length - 1 && "\u2022"
                                    ]
                                });
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: props.posts.map((post)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-xl my-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/${post.attributes.path || post.id}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:underline",
                                            children: post.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-sm",
                                        children: external_dayjs_default()(post.createdAt).format("DD/MM/YYYY")
                                    })
                                ]
                            }, post.id);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./@sairinjs/sairin-theme-minimal/src/OpenGraph.tsx

function OpenGraph(props) {
    if (!props.post) {
        return null;
    }
    const ogImage = `
        https://og-image.vercel.app/${props.post.title}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg
      `;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "artical"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: props.post.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: ogImage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "article:published_time",
                content: props.post.createdAt
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "article:author",
                content: props.post.author.login
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: props.post.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: props.post.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: ogImage
            })
        ]
    });
}

;// CONCATENATED MODULE: ./@sairinjs/sairin-theme-minimal/src/Post.tsx






function Post(props) {
    if (!props.post) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            props.post.title,
                            " - ",
                            props.themeConfig.title
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(OpenGraph, {
                        post: props.post
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto mt-24 max-w-2xl px-4 sm:px-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex my-8 font-bold",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: props.themeConfig.title
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-3xl font-medium",
                                children: props.post.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex mt-4 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "w-8 h-8 rounded-full",
                                        src: props.post.author.avatarUrl
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: props.post.author.url,
                                        children: props.post.author.login
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "underline text-sm",
                                        target: "_blank",
                                        href: props.post.url,
                                        children: "View on GitHub"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "my-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex gap-4 flex-wrap",
                                    children: props.post.reactionGroups.filter((group)=>group.reactors.totalCount !== 0
                                    ).map((reactionGroup)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: props.post?.url,
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex gap-2 bg-blue-50 border border-blue-100 px-4 py-1 rounded-full items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-md",
                                                        children: {
                                                            THUMBS_UP: "\uD83D\uDC4D",
                                                            THUMBS_DOWN: "\uD83D\uDC4E",
                                                            LAUGH: "\uD83D\uDE04",
                                                            HOORAY: "\uD83C\uDF89",
                                                            CONFUSED: "\uD83D\uDE15",
                                                            HEART: "\u2764\uFE0F",
                                                            ROCKET: "\uD83D\uDE80",
                                                            EYES: "\uD83D\uDC40"
                                                        }[reactionGroup.content]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-sm font-sans",
                                                        children: reactionGroup.reactors.totalCount
                                                    })
                                                ]
                                            })
                                        });
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "post-body",
                        dangerouslySetInnerHTML: {
                            __html: props.post.html
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "my-12"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "font-sans",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    href: props.post.url,
                                    className: "font-medium border border-gray-700 hover:bg-gray-700 hover:text-gray-100 transition-all text-gray-700 text-sm rounded px-4 py-2",
                                    children: "Add comment"
                                })
                            }),
                            props.post.comments.nodes.map((comment)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "w-8 h-8 rounded-full",
                                                    src: comment.author.avatarUrl,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-medium",
                                                    children: comment.author.login
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: comment.html
                                            },
                                            className: "mt-2 mb-2 text-gray-800 post-body font-sans"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-1 flex text-sm text-gray-500 items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: comment.url,
                                                    className: "hover:underline",
                                                    children: "Reply"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "\u2022"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "",
                                                    children: external_dayjs_default()(comment.createdAt).format("YYYY-MM-DD")
                                                })
                                            ]
                                        })
                                    ]
                                });
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./@sairinjs/sairin-theme-minimal/src/Head.tsx

function Head(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
                rel: "stylesheet"
            }),
            props.sairinConfig.themeConfig.umami && /*#__PURE__*/ jsx_runtime_.jsx("script", {
                async: true,
                defer: true,
                "data-website-id": props.sairinConfig.themeConfig.umami.id,
                src: props.sairinConfig.themeConfig.umami.src
            })
        ]
    });
};

;// CONCATENATED MODULE: ./@sairinjs/sairin-theme-minimal/src/index.ts



/* harmony default export */ const src = ({
    Home: Home,
    Post: Post,
    Head: Head
});

;// CONCATENATED MODULE: ./sairin.config.ts

/* harmony default export */ const sairin_config = ({
    siteConfig: {
        title: "xiaoTian Blog",
        author: "xiaotiandada"
    },
    theme: src,
    themeConfig: {
        title: `Blog(issues)`,
        links: [
            {
                title: "GitHub",
                url: "https://github.com/xiaotiandada/blog"
            },
            {
                title: "Twitter",
                url: "https://twitter.com/XiaoTianIsMe"
            }, 
        ]
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [262], () => (__webpack_exec__(1005)));
module.exports = __webpack_exports__;

})();