let canoe = document.getElementById('canoeAnimate');
let flag = document.getElementById('flagAnimate');
let pole = document.getElementById('poleAnimate');
let flagBox = document.getElementById('flagBoxAnimate');
let flagNumber = document.getElementById('testNum');
//  increment for each canoe movement frame count should match frame #
let frameCount = 21;
let iAnime = 1;
let testCounter = 0;

function runRewardAnimation() {
    canoe.className = 'canoe' + iAnime;
    flag.className = 'flag' + iAnime;
    pole.className = 'pole' + iAnime;
    flagBox.className = 'flagBox' + iAnime;
    setTimeout(function () {    //  call a 0.5s setTimeout when the loop is called
        iAnime++;                     //  increment the counter
        if (iAnime <= frameCount) {   //  if the counter < frameCount, call the loop function
            runRewardAnimation();     //  .. again which will trigger another
        }                        //  .. setTimeout()
     }, 200)
};

function resetAnimation() {
    canoe.className = 'canoe1';
    flag.className = 'flag1';
    pole.className = 'pole1';
    flagBox.className = 'flagBox1';
    iAnime = 1;
    testCounter ++;
    flagNumber.innerText= testCounter.toString();

}
