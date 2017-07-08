import {Component} from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ResetPasswordPage} from "./resetpassword/resetpassword";

@IonicPage({
})
@Component({
    templateUrl: 'commonpage.html'
})
export class CommonModulePage {

    rootPage: any = ResetPasswordPage;

    constructor() {
    }
}