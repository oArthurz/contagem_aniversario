AOS.init()

document.addEventListener("DOMContentLoaded", function()
{
    setInterval(function()
    {
        const evento = new Date("Marc, 18, 2026")
        const timeStampEvent = evento.getTime()

        const hoje = new Date()
        const timeStampHoje = hoje.getTime()
        const diferencaTimeStamp = timeStampEvent - timeStampHoje


        const dias = 1000 * 60 * 60 * 24
        const horas = 1000 * 60 * 60
        const minutos = 1000 * 60


        const difeDias = Math.floor(diferencaTimeStamp / dias)
        const difeHoras = Math.floor(diferencaTimeStamp % dias / horas)
        const difeMinutos = Math.floor(diferencaTimeStamp % horas / minutos)
        const difeSegundos = Math.floor(diferencaTimeStamp % minutos / 1000)

        console.log("Dias:", difeDias)
        console.log("Horas:", difeHoras)
        console.log("Minutos:", difeMinutos)
        console.log("Segundos:", difeSegundos)
        document.getElementById('exibeNaTela').innerHTML = `${difeDias}d ${difeHoras}h ${difeMinutos}m ${difeSegundos}s`
    })
})