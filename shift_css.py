import re

def shift_top(match):
    val = float(match.group(1))
    # We only shift things that are originally below the hero note (top >= 700)
    if val >= 700:
        val -= 266
    
    # format back to remove .0 if it's an integer
    if val.is_integer():
        return f"top:{int(val)}px;"
    return f"top:{val}px;"

def shift_height(match):
    val = float(match.group(1))
    if val > 6000: # The page height is 6861
        val -= 266
    if val.is_integer():
        return f"height:{int(val)}px;"
    return f"height:{val}px;"

with open('css/ourstory.css', 'r') as f:
    content = f.read()

content = re.sub(r'top:\s*([0-9.]+)\s*px;', shift_top, content)
content = re.sub(r'height:\s*([0-9.]+)\s*px;', shift_height, content)

with open('css/ourstory.css', 'w') as f:
    f.write(content)

print("Done")
