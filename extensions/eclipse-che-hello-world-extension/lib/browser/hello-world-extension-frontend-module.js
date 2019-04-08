"use strict";
/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_extension_contribution_1 = require("./hello-world-extension-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(hello_world_extension_contribution_1.HelloWorldExtensionCommandContribution);
    bind(common_1.MenuContribution).to(hello_world_extension_contribution_1.HelloWorldExtensionMenuContribution);
});
//# sourceMappingURL=hello-world-extension-frontend-module.js.map