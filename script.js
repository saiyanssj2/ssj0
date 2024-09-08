function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ẩn tất cả nội dung tab
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa lớp active cho tất cả các tab
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Hiển thị tab đã chọn và thêm lớp active cho nút tab đó
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Tải nội dung cho Tab 2
    if (tabName === 'Tab2') {
        loadTabContent('Tab2');
    }

    if (tabName === 'Tab3') {
        loadTabContent('Tab3');
    }
}

function loadTabContent(tabName) {
    let url = '';
    
    if (tabName === 'Tab2') {
        url = 'tutorial.html';
    } else if (tabName === 'Tab3') {
        url = 'montage.html';
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(tabName).innerHTML = data;
            // Cập nhật tiêu đề nếu là Tab2
            if (tabName === 'Tab2') {
                updateH2InTab2();
            }
        })
        .catch(error => console.error(`Error loading ${tabName} content:`, error));
}

function updateH2InTab2() {
    const h2 = document.querySelectorAll("#Tab2 h2");
    h2.forEach((heading, index) => {
        heading.textContent = `${index + 1}. ` + heading.textContent;
    });
}

// Mở tab mặc định khi tải trang
window.onload = function() {
    document.getElementsByClassName("tablinks")[0].click();
};
