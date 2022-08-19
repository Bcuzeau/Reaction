input.onButtonPressed(Button.A, function () {
    if (Ok) {
        basic.showString("A A A")
    } else {
        basic.showString("B B B")
    }
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (Ok) {
        basic.showString("B B B")
    } else {
        basic.showString("A A A")
    }
    control.reset()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(Tempo * 100)
    Ok = 1
    music.playTone(3000, music.beat(BeatFraction.Sixteenth))
})
let Ok = 0
let Tempo = 0
Tempo = randint(2, 45)
Ok = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
