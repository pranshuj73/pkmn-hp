console.log(`
██████╗    ██╗
██╔══██╗   ██║
██████╔╝   ██║
██╔═══██   ██║
██║   ╚█████╔╝
╚═╝    ╚════╝ 
say hi -> pranshujha.com`)

// --- //


function updateTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.querySelector('.time').textContent = `${time}`;
}

updateTime();
setInterval(updateTime, 1000);