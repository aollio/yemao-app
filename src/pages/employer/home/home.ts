import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {AppointPage} from "./appoint/appoint";
import {DesingerTypePage} from "./desinger-types/desinger-types";
import {DesignerListPage} from "./designer/designer-list";
import {HelpChoosePage} from "../helpchoose/helpchoose";

declare let initializeFontSize: any

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {

    static isfirstCome=true;

    ionViewDidEnter() {
        initializeFontSize()
    }

    designerMeDetailPage: DesignerMeDetailPage;


    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController) {
        this.showAlert();
    }

    showAlert() {
        // todo  第一次进入提示抢单信息
        let alert = this.alertCtrl.create({
            title: 'new message!',
            subTitle: '有新设计师接单，请查看',
            buttons: ['OK']
        });
        alert.present();
    }


    open(page, option) {
        this.navCtrl.push(page, option)

    }

    openMeDetail(option) {
        this.navCtrl.push(DesignerMeDetailPage, option)
    }

    btn_designer() {
        this.navCtrl.push(DesignerListPage);
    }

    btn_fullstack() {
        this.navCtrl.push(DesignerListPage);
    }

    btn_types() {
        this.navCtrl.push(DesingerTypePage)
    }

    btn_appoint() {
        this.navCtrl.push(AppointPage);

    }
}
