import { NgModule } from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule
} from '@angular/material';



@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule

    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule

    ]
})

export class MaterialModule { }
