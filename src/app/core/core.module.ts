import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//material 控件
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent],
    imports: [
        CommonModule,
        MatToolbarModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
})
export class CoreModule {
    // @SkipSelf() 避免循环加载
    // @Optional() 第一次必须加载
    constructor(@Optional() @SkipSelf() parent: CommonModule) {
        if (parent) {
            throw new Error('模块已经存在，不能再次加载！');
        }
    }
}
