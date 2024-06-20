"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const separacion_cancha_resolver_1 = require("./separacion-cancha.resolver");
const separacion_cancha_service_1 = require("./separacion-cancha.service");
describe('SeparacionCanchaResolver', () => {
    let resolver;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            providers: [separacion_cancha_resolver_1.SeparacionCanchaResolver, separacion_cancha_service_1.SeparacionCanchaService],
        }).compile();
        resolver = module.get(separacion_cancha_resolver_1.SeparacionCanchaResolver);
    }));
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
