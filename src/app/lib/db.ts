import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

prisma.$connect()
    .then(()=>{console.log("✅ connected to db")} )
    .catch((err: unknown) => {
        if (err instanceof Error) {
            console.log('❌ failed to connect to db', err.message);
        } else {
            console.log('❌ failed to connect to db', err);
        }
    })

export default prisma