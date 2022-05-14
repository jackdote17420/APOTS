import firebaseConfig from "./firebaseConfig";
import  { initializeApp } from "firebase/app"
import { getAuth } from "@firebase/auth";
import { getDatabase, ref} from "firebase/database";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);

const db = getDatabase();
const spdb = ref(db, 'SanPhamDangBan/');
const sptm = ref(db, 'SanPhamTimMua/');
const gh = ref(db, 'GioHang/');
const ttch = ref(db, 'ThongTinCuaHang/' )
const nbh = ref(db, 'NguoiBanHang/')
export {auth, db, spdb, sptm, gh, ttch, nbh , firebaseApp};
