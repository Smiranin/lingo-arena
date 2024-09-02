import { Routes, withComponentInputBinding } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/404.component";

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "game/:id", component: HomeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: '**', component: NotFoundComponent },
];
