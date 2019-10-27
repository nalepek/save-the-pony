import { MazeConfig } from '@/models/MazeConfig';
import axios, { AxiosResponse } from 'axios';

export default interface IPonyApiService {
    createMaze(mazeConfig: MazeConfig): string;
    getMazeState(mazeId: number): any;
    moveIn(mazeId: number, direction: string): any;
    getMazePrint(mazeId: number): any;
}
