import { Routes } from '@angular/router';
import { MyopiaExplanationRouteComponent } from './routes/myopia-explanation-route/myopia-explanation-route.component';
import { LandingPageRouteComponent } from './routes/landing-page-route/landing-page-route.component';
import { RlmExplanationRouteComponent } from './routes/rlm-explanation-route/rlm-explanation-route.component';
import { BuyingGlassesRouteComponent } from './routes/buying-glasses-route/buying-glasses-route.component';
import { NewsRouteComponent } from './routes/news-route/news-route.component';

export const routes: Routes = [
    { path: "", component: LandingPageRouteComponent, title: "Landing Page" },
    { path: "news", component: NewsRouteComponent, title: "News" },
    { path: "myopia-explanation", component: MyopiaExplanationRouteComponent, title: "Myopia Explanation" },
    { path: "rlm-explanation", component: RlmExplanationRouteComponent, title: "Rlm Explanation" },
    { path: "buying-glasses", component: BuyingGlassesRouteComponent, title: "Buying Glasses" },
];
