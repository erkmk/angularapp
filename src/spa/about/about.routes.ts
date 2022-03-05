import { AboutComponent } from "./about.component";
import { RouterModule, Routes } from "@angular/router";

export const aboutRoutes:Routes=[
    {path:'',component:AboutComponent}
]

export default RouterModule.forChild(aboutRoutes) //all lazy module will be child. only app module will be root.