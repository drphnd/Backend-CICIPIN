"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewimagesValidation = void 0;
const zod_1 = require("zod");
class reviewimagesValidation {
}
exports.reviewimagesValidation = reviewimagesValidation;
reviewimagesValidation.CREATE = zod_1.z.object({
    image: zod_1.z.string().min(1).max(100),
    reviewID: zod_1.z.number().positive()
});
reviewimagesValidation.UPDATE = zod_1.z.object({
    image: zod_1.z.string().min(1).max(100)
});
reviewimagesValidation.DELETE = zod_1.z.object({
    image: zod_1.z.string().min(1).max(100)
});
