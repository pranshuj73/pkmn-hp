console.log(`
██████╗    ██╗
██╔══██╗   ██║
██████╔╝   ██║
██╔═══██   ██║
██║   ╚█████╔╝
╚═╝    ╚════╝ 
say hi -> pranshujha.com`)

// --- //

// pause video when tab is inactive
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.querySelector('#myVideo').pause();
    }
    if (!document.hidden) {
        document.querySelector('#myVideo').play();
    }
});


function updateTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.querySelector('.time').textContent = `${time}`;
}

updateTime();
setInterval(updateTime, 1000);