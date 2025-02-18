# Windows 11 Upgrade Problem
# Windows 11 升級問題

我家裡 Windows 10 電腦雖然不符合 [Windows 11 系統需求](https://support.microsoft.com/zh-tw/windows/windows-11-%E7%B3%BB%E7%B5%B1%E9%9C%80%E6%B1%82-86c11283-ea52-4782-9efd-7674389a7ba3)的 CPU，也完全沒有 TPM，但使用網路文章的方法後，仍然可以成功升級到去年底最新的 Windows 11 24H2，確認有啟用成功並以 Windows Update 更新完成。

就我目前知道的方法，需要製作隨身碟，過程中會格式化該隨身碟。若由 Windows 10 裡執行 setup，可以升級目前 Windows 10 並保留程式、設定與檔案。若由開機過程載入隨身碟，似乎只能選擇全新安裝。

安裝過程中會出現告警:

![](images/20250218111416.png)

> 此電腦不符合執行 Windows 11 的最低系統需求 - 這些需求有助於確保更可靠且品質更高的體驗。不建議在此電腦上安裝 Windows 11，這可能會導致相容性問題。如果您繼續安裝 Windows 11，您的電腦將不再受到支援，也無權接收更新。製造商保固中未涵蓋因相容性不足而對電腦造成的損壞。選取 \[接受\] 即表示您已閱讀並瞭解此聲明。

跳過硬體檢查的較簡單方法 (仍要求至少 TPM 1.2)，微軟應該確實有提供 (參考 [Windows 11 在不符合最低系統需求的裝置上 - Microsoft 支援服務](https://support.microsoft.com/zh-tw/windows/%E5%9C%A8%E4%B8%8D%E7%AC%A6%E5%90%88%E6%9C%80%E4%BD%8E%E7%B3%BB%E7%B5%B1%E9%9C%80%E6%B1%82%E7%9A%84%E9%9B%BB%E8%85%A6%E4%B8%8A%E5%AE%89%E8%A3%9D-windows-11-0b2dc4a2-5933-4ad4-9c09-ef0a331518f1?_trms=d50b7f53078cb75f.1739844268208)，另看[微軟提供安裝win11的其他方式 可跳過TPM 2.0 和 CPU 型號檢查](https://today.line.me/tw/v2/article/1DLwrjM)裡面的抓圖，先前應該由微軟網站有提供，但目前微軟網頁中已經找不到)，才會在安裝過程中顯示以上的告警訊息，而不是僅有拒絕安裝訊息。

雖然告警說這會導致相容性問題，截至目前是還沒有遇到。當然未來微軟確實隨時可以推出不相容的更新，一安裝後就開始出現大大小小問題。但相較於 2025/10/14 確認不再更新 Windows 10 之下，目前升級的 Windows 11 就處在不知何時開始出現問題的狀態下，希望能繼續撐到 10/14 之後，那就賺到了。我之所以現在就更新 (而不是等 10/14 停止更新後)，是怕微軟不知哪時又把這個繞過方法禁用了，屆時想升也不行了 (參考 [Microsoft quietly deletes official Windows 11 CPU/TPM bypass for unsupported PCs](https://www.neowin.net/news/microsoft-quietly-removes-official-windows-11-cputpm-bypass-for-unsupported-pcs/))。若未來微軟真推出破壞性更新，應該會有人優先遇到，災情報導出來，應該是可以阻擋或移除該更新，或者又有人提供 (由微軟內部而來?) 不被破壞的繞過方法?

當初微軟在推出 Windows 10 時，就說可以讓 Windows 7/8 (在第一年內) 免費升級到 Windows 10，打破以往每次升級都要付費的做法。當初應該是微軟希望全部裝置統一版本，就不要一直維護舊版本。

這也讓 Windows 開始朝向訂閱制的方向。雖然不是每個月付費，但目前看來可能要幾年就收一次費用，方法就是停止更新，強迫使用者汰換仍正常可用的電腦，再買新機器，確保硬體廠商及微軟都能繼續賺錢。

去年十月釋出的 Windows 11 24H2 又來這招，不開放給所有電腦升級 (主要是 CPU 等級限制，參考 [Windows Processor Requirements - Windows Client Edition Processors](https://learn.microsoft.com/en-us/windows-hardware/design/minimum/windows-processor-requirements#windows-client-edition-processors))。未來不知哪時，會要求僅有 Copilot+ PC 才能升級???

依據 [Windows 11 家用版與專業版](https://learn.microsoft.com/zh-tw/lifecycle/products/windows-11-home-and-pro)說明，23H2 只支援到今年 11/11!!! 24H2 到明年 10/13。[Windows 11 企業版與教育版](https://learn.microsoft.com/zh-tw/lifecycle/products/windows-11-enterprise-and-education)中 23H2 也只到明年 11/10!!!

不知現在的 Windows 11 有多少只能安裝到 23H2!? 可檢查 設定 - 系統 - 關於，如果完成所有 Windows Update 但還是 23H2，那可能就是不支援的範圍...詳細可查 [Intel](https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-24h2-supported-intel-processors)/[AMD](https://learn.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-24h2-supported-amd-processors) CPU 要求。連 23H2 企業版只能支援到明年底而已，明年初又要開始汰換一堆今年已被迫升級 Windows 11，仍然堪用的電腦了!? 為數更多的家用/專業版的，更只能支援到今年底!!!

這種計劃性報廢的做法，完全違反永續環保的精神，讓所有客戶負擔浪費掉的硬體成本，微軟卻獲得購買新機所得的隨機版利益。再加上 Windows 內建越來越多廣告與無法移除的垃圾軟體，我已經開始預備使用 Ubuntu 替代的方法。