# 20251003 RAG is Dead, Agent Take Over
# RAG 已死，Agent 接手

**人類制定規則，不如讓 AI 自己想辦法**

![](<Images/ChatGPT Image Oct 3, 2025, 09_19_43 AM.png>)

[The RAG Obituary: Killed by Agents, Buried by Context Windows](https://www.nicolasbustamante.com/p/the-rag-obituary-killed-by-agents)<br/>
這篇說因為 LLM 允許上下文長度越來越長，RAG 已是過去式，應該要讓 Agent 自主使用適合的工具 (如 `ripgrep`) 來查找資訊。當然 `ripgrep` 只能查找純文字檔，無法應付 PDF 等其他格式。

[Designing agentic loops - Simon Willison's Newsletter](https://simonw.substack.com/p/designing-agentic-loops)<br/>
但這篇提到，作者不依賴 MCP，而是撰寫 `AGENTS.md`，裡面列出可以使用的 CLI 工具，比如螢幕截圖，這樣 Agent 就可以在需要螢幕截圖時自行呼叫 CLI 取得。

我想這招對於前面的搜尋 PDF 也一樣適用，可以提供查 PDF 內文的 CLI 工具。

跟以前利用人類編寫規則方式進行翻譯，最後仍然不如讓機器自己學習如何翻譯一樣。與其由人類想出運用 RAG 的各種固定招式，希望向量資料庫可以提供各種不同問題的精準上下文，不如讓 Agent 自主決定，該用什麼工具去查找能夠回答問題的相關資訊。RAG 比較是一次定生死，查來的資訊有就有，沒有就幻覺亂生，而 Agent 可以在多次循環下用各種條件去查找，直到查到才傳回答案。