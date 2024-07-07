import express from 'express';
import { config } from 'dotenv';
//connect to mongodb using config
config();
const app = express();
//using middleware
app.use(express.json());
//connections and listeners
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map