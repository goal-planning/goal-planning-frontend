let canoe = document.getElementById('canoeAnimate');
let flag = document.getElementById('flagAnimate');
let pole = document.getElementById('poleAnimate');
let flagBox = document.getElementById('flagBoxAnimate');
let flagNumber = document.getElementById('testNum');
let canoePicture = document.getElementById('canoePicture');
//  increment for each canoe movement frame count should match frame #
let frameCount = 44;
let iAnime = 1;
let testCounter = 0;

function runRewardAnimation() {
    canoe.className = 'canoe' + iAnime;
    flag.className = 'flag' + iAnime;
    pole.className = 'pole' + iAnime;
    flagBox.className = 'flagBox' + iAnime;
    setTimeout(function () {    //  call a 0.5s setTimeout when the loop is called
        iAnime++;                     //  increment the counter
        if (iAnime <= 42) {   //  if the counter < frameCount, call the loop function
            runRewardAnimation();     //  .. again which will trigger another
        }                        //  .. setTimeout()
        if (iAnime == 43) {
          canoePicture.src = "/img/canoe-one.png";
          runRewardAnimation();
        }

        if (iAnime == 44) {
          canoePicture.src = "/img/canoe-three.png";
        }
     }, 150)

     console.log(canoePicture.src);

};

function resetAnimation() {
    canoe.className = 'canoe1';
    flag.className = 'flag1';
    pole.className = 'pole1';
    flagBox.className = 'flagBox1';
    iAnime = 1;
    testCounter ++;
    flagNumber.innerText= testCounter.toString();
    canoePicture.src = "/img/canoe-two.png";

}
