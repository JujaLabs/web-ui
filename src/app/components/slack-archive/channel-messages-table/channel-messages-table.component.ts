import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {SlackChannel} from "../../../model/slack-archive/slack-channel";

@Component({
  selector: 'app-channel-details-table',
  templateUrl: './channel-messages-table.component.html',
  styleUrls: ['./channel-messages-table.component.css']
})
export class ChannelMessagesTableComponent implements OnInit {
  channel: SlackChannel;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
