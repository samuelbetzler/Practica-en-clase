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
const cancha_resolver_1 = require("./cancha.resolver");
const cancha_service_1 = require("./cancha.service");
describe('CanchaResolver', () => {
    let resolver;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield testing_1.Test.createTestingModule({
            providers: [cancha_resolver_1.CanchaResolver, cancha_service_1.CanchaService],
        }).compile();
        resolver = module.get(cancha_resolver_1.CanchaResolver);
    }));
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
