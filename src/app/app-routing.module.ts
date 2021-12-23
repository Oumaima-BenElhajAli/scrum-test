import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {AppMainComponent} from './app.main.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppBlocksDemoComponent} from './demo/view/app.blocksdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {IconsDemoComponent} from './demo/view/iconsdemo.component';

import {SeatDemoComponent} from './demo/view/menu/seatdemo.component';
import {PersonalDemoComponent} from './demo/view/menu/personaldemo.component';
import {ConfirmationDemoComponent} from './demo/view/menu/confirmationdemo.component';
import {PaymentDemoComponent} from './demo/view/menu/paymentdemo.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardDemoComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/menu', component: MenusDemoComponent,
                        children: [
                            {path:'', component: PersonalDemoComponent},
                            {path:'seat', component: SeatDemoComponent},
                            {path:'payment', component: PaymentDemoComponent},
                            {path:'confirmation', component: ConfirmationDemoComponent},
                        ]
                    },
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'icons', component: IconsDemoComponent},
                    {path: 'blocks', component: AppBlocksDemoComponent},
                    {path: 'documentation', component: DocumentationComponent}
                ]
            },
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
