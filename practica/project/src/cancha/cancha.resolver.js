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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanchaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cancha_entity_1 = require("./entities/cancha.entity");
let CanchaResolver = (() => {
    let _classDecorators = [(0, graphql_1.Resolver)(() => cancha_entity_1.Cancha)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _createCancha_decorators;
    let _findAll_decorators;
    let _findOne_decorators;
    let _updateCancha_decorators;
    let _removeCancha_decorators;
    var CanchaResolver = _classThis = class {
        constructor(canchaService) {
            this.canchaService = (__runInitializers(this, _instanceExtraInitializers), canchaService);
        }
        createCancha(createCanchaInput) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.canchaService.create(createCanchaInput);
            });
        }
        findAll() {
            return __awaiter(this, void 0, void 0, function* () {
                return this.canchaService.findAll();
            });
        }
        findOne(id) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.canchaService.findOne(id);
            });
        }
        updateCancha(id, updateCanchaInput) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.canchaService.update(id, updateCanchaInput);
            });
        }
        removeCancha(id) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.canchaService.remove(id);
            });
        }
    };
    __setFunctionName(_classThis, "CanchaResolver");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createCancha_decorators = [(0, graphql_1.Mutation)(() => cancha_entity_1.Cancha)];
        _findAll_decorators = [(0, graphql_1.Query)(() => [cancha_entity_1.Cancha], { name: 'canchas' })];
        _findOne_decorators = [(0, graphql_1.Query)(() => cancha_entity_1.Cancha, { name: 'cancha' })];
        _updateCancha_decorators = [(0, graphql_1.Mutation)(() => cancha_entity_1.Cancha)];
        _removeCancha_decorators = [(0, graphql_1.Mutation)(() => cancha_entity_1.Cancha)];
        __esDecorate(_classThis, null, _createCancha_decorators, { kind: "method", name: "createCancha", static: false, private: false, access: { has: obj => "createCancha" in obj, get: obj => obj.createCancha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: obj => "findOne" in obj, get: obj => obj.findOne }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateCancha_decorators, { kind: "method", name: "updateCancha", static: false, private: false, access: { has: obj => "updateCancha" in obj, get: obj => obj.updateCancha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeCancha_decorators, { kind: "method", name: "removeCancha", static: false, private: false, access: { has: obj => "removeCancha" in obj, get: obj => obj.removeCancha }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CanchaResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CanchaResolver = _classThis;
})();
exports.CanchaResolver = CanchaResolver;
