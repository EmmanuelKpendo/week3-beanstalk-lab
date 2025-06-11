import {Controller, Get, Render, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('players')
  async showPlayers() {
    const players = await this.appService.getRandomPlayers();
    return { players };
  }

  // API endpoint to return random players as JSON
// src/app.controller.ts
  @Get('api/players')
  async getPlayers() {
    return await this.appService.getRandomPlayers();
  }

}
