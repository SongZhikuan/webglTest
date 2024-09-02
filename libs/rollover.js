window.addEventListener('load', function() {
    const images = document.images;
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const rollover = img.dataset.rollover;
        if (!rollover) continue;
        // 缓存rollover图片
        (new Image()).src = img.dataset.rollover;
        // 标识当前img
        img.dataset.rollout = img.src;

        img.onmouseover = function() {
            this.src = this.dataset.rollover
        }
        img.onmouseout = function() {
            this.src = this.dataset.rollout;
        }
    }
});