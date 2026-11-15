# ✦ K-POP Universe — 個人追星收藏館

*A Little Universe of My Favorite Stars.*

夢幻紫粉色的單頁 K-POP 粉絲收藏網站。此專案使用 **HTML + CSS + 原生 JavaScript**，不需要任何建置指令、資料庫或付費服務，可直接部署到 GitHub Pages。

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

## GitHub Pages 部署（無需建置）
1. 在 GitHub 建立公開 Repository，例如 `kpop-universe`。
2. 將**本資料夾內所有檔案**（不是外層資料夾本身）上傳到 Repository 的根目錄；確認根目錄有 `index.html`、`AGENTS.md`、`style.css`、`data.js`、`script.js`。
3. 打開 **Settings → Pages**，在 **Build and deployment** 將 Source 設成 **Deploy from a branch**，Branch 選 `main`，資料夾選 `/(root)`，儲存。
4. 發佈成功後網址通常是 `https://<你的 GitHub 帳號>.github.io/kpop-universe/`（若 Repository 名稱不同請替換）。
5. 若尚未看到內容，檢查 GitHub Actions / Pages 狀態並確認 `index.html` 位於發佈根目錄。

## 教師作業：AGENTS.md 如何重複使用
讓另一個 AI 先讀根目錄的 `AGENTS.md`，再輸入：

> 請依照 AGENTS.md 規則，在目前網站新增 Favorite Stages 區塊，沿用夢幻紫粉色設計，建立可重複使用的舞台卡片與資料結構，不得影響既有五大功能，最後列出修改的檔案和測試結果。

這能驗證 AI 是否真的理解專案架構、視覺系統與修改守則。測試時應保留新增前後畫面與 Git commit 差異截圖。

## 提交檢查
- [ ] `AGENTS.md` 規則完整、放在 Repository 根目錄
- [ ] 網頁公開可開啟，手機與桌機正常顯示
- [ ] 音樂篩選、搜尋、願望清單正常
- [ ] 沒有捏造個人紀錄與未授權資源
- [ ] 分享 Repository、網站網址、規則檔，以及 AI 後續擴充案例的說明

本網站為非官方、非商業粉絲作品；所有藝人與歌曲名稱屬於其各自權利人。

## 本次延伸功能示範
此版本是在原先的五大區塊架構下，遵循 `AGENTS.md` 擴充「歌曲最愛收藏」、「官方 MV 連結」、「追星影像牆」與「首頁照片拼貼」，保留原本搜尋、願望清單及導覽功能。

圖片目前透過 Wikimedia Commons / YouTube 公開圖片 URL 顯示；圖片並未包入 ZIP。外部圖床可能限制連結或日後更換圖片，正式公開前請確認授權條件及實際瀏覽器載入效果。使用者若有可合法使用的照片，可放入 `assets/` 並把 `data.js` 路徑改為相對路徑。

## 首頁圖片來源（與 Artists 收藏照片不同）
首頁的三張圖來自 Wikimedia Commons。分享網站時，請保留以下來源與授權資訊：
- NMIXX：[`NMIXX 220206 03.png`](https://commons.wikimedia.org/wiki/File:NMIXX_220206_03.png)，來源與授權詳見檔案頁。
- ITZY：[`Itzy 241023.jpg`](https://commons.wikimedia.org/wiki/File:Itzy_241023.jpg)，原作者 티비텐 TV10，CC BY 3.0。網站只裁切顯示範圍。
- TWICE：[`Twice in Seattle.jpg`](https://commons.wikimedia.org/wiki/File:Twice_in_Seattle.jpg)，攝影 David Lee，來源與授權詳見檔案頁。網站只裁切顯示範圍。

以上皆為外部圖片連結，需連線才能載入，個別圖片來源可能變更。

## 曲庫擴充（2026-11-15）
- Music Archive 現有 **18 首歌曲**：NMIXX／ITZY／TWICE 各 6 首。
- 新增歌曲的官方 MV 入口、專輯名稱及封面網址放在 `data.js`；每首使用不重複的 `id`，原有 `localStorage` 收藏不受影響。
- 專輯封面使用維基百科圖片網址作為範例，圖片可能因來源權利或跨站限制無法載入。公開發布前應確認圖片使用條款；建議使用獲授權的本地素材。
