"""
在当前文件夹下生产IONIC的页.
page.py dir_name cls_name
"""

__author__ = "Aollio Hou"
__email__ = "aollio@outlook.com"

import os, sys

print(sys.argv)

try:
    dir_name = sys.argv[1]
    page_name = sys.argv[2]
except Exception:
    print('usage: page.py dir_name class_name')

dir_path = dir_name
if not os.path.exists(dir_path):
    os.mkdir(dir_path)

with open(os.path.sep.join([dir_name, dir_name + '.html']), 'w+') as f:
    f.write('<ion-header>\n')
    f.write('</ion-header>\n')
    f.write('<ion-content>\n')
    f.write('</ion-content>\n')
    f.flush()

label_name = dir_name

with open(os.path.sep.join([dir_name, dir_name + '.scss']), 'w+') as f:
    f.write(label_name + '{\n\n}')
    f.flush()

tscontent = (       "   main_color: any;\n\n"
                    "   constructor(private util: Util,\n"
                    "               private manager: Manager,\n"
                    "               private nav: NavController,\n"
                    "               private navParam: NavParams) {\n"
                    "       this.main_color = this.manager.sharedServ.getPrimaryColor();\n"
                    "    }\n\n"
                    "    open(page, option, navparam) {\n"
                    "       this.nav.push(page, option, navparam)\n"
                    "   }\n\n")

with open(os.path.sep.join([dir_name, dir_name + '.ts']), 'w+') as f:
    f.write("import {Component} from '@angular/core';\n\n")
    f.write('import {NavController, NavParams} from "ionic-angular";\n')
    f.write("@Component({\n")
    f.write("   selector: '%s',\n" % label_name)
    f.write("   templateUrl: '%s'\n" % (dir_name + '.html'))
    f.write("})\n\n")
    f.write("export class %s {\n\n" % page_name)
    f.write(tscontent)
    f.write("}\n\n")
    f.flush()
