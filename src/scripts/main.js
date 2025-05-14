AOS.init();

const dataEvento = new Date("Dec 12, 2026 19:00:00");
const TimeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval (function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = TimeStampEvento -  timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const MinutosEmMs = 1000 * 60;

    const diasAteoEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteEvento % diasEmMs) / horaEmMs);
    const minutosAteoEvento = Math.floor((distanciaAteEvento % horaEmMs) / MinutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteEvento % MinutosEmMs) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteoEvento}d ${horasAteOEvento}h ${minutosAteoEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = `Evento expirado!!`;
    }

}, 1000);
