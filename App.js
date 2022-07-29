//Call function
function showSuccess() {
    toast({
        message: "Bạn đã đăng ký thành công",
        title: "SUCCESS",
        type: 'success',
        duration: 3000,
    });
}

function showWarn() {
    toast({
        message: "Cảnh báo !!!",
        title: "WARNING !!!",
        type: 'warn',
        duration: 3000,
    })
}

function showError() {
    toast({
        message: "Có lỗi xảy ra !",
        title: "ERROR",
        type: 'danger',
        duration: 3000,
    })
}

//body



function toast({ message = "", title = "", type = "", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {

        const toast = document.createElement("div");
        const icons = {
            success: '<i class="fa-solid fa-check"></i>',
            warn: '<i class="fa-solid fa-triangle-exclamation"></i>',
            danger: '<i class="fa-solid fa-circle-exclamation"></i>',
        };
        const icon = icons[type]
        toast.onclick = (e) => {
            e.stopPropagation()
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(remove)
            }
        }
        toast.classList.add("toast", `toast--${type}`);
        toast.innerHTML = ` 
        <div class="toast__icon">
        ${icon}
        </div>
        <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__msg">${message}}</p>
        </div>
        <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        main.appendChild(toast)

        var remove = setTimeout(() => {
            main.removeChild(toast)
        }, 4000)
    }

}