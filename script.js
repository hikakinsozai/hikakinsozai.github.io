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