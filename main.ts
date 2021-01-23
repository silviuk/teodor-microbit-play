// Ridica grapa
maqueen.servoRun(maqueen.Servos.S1, 0)
basic.pause(1000)
// Mergi in fata 3s
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
basic.pause(3000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
// Grapa jos
maqueen.servoRun(maqueen.Servos.S1, 55)
// Mergi in fata 2s cu grapa jos, sa iei obiectul
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
// Mergi putin incet inapoi
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
// Ridica grapa mai mult ca sa stea bine obiectul
maqueen.servoRun(maqueen.Servos.S1, 20)
basic.pause(1000)
// Mergi in spate un pic, ca sa ai loc sa te intorci
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 70)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
// Intoarce-te
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
// Mergi 5s in fata
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
basic.pause(5000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
// Lasa grapa jos
maqueen.servoRun(maqueen.Servos.S1, 70)
basic.pause(1000)
// Da-te putin in spate, brusc, ca sa cada obiectul
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
// Ridica grapa la pozitia de baza
maqueen.servoRun(maqueen.Servos.S1, 0)
basic.pause(1000)
// Mergi in spate 2s
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 80)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
