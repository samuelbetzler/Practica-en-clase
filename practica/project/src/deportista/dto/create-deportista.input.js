"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeportistaInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateDeportistaInput = (() => {
    let _classDecorators = [(0, graphql_1.InputType)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _nombre_decorators;
    let _nombre_initializers = [];
    let _nombre_extraInitializers = [];
    let _identificacion_decorators;
    let _identificacion_initializers = [];
    let _identificacion_extraInitializers = [];
    let _equipo_decorators;
    let _equipo_initializers = [];
    let _equipo_extraInitializers = [];
    let _estado_decorators;
    let _estado_initializers = [];
    let _estado_extraInitializers = [];
    var CreateDeportistaInput = _classThis = class {
        constructor() {
            this.nombre = __runInitializers(this, _nombre_initializers, void 0);
            this.identificacion = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _identificacion_initializers, void 0));
            this.equipo = (__runInitializers(this, _identificacion_extraInitializers), __runInitializers(this, _equipo_initializers, void 0));
            this.estado = (__runInitializers(this, _equipo_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            __runInitializers(this, _estado_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CreateDeportistaInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _nombre_decorators = [(0, graphql_1.Field)(() => String), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
        _identificacion_decorators = [(0, graphql_1.Field)(() => String), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
        _equipo_decorators = [(0, graphql_1.Field)(() => String), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
        _estado_decorators = [(0, graphql_1.Field)(() => String), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
        __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: obj => "nombre" in obj, get: obj => obj.nombre, set: (obj, value) => { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
        __esDecorate(null, null, _identificacion_decorators, { kind: "field", name: "identificacion", static: false, private: false, access: { has: obj => "identificacion" in obj, get: obj => obj.identificacion, set: (obj, value) => { obj.identificacion = value; } }, metadata: _metadata }, _identificacion_initializers, _identificacion_extraInitializers);
        __esDecorate(null, null, _equipo_decorators, { kind: "field", name: "equipo", static: false, private: false, access: { has: obj => "equipo" in obj, get: obj => obj.equipo, set: (obj, value) => { obj.equipo = value; } }, metadata: _metadata }, _equipo_initializers, _equipo_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: obj => "estado" in obj, get: obj => obj.estado, set: (obj, value) => { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CreateDeportistaInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CreateDeportistaInput = _classThis;
})();
exports.CreateDeportistaInput = CreateDeportistaInput;
