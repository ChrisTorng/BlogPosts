# 20250721 Python learning experience
# Python 學習經驗

![](<Images/ChatGPT Image Jul 21, 2025, 12_40_14 AM.png>)

因為 AI 程式都用 Python 撰寫，因此自己有靠 AI 開始寫一些 Python 工具及網站，想要多學習。一開始用 ChatGPT，後來有 GitHub Copilot，也有用過 Claude。以上當然都沒有認真從頭學習，只有略懂略懂，要自己手工是寫不出來的。還有專案結構都很簡單，也不曉得可以用哪些現成流行的工具。

看到這篇 [I'm Switching to Python and Actually Liking It](https://www.cesarsotovalero.net/blog/i-am-switching-to-python-and-actually-liking-it.html)，裡面推薦了不少工具，就跟著練習，做了 [ChrisTorng/python-project](https://github.com/ChrisTorng/python-project)。

因為原文很簡略，也是搞蠻久的。在 [README.md](https://github.com/ChrisTorng/python-project/blob/main/README.md) 中列出自己最後的整理結果，過程就請見 [26 次的 commit 歷史](https://github.com/ChrisTorng/python-project/commits/main/)。

看到 [Hacker News 上的留言](https://news.ycombinator.com/item?id=44579717)，其中 [Simon Willison](https://simonwillison.net/) 寫的 [I would like to have a tool that generates the project structure for me](https://news.ycombinator.com/item?id=44585206)，認識了方便建立專案樣版的 [cookiecutter](https://cookiecutter.readthedocs.io/en/stable/) 工具。但他做的似乎稍老舊 (沒 uv)，也沒自己想試的 FastAPI。

搜尋 GitHub 中有關 cookiecutter python uv fastapi 的結果 [Repository search results](https://github.com/search?q=cookiecutter+python+uv+fastapi&amp%3Btype=Repositories&type=repositories)，又練習了:

-   [arthurhenrique/cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) => [ChrisTorng/cookiecutter-fastapi](https://github.com/ChrisTorng/cookiecutter-fastapi)
-   [max-pfeiffer/uvicorn-poetry-fastapi-project-template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) =>  [ChrisTorng/uvicorn-poetry-project-template](https://github.com/ChrisTorng/uvicorn-poetry-project-template)

另看到 [fstrings.wtf - Python F-String Quiz](https://fstrings.wtf/)，26 題答出 14 題...其實自己沒什麼程度，以上算運氣好...

還有 [wtf.ipynb - Colab](https://colab.research.google.com/github/satwikkansal/wtfpython/blob/master/irrelevant/wtf.ipynb)，中文版 [leisurelicht/wtfpython-cn](https://github.com/leisurelicht/wtfpython-cn)。這個好長要看很久了...