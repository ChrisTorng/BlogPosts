20250308
# Full-file Code Edit Fast Apply in Cursor
# Cursor 中的全檔編輯快速套用

![](<../Images/DALL·E 2025-03-08 19.10.28 - A futuristic coding environment with AI-assisted code editing. A split-screen interface shows a developer working on a project with an AI assistant su.webp>)

由 2025/3/8 的 [企業級 LLM 叢集部署實戰 (DeepSeek R1 671B)](https://www.accupass.com/event/2412100639332046342609) 保哥課程中，我留言提到 Cursor Composer/GitHub Copilot Edit 中選擇的大模型，輸出的程式碼並不完整，其中包含很多註解以省略沒有變更的程式碼。它另外會使用一個專門調教的較小模型，來執行全檔變更作業。這可由大模型輸出當中，程式碼也同時在編輯輸出。並不是等待大模型之程式碼全部輸出完成後，才繼續輸出後面的結果或下一個檔案，由兩邊都在跑的現象可以推測有兩個模型在同步運作。

我找到這裡: [How to Change Editor and Add Files in Cursor AI | Bind AI](https://blog.getbind.co/2024/10/02/how-cursor-ai-implemented-instant-apply-file-editing-at-1000-tokens-per-second/)<br>
引用之原始文章卻已撤下: [Cursor - The AI Code Editor](https://www.cursor.com/blog/instant-apply)<br>
還好還有網頁備份: [Near-Instant Full-File Edits](https://web.archive.org/web/20240605010559/https://www.cursor.com/blog/instant-apply)

裡面確實有說:

> Our fast-apply model surpasses GPT-4 and GPT-4o performance and pushes the pareto frontier on the accuracy / latency curve. We achieve speeds of ~1000 tokens/s (around 3500 char/s) on our 70b model using a speculative-decoding variant tailored for code-edits, called speculative edits.<br>
> 我們的快速套用模型超越了 GPT-4 和 GPT-4o 的性能，並在 準確度/延遲曲線 上突破了帕累托前緣。我們在 70b 模型上使用針對程式碼編輯量身定制的預測解碼變體 (稱為預測編輯) 實現了 ~1000 個標記/秒 (約 3500 個字元/秒) 的速度。

所以 Cursor 團隊確實有用一個每秒 1000 tokens 速度的另一個 70B 預測解碼模型，來專門處理快速套用程式碼變更的作業。

我在使用 GitHub Copilot Chat 當中，也可以在裡面的建議編輯程式碼處按 ... 選 `Apply in Editor`，它就會單獨跑全檔編輯動作。所以說穿了 Copilot Edit 真的就是「Copilot Chat + 自動 Apply in Editor」，確實是可以分離的兩個動作罷了。