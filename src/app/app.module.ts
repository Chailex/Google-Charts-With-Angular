import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BubbleComponent } from './pages/components/bubble/bubble.component';
import { PieComponent } from './pages/components/pie/pie.component';
import { LineComponent } from './pages/components/line/line.component';
import { BarComponent } from './pages/components/bar/bar.component';
import { ColumnComponent } from './pages/components/column/column.component';
import { AreaComponent } from './pages/components/area/area.component';
import { ScatterComponent } from './pages/components/scatter/scatter.component';
import { AnnotationComponent } from './pages/components/annotation/annotation.component';
import { CalendarComponent } from './pages/components/calendar/calendar.component';
import { CandlestickComponent } from './pages/components/candlestick/candlestick.component';
import { ComboComponent } from './pages/components/combo/combo.component';
import { GanttComponent } from './pages/components/gantt/gantt.component';
import { GaugeComponent } from './pages/components/gauge/gauge.component';
import { GeoComponent } from './pages/components/geo/geo.component';
import { HistogramComponent } from './pages/components/histogram/histogram.component';
import { OrgComponent } from './pages/components/org/org.component';
import { SankeyComponent } from './pages/components/sankey/sankey.component';
import { SteppedComponent } from './pages/components/stepped/stepped.component';
import { TableComponent } from './pages/components/table/table.component';
import { TimelineComponent } from './pages/components/timeline/timeline.component';
import { TreeComponent } from './pages/components/tree/tree.component';
import { WordComponent } from './pages/components/word/word.component';
import { MapComponent } from './pages/components/map/map.component';
import { SchoolComponent } from './pages/school/school.component';
import { RapidoComponent } from './pages/rapido/rapido.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { ApollotyreComponent } from './pages/apollotyre/apollotyre.component';
import { LanguageComponent } from './pages/language/language.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BubbleComponent,
    PieComponent,
    LineComponent,
    BarComponent,
    ColumnComponent,
    AreaComponent,
    ScatterComponent,
    AnnotationComponent,
    CalendarComponent,
    CandlestickComponent,
    ComboComponent,
    GanttComponent,
    GaugeComponent,
    GeoComponent,
    HistogramComponent,
    OrgComponent,
    SankeyComponent,
    SteppedComponent,
    TableComponent,
    TimelineComponent,
    TreeComponent,
    WordComponent,
    MapComponent,
    SchoolComponent,
    RapidoComponent,
    StocksComponent,
    ApollotyreComponent,
    LanguageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
