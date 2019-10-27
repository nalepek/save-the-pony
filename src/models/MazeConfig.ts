export class MazeConfig {
    public ponyName: string;
    public mazeHeight: string;
    public mazeWidth: string;
    public difficulty: string;

    constructor() {
        this.ponyName = '';
        this.mazeHeight = '';
        this.mazeWidth = '';
        this.difficulty = '';
    }
}


// MazeParams {
//     maze-width (integer): min 15 max 25 ,
//     maze-height (integer): min 15 max 25 ,
//     maze-player-name (string): should be valid pony name! ,
//     difficulty (integer, optional): from 0 (easiest) to 10 (hardest)
//     }
