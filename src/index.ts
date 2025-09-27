// enumes in typescripten
enum Direction {
    Up,
    Down,
    Left,
    Right
}

const dir: Direction = Direction.Up;
console.log(dir);




// example two
enum Role { Admin, User, Guest }

const roles: Role[] = [Role.Admin, Role.User, Role.Guest];
if (roles.includes(Role.Admin)) {
    console.log("Admin role is present");
    if(roles[0] === Role.Admin){
        console.log("the first role is Admin");
    }
}
else{
    console.log("there is not Admin role");
}