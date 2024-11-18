import Admissions from "../views/admin/Admissions";
import Patients from "../views/admin/Patients";
import Rooms from "../views/admin/Rooms";

export const routes = [
  {
    path: "show_outpatient",
    component: Patients,
    name: "Show Outpatient",
  },
  {
    path: "show_outpatientadmission",
    component: Admissions,
    name: "Show Outpatient Admission",
  },
  {
    path: "show_room",
    component: Rooms,
    name: "Show Room",
  },
];
