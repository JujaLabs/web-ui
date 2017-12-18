import { Component, OnInit } from '@angular/core';
import { SlackChannel } from '../../../model/slack-archive/slack-channel';

@Component({
  selector: 'app-all-channels-table',
  templateUrl: './all-channels-table.component.html',
  styleUrls: ['./all-channels-table.component.css']
})
export class AllChannelsTableComponent implements OnInit {
  title: string;
  channels: SlackChannel[] = [
    {"id": "1", "name": "channel1"},
    {"id": "2", "name": "channel2"},
    {"id": "3", "name": "channel3"},
    {"id": "4", "name": "channel4"},
    {"id": "5", "name": "channel5"},
  ];
  isViewTable: boolean = true;

  constructor() { }

  ngOnInit() {
    this.title = 'Slack Channels';
  }

}
