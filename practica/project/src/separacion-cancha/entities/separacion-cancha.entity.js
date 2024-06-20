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
exports.SeparacionCancha = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const cancha_entity_1 = require("src/cancha/entities/cancha.entity");
const deportista_entity_1 = require("src/deportista/entities/deportista.entity");
let SeparacionCancha = (() => {
    let _classDecorators = [(0, graphql_1.ObjectType)(), (0, typeorm_1.Entity)({ name: 'separaciones_cancha' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _canchaId_decorators;
    let _canchaId_initializers = [];
    let _canchaId_extraInitializers = [];
    let _deportistaId_decorators;
    let _deportistaId_initializers = [];
    let _deportistaId_extraInitializers = [];
    let _fechaSeparacion_decorators;
    let _fechaSeparacion_initializers = [];
    let _fechaSeparacion_extraInitializers = [];
    let _horaDesde_decorators;
    let _horaDesde_initializers = [];
    let _horaDesde_extraInitializers = [];
    let _horaHasta_decorators;
    let _horaHasta_initializers = [];
    let _horaHasta_extraInitializers = [];
    let _estado_decorators;
    let _estado_initializers = [];
    let _estado_extraInitializers = [];
    let _cancha_decorators;
    let _cancha_initializers = [];
    let _cancha_extraInitializers = [];
    let _deportista_decorators;
    let _deportista_initializers = [];
    let _deportista_extraInitializers = [];
    var SeparacionCancha = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.canchaId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _canchaId_initializers, void 0));
            this.deportistaId = (__runInitializers(this, _canchaId_extraInitializers), __runInitializers(this, _deportistaId_initializers, void 0));
            this.fechaSeparacion = (__runInitializers(this, _deportistaId_extraInitializers), __runInitializers(this, _fechaSeparacion_initializers, void 0));
            this.horaDesde = (__runInitializers(this, _fechaSeparacion_extraInitializers), __runInitializers(this, _horaDesde_initializers, void 0));
            this.horaHasta = (__runInitializers(this, _horaDesde_extraInitializers), __runInitializers(this, _horaHasta_initializers, void 0));
            this.estado = (__runInitializers(this, _horaHasta_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            this.cancha = (__runInitializers(this, _estado_extraInitializers), __runInitializers(this, _cancha_initializers, void 0));
            this.deportista = (__runInitializers(this, _cancha_extraInitializers), __runInitializers(this, _deportista_initializers, void 0));
            __runInitializers(this, _deportista_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "SeparacionCancha");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment'), (0, graphql_1.Field)(() => graphql_1.ID)];
        _canchaId_decorators = [(0, typeorm_1.Column)()];
        _deportistaId_decorators = [(0, typeorm_1.Column)()];
        _fechaSeparacion_decorators = [(0, typeorm_1.Column)(), (0, graphql_1.Field)(() => Date)];
        _horaDesde_decorators = [(0, typeorm_1.Column)(), (0, graphql_1.Field)(() => Date)];
        _horaHasta_decorators = [(0, typeorm_1.Column)(), (0, graphql_1.Field)(() => Date)];
        _estado_decorators = [(0, typeorm_1.Column)({ default: 'Activo' }), (0, graphql_1.Field)(() => String)];
        _cancha_decorators = [(0, typeorm_1.ManyToOne)(() => cancha_entity_1.Cancha, cancha => cancha.separaciones, { eager: true }), (0, typeorm_1.JoinColumn)({ name: 'canchaId' }), (0, graphql_1.Field)(() => cancha_entity_1.Cancha)];
        _deportista_decorators = [(0, typeorm_1.ManyToOne)(() => deportista_entity_1.Deportista, deportista => deportista.separaciones, { eager: true }), (0, typeorm_1.JoinColumn)({ name: 'deportistaId' }), (0, graphql_1.Field)(() => deportista_entity_1.Deportista)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _canchaId_decorators, { kind: "field", name: "canchaId", static: false, private: false, access: { has: obj => "canchaId" in obj, get: obj => obj.canchaId, set: (obj, value) => { obj.canchaId = value; } }, metadata: _metadata }, _canchaId_initializers, _canchaId_extraInitializers);
        __esDecorate(null, null, _deportistaId_decorators, { kind: "field", name: "deportistaId", static: false, private: false, access: { has: obj => "deportistaId" in obj, get: obj => obj.deportistaId, set: (obj, value) => { obj.deportistaId = value; } }, metadata: _metadata }, _deportistaId_initializers, _deportistaId_extraInitializers);
        __esDecorate(null, null, _fechaSeparacion_decorators, { kind: "field", name: "fechaSeparacion", static: false, private: false, access: { has: obj => "fechaSeparacion" in obj, get: obj => obj.fechaSeparacion, set: (obj, value) => { obj.fechaSeparacion = value; } }, metadata: _metadata }, _fechaSeparacion_initializers, _fechaSeparacion_extraInitializers);
        __esDecorate(null, null, _horaDesde_decorators, { kind: "field", name: "horaDesde", static: false, private: false, access: { has: obj => "horaDesde" in obj, get: obj => obj.horaDesde, set: (obj, value) => { obj.horaDesde = value; } }, metadata: _metadata }, _horaDesde_initializers, _horaDesde_extraInitializers);
        __esDecorate(null, null, _horaHasta_decorators, { kind: "field", name: "horaHasta", static: false, private: false, access: { has: obj => "horaHasta" in obj, get: obj => obj.horaHasta, set: (obj, value) => { obj.horaHasta = value; } }, metadata: _metadata }, _horaHasta_initializers, _horaHasta_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: obj => "estado" in obj, get: obj => obj.estado, set: (obj, value) => { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, null, _cancha_decorators, { kind: "field", name: "cancha", static: false, private: false, access: { has: obj => "cancha" in obj, get: obj => obj.cancha, set: (obj, value) => { obj.cancha = value; } }, metadata: _metadata }, _cancha_initializers, _cancha_extraInitializers);
        __esDecorate(null, null, _deportista_decorators, { kind: "field", name: "deportista", static: false, private: false, access: { has: obj => "deportista" in obj, get: obj => obj.deportista, set: (obj, value) => { obj.deportista = value; } }, metadata: _metadata }, _deportista_initializers, _deportista_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SeparacionCancha = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SeparacionCancha = _classThis;
})();
exports.SeparacionCancha = SeparacionCancha;
