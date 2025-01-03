"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserResponse = toUserResponse;
exports.toUpdateUserResponse = toUpdateUserResponse;
function toUserResponse(users) {
    var _a;
    return {
        name: users.name,
        username: users.username,
        email: users.email,
        profile_picture: users.profile_picture,
        role: users.role,
        token: (_a = users.token) !== null && _a !== void 0 ? _a : ""
    };
}
function toUpdateUserResponse(users) {
    return {
        id: users.id,
        name: users.name,
        username: users.username,
        email: users.email,
        profile_picture: users.profile_picture,
        role: users.role
    };
}
