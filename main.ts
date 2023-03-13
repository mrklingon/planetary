input.onButtonPressed(Button.A, function () {
    if (info) {
        basic.showString("" + (planets[planet]))
    } else {
        planet += 1
        if (planet >= planets.length) {
            planet = 0
        }
        basic.showString("" + (planets[planet]))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (info) {
        info = false
        music.playTone(131, music.beat(BeatFraction.Half))
        basic.showString("planets")
    } else {
        info = true
        music.playTone(523, music.beat(BeatFraction.Half))
        basic.showString("info")
    }
})
input.onButtonPressed(Button.B, function () {
    if (info) {
        basic.showString("Year:")
        basic.showString("" + (year[planet]))
        basic.showString("Day:")
        basic.showString("" + (day[planet]))
    } else {
        planet += -1
        if (planet < 0) {
            planet = planets.length - 1
        }
        basic.showString("" + (planets[planet]))
    }
})
let info = false
let year: number[] = []
let planet = 0
let day: number[] = []
let planets: string[] = []
images.createBigImage(`
    . . # . . . . . . .
    . # # # . . . # # .
    . . # . . . # # # #
    . . . . . # # # # #
    . . . . # # # # # #
    `).scrollImage(1, 200)
planets = [
"Mercury",
"Venus",
"Earth",
"Mars",
"Ceres",
"Jupiter",
"Saturn",
"Uranus",
"Neptune",
"Pluto",
"Eris"
]
day = [
59,
243,
1,
1.03,
0.38,
0.42,
0.44,
0.72,
0.72,
0.67,
6.4,
8
]
basic.showString("" + (planets[planet]))
year = [
0.24,
0.62,
1,
1.9,
4.6,
11.9,
29.4,
83.7,
163.7,
248,
557
]
planet = 0
info = false
basic.forever(function () {
	
})
