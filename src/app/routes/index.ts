import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.routes";
import { AcademicRoutes } from "../modules/academicSemister/academic.routes";
import { facultyRoutes } from "../modules/faculty/faculty.routes";
import { departmentRoutes } from "../modules/depertment/department.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/students",
    route: studentRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicRoutes,
  },
  {
    path: "/academic-faculty",
    route: facultyRoutes,
  },
  {
    path: "/academic-department",
    route: departmentRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
