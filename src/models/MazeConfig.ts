export class MazeConfig {
    public ponyName: string;
    public mazeHeight: number;
    public mazeWidth: number;
    public difficulty: number;

    constructor();

    constructor(params: MazeConfig = {} as MazeConfig) {
        this.ponyName = params.ponyName;
        this.mazeHeight = params.mazeHeight;
        this.mazeWidth = params.mazeWidth;
        this.difficulty = params.difficulty;
    }
}
