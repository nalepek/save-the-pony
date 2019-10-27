import IPonyApiService from './IPonyApiService';
import axios, { AxiosResponse } from 'axios';
import { MazeConfig } from '@/models/MazeConfig';

class PonyApiService implements IPonyApiService {
  private readonly endpoint: string = 'https://ponychallenge.trustpilot.com/pony-challenge/maze';

  public createMaze(mazeConfig: MazeConfig): string {
    axios
      .post(this.endpoint, {
        'maze-width': parseInt(mazeConfig.mazeWidth, 0),
        'maze-height': parseInt(mazeConfig.mazeHeight, 0),
        'maze-player-name': mazeConfig.ponyName,
        'difficulty': parseInt(mazeConfig.difficulty, 0)
      })
      .then((response) => {
        console.log('API RESPONSE');
        console.log(response);
      })
      .catch((error) => {
        console.log('API ERROR');
        console.log(error);
      });

      return "";
  }

  public getMazeState(mazeId: number) {
    axios.get(this.endpoint + '/' + mazeId);
  }

  public moveIn(mazeId: number, direction: string) {
    axios.post(this.endpoint + '/' + mazeId, {
      direction: direction
    });
  }

  public getMazePrint(mazeId: number) {
    axios.get(this.endpoint + '/' + mazeId + '/print');
  }
}

export const ponyApiService = new PonyApiService();
