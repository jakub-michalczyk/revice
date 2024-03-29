import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { AddNewPostFormComponent } from './components/add-new-post/add-new-post-form/add-new-post-form.component';
import { AddNewPostComponent } from './components/add-new-post/add-new-post.component';
import { CategoryListElementComponent } from './components/add-new-post/category-list-element/category-list-element.component';
import { ChooseCategoryComponent } from './components/add-new-post/choose-category/choose-category.component';
import { UploadImageComponent } from './components/add-new-post/upload-image/upload-image.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { LoginFormComponent } from './components/login-view/login-form/login-form.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { RegisterFormComponent } from './components/login-view/register-form/register-form.component';
import { MenuComponent } from './components/page-header/menu/menu.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PreviewPostComponent } from './components/preview-post/preview-post.component';
import { RatingComponent } from './components/rating/rating.component';
import { PostComponent } from './global/post/post.component';
import { ChooseYearComponent } from './components/choose-year/choose-year.component';
import { FieldHeadingComponent } from './components/field-heading/field-heading.component';
import { FieldImageComponent } from './components/field-image/field-image.component';
import { FieldTextComponent } from './components/field-text/field-text.component';
import { FieldBannerComponent } from './components/field-banner/field-banner.component';
import { FieldRatingComponent } from './components/field-rating/field-rating.component';
import { FieldGalleryComponent } from './components/field-gallery/field-gallery.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { AddNewTextFieldComponent } from './components/add-new-post/add-new-post-form/add-new-post-form-fields/add-new-text-field/add-new-text-field.component';
import { AddNewImageFieldComponent } from './components/add-new-post/add-new-post-form/add-new-post-form-fields/add-new-image-field/add-new-image-field.component';
import { AddNewHeadingFieldComponent } from './components/add-new-post/add-new-post-form/add-new-post-form-fields/add-new-heading-field/add-new-heading-field.component';
import { AddNewBannerFieldComponent } from './components/add-new-post/add-new-post-form/add-new-post-form-fields/add-new-banner-field/add-new-banner-field.component';
import { AddNewRatingFieldComponent } from './components/add-new-post/add-new-post-form/add-new-post-form-fields/add-new-rating-field/add-new-rating-field.component';
import { AddNewGalleryFieldComponent } from './components/add-new-post/add-new-post-form/add-new-post-form-fields/add-new-gallery-field/add-new-gallery-field.component';
import { AddFieldButtonComponent } from './components/add-new-post/add-new-post-form/add-field-button/add-field-button.component';
import { AddTagsComponent } from './components/add-new-post/add-new-post-form/add-tags/add-tags.component';
import { TagComponent } from './components/add-new-post/add-new-post-form/tag/tag.component';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
];

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    MenuComponent,
    HeroImageComponent,
    AddNewPostComponent,
    CategoryListElementComponent,
    AddNewPostFormComponent,
    UploadImageComponent,
    LoginViewComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AccountComponent,
    ChooseCategoryComponent,
    PreviewPostComponent,
    LatestPostsComponent,
    RatingComponent,
    FooterComponent,
    LoadingScreenComponent,
    ErrorMessagesComponent,
    PostComponent,
    ChooseYearComponent,
    FieldHeadingComponent,
    FieldImageComponent,
    FieldTextComponent,
    FieldBannerComponent,
    FieldRatingComponent,
    FieldGalleryComponent,
    SlideShowComponent,
    AddNewTextFieldComponent,
    AddNewImageFieldComponent,
    AddNewHeadingFieldComponent,
    AddNewBannerFieldComponent,
    AddNewRatingFieldComponent,
    AddNewGalleryFieldComponent,
    AddFieldButtonComponent,
    AddTagsComponent,
    TagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ...materialModules,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
