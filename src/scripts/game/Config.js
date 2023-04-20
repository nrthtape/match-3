import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    size: [1920, 1080],
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    scenes: {
        "Game": Game,
    },
    board: {
        rows: 8,
        cols: 8
    },
    tilesColors: ['apple', 'cherry', 'orange', 'watermelon', 'berry', 'banana'],
    combinationRules: [[
        {col: 0, row: 1}, {col: 0, row: 2}, {col: 0, row: 3}, {col: 4, row: 0},
    ], [
        {col: 0, row: 1}, {col: 0, row: 2}, {col: 0, row: 3}, {col: 0, row: 4},
    ], [
        {col: 1, row: 0}, {col: 2, row: 0}, {col: 3, row: 0},
    ], [
        {col: 0, row: 1}, {col: 0, row: 2}, {col: 0, row: 3},
    ], [
        {col: 1, row: 0}, {col: 2, row: 0},
    ], [
        {col: 0, row: 1}, {col: 0, row: 2},
    ]],
};