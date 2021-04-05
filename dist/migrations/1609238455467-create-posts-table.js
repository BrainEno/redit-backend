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
exports.createPostsTable1609238455467 = void 0;
var createPostsTable1609238455467 = (function () {
    function createPostsTable1609238455467() {
        this.name = "createPostsTable1609238455467";
    }
    createPostsTable1609238455467.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("CREATE TABLE \"posts\" (\"id\" SERIAL NOT NULL, \"createdAt\" TIMESTAMP NOT NULL DEFAULT now(), \"updatedAt\" TIMESTAMP NOT NULL DEFAULT now(), \"identifier\" character varying NOT NULL, \"title\" character varying NOT NULL, \"slug\" character varying NOT NULL, \"body\" text, \"subName\" character varying NOT NULL, \"username\" character varying, CONSTRAINT \"PK_2829ac61eff60fcec60d7274b9e\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("CREATE INDEX \"IDX_152316363d20c399f934c4f74b\" ON \"posts\" (\"identifier\") ")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("CREATE INDEX \"IDX_54ddf9075260407dcfdd724857\" ON \"posts\" (\"slug\") ")];
                    case 3:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" ADD CONSTRAINT \"FK_42377e3f89a203ca74d117e5961\" FOREIGN KEY (\"username\") REFERENCES \"users\"(\"username\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" ADD CONSTRAINT \"FK_cca21672314ce54982a6dd5d121\" FOREIGN KEY (\"subName\") REFERENCES \"subs\"(\"name\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    createPostsTable1609238455467.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, queryRunner.query("ALTER TABLE \"posts\" DROP CONSTRAINT \"FK_cca21672314ce54982a6dd5d121\"")];
                    case 1:
                        _a.sent();
                        return [4, queryRunner.query("ALTER TABLE \"posts\" DROP CONSTRAINT \"FK_42377e3f89a203ca74d117e5961\"")];
                    case 2:
                        _a.sent();
                        return [4, queryRunner.query("DROP INDEX \"IDX_54ddf9075260407dcfdd724857\"")];
                    case 3:
                        _a.sent();
                        return [4, queryRunner.query("DROP INDEX \"IDX_152316363d20c399f934c4f74b\"")];
                    case 4:
                        _a.sent();
                        return [4, queryRunner.query("DROP TABLE \"posts\"")];
                    case 5:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return createPostsTable1609238455467;
}());
exports.createPostsTable1609238455467 = createPostsTable1609238455467;
//# sourceMappingURL=1609238455467-create-posts-table.js.map