import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ModifyProfilePage} from "../modifyprofile/modifyprofile";
import {SharedService} from "../../../../service/share.service";
import {User} from "../../../../model/user";
import {CaseDetailPage} from "../casedetail/casedetail";
import {ChatPage} from "../../../im/chat/chat";
import { AlertController } from 'ionic-angular';

declare let initializeFontSize: any

@Component({
    selector: 'page-designer-me-detail',
    templateUrl: 'medetail.html'
})
export class DesignerMeDetailPage {
    btnState: any = 1;
    user = {};

    public isDesigner: boolean;

    cases: Array<{ title, desc, fav_count, comment_count, time }> = [
        {
            title: '案例标题', desc: 'It’s often necessary to create social cards within an application.',
            fav_count: 15, comment_count: 2, time: '11 min ago'
        },
        {
            title: '案例标题', desc: 'It’s often necessary to create social cards within an application.',
            fav_count: 15, comment_count: 2, time: '11 min ago'
        },
        {
            title: '案例标题', desc: 'It’s often necessary to create social cards within an application.',
            fav_count: 15, comment_count: 2, time: '11 min ago'
        },
    ];

    constructor(public navCtrl: NavController,
                public shared: SharedService,
                public alertCtrl:AlertController,
                public navParams: NavParams) {
        this.isDesigner = navParams.get('isDesigner');
        this.user = shared.getCurrentUser();
    }

    ionViewDidEnter() {
        initializeFontSize()
    }


    openCaseDetail() {
        this.navCtrl.push(CaseDetailPage)
    }

    modify() {
        this.navCtrl.push(ModifyProfilePage);
    }

    case() {
        this.btnState = 1;
    }

    honor() {
        this.btnState = 2;
    }

    experice() {
        this.btnState = 3;
    }

    openChat(operation) {
        this.navCtrl.push(ChatPage, operation)
    }

    showHelp(){
        let alert = this.alertCtrl.create({
            title: 'star level',
            subTitle: 'this is ...',
            buttons: ['OK']
        });
        alert.present();
    }
}