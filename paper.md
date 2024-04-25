## Angular 
* Angular is a open-source,component based JS framework for building single page client-side application maintained by google.
* Latest Angular is 17 which is completely written in TS


## Angular Working -ng serve



1. Ng serve - command
2. Bundling of files into one or more bundle by the webpack
3. After bundling these bundles are injected to the index.html,By this time the angular core libraries and third party libraries are loaded.
4. Angular searches the angular.json file
5. From this angular.json file ,angular will search for the path of entry point (main.ts and the server.ts)

```json
"options": {
            "outputPath": "dist/ekart",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
            "server": "src/main.server.ts",
            "prerender": true,
            "ssr": {
              "entry": "server.ts"
            }
          },
```

6. The server will start at this point.
7. PlateFormBrowserDynamic- used to load angular in browser.
8. App module -root module of angular application.
9. The below code will load the appModule

```js

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```
10. AppModule is loaded from app.module.ts
11. app.module.ts contains a class(AppModule) and a decorator(@NgModule) which accepts metadata like declarations,imports,providers,bootstrap.
```j
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
12. Declarations[] : We need to specify directives,component,pips which belongs to this module.
13. Imports[] : External modules.
14. Providers[] : Register all our services.
15. Bootstrap[] : We specify Component that should be loaded when this module is loaded.
16. AppComponent is Loaded 
17. Contains a component Decorator (@Component) which accepts metaData like selector,templateUrl,template,styleUrls.
```js

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ekart';
}


```
18. Selector : Can be used as an html element(mostly),html class,html attribute.
19. Finally Now the Angular knows what to be rendered.


## Advantages of Typescript 
* Superset of JS.
* TS is strongly typed whereas the JS is dynamically typed.
* TS has some object-oriented features that we don't have in JS like Interfaces,Access Modifiers.
* Statically typed -Type Checking in Compile Time.

## Create a Component
1. create a TS class and export it.
2. Decorate class with @Component Decorator.
3. Declare in module file.

```ts
import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
    
export class HeaderComponent{}
```
4. Use templateUrl if there is lot of html elements.



<h6>Disadvantages of Template & Styles Property</h6>

1. Mixes the TS & HTML code/Style code which makes less maintainable.
2. Change for syntax error is high as Compared to TemplateUrls.





