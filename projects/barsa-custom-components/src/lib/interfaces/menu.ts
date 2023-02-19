import { Component } from '@angular/core';

export interface TabList {
  title: string;
  id: number;
  parentID: number;
  items: any[];
}

export interface Menu {
  title: string;
  id: number;
  parentID: number;
  items: any[];
  children: TabList[];
}
