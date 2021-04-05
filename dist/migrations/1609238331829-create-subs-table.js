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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubsTable1609238331829 = void 0;
var createSubsTable1609238331829 = (function () {
    function createSubsTable1609238331829() {
        this.name = "createSubsTable1609238331829";
    }
    createSubsTable1609238331829.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("CREATE TABLE \"subs\" (\"id\" SERIAL NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"name\" character varying NOT NULL, \"title\" character varying NOT NULL, \"description\" text, \"imageUrn\" character varying, \"bannerUrn\" character varying, \"username\" character varying, CONSTRAINT \"UQ_2ae46b179b70ab8179597adb8c0\" UNIQUE (\"name\"), CONSTRAINT \"PK_c2311ff9e741af88151e0aa2299\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("CREATE INDEX \"IDX_2ae46b179b70ab8179597adb8c\" ON \"subs\" (\"name\") ")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"subs\" ADD CONSTRAINT \"FK_4520ae7b26f68a13ec3e96dbbba\" FOREIGN KEY (\"username\") REFERENCES \"users\"(\"username\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    createSubsTable1609238331829.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("ALTER TABLE \"subs\" DROP CONSTRAINT \"FK_4520ae7b26f68a13ec3e96dbbba\"")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("DROP INDEX \"IDX_2ae46b179b70ab8179597adb8c\"")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"subs\"")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return createSubsTable1609238331829;
}());
exports.createSubsTable1609238331829 = createSubsTable1609238331829;
//# sourceMappingURL=1609238331829-create-subs-table.js.map