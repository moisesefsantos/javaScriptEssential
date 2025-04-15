let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let personRole = "Enrolled Member";
let accessMessage;

if (personRole === "Employee") {
    accessMessage = "Access granted: You are authorized to use Dietary Services.";
} else if (personRole === "Enrolled Member") {
    accessMessage = "Access granted: You are authorized to use Dietary Services and have one-on-one interaction with a dietician.";
} else if (personRole === "Subscriber") {
    accessMessage = "Access granted: You have partial access to Dietary Services.";
} else if (personRole === "Non-Subscriber") {
    accessMessage = "Access denied: Please enroll or subscribe to use Dietary Services.";
} else {
    accessMessage = "Invalid role: Unable to determine access level.";
}

console.log("Dietary Program Message:", accessMessage);
