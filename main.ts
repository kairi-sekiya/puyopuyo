namespace SpriteKind {
    export const Puyo = SpriteKind.create()
}
function Paint () {
	
}
// 0:上
// 1:右
// 2:下
// 3:左
function MovePuyo (direction: number) {
    if (direction == 1) {
        operatingPuyoPosX += 1
    }
    if (direction == 2) {
        operatingPuyoPosY += -1
    }
    if (direction == 3) {
        operatingPuyoPosX += -1
    }
}
// 0:左
// 1:右
function RotatePuyo (direction: number) {
    if (direction == 0) {
        operatingPuyoDirection += -1
        if (operatingPuyoDirection < 0) {
            operatingPuyoDirection += 4
        }
    } else {
        operatingPuyoDirection += 1
        if (operatingPuyoDirection > 3) {
            operatingPuyoDirection += -4
        }
    }
}
function Initialize () {
    score = 0
    state = 0
    operatingPuyoDirection = 0
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
let next2Puyo: number[] = []
let nextPuyo: number[] = []
let operatingPuyo: number[] = []
let field: number[] = []
let state = 0
let score = 0
let operatingPuyoDirection = 0
let operatingPuyoPosY = 0
let operatingPuyoPosX = 0
let FIELD_HEIGHT = 0
let FIELD_WIDTH = 0
FIELD_WIDTH = 6
FIELD_HEIGHT = 13
game.onUpdateInterval(100, function () {
    if (state == 1) {
        if (controller.A.isPressed()) {
            RotatePuyo(0)
        }
        if (controller.B.isPressed()) {
            RotatePuyo(1)
        }
        if (controller.up.isPressed()) {
            MovePuyo(0)
        }
        if (controller.right.isPressed()) {
            MovePuyo(1)
        }
        if (controller.down.isPressed()) {
            MovePuyo(2)
        }
        if (controller.left.isPressed()) {
            MovePuyo(3)
        }
    }
    Paint()
})
