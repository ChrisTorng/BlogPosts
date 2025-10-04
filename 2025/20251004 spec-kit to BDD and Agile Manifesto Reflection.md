# 20251004 spec-kit to BDD and Agile Manifesto Reflection
# 從 spec-kit 到 BDD，及敏捷宣言的反思

*人類團隊協作敏捷開發，將要讓位給 AI Agents 開發?*

![](<Images/ChatGPT Image Oct 4, 2025, 11_14_05 AM.png>)

[spec-kit](https://github.com/github/spec-kit) 最近很紅，我也試用了一下，並且翻譯了樣版內容。底下分享個人經驗，還有一些對 BDD 及 敏捷宣言 的想法。

## [spec-kit](https://github.com/github/spec-kit) 繁體中文翻譯

我想多了解 [spec-kit](https://github.com/github/spec-kit) 樣板內容，利用自己寫的 [mass-translate](https://github.com/ChrisTorng/mass-translate)，將產出之 GitHub Copilot 英文樣版轉為中文，結果置於 [spec-kit-translation](https://github.com/ChrisTorng/spec-kit-translation)，有興趣更深入了解的人可以前往看看樣版內文。若想問我看了內文有什麼想法...嗯，內容看來應該也都是 AI 生的，當然一定有厲害的前輩在把關。只能說內文非常詳盡，即使是看繁體中文版，我也沒辦法吸收了解。

## 自己的經驗

但個人最近使用 spec-kit 的體驗並不好，應該是我不會善用這個工具。

第一個 [audio-browser](https://github.com/ChrisTorng/audio-browser) 是想要快速瀏覽大量音檔的網站，由 [Commits](https://github.com/ChrisTorng/audio-browser/commits/master/) 可以看到我的提示過程。初始提示不多，後面的實作花非常久時間，建立了約 70 個程式檔 (含測試)。但到目前還是不能執行的狀態。

另一個 [mediapipe-demo](https://github.com/ChrisTorng/mediapipe-demo) 是想用 [MediaPipe](https://mediapipe-studio.webapps.google.com/home) 做[人臉座標辨識](https://mediapipe-studio.webapps.google.com/studio/demo/face_landmarker)，目前是本機可執行，[線上版](https://christorng.github.io/mediapipe-demo/web/dist/)還有問題沒修好。過程可見 [Commits](https://github.com/ChrisTorng/mediapipe-demo/commits/master/)，它建立了約 40 個程式檔 (含測試)。但我需要的只是簡單的三個檔案 (html/js/css) 示範網站，最後還是回到直接用 Copilot 生成，放在 [demo-mediapipe](https://github.com/ChrisTorng/demo-mediapipe)，[線上檢視](https://christorng.github.io/demo-mediapipe/)。

不過 spec-kit 可以適用於多種 IDE/CLI，這下使用什麼工具的差異變小，最終還是回到 AI 模型能力。

## BDD 及 水球潘/保哥 課程啟發

在先前的[水球軟體學院 SDD.tw 課程](https://www.facebook.com/groups/waterballsa.tw/permalink/1537214257273720/)看到 Gherkin 還沒注意，只想說他怎麼取這麼奇怪的名字。後發現是推動 BDD ([Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)) 之 [Cucumber](https://cucumber.io/) 的 [Gherkin](https://cucumber.io/docs/gherkin/) 語法。這方面我都沒接觸，我剛剛的了解是 Gherkin 是接近自然語言的表達語法，Cucumber 像是直譯器般，讀取 Gherkin 文件後執行對應的測試作業。

[保哥簡報](https://docs.google.com/presentation/d/1xRTl-RBTuJOvNmSZz7XjxztrxLnFRh7QmZRQLpObMQU/edit?slide=id.p2#slide=id.p2)裡面的範例是井字遊戲網頁，我目前找到 [vitalets/playwright-bdd](https://github.com/vitalets/playwright-bdd) 可以依 Gherkin 腳本生成 Playwright 測試程式。又想到保哥才剛開了 [實戰 E2E 測試：使用 Playwright 測試框架](https://learn.duotify.com/courses/e2e-playwright) 課程，猜想應該就是在配合 spec-kit 當中，發現要自動測試網頁，Playwright 非常重要，因此保哥又多磨練了這方面技能，並單獨開課。

就我目前猜想，主流的各語言各框架應該都會有開源工具，可用來由 Gherkin codegen。我猜想保哥提供的可能是整串現成可用的方法。我猜也會有開源專案，把 spec-kit 的統一標準樣版，特化打造成 Gherkin 加「Python + React 網頁」、「ASP.NET + Blazor 網頁」...等樣版，供常見的開發類型更快導入 AI BDD 開發。

## 敏捷宣言思考

再看看已經提出多年的[敏捷宣言](https://agilemanifesto.org/iso/zhcht/manifesto.html)及 [12 原則](https://agilemanifesto.org/iso/zhcht/principles.html)，都是由開發者的角度，來談如何進行團隊開發。但若是未來一個人帶一群 AI Agents 以 BDD 開發的話，開發者變成提出需求的客戶，實際開發者不再是人類了，角色完全不同。

而敏捷宣言的這四條:

```
個人與互動 重於 流程與工具
可用的軟體 重於 詳盡的文件
與客戶合作 重於 合約協商
 回應變化 重於 遵循計劃
```
在 BDD 時代，恐怕變成反過來，是後者重要 (流程/工具/需求文件/執行計劃 比較重要)，前者是 AI 自己的事，人類 (只要調整優化工具後，就) 不用再關心了?

人機協作的法則，似乎還有待觀念再更新...