namespace SpriteKind {
    export const Puyo = SpriteKind.create()
    export const UI = SpriteKind.create()
}
function GetOperatingPuyoTop () {
    if (operatingPuyoDirection == 0) {
        return operatingPuyoPosY - 1
    } else {
        return operatingPuyoPosY
    }
}
function PosToFieldIndex (PosX: number, PosY: number) {
    return PosX + PosY * FIELD_WIDTH
}
function SetPuyoColor (puyo: Sprite, color: number) {
    if (color == 1) {
        puyo.setImage(assets.image`Puyo_Red`)
    }
    if (color == 2) {
        puyo.setImage(assets.image`Puyo_Blue`)
    }
    if (color == 3) {
        puyo.setImage(assets.image`Puyo_Green`)
    }
    if (color == 4) {
        puyo.setImage(assets.image`Puyo_Yellow`)
    }
}
function GetOperatingPuyoLeft () {
    if (operatingPuyoDirection == 3) {
        return operatingPuyoPosX - 1
    } else {
        return operatingPuyoPosX
    }
}
// DeleteCheckという関数名でオーバーロードしようとしたがエラーが出てしまったので関数名を変更した
function DeleteCheck2 (index: number) {
	
}
function Paint () {
    for (let 値 of sprites.allOfKind(SpriteKind.Puyo)) {
        値.destroy()
    }
    for (let カウンター = 0; カウンター <= FIELD_WIDTH * FIELD_HEIGHT - 1; カウンター++) {
        if (カウンター < 12) {
            カウンター = 12
        }
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Puyo)
        mySprite.setKind(SpriteKind.Puyo)
        SetPuyoColor(mySprite, field[カウンター])
        mySprite.setPosition(FIELD_POS_X + カウンター % FIELD_WIDTH * FIELD_CELLSIZE + FIELD_CELLSIZE / 2, FIELD_POS_Y + (Math.floor(カウンター / FIELD_WIDTH) - 2) * FIELD_CELLSIZE + FIELD_CELLSIZE / 2)
    }
    operatingPuyoSprite1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Puyo)
    SetPuyoColor(operatingPuyoSprite1, operatingPuyo[0])
    operatingPuyoSprite1.setPosition(FIELD_POS_X + operatingPuyoPosX * FIELD_CELLSIZE + FIELD_CELLSIZE / 2, FIELD_POS_Y + (operatingPuyoPosY - 2) * FIELD_CELLSIZE + FIELD_CELLSIZE / 2)
    operatingPuyoSprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Puyo)
    SetPuyoColor(operatingPuyoSprite2, operatingPuyo[1])
    operatingPuyoSprite2.setPosition(FIELD_POS_X + (operatingPuyoPosX + operatingPuyo2PosX) * FIELD_CELLSIZE + FIELD_CELLSIZE / 2, FIELD_POS_Y + (operatingPuyoPosY + operatingPuyo2PosY - 2) * FIELD_CELLSIZE + FIELD_CELLSIZE / 2)
    if (operatingPuyoPosY <= 1) {
        operatingPuyoSprite1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (operatingPuyoPosY + operatingPuyo2PosY <= 1) {
        operatingPuyoSprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
// 0:上
// 1:右
// 2:下
// 3:左
function MovePuyo (direction: number) {
    if (direction == 1) {
        if (RIGHT_MOVE_INTERVAL < rightMoveIntervalTimer) {
            if (!(MoveCheck(direction))) {
                return
            }
            operatingPuyoPosX += 1
            rightMoveIntervalTimer = 0
        }
    }
    if (direction == 2) {
        if (DOWN_MOVE_INTERVAL < downMoveIntervalTimer) {
            if (MoveCheck(direction)) {
                operatingPuyoPosY += 1
                operatingPuyoFallTimer = 0
                downMoveIntervalTimer = 0
            } else {
                if (0 < operatingPuyoPosY || operatingPuyoPosY == 0 && !(operatingPuyoDirection == 0)) {
                    field[PosToFieldIndex(operatingPuyoPosX, operatingPuyoPosY)] = operatingPuyo[0]
                    field[PosToFieldIndex(operatingPuyoPosX + operatingPuyo2PosX, operatingPuyoPosY + operatingPuyo2PosY)] = operatingPuyo[1]
                    if (operatingPuyoDirection == 2) {
                        FallFieldPuyo(PosToFieldIndex(operatingPuyoPosX + operatingPuyo2PosX, operatingPuyoPosY + operatingPuyo2PosY))
                        FallFieldPuyo(PosToFieldIndex(operatingPuyoPosX, operatingPuyoPosY))
                    } else {
                        FallFieldPuyo(PosToFieldIndex(operatingPuyoPosX, operatingPuyoPosY))
                        FallFieldPuyo(PosToFieldIndex(operatingPuyoPosX + operatingPuyo2PosX, operatingPuyoPosY + operatingPuyo2PosY))
                    }
                    state = 2
                } else {
                    if (operatingPuyoDirection == 2) {
                        if (1 == operatingPuyoPosY + operatingPuyo2PosY) {
                            field[PosToFieldIndex(operatingPuyoPosX + operatingPuyo2PosX, operatingPuyoPosY + operatingPuyo2PosY)] = operatingPuyo[1]
                        }
                    } else if (operatingPuyoDirection == 0) {
                        if (1 == operatingPuyoPosY) {
                            field[PosToFieldIndex(operatingPuyoPosX, operatingPuyoPosY)] = operatingPuyo[0]
                        }
                        field[PosToFieldIndex(operatingPuyoPosX, operatingPuyoPosY)] = operatingPuyo[0]
                        field[PosToFieldIndex(operatingPuyoPosX + operatingPuyo2PosX, operatingPuyoPosY + operatingPuyo2PosY)] = operatingPuyo[1]
                    } else {
                        field[PosToFieldIndex(operatingPuyoPosX, operatingPuyoPosY)] = operatingPuyo[0]
                        FallFieldPuyo(PosToFieldIndex(operatingPuyoPosX, operatingPuyoPosY))
                        field[PosToFieldIndex(operatingPuyoPosX + operatingPuyo2PosX, operatingPuyoPosY + operatingPuyo2PosY)] = operatingPuyo[1]
                        FallFieldPuyo(PosToFieldIndex(operatingPuyoPosX + operatingPuyo2PosX, operatingPuyoPosY + operatingPuyo2PosY))
                    }
                    for (let カウンター = 0; カウンター <= FIELD_WIDTH - 1; カウンター++) {
                        field[PosToFieldIndex(カウンター, 0)] = 0
                    }
                }
            }
        }
    }
    if (direction == 3) {
        if (LEFT_MOVE_INTERVAL < leftMoveIntervalTimer) {
            if (!(MoveCheck(direction))) {
                return
            }
            operatingPuyoPosX += -1
            leftMoveIntervalTimer = 0
        }
    }
}
function GetOperatingPuyoRight () {
    if (operatingPuyoDirection == 1) {
        return operatingPuyoPosX + 1
    } else {
        return operatingPuyoPosX
    }
}
// 0:左
// 1:右
function RotatePuyo (direction: number) {
    if (direction == 0) {
        if (LEFT_ROTATE_INTERVAL < leftRotateIntervalTimer) {
            if (operatingPuyoDirection == 0) {
                if (field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) - 1] == 0 && 0 <= operatingPuyoPosX - 1) {
                    operatingPuyoDirection += -1
                } else {
                    if (field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) + 1] == 0 && operatingPuyoPosX + 1 < FIELD_WIDTH) {
                        operatingPuyoPosX += 1
                        operatingPuyoDirection += -1
                    } else {
                        if (isRotatingLeftMiddle == true) {
                            if (!(field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) + FIELD_WIDTH] == 0) && operatingPuyoPosY + 1 < FIELD_HEIGHT) {
                                operatingPuyoPosY += 1
                            }
                            operatingPuyoDirection += 2
                            isRotatingLeftMiddle = false
                        } else {
                            isRotatingLeftMiddle = true
                        }
                    }
                }
            } else if (operatingPuyoDirection == 1) {
                operatingPuyoDirection += -1
            } else if (operatingPuyoDirection == 2) {
                if (field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoTop()) + 1] == 0 && operatingPuyoPosX + 1 < FIELD_WIDTH) {
                    operatingPuyoDirection += -1
                } else {
                    if (field[PosToFieldIndex(GetOperatingPuyoRight(), GetOperatingPuyoTop()) - 1] == 0 && 0 <= operatingPuyoPosX - 1) {
                        operatingPuyoPosX += -1
                        operatingPuyoDirection += -1
                    } else {
                        if (isRotatingLeftMiddle == true) {
                            operatingPuyoDirection += -2
                            isRotatingLeftMiddle = false
                        }
                        isRotatingLeftMiddle = true
                    }
                }
            } else {
                if (field[PosToFieldIndex(GetOperatingPuyoRight(), GetOperatingPuyoBottom()) + FIELD_WIDTH] == 0 && operatingPuyoPosY + 1 < FIELD_HEIGHT) {
                    operatingPuyoDirection += -1
                } else {
                    operatingPuyoPosY += -1
                    operatingPuyoDirection += -1
                }
            }
            if (operatingPuyoDirection < 0) {
                operatingPuyoDirection = (operatingPuyoDirection % 4 + 4) % 4
            }
            leftRotateIntervalTimer = 0
        }
    } else {
        if (RIGHT_ROTATE_INTERVAL < rightRotateIntervalTimer) {
            if (operatingPuyoDirection == 0) {
                if (field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) + 1] == 0 && operatingPuyoPosX + 1 < FIELD_WIDTH) {
                    operatingPuyoDirection += 1
                } else {
                    if (field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) - 1] == 0 && 0 <= operatingPuyoPosX - 1) {
                        operatingPuyoPosX += -1
                        operatingPuyoDirection += 1
                    } else {
                        if (isRotatingRightMiddle == true) {
                            if (!(field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) + FIELD_WIDTH] == 0) && operatingPuyoPosY + 1 < FIELD_HEIGHT) {
                                operatingPuyoPosY += 1
                            }
                            operatingPuyoDirection += 2
                            isRotatingRightMiddle = false
                        } else {
                            isRotatingRightMiddle = true
                        }
                    }
                }
            } else if (operatingPuyoDirection == 1) {
                if (field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) + FIELD_WIDTH] == 0 && operatingPuyoPosY + 1 < FIELD_HEIGHT) {
                    operatingPuyoDirection += 1
                } else {
                    operatingPuyoPosY += -1
                    operatingPuyoDirection += 1
                }
            } else if (operatingPuyoDirection == 2) {
                if (field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoTop()) - 1] == 0 && 0 <= operatingPuyoPosX - 1) {
                    operatingPuyoDirection += 1
                } else {
                    if (field[PosToFieldIndex(GetOperatingPuyoRight(), GetOperatingPuyoTop()) + 1] == 0 && operatingPuyoPosX + 1 < FIELD_WIDTH) {
                        operatingPuyoPosX += 1
                        operatingPuyoDirection += 1
                    } else {
                        if (isRotatingRightMiddle == true) {
                            operatingPuyoDirection += 2
                            isRotatingRightMiddle = false
                        }
                        isRotatingRightMiddle = true
                    }
                }
            } else {
                operatingPuyoDirection += 1
            }
            if (operatingPuyoDirection > 3) {
                operatingPuyoDirection = operatingPuyoDirection % 4
            }
            rightRotateIntervalTimer = 0
        }
    }
    if (operatingPuyoDirection == 0) {
        operatingPuyo2PosX = 0
        operatingPuyo2PosY = -1
    } else if (operatingPuyoDirection == 1) {
        operatingPuyo2PosX = 1
        operatingPuyo2PosY = 0
    } else if (operatingPuyoDirection == 2) {
        operatingPuyo2PosX = 0
        operatingPuyo2PosY = 1
    } else {
        operatingPuyo2PosX = -1
        operatingPuyo2PosY = 0
    }
}
function MoveCheck (direction: number) {
    if (direction == 1) {
        if (GetOperatingPuyoRight() + 1 < FIELD_WIDTH && field[PosToFieldIndex(GetOperatingPuyoRight(), GetOperatingPuyoBottom()) + 1] == 0) {
            return true
        }
    }
    if (direction == 2) {
        if (GetOperatingPuyoBottom() + 1 < FIELD_HEIGHT && field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) + FIELD_WIDTH] == 0 && field[PosToFieldIndex(GetOperatingPuyoRight(), GetOperatingPuyoBottom()) + FIELD_WIDTH] == 0) {
            return true
        }
    }
    if (direction == 3) {
        if (-1 < GetOperatingPuyoLeft() - 1 && field[PosToFieldIndex(GetOperatingPuyoLeft(), GetOperatingPuyoBottom()) - 1] == 0) {
            return true
        }
    }
    return false
}
function GetOperatingPuyoBottom () {
    if (operatingPuyoDirection == 2) {
        return operatingPuyoPosY + 1
    } else {
        return operatingPuyoPosY
    }
}
function DeleteCheck () {
	
}
function FallFieldPuyo (index: number) {
    if (0 <= index) {
        if (FallCheck(index)) {
            field[index + FIELD_WIDTH] = field[index]
            field[index] = 0
            FallFieldPuyo(index + FIELD_WIDTH)
        } else {
            return
        }
    } else {
    	
    }
}
function Initialize () {
    score = 0
    state = 0
    operatingPuyoFallTimer = 0
    operatingPuyoDirection = 0
    operatingPuyo2PosX = 0
    operatingPuyo2PosY = -1
    field = [FIELD_WIDTH * FIELD_HEIGHT]
    for (let カウンター2 = 0; カウンター2 <= FIELD_WIDTH * FIELD_HEIGHT - 1; カウンター2++) {
        field[カウンター2] = 0
    }
    operatingPuyo = [2]
    for (let カウンター22 = 0; カウンター22 <= 1; カウンター22++) {
        operatingPuyo[カウンター22] = 0
    }
    nextPuyo = [2]
    for (let カウンター3 = 0; カウンター3 <= 1; カウンター3++) {
        nextPuyo[カウンター3] = randint(1, 4)
    }
    next2Puyo = [2]
    for (let カウンター4 = 0; カウンター4 <= 1; カウンター4++) {
        next2Puyo[カウンター4] = randint(1, 4)
    }
    scene.setBackgroundColor(3)
    fieldFrameImage = image.create(FIELD_WIDTH * FIELD_CELLSIZE + 2, (FIELD_HEIGHT - 2) * FIELD_CELLSIZE + 2)
    fieldFrameImage.drawRect(0, 0, FIELD_WIDTH * FIELD_CELLSIZE + 2, (FIELD_HEIGHT - 2) * FIELD_CELLSIZE + 2, 15)
    fieldFrameSprite = sprites.create(fieldFrameImage, SpriteKind.UI)
    fieldFrameSprite.setPosition(FIELD_POS_X + FIELD_WIDTH * FIELD_CELLSIZE / 2, FIELD_POS_Y + (FIELD_HEIGHT - 2) * FIELD_CELLSIZE / 2)
}
function PushNextPuyo () {
    for (let カウンター = 0; カウンター <= 1; カウンター++) {
        operatingPuyo[カウンター] = nextPuyo[カウンター]
    }
    for (let カウンター = 0; カウンター <= 1; カウンター++) {
        nextPuyo[カウンター] = next2Puyo[カウンター]
    }
    for (let カウンター = 0; カウンター <= 1; カウンター++) {
        next2Puyo[カウンター] = randint(1, 4)
    }
    operatingPuyoPosX = 2
    operatingPuyoPosY = 2
    leftRotateIntervalTimer = 0
    rightRotateIntervalTimer = 0
    leftMoveIntervalTimer = 0
    rightMoveIntervalTimer = 0
    downMoveIntervalTimer = 0
    operatingPuyoFallTimer = 0
    operatingPuyoDirection = 0
    operatingPuyo2PosX = 0
    operatingPuyo2PosY = -1
    state = 1
}
function FallCheck (index: number) {
    if (field[index + FIELD_WIDTH] == 0 || Math.floor(index / FIELD_WIDTH) + 1 > FIELD_HEIGHT) {
        return true
    } else {
        return false
    }
}
let fieldFrameSprite: Sprite = null
let fieldFrameImage: Image = null
let next2Puyo: number[] = []
let nextPuyo: number[] = []
let score = 0
let isRotatingRightMiddle = false
let rightRotateIntervalTimer = 0
let isRotatingLeftMiddle = false
let leftRotateIntervalTimer = 0
let leftMoveIntervalTimer = 0
let state = 0
let operatingPuyoFallTimer = 0
let downMoveIntervalTimer = 0
let rightMoveIntervalTimer = 0
let operatingPuyo2PosY = 0
let operatingPuyo2PosX = 0
let operatingPuyoSprite2: Sprite = null
let operatingPuyo: number[] = []
let operatingPuyoSprite1: Sprite = null
let field: number[] = []
let mySprite: Sprite = null
let operatingPuyoDirection = 0
let FIELD_POS_Y = 0
let FIELD_POS_X = 0
let operatingPuyoPosY = 0
let operatingPuyoPosX = 0
let DOWN_MOVE_INTERVAL = 0
let RIGHT_MOVE_INTERVAL = 0
let LEFT_MOVE_INTERVAL = 0
let RIGHT_ROTATE_INTERVAL = 0
let LEFT_ROTATE_INTERVAL = 0
let FIELD_CELLSIZE = 0
let FIELD_HEIGHT = 0
let FIELD_WIDTH = 0
FIELD_WIDTH = 6
FIELD_HEIGHT = 14
FIELD_CELLSIZE = 6
let OPERATING_PUYO_FALL_TIME = 2000
let FPS = 60
LEFT_ROTATE_INTERVAL = 1000 / FPS * 3
RIGHT_ROTATE_INTERVAL = 1000 / FPS * 3
LEFT_MOVE_INTERVAL = 1000 / FPS * 2
RIGHT_MOVE_INTERVAL = 1000 / FPS * 2
DOWN_MOVE_INTERVAL = 0
operatingPuyoPosX = 0
operatingPuyoPosY = 0
FIELD_POS_X = 80 - FIELD_WIDTH * FIELD_CELLSIZE / 2
FIELD_POS_Y = 60 - FIELD_HEIGHT * FIELD_CELLSIZE / 2
Initialize()
PushNextPuyo()
Paint()
game.onUpdateInterval(1000 / FPS, function () {
    if (state == 1) {
        if (controller.A.isPressed()) {
            RotatePuyo(1)
        }
        if (controller.B.isPressed()) {
            RotatePuyo(0)
        }
        if (controller.right.isPressed()) {
            MovePuyo(1)
        }
        if (controller.left.isPressed()) {
            MovePuyo(3)
        }
        if (!(controller.right.isPressed() || controller.left.isPressed())) {
            if (controller.down.isPressed()) {
                MovePuyo(2)
            }
        }
        if (operatingPuyoFallTimer > OPERATING_PUYO_FALL_TIME) {
            MovePuyo(2)
        }
        operatingPuyoFallTimer += 1000 / FPS
        leftRotateIntervalTimer += 1000 / FPS
        rightRotateIntervalTimer += 1000 / FPS
        rightMoveIntervalTimer += 1000 / FPS
        leftMoveIntervalTimer += 1000 / FPS
        downMoveIntervalTimer += 1000 / FPS
    } else if (state == 2) {
        PushNextPuyo()
    } else {
    	
    }
    Paint()
})
