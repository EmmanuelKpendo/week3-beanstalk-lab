import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AppService {
  async getRandomPlayers(count = 3) {
    const res = await axios.get(`https://randomuser.me/api/?results=${count}&nat=gb,es,br,fr,ar`);
    return res.data.results.map((user: any) => ({
      name: `${user.name.first} ${user.name.last}`,
      club: this.randomClub(),
      country: user.location.country,
    }));
  }

  private randomClub() {
    const clubs = ['FC Barcelona', 'Real Madrid', 'Manchester City', 'Bayern Munich', 'PSG', 'Al-Nassr'];
    return clubs[Math.floor(Math.random() * clubs.length)];
  }
}
