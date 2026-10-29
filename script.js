function changeMessage() {
    const messages = [
        "Chào mừng bạn đến với website của Đinh Thị Duyên!",
        "Pipeline CI/CD đang hoạt động tốt!",
        "GitHub Actions thật tuyệt vời!",
        "Deploy thành công lên GitHub Pages!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMessage;
}