function showModalWin() {

    var darkLayer = document.createElement('div');
    darkLayer.id = 'shadow';
    document.body.appendChild(darkLayer);

    var modalWin = document.getElementById('mWin'); // находим наше "окно"
    modalWin.style.display = 'block';

    // при клике на слой затемнения все исчезнет
    darkLayer.onclick = function () {
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none';
        return false;
    };
}