"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
exports.HelloWorldExtensionCommand = {
    id: 'HelloWorldExtension.command',
    label: "Shows a message"
};
var HelloWorldExtensionCommandContribution = /** @class */ (function () {
    function HelloWorldExtensionCommandContribution(messageService) {
        this.messageService = messageService;
    }
    HelloWorldExtensionCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.HelloWorldExtensionCommand, {
            execute: function () { return _this.messageService.info('Hello World!'); }
        });
    };
    HelloWorldExtensionCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
    ], HelloWorldExtensionCommandContribution);
    return HelloWorldExtensionCommandContribution;
}());
exports.HelloWorldExtensionCommandContribution = HelloWorldExtensionCommandContribution;
var HelloWorldExtensionMenuContribution = /** @class */ (function () {
    function HelloWorldExtensionMenuContribution() {
    }
    HelloWorldExtensionMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.HelloWorldExtensionCommand.id,
            label: 'Say Hello'
        });
    };
    HelloWorldExtensionMenuContribution = __decorate([
        inversify_1.injectable()
    ], HelloWorldExtensionMenuContribution);
    return HelloWorldExtensionMenuContribution;
}());
exports.HelloWorldExtensionMenuContribution = HelloWorldExtensionMenuContribution;
//# sourceMappingURL=hello-world-extension-contribution.js.map