#!/usr/bin/env python3
import sys
from pathlib import Path

if len(sys.argv) != 2:
    print("Usage: add_trailing_spaces.py <markdown_file>")
    sys.exit(1)

md_path = Path(sys.argv[1])
if not md_path.exists():
    print(f"File not found: {md_path}")
    sys.exit(1)

backup = md_path.with_suffix(md_path.suffix + '.bak')
backup.write_bytes(md_path.read_bytes())

in_code_block = False
out_lines = []
for line in md_path.read_text(encoding='utf-8').splitlines():
    stripped = line.rstrip('\r\n')
    if stripped.strip().startswith('```'):
        # toggle code block state; preserve the fence line as-is
        in_code_block = not in_code_block
        out_lines.append(stripped)
        continue
    if in_code_block:
        out_lines.append(stripped)
        continue
    # For empty lines, keep as-is
    if stripped == '':
        out_lines.append(stripped)
        continue
    # If line already ends with two spaces, keep it. Otherwise append two spaces.
    if stripped.endswith('  '):
        out_lines.append(stripped)
    else:
        out_lines.append(stripped + '  ')

md_path.write_text('\n'.join(out_lines) + '\n', encoding='utf-8')
print(f"Processed {md_path}; backup at {backup}")
