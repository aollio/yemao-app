import {Component, Input, forwardRef} from '@angular/core';

import {ImageService} from "../../service/ajax/imgs.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Events, NavController, Platform} from 'ionic-angular';


const noop = () => {
};

declare let window: any

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageInputComponent),
    multi: true
};


@Component({
    selector: 'image-input',
    templateUrl: 'image-input.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ImageInputComponent implements ControlValueAccessor {


    private imgs;


    constructor(private imagesServ: ImageService,) {
    }

    @Input('count') maximumImagesCount: number = 15;

    pick_image() {
        let options = {
            maximumImagesCount: this.maximumImagesCount,
            quality: 100,
            outputType: 1
        }
        this.imagesServ.picker(options)
            .then(result => {
                console.log("async imagesServ: ")
                console.log(result)
                this.push(result)
                console.log("end pick")
            })
            .catch(error => console.log(error))
    }

    async upload() {
        let result = await  this.imagesServ.upload(this.imgs)
        this.push(result);
    }

    push(result){
        console.log('begin')
        console.log("push"+result)
        console.log(typeof result)
        console.log(result.length)
        console.log(result[0])
        console.log(typeof result[0])
        console.log('end')

        // if (this.maximumImagesCount == 1){
        //     console.log("begin ==")
        //
        //     this.imgs = result[0]
        //
        //     console.log("end ==")
        //     return
        // }
        console.log("begin if count  != 1")
        // this.imgs=[];
        this.imgs.length = 0
        for (let x of result) {
            console.log(x)
            this.imgs.push(x)
        }
    }



    //-----------------------------------------------
    // 以下代码用于[(ngModel)] 双向绑定的代码

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;


    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(v: any) {
        this.imgs = v;
        this.onChangeCallback(v);
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }


}
