import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DataService } from '../services/data.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatGridListModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions!: ChartOptions<'line'>;
  public lineChartLegend = true;

  public pieChartData!: ChartConfiguration<'pie'>['data'];
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(
    private translate: TranslateService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.lineChartData = this.dataService.getChartData();
    this.lineChartOptions = this.dataService.getChartOptions();
    this.pieChartData = this.dataService.getPieChartData();
  }

  useLanguage(event: Event, language: string): void {
    event.preventDefault();
    this.translate.use(language);
  }

  trackTile(index: number, tile: Tile): string {
    return tile.text;
  }

  tiles: Tile[] = [
    { text: 'Reports', cols: 1, rows: 1, color: '#303035' },
    { text: 'Requests', cols: 1, rows: 1, color: '#303035' },
    { text: 'Priorities', cols: 1, rows: 1, color: '#303035' },
    { text: 'Statistics', cols: 1, rows: 1, color: '#303035' },
  ];
}
