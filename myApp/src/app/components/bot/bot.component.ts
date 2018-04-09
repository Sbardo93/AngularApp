import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  private botApiToken = '520490533:AAGf6RM9yhrCI88-zO-tki9gcRDpMfr5kEQ';
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
