import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CommonPageModule} from "../common/commonpage.module";
import {EmployerTabsPage} from "./tabs/tabs";
import {EmployerModulePage} from "./employer";
import {EmployerHomePage} from "./home/home";
import {DesignerModulePage} from "../designer/designer";
import {DesignerModule} from "../designer/designer.module";
import {DesignerMeModule} from "../designer/me/me.module";
import {HelpChoosePage} from "./helpchoose/helpchoose";
import {ProjectsPage} from "./projects/projects";
import {EmployerMePage} from "./me/me";
import {EmployerMeModule} from "./me/me.module";
import {PayPage} from "./pay/pay";

@NgModule({
    declarations: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage,
        ProjectsPage,
        EmployerMePage,
        ProjectsPage,
        PayPage,
    ],
    entryComponents: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage,
        ProjectsPage,
        EmployerMePage,
        ProjectsPage,
        PayPage
    ],
    imports: [
        CommonPageModule,
        DesignerModule,
        DesignerMeModule,
        IonicPageModule.forChild(EmployerTabsPage),
        EmployerMeModule
    ],
    exports: [ProjectsPage,
        EmployerModulePage,
        EmployerHomePage,
        PayPage
    ]
})
export class EmployerModule {
}
