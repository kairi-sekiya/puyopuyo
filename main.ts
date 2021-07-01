namespace SpriteKind {
    export const Puyo = SpriteKind.create()
}
/**
 * fieldの数字
 * 
 * 0:空間
 * 
 * 1:赤
 * 
 * 2:青
 * 
 * 3:緑
 * 
 * 4:黄色
 */
// Stateの中の数字
// 
// 0:待機中(その他)
// 
// Waiting
// 
// 1:落下中(操作中)
// 
// Operating
// 
// 2:設置中
// 
// Placing
// 
// 3:消去中
// 
// Deleting
// 
// 4.落下中(連鎖)
// 
// Falling
function UpdateOperating () {
	
}
function Update () {
    if (state == 0) {
        UpdateWaiting()
    }
    if (state == 1) {
        UpdateOperating()
    }
    if (state == 2) {
        UpdatePlacing()
    }
    if (state == 3) {
        UpdateDeleting()
    }
    if (state == 4) {
        UpdateFalling()
    }
}
function UpdateWaiting () {
	
}
function UpdatePlacing () {
	
}
function Paint () {
	
}
function UpdateFalling () {
	
}
function Initialize () {
    score = 0
    state = 0
    field = [FIELD_WIDTH, FIELD_HEIGHT]
    for (let カウンター = 0; カウンター <= FIELD_WIDTH * FIELD_HEIGHT - 1; カウンター++) {
        field[カウンター] = 0
    }
    operatingPuyo = [2]
    for (let カウンター2 = 0; カウンター2 <= 1; カウンター2++) {
        operatingPuyo[カウンター2] = randint(1, 4)
    }
    nextPuyo = [2]
    for (let カウンター3 = 0; カウンター3 <= 1; カウンター3++) {
        nextPuyo[カウンター3] = randint(1, 4)
    }
    next2Puyo = [2]
    for (let カウンター4 = 0; カウンター4 <= 1; カウンター4++) {
        next2Puyo[カウンター4] = randint(1, 4)
    }
    scene.setBackgroundColor(0)
}
function UpdateDeleting () {
	
}
let next2Puyo: number[] = []
let nextPuyo: number[] = []
let operatingPuyo: number[] = []
let field: number[] = []
let score = 0
let state = 0
let FIELD_HEIGHT = 0
let FIELD_WIDTH = 0
FIELD_WIDTH = 6
FIELD_HEIGHT = 13
forever(function () {
	
})
