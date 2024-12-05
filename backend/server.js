import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";

import EkstrakurikulerRoute from "./routes/EkstrakurikulerRoute.js";
import GuruRoute from "./routes/GuruRoute.js";
import JadwalRoute from "./routes/JadwalRoute.js";
import kehadiranRoute from "./routes/kehadiranRoute.js";
import KelasRoute from "./routes/KelasRoute.js";
import MapelRoute from "./routes/MapelRoute.js";
import NilaiekskulRoute from "./routes/NilaiekskulRoute.js";
import NilaiRoute from "./routes/NilaiRoute.js";
import prestasiRoute from "./routes/prestasiRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import SekolahRoute from "./routes/SekolahRoute.js";
import SikapRoute from "./routes/SikapRoute.js";
import siswaRoute from "./routes/siswaRoute.js";
import tanggalraporRoute from "./routes/tanggalraporRoute.js";
import userRoute from "./routes/userRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db:db
});
// (async()=>{
//     try {
//         await db.sync({ force: true }); 
//         console.log("Database synced successfully.");
//     } catch (error) {
//         console.error("Failed to sync database:", error);
//     }
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave:false,
    saveUninitialized: true,
    store: store,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}));

app.use(express.json());
app.use(EkstrakurikulerRoute);
app.use(GuruRoute);
app.use(JadwalRoute);
app.use(kehadiranRoute);
app.use(KelasRoute);
app.use(MapelRoute);
app.use(NilaiekskulRoute);
app.use(NilaiRoute);
app.use(prestasiRoute);
app.use(RoleRoute);
app.use(SekolahRoute);
app.use(SikapRoute);
app.use(siswaRoute);
app.use(tanggalraporRoute);
app.use(userRoute);
app.use(AuthRoute);

// store.sync();
// Endpoint contoh
app.get("/", (req, res) => res.send("SI-Rapor Backend Running..."));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port ${process.env.APP_PORT}`);
});
