import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
    //  { path: '', component: HomeComponent },
    { path: '', loadChildren: ('./pages/pages.module#PagesModule') }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
