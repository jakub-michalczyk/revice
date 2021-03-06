import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface YearFieldData {
  [key: string]: string | number;
  year: number;
  specifedYear: string;
  yearRange: string;
  rangeYear: string;
}

@Component({
  selector: 'app-choose-year',
  templateUrl: './choose-year.component.html',
  styleUrls: ['./choose-year.component.scss'],
})
export class ChooseYearComponent implements OnInit {
  year = new Date().getFullYear();
  specifedYear = '';
  yearRange = '1500 - 2022';
  rangeYear = '';
  yearFieldData: YearFieldData = {
    year: this.year,
    specifedYear: this.specifedYear,
    yearRange: this.yearRange,
    rangeYear: this.rangeYear,
  };
  @Output()
  changedData = new EventEmitter<YearFieldData>();

  constructor() {}

  ngOnInit(): void {
    this.changedData.emit(this.yearFieldData);
  }

  get minVal() {
    return document.querySelector('.min-val') as HTMLInputElement;
  }

  get maxVal() {
    return document.querySelector('.max-val') as HTMLInputElement;
  }

  get firstRange() {
    return document.querySelector('.first-range') as HTMLInputElement;
  }

  get secRange() {
    return document.querySelector('.second-range') as HTMLInputElement;
  }

  updateData(data: string, value: string | number) {
    this.yearFieldData[data] = value;
    this.changedData.emit(this.yearFieldData);
  }

  enterSpecificYear() {
    if (this.maxVal.value === '') {
      this.specifedYear = this.minVal.value;
      this.updateData('specifedYear', this.minVal.value);
    } else {
      this.specifedYear = '';
      this.updateData('specifedYear', '');
    }
  }

  updateRange() {
    this.enterSpecificYear();
    this.firstRange.value = this.minVal.value;
    this.secRange.value =
      this.maxVal.value === '' ? this.minVal.value : this.maxVal.value;

    this.updateData('yearRange', `${this.minVal.value} - ${this.maxVal.value}`);
  }

  changeRange() {
    this.enterSpecificYear();

    let slide1 = parseFloat(this.firstRange.value);
    let slide2 = parseFloat(this.secRange.value);

    if (slide1 > slide2) {
      [slide1, slide2] = [slide2, slide1];
    }

    this.minVal.value = String(slide1);
    this.maxVal.value = String(slide2);

    let values = [this.minVal, this.maxVal];
    values.forEach((el) => {
      el.oninput = () => {
        let number1 = parseFloat(this.minVal.value),
          number2 = parseFloat(this.maxVal.value);

        if (number1 > number2) {
          let tmp = number1;
          this.minVal.value = String(number2);
          this.maxVal.value = String(tmp);
        }

        this.firstRange.value = String(number1);
        this.secRange.value = String(number2);
      };
    });

    this.updateData('yearRange', `${this.minVal.value} - ${this.maxVal.value}`);
  }
}
