// 复制文本功能
function copyText(text) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    // 使用Layui的提示组件
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.msg('已复制: ' + text, {
            time: 1000,
            icon: 1
        });
    });
}

// 页面加载完成后
window.onload = function() {
    // 隐藏加载动画
    document.getElementById('loading').style.display = 'none';
    
    // 返回顶部按钮
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}; 