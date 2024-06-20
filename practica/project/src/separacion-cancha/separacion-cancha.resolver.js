"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparacionCanchaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const separacion_cancha_entity_1 = require("./entities/separacion-cancha.entity");
let SeparacionCanchaResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => separacion_cancha_entity_1.SeparacionCancha)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _createSeparacionCancha_decorators;
    let _findAll_decorators;
    let _findOne_decorators;
    let _updateSeparacionCancha_decorators;
    let _removeSeparacionCancha_decorators;
    var SeparacionCanchaResolver = _classThis = class {
        constructor(separacionCanchaService) {
            this.separacionCanchaService = (__runInitializers(this, _instanceExtraInitializers), separacionCanchaService);
        }
        createSeparacionCancha(createSeparacionCanchaInput) {
            return this.separacionCanchaService.create(createSeparacionCanchaInput);
        }
        findAll() {
            return this.separacionCanchaService.findAll();
        }
        findOne(id) {
            return this.separacionCanchaService.findOne(id);
        }
        updateSeparacionCancha(id, updateSeparacionCanchaInput) {
            return this.separacionCanchaService.update(id, updateSeparacionCanchaInput);
        }
        removeSeparacionCancha(id) {
            return this.separacionCanchaService.remove(id);
        }
    };
    __setFunctionName(_classThis, "SeparacionCanchaResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createSeparacionCancha_decorators = [(0, graphql_1.Mutation)(() => separacion_cancha_entity_1.SeparacionCancha)];
        _findAll_decorators = [(0, graphql_1.Query)(() => [separacion_cancha_entity_1.SeparacionCancha], { name: 'separacionesCancha' })];
        _findOne_decorators = [(0, graphql_1.Query)(() => separacion_cancha_entity_1.SeparacionCancha, { name: 'separacionCancha' })];
        _updateSeparacionCancha_decorators = [(0, graphql_1.Mutation)(() => separacion_cancha_entity_1.SeparacionCancha)];
        _removeSeparacionCancha_decorators = [(0, graphql_1.Mutation)(() => separacion_cancha_entity_1.SeparacionCancha)];
        __esDecorate(_classThis, null, _createSeparacionCancha_decorators, { kind: "method", name: "createSeparacionCancha", static: false, private: false, access: { has: obj => "createSeparacionCancha" in obj, get: obj => obj.createSeparacionCancha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateSeparacionCancha_decorators, { kind: "method", name: "updateSeparacionCancha", static: false, private: false, access: { has: obj => "updateSeparacionCancha" in obj, get: obj => obj.updateSeparacionCancha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeSeparacionCancha_decorators, { kind: "method", name: "removeSeparacionCancha", static: false, private: false, access: { has: obj => "removeSeparacionCancha" in obj, get: obj => obj.removeSeparacionCancha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SeparacionCanchaResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SeparacionCanchaResolver = _classThis;
})();
exports.SeparacionCanchaResolver = SeparacionCanchaResolver;
