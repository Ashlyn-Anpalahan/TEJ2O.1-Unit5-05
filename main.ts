/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Feb 2026
 * This program show lights of a traffic light. 
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// 
input.onButtonPressed(Button.A, function () {
    // turn on green
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    basic.pause(2000)
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))

    // turn on yellow
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(2000)
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))

    // turn on green
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    basic.pause(2000)
    neopixelStrip.show()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))

    basic.showIcon(IconNames.Happy)
})
