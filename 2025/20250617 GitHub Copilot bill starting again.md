# 20250617 GitHub Copilot premium requests starting again
# 6/18 (三) GitHub Copilot (預計再次) 開始計點

**不會再次狼來了!?**

[About premium requests](https://docs.github.com/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests)

![](Images\20250617GitHubCopilotRequests1.png)
6/18 (三) 明天開始計點!

![](Images\20250617GitHubCopilotRequests2.png)
Premium GPT-4.1 不見了，而 GPT-4o 改為付費者 0 點，這樣才比較合理!

![](Images\20250617GitHubCopilotRequests3.png)
提醒 GPT-4.1/4o 是 0 點，但仍有速率限制，短時間用太多還是會限流 (不清楚要等多久後才能用?)。
就以往經驗，換模型就可以了。

因此明天之後，(若想省著用) 應該預設使用 GPT-4.1，若遇到限流就改用 GPT-4o。

還是沒看到怎麼查目前使用點數。

接下來的模型使用策略，參考先前 [GitHub Copilot 模型選擇策略](./github-copilot-model-selection-strategy) 文章，再整理更新如下:

- 預設使用 GPT-4.1 (0)，做不出來可改提示，或者換用 Claude Sonnet 4 (Preview) (1)/Gemini 2.5 Pro (Preview) (1)/o4-mini (Preview) (0.33)/Claude 3.7 Sonnet Thinking (1.25)
- 其他模型基本上不建議使用
- Agent/Edit 用量很兇要小心

以上建議為僅依點數及各模型的 推出日期/能力等級 之較為客觀性意見。另依我個人使用經驗，Gemini 2.5 Pro (Preview)/o4-mini (Preview) 的運作都不太可靠 (不一定是模型不好，我推測是 GitHub Copilot 沒有針對它們做最佳化調校完成)。因此依我經驗，個人的模型選用順序會是:

| 順序 | 模型                    | 點數 | 備註           |
| ----:| -------------------------- | ---- | -------------- |
|  1   | GPT-4.1                    | 0    | 預設使用       |
|  2   | Claude Sonnet 4 (Preview)  | 1    | 做不出來可改用 |
|  3   | Claude 3.7 Sonnet Thinking | 1.25 | 複雜推理問題用 |
|  4   | o4-mini (Preview)          | 0.33 | 慢，偶爾一試   |
|  5   | Gemini 2.5 Pro (Preview)   | 1    | 快，偶爾一試   |

![](Images\20250617GitHubCopilotRequests4.png)

我還會繼續關注此問題，若有可查詢點數方法，或者再次延期 (!!!)，會再發表新文章。