import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SlackChannel } from '../../../model/slack-archive/slack-channel';
import { SlackArchiveService } from "../../../service/slack-archive.service";

@Component({
  selector: 'app-all-channels-table',
  templateUrl: './all-channels-table.component.html',
  styleUrls: ['./all-channels-table.component.css']
})
export class AllChannelsTableComponent implements OnInit {
  title: string;
  channels: SlackChannel[] = [];
  isLoaded: boolean = false;

  constructor(
    private router: Router,
    private slackArchiveService: SlackArchiveService
  ) {}

  ngOnInit() {
    this.title = 'Slack Channels';
    this.getChannels();
  }

  viewChannelMessages(id: string): void {
    this.router.navigate(['/channel-messages-table', id]);
  }

  getChannels(): void {
    this.isLoaded = false;
    this.slackArchiveService.getAllChannels()
      .subscribe(
        data => {
          this.channels = data;
          this.isLoaded = true},
        (error: any) => {
          console.log(error);
        });
  }
}
