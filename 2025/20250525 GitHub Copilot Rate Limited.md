# 20250525 GitHub Copilot Rate Limited
# GitHub Copilot 限流

![](<Images/20250525 GitHubCopilotRateLimited.png>)

目前觀察 GitHub Copilot Agent 選擇 Claude Sonnet 4 用到被限制 rate limited，比對 OUTPUT - GitHub Copilot Chat 認為可以找到一對一輸出，一次提示的每一筆輸出都是同一個 `requestId`，也都有標示 \[tool_calls\]。再搭配輸入 `/list` 得到的:

> Available tools:
> 
> - create_and_run_task
> - create_directory
> - create_file
> - create_new_jupyter_notebook
> - create_new_workspace
> - edit_notebook_file
> - fetch_webpage
> - file_search
> - test_search
> - grep_search
> - get_changed_files
> - get_errors
> - get_project_setup_info
> - get_search_view_results
> - get_terminal_last_command
> - get_terminal_output
> - get_terminal_selection
> - get_vscode_api
> - github_repo
> - insert_edit_into_file
> - install_extension
> - list_code_usages
> - list_dir
> - open_simple_browser
> - read_file
> - read_notebook_cell_output
> - replace_string_in_file
> - run_in_terminal
> - run_notebook_cell
> - semantic_search
> - test_failure
> - think
> - vscode_installExtensions
> - vscode_searchExtensions_internal
> - bb7_playwright_assert_response
> - bb7_playwright_click
> - bb7_playwright_close
> - bb7_playwright_console_logs
> - bb7_playwright_custom_user_agent
> - bb7_playwright_delete
> - bb7_playwright_evaluate
> - bb7_playwright_expect_response
> - bb7_playwright_fill
> - bb7_playwright_get
> - bb7_playwright_hover
> - bb7_playwright_iframe_click
> - bb7_playwright_navigate
> - bb7_playwright_patch
> - bb7_playwright_post
> - bb7_playwright_put
> - bb7_playwright_screenshot
> - bb7_playwright_select
> - vscode-websearchforcopilot_webSearch

認為四筆依序是:
- replace_string_in_file
- run_in_terminal
- read_file
- replace_string_in_file

由於並不是一開始被拒絕而是中途被限制，我目前認為應該是 Agent 模式中每一次 \[tool_calls\] 都計為一次呼叫。看圖可以簡單理解就是每一串文字配方框功能，就是一次呼叫。另觀察 Edit 模式也是有類似的 \[tool_calls\]，看來也同樣有多次呼叫的現象。