import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MacDockComponent } from './mac-dock.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MacDockComponent }
	])],
	exports: [RouterModule]
})
export class MacDockRoutingModule { }
