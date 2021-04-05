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
exports.createVotesTable1610285531623 = void 0;
var createVotesTable1610285531623 = (function () {
    function createVotesTable1610285531623() {
        this.name = 'createVotesTable1610285531623';
    }
    createVotesTable1610285531623.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("CREATE TABLE \"votes\" (\"id\" SERIAL NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"value\" integer NOT NULL, \"username\" character varying NOT NULL, \"postId\" integer, \"commentId\" integer, CONSTRAINT \"PK_f3d9fd4a0af865152c3f59db8ff\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" DROP CONSTRAINT \"FK_42377e3f89a203ca74d117e5961\"")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" ALTER COLUMN \"username\" SET NOT NULL")];
                    case 3:
                        _a.sent();
                        return [4, queryRunner.query("COMMENT ON COLUMN \"posts\".\"username\" IS NULL")];
                    case 4:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"votes\" ADD CONSTRAINT \"FK_79326ff26ef790424d820d54a72\" FOREIGN KEY (\"username\") REFERENCES \"users\"(\"username\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"votes\" ADD CONSTRAINT \"FK_b5b05adc89dda0614276a13a599\" FOREIGN KEY (\"postId\") REFERENCES \"posts\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"votes\" ADD CONSTRAINT \"FK_554879cbc33538bf15d6991f400\" FOREIGN KEY (\"commentId\") REFERENCES \"comments\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" ADD CONSTRAINT \"FK_42377e3f89a203ca74d117e5961\" FOREIGN KEY (\"username\") REFERENCES \"users\"(\"username\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    createVotesTable1610285531623.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("ALTER TABLE \"posts\" DROP CONSTRAINT \"FK_42377e3f89a203ca74d117e5961\"")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"votes\" DROP CONSTRAINT \"FK_554879cbc33538bf15d6991f400\"")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"votes\" DROP CONSTRAINT \"FK_b5b05adc89dda0614276a13a599\"")];
                    case 3:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"votes\" DROP CONSTRAINT \"FK_79326ff26ef790424d820d54a72\"")];
                    case 4:
                        _a.sent();
                        return [4, queryRunner.query("COMMENT ON COLUMN \"posts\".\"username\" IS NULL")];
                    case 5:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" ALTER COLUMN \"username\" DROP NOT NULL")];
                    case 6:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" ADD CONSTRAINT \"FK_42377e3f89a203ca74d117e5961\" FOREIGN KEY (\"username\") REFERENCES \"users\"(\"username\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"votes\"")];
                    case 8:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return createVotesTable1610285531623;
}());
exports.createVotesTable1610285531623 = createVotesTable1610285531623;
//# sourceMappingURL=1610285531623-create-votes-table.js.map