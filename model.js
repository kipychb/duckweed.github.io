const modal = document.getElementById('productModal');

// 現在只需要 5 個參數：名稱, 圖片, 描述, 價格, 標籤陣列
function openModal(name, imgPath, desc, price, tags) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalImg').src = imgPath;
    
    // 【重點】因為你在 HTML 裡用了 <br>，所以這裡要用 innerHTML 才會正確換行
    document.getElementById('modalDesc').innerHTML = desc;
    document.getElementById('modalPrice').innerText = price;
    
    // 處理標籤
    const tagGroup = document.getElementById('modalTags');
    tagGroup.innerHTML = ''; // 先清空舊標籤
    if (tags && Array.isArray(tags)) {
        tags.forEach(tagText => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.innerText = tagText;
            tagGroup.appendChild(span);
        });
    }

    // 顯示彈窗
    modal.style.display = 'flex'; 
}

function closeModal() {
    modal.style.display = 'none'; 
}

// 點擊彈窗外部區域自動關閉
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}