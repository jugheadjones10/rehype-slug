var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var rehype_slug_exports = {};
__export(rehype_slug_exports, {
  rehypeSlug: () => rehypeSlug
});
var import_github_slugger = __toESM(require("github-slugger"), 1);
var import_hast_util_has_property = require("hast-util-has-property");
var import_hast_util_heading_rank = require("hast-util-heading-rank");
var import_hast_util_to_string = require("hast-util-to-string");
var import_unist_util_visit = require("unist-util-visit");
const slugs = new import_github_slugger.default();
function rehypeSlug() {
  return (tree) => {
    slugs.reset();
    (0, import_unist_util_visit.visit)(tree, "element", (node) => {
      if ((0, import_hast_util_heading_rank.headingRank)(node) && node.properties && !(0, import_hast_util_has_property.hasProperty)(node, "id")) {
        node.properties.id = slugs.slug((0, import_hast_util_to_string.toString)(node));
      }
    });
  };
}
module.exports = __toCommonJS(rehype_slug_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  rehypeSlug
});
