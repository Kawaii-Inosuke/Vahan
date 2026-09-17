# Events page — temporarily removed

Taken off the live site on 2026-09-17. Nothing was deleted; everything the page
needs is in this folder. Nothing outside the Events page ever referenced these
files, so removing it broke no other page.

## What was moved here

| Archived path                        | Goes back to          |
| ------------------------------------ | --------------------- |
| `_archive/events/events.html`        | `events.html`         |
| `_archive/events/css/events.css`     | `css/events.css`      |
| `_archive/events/assets/events/`     | `assets/events/`      |

## What was changed in place

The "Events" entry in the **Resources** nav dropdown and in the **Resources**
footer column was commented out on all 24 live pages (2 per page, 48 in total).
Each one now reads:

```html
<!-- EVENTS-HIDDEN: <li><a href="events.html">Events</a></li> -->
```

The copy of `events.html` in this folder was left untouched, so its own two
links are still live markup.

Nothing was removed from `css/responsive.css`. Its `.p-events` rules are inert
while the page is gone and will work again the moment it returns.

## Putting it back

Run both steps from the repo root.

**1. Move the files back**

```sh
mv _archive/events/events.html        events.html
mv _archive/events/css/events.css     css/events.css
mv _archive/events/assets/events      assets/events
rm -rf _archive/events
```

**2. Un-hide the nav and footer links**

```sh
python3 - <<'PY'
import re, pathlib
PAT  = re.compile(r'<!-- EVENTS-HIDDEN: (<li><a href="events\.html">Events</a></li>) -->')
n = 0
for f in sorted(pathlib.Path('.').glob('*.html')):
    src = f.read_text(encoding='utf-8')
    out, k = PAT.subn(r'\1', src)
    if k:
        f.write_text(out, encoding='utf-8')
        n += k
print(f'restored {n} links')
PY
```

That should report `restored 48 links`. Then load `events.html` to confirm, and
check that "Events" is back in the Resources dropdown on any other page.

## Backstop

The page is also in git history — it was committed before being archived, so
`git log --follow -- events.html` will find it even if this folder is deleted.
