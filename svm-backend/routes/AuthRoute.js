import Signup  from "../controllers/AuthController.js";
import Login from "../controllers/LoginController.js";
import userVerification from "../middlewares/AuthMiddleware.js";
import express from "express";
import AddStudent from "../controllers/AddController.js";
import ShowStudent from "../controllers/ShowStudent.js";
import ShowOneStudent from "../controllers/ShowOneStudent.js";
import EditStudent from "../controllers/EditController.js";
import DeleteStudent from "../controllers/DeleteController.js";
import SearchStudent from "../controllers/SearchController.js";



const router = express.Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/students', userVerification); 
router.post('/students/addstudent', AddStudent);

router.get('/students/one/:id', ShowOneStudent);
router.get('/students/:year/:standard', ShowStudent);


router.put('/students/edit/:id', EditStudent);

router.delete('/students/delete/:id', DeleteStudent);

router.get("/search", SearchStudent);


export default router;
