import {Component} from "@angular/core";
import {ModalController, NavController} from "ionic-angular";
import {EmpFavoriteDesignerPage} from "./favorite-designer/favorite-designer";
import {SharedService} from "../../../service/share.service";
import {LoginPage} from "../../common/login/login";
import {CommentPage} from "../../designer/comment/comment";
import {NotificationsPage} from "../../designer/nofitications/notifications";
import {PayProjectsListPage} from "./pay-projects-list/pay-projects-list";

declare let initializeFontSize: any;

@Component({
    selector: 'page-me-employer',
    templateUrl: 'me.html'
})
export class EmployerMePage {

    follower: EmpFavoriteDesignerPage;

    user = {};


    ionViewDidEnter() {
        initializeFontSize()
    }

    constructor(public  navCtrl: NavController,
                public share: SharedService,
                public modalCtrl: ModalController) {
        this.user = share.getCurrentUser()
    }

    open(page, option) {
        // if (this.isNullObj1(this.user)) return;
        this.navCtrl.push(EmpFavoriteDesignerPage, {})
    }

    isNullObj1(obj) {
        return JSON.stringify(obj) == JSON.stringify({});
    }

    openLoginPage(event) {
        let profileModal = this.modalCtrl.create(LoginPage);
        profileModal.present();
        event.stopPropagation();
        // this.navCtrl.push(LoginPage);
    }

    openComments() {
        this.navCtrl.push(CommentPage, {})
    }

    openNotifications() {
        this.navCtrl.push(NotificationsPage, {})
    }

    openPayProjects() {
        this.navCtrl.push(PayProjectsListPage, {})
    }
}
