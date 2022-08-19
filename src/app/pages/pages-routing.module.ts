import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ChatComponent} from './chat/chat.component';
import {KanbanComponent} from './kanban/kanban.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'kanban-board', component: KanbanComponent },
    { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
    { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
    { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) },
    { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
    { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
