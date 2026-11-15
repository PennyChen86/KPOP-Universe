# ✦ K-POP Universe — 個人追星收藏館

*A Little Universe of My Favorite Stars.*

夢幻紫粉色的單頁 K-POP 粉絲收藏網站!

## 五大功能
1. **Home** — 夢幻首頁、收藏數量、網站導覽。
2. **My Artists** — 從 `data.js` 自動生成的團體與喜愛成員卡片。
3. **Music Archive** — 歌曲搜尋、團體篩選、愛心收藏、最愛清單與觀看官方 MV。
4. **My Memories** — 音樂與舞台影像收藏牆，照片卡片可點擊開啟官方 MV；不冒稱曾親自參與活動。
5. **My Wishlist** — 新增／完成／刪除願望，以瀏覽器 `localStorage` 儲存，**不同裝置不會同步**。

## 資料與客製化
- 請修改 `data.js` 中的 `artists`, `songs`, `memories`。遵循 `AGENTS.md` 的欄位規格，新增記錄會自動出現在網站上。
- 目前十八首歌均附上已確認的官方 YouTube MV 連結。可按愛心加入最愛並點選「我的最愛」篩選，收藏會保存在此瀏覽器的 `localStorage`。
- 目前版本已支援 **藝人照片** 與 **專輯封面**。示範資料使用 `data.js` 中的 `photo` / `cover` 欄位與公開圖片連結；若要正式提交，建議改成你自行放在 `assets/` 的圖片，並更新相對路徑。
- 不要將未經確認的個人演唱會日期、活動故事或其他個資直接公開。本版 Memories 展示公開音樂影像，不聲稱是站長的真實參與經歷。
- `artists[]` 現在可加入 `photo`、`photoAlt`；`songs[]` 可加入 `album`、`cover`、`coverAlt`。若圖片欄位留空，網站仍會顯示原本的漸層卡片或無封面歌曲卡。

## 本地預覽
直接在瀏覽器開啟 `index.html` 即可。`data.js` 不使用 `fetch`，因此在本地 `file://` 模式也可載入。使用 VS Code Live Server 也可以。

