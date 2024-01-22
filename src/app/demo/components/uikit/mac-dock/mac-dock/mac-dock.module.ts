import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacDockComponent } from './mac-dock.component';
import { MacDockRoutingModule } from './mac-dock-routing.module';
import { TooltipModule } from 'primeng/tooltip';
import { SplitterModule } from 'primeng/splitter';



@NgModule({
  declarations: [MacDockComponent],
  imports: [
    CommonModule,
    MacDockRoutingModule,
		TooltipModule,
		SplitterModule 
  ],
})
export class MacDockModule { }
