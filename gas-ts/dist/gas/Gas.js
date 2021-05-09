"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gas = void 0;
class GasProperties {
    constructor() {
        this.zfactor = 0;
        this.gasFormationVolumeFactor = 0;
        this.gasViscosity = 0;
        this.gasDensity = 0;
    }
}
class Gas {
    constructor(spgr, h2s, co2, n2) {
        this.spgr = (spgr == null) ? 0.65 : spgr;
        this.h2s = (h2s == null) ? 0.0 : h2s;
        this.co2 = (co2 == null) ? 0.0 : co2;
        this.n2 = (n2 == null) ? 0.0 : n2;
    }
    getProperties(press, temp) {
        let g = new GasProperties;
        return g;
    }
}
exports.Gas = Gas;
//# sourceMappingURL=Gas.js.map