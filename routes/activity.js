import  express  from "express"; 
import { newActivity, getMyActivity, updateMyActivity, deleteActivity  } from "../controllers/activity.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newActivity);
router.get("/my", isAuthenticated, getMyActivity);

router
  .route("/:id")
  .put(isAuthenticated, updateMyActivity)
  .delete(isAuthenticated, deleteActivity);
  



export default router;