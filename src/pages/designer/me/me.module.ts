
import {NgModule} from "@angular/core";
import {DesignerMePage} from "./me";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {ModifyProfilePage} from "./modifyprofile/modifyprofile";
import {AddHonorPage} from "./addhonor/addhonor";
import {AddCasePage} from "./addcase/addcase";
import {CaseDetailPage} from "./casedetail/casedetail";
import {FavoriteProjectsPage} from "./favorite-projects/favorite-projects";
import {CommonPageModule} from "../../common/commonpage.module";
import {WalletModule} from "../wallet/wallet.module";
import {IonicPageModule} from "ionic-angular";
import {DesignerModule} from "../designer.module";
import {OrderModule} from "../../common/order/order.module";

@NgModule({
    declarations: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddHonorPage,
        AddCasePage,
        CaseDetailPage,
        FavoriteProjectsPage
    ],
    entryComponents: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddCasePage,
        AddHonorPage,
        CaseDetailPage,
        FavoriteProjectsPage
    ],
    imports: [
        WalletModule,
        IonicPageModule.forChild(DesignerMePage),
        OrderModule
    ],
    exports: [
        CaseDetailPage,
        DesignerMePage,
        DesignerMeDetailPage,
        FavoriteProjectsPage
    ]
})
export class DesignerMeModule {
}