input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . . # . .
        . # # # .
        . . # . .
        # . . . #
        `)
    servos.P0.setAngle(0)
    basic.pause(1000)
    servos.P1.setAngle(0)
    for (let index = 0; index < 4; index++) {
        servos.P1.setAngle(20)
        basic.pause(500)
        servos.P1.setAngle(0)
        basic.pause(500)
    }
    servos.P1.setAngle(130)
    servos.P0.setAngle(180)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
servos.P0.setAngle(180)
basic.pause(100)
servos.P1.setAngle(130)
