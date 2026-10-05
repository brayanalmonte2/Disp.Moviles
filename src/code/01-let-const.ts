import type {User} from "./user.interface";

const URL = "https://jsonplaceholder.typicode.com/users"
    

const request =  await fetch(URL); 
const response: User[] = await request.json();

const userNames = response.map((user) => ({name: user.name, email: user.email, 
username: user.username, city: user.address.city}));
console.log(userNames);



