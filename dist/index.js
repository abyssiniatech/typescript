"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enumes in typescripten
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const dir = Direction.Up;
console.log(dir);
// example two
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const roles = [Role.Admin, Role.User, Role.Guest];
if (roles.includes(Role.Admin)) {
    console.log("Admin role is present");
    if (roles[0] === Role.Admin) {
        console.log("the first role is Admin");
    }
}
else {
    console.log("there is not Admin role");
}
//# sourceMappingURL=index.js.map