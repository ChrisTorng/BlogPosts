# Advanced GitHub Copilot Recording
# GitHub Copilot 進階實戰及策略 課程錄影
**包括 錄影/字幕 處理相關經驗談**

![](<../Images/ChatGPT Image Apr 9, 2025, 09_53_32 PM.png>)

這裡我首先要感謝 [Will 保哥](https://blog.miniasp.com/) 提供付費 Zoom 資源給我直播使用，又親自上線參與課程，提供大家很多寶貴意見。

若有人沒跟到先前的[《GitHub Copilot 進階實戰及策略》線上課程](https://christorng.substack.com/p/github-copilot-advanced-class)，我已上傳錄影:

- **錄影**: [2025/4/7《GitHub Copilot 進階實戰及策略》課程](https://www.youtube.com/watch?v=gnXLUEJocJA&ab_channel=ChrisTorng)
- **簡報**: [Advanced GitHub Copilot.pptx](https://onedrive.live.com/view.aspx?resid=ECA6AAC242D1F37F%2171735&authkey=!AKtAwIAF1PNoIjk)
- **實戰原始碼**: [ChrisTorng/3d-phone-show7](https://github.com/ChrisTorng/3d-phone-show7)
- **成果展示**: [3D 手機展示](https://christorng.github.io/3d-phone-show7/)
- **所有提示文字**: [progress.md](https://github.com/ChrisTorng/3d-phone-show7/blob/main/progress.md) (總共八個提示，其中三個在修同一類錯誤)

準備上架錄影的過程，遇到不少挑戰，說明如下:

## 錄影幀率

我 Windows/Ubuntu 兩台都有錄影。目前上傳的影片取自 Windows。一開始 Windows 本機的錄影都還正常，但到後面切到 Ubuntu 後，大約只有一秒更新兩次的幀率，看起來很卡頓。我忘了再檢查 Ubuntu 那台的錄影，我猜那台自己錄自己就沒問題了。後續確認的話 (至少要週五之後)，我會再更新上傳錄影。

## 對話字幕

我本想上講解對話字幕，使用自己先前做的小工具: [ChrisTorng/faster-whisper](https://github.com/ChrisTorng/faster-whisper) 的 [transcribe.py](https://github.com/ChrisTorng/faster-whisper/blob/master/transcribe.py)。但長音檔一開始是繁體中文，中途就變成簡體中文。也試過線上轉繁體的工具 [Translate Subtitles FREE online Subtitles Translator](https://translatesubtitles.co/index.php)，它又會雞婆地把正常的繁體中文加料做修改。另轉錄文字也有很多不正常的地方，還沒與影片內容對照檢查。想還繼續處理，但又想說大家急著看錄影，沒字幕影響應該不大，就暫時先停在這裡。

## 聊天字幕

然後我想先把聊天過程上字幕，找到一個工具: [rasyidev/zoom-chat-to-subtitle](https://github.com/rasyidev/zoom-chat-to-subtitle)。但它有幾個問題我不滿意:

- 影片由 0:00 開始，但聊天紀錄裡是照實際的當天時間 (第一筆 19:35:17)。該工具轉出來的，第一筆是 00:35:17，竟然只是截掉小時值，但其實應該是參考錄影開始時間 (19:30:36) 來減才對。
- 它會產出 `<b>From Will 保哥</b> : Replying to "..."` 這樣的 SRT 輸出，但我用的剪映不支援 `<b></b>` 粗體顯示，會照原樣文字顯示出來。

我就直接 Fork 出來 [ChrisTorng/zoom-chat-to-subtitle](https://github.com/ChrisTorng/zoom-chat-to-subtitle)，再請 Copilot 幫我改掉以上問題，並刪掉我認為多餘的 `From`。最後我用文字編輯器手工搜尋替代 `Replying to ` 為 `回覆 `，這個我沒加入程式中，想說保持原程式為全英文的內容。Copilot 修改過程一樣紀錄在 [progress.md](https://github.com/ChrisTorng/zoom-chat-to-subtitle/blob/main/progress.md) 中。

## 影片配字幕輸出

我一直都用[剪映](https://www.capcut.cn/)，這次一用，輸出三個多小時影片花了超過兩小時吧。最後發現輸出檔大小竟然是原檔近四倍! 這也太誇張了。

最後我還是改用 [FFmpeg](https://ffmpeg.org/)，問 AI 再下指令截掉最前面，後再加字幕，速度就快多了，檔案只稍微大一點點。

## 表情符號字型

我在 Ubuntu 上使用 FFmpeg，但遇到表情符號字型問題，內建字型 `NotoColorEmoji.ttf` 檔案明明有，但 FFmpeg 就是抓不到，目前的字幕表情符號相當醜! 😆

## 結語

不知以上問題大家可有解方可以提供?

這是我第一次要對長影片上字幕，還有很多要學習及可優化的地方。之後希望可以改善幀率及表情符號問題，並把完整字幕做好上傳更新後，再發新文章通知，並說明我的經驗。