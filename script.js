document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".download-btn");
  const modal = document.getElementById("confirmation-modal");
  const confirmYes = document.getElementById("confirm-yes");
  const confirmNo = document.getElementById("confirm-no");
  let currentFile = ""; // 現在ダウンロード対象のファイル名

  // 各ダウンロードボタンにクリックイベントを設定
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      currentFile = button.dataset.file;
      modal.classList.remove("hidden"); // モーダルを表示
    });
  });

  // 「はい」ボタンをクリックしたとき
  confirmYes.addEventListener("click", () => {
    // ダウンロードリンクを作成
    const link = document.createElement("a");
    link.href = currentFile; // ファイルのURLを指定
    link.download = currentFile.split("/").pop(); // ダウンロードされるファイル名を設定

    // リンクを一時的に文書に追加してクリックを発生させ、ダウンロードを開始
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    modal.classList.add("hidden"); // モーダルを非表示にする
  });

  // 「いいえ」ボタンをクリックしたとき
  confirmNo.addEventListener("click", () => {
    modal.classList.add("hidden"); // モーダルを非表示にする
  });
});
document.addEventListener('DOMContentLoaded', function() {
    // 検索バーの入力イベント
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchQuery = this.value.toLowerCase();
            const videoItems = document.querySelectorAll('.video-item');
            
            videoItems.forEach(function(item) {
                const title = item.querySelector('.video-title').textContent.toLowerCase();
                if (title.includes(searchQuery)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const videosPerPage = 24;
    let currentPage = 1;
    const videoItems = document.querySelectorAll('.video-item');
    const totalPages = Math.ceil(videoItems.length / videosPerPage);

    // ページの表示を切り替える関数
    function displayPage(page) {
        const startIndex = (page - 1) * videosPerPage;
        const endIndex = startIndex + videosPerPage;

        // 動画アイテムの表示/非表示を設定
        videoItems.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        updatePagination(page);
    }

    // 最初のページを表示
    displayPage(currentPage);

    // ページリンクの更新
    function updatePagination(page) {
        const pageLinks = document.querySelectorAll('.page-link');
        pageLinks.forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.page-link[data-page="${page}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // ページネーションの作成
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';  // 既存のページネーションをクリア

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('span');
        pageLink.classList.add('page-link');
        pageLink.textContent = i;
        pageLink.setAttribute('data-page', i);

        pageLink.addEventListener('click', function() {
            currentPage = i;
            displayPage(currentPage);
        });

        paginationContainer.appendChild(pageLink);
    }
});
