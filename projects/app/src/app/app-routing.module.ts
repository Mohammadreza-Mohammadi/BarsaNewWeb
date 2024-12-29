import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  scrollOffset: [0, 0],
  useHash: true,
  onSameUrlNavigation: 'reload',
  enableViewTransitions: true
};
const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
