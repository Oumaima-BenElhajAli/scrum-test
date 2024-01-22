import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIkitRoutingModule } from './uikit-routing.module';
import { MacDockModule } from './mac-dock/mac-dock/mac-dock.module';
import { TooltipModule } from 'primeng/tooltip';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
	imports: [
		CommonModule,
		UIkitRoutingModule,
		MacDockModule,
	]
})
export class UIkitModule { }
