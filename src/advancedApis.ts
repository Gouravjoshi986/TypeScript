// PICK
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  createdAt: Date;
}

type updatedParams = Pick<User, "name" | "age">;

const updateUserProfile = (user: updatedParams) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
};

// PARTIAL 
type UpdatePropsOptional = Partial<updatedParams>;

function updateUser(updatedProps: UpdatePropsOptional) {
  console.log(`Name: ${updatedProps.name}, Age: ${updatedProps.age}`);
}

// READONLY
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Config = {
  // either mark every var as readonly
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};
// const config: Readonly<Config> = {              //or make the whole type Readonly
//     endpoint: 'https://api.example.com',         // without marking var as readonly
//     apiKey: 'abcdef123456',
// };

// RECORD
interface UserProfile {
  id: string;
  name: string;
}

//   type Users = { [key: string]: User }; // In place of writing this we can use Record /
type Users = Record<string, UserProfile>;

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users["abc123"]);

// MAP 
// Initialize an empty Map
const usersMap = new Map<string, UserProfile>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });

// Accessing a value using .get
console.log(usersMap.get("abc123"));

// Exlude 
type Events = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Events, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

// Zod Type Inference
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
// using z.infer 
type FinalSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:FinalSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);
