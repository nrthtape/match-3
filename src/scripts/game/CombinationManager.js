import { App } from "../system/App";

export class CombinationManager {
    constructor(board) {
        this.board = board;
    }

    getMatches() {
        let result = [];

        let busyFields = [];

        this.board.fields.forEach(checkingField => {
            App.config.combinationRules.forEach(rule => {
                let matches = [checkingField.tile];

                let isBusy = 0;

                rule.forEach(position => {
                    const row = checkingField.row + position.row;
                    const col = checkingField.col + position.col;
                    const comparingField = this.board.getField(row, col);
                    if (comparingField && comparingField.tile.color === checkingField.tile.color) {
                        matches.push(comparingField.tile);
                    }
                });

                if (matches.length === rule.length + 1) {
                    matches.forEach(field => {
                        if (busyFields.includes(field)) {
                            isBusy = 1;
                        }
                    })

                    if (!isBusy) {
                        result.push(matches);

                        matches.forEach(field => busyFields.push(field))
                    }
                }
            });
        });

        return result;
    }
}