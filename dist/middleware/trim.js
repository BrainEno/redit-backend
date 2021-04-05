"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, _, next) {
    Object.keys(req.body).forEach(function (key) {
        var exceptions = ["password"];
        if (!exceptions.includes(key) && typeof req.body[key] === "string") {
            req.body[key] = req.body[key].trim();
        }
    });
    next();
});
//# sourceMappingURL=trim.js.map