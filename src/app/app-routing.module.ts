import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule, DxTreeViewModule } from 'devextreme-angular';
import {TreetestComponent} from './pages/treetest/treetest.component';
import {CommonModule} from '@angular/common';
import {GallerytestComponent} from './pages/gallerytest/gallerytest.component';
import {Gallery2Component} from './pages/gallery2/gallery2.component';
import {FlatplanComponent} from './pages/flatplan/flatplan.component';
import {Flatplan2Component} from './pages/flatplan2/flatplan2.component';
import {OldplanningComponent} from './pages/oldplanning/oldplanning.component';

const routes: Routes = [

  {
    path: 'gallery2',
    component: Gallery2Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'gallerytest',
    component: GallerytestComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'treetest',
    component: TreetestComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'oldplanning',
    component: OldplanningComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'flatplan2',
    component: Flatplan2Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DxTreeViewModule, CommonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent, TreetestComponent]
})
export class AppRoutingModule { }
