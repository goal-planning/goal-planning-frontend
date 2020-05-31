let canoe = document.getElementById('canoeAnimate');
let flag = document.getElementById('flagAnimate');
let pole = document.getElementById('poleAnimate');
let flagBox = document.getElementById('flagBoxAnimate');
let flagNumber = document.getElementById('testNum'); document.getElementById('canoePicture');
//  increment for each canoe movement frame count should match frame #
let frameCount = 140;
let iAnime = 1;
let testCounter = 0;
//play the animation to loop through frame count
function runRewardAnimation() {
    canoe.className = 'canoe' + iAnime;
    flag.className = 'flag' + iAnime;
    pole.className = 'pole' + iAnime;
    flagBox.className = 'flagBox' + iAnime;
    setTimeout(function () {

        //  call a 0.5s setTimeout when the loop is called
        iAnime++;                     //  increment the counter
        flagNumber.innerText= iAnime.toString();
        console.log(iAnime.toString());
        // if (iAnime <= 57) {   //  if the counter < frameCount, call the loop function
        //     runRewardAnimation();     //  .. again which will trigger another
        // }                        //  .. setTimeout()
        // else if (iAnime == 58)  {
        //   canoePicture.src = "/img/canoe-one.png";
        //   runRewardAnimation();
        // }
        // else if (iAnime == 59)  {
        //   canoePicture.src = "/img/canoe-three.png";
        //   runRewardAnimation();
        // }
        // else if (iAnime <=90)  {
        //   runRewardAnimation();
        // }

        // else {}
        if (iAnime<frameCount){
          runRewardAnimation();
        }
     }, 150)
};
//reset to frame 1; iAnime is frame reference
function resetAnimation() {
    testCounter ++;
    flagNumber.innerText = testCounter.toString();
    canoe.className = 'canoe1';
    flag.className = 'flag1';
    pole.className = 'pole1';
    flagBox.className = 'flagBox1';
    iAnime = 1;
    flagNumber.innerText= iAnime.toString();
    canoePicture.src = "/img/canoe-two.png";
}
