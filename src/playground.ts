import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@gmail.com",
    firstname: "mehul",
    lastname: "kumar",
  },
});

console.log("done");
