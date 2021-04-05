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
exports.createUsersTable1609238231475 = void 0;
var createUsersTable1609238231475 = (function () {
    function createUsersTable1609238231475() {
        this.name = "createUsersTable1609238231475";
    }
    createUsersTable1609238231475.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("CREATE TABLE \"users\" (\"id\" SERIAL NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"username\" character varying NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, CONSTRAINT \"UQ_fe0bb3f6520ee0469504521e710\" UNIQUE (\"username\"), CONSTRAINT \"UQ_97672ac88f789774dd47f7c8be3\" UNIQUE (\"email\"), CONSTRAINT \"PK_a3ffb1c0c8416b9fc6f907b7433\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("CREATE INDEX \"IDX_fe0bb3f6520ee0469504521e71\" ON \"users\" (\"username\") ")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("CREATE INDEX \"IDX_97672ac88f789774dd47f7c8be\" ON \"users\" (\"email\") ")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    createUsersTable1609238231475.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("DROP INDEX \"IDX_97672ac88f789774dd47f7c8be\"")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("DROP INDEX \"IDX_fe0bb3f6520ee0469504521e71\"")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"users\"")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return createUsersTable1609238231475;
}());
exports.createUsersTable1609238231475 = createUsersTable1609238231475;
//# sourceMappingURL=1609238231475-create-users-table.js.map