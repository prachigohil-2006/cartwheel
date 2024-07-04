const stickMan = document.querySelector('.stick-man');
const startstopButton = document.getElementById('startstop');

let isAnimating = true;

startstopButton.addEventListener('click', () => {
    if(isAnimating){
        stickMan.style.animationPlayState = 'paused';
    }else{
        stickMan.style.animationPlayState = 'running';
    }
    isAnimating = !isAnimating;
});
const speedControl = document.getElementById('speed-control');

speedControl.addEventListener('input', (e) => {
    const speed = e.target.value;
    const animationSpeed = 10 - speed; 
    stickMan.style.animationDuration = `${animationSpeed}s`;
});


