// import Chito from '../../src/main';
var $p2Num = document.getElementById('p2-num');
var $p2 = document.getElementById('p2');
var $p1Num = document.getElementById('p1-num');
var $p1 = document.getElementById('p1');
var $st = document.getElementById('status');

function goBottom() {
    $st.scrollTop += 100;
}

var Animation = Chito.Animation,
    Clip = Chito.Clip;

var clip1 = new Clip({
    duration: 5000,
    repeat: 1
}, {
    x: [ 0, 200 ],
    y: [ 0, 200 ],
    width: [ 50, 100, 50 ],
    height: [ 50, 100, 50 ],
    fill: [ '#22e1ee', '#eb5e17' ]
});

clip1.on('update', function (progress, keyframe) {
    $p1Num.innerText = ((progress * 100) >> 0) + '%';
    $p1.style.left = keyframe.x + 'px';
    $p1.style.top = keyframe.y + 'px';
    $p1.style.width = keyframe.width + 'px';
    $p1.style.height = keyframe.height + 'px';
    $p1.style.backgroundColor = keyframe.fill;
});

var clip2 = new Clip({
    duration: 5000,
    repeat: 1
}, {
    x: [ 0, 200, 200, 0, 0 ],
    y: [ 0, 0, 200, 200, 0 ],
    fill: [ '#22e1ee', '#eb5e17' ]
});

clip2.on('update', function (progress, keyframe) {
    $p2Num.innerText = ((progress * 100) >> 0) + '%';
    $p2.style.left = keyframe.x + 'px';
    $p2.style.top = keyframe.y + 'px';
    $p2.style.backgroundColor = keyframe.fill;
});

var animation = new Animation();

animation
    .on('start', function () {
        $st.value += '\n Start... \n';
        goBottom()
    })
    .on('reset', function () {
        $st.value += '\n Reset... \n';
        goBottom()
    })
    .on('update', function () {
        $st.value += '.';
        goBottom()
    })
    .on('complete', function () {
        $st.value += ' \n Complete... \n';
        goBottom()
    })
    .on('stop', function () {
        $st.value += '\n Stop... \n';
        goBottom()
    })
    .on('pause', function () {
        $st.value += '\n Pause... \n';
        goBottom()
    });

animation.addClip([ clip1, clip2 ]);
animation.start();

var $startBtn = document.getElementById('start');
var $stopBtn = document.getElementById('stop');
var $pauseBtn = document.getElementById('pause');
var $resetBtn = document.getElementById('reset');

$startBtn.onclick = function () {
    animation.start();
};

$stopBtn.onclick = function () {
    animation.stop();
};

$pauseBtn.onclick = function () {
    animation.pause();
};

$resetBtn.onclick = function () {
    animation.reset();
};