# Our Story page — temporarily removed

Taken off the live site on 2026-10-06. Nothing was deleted; everything the page
needs is in this folder, except two asset folders that stay live because other
pages use them: `assets/our story/` (`newsroom.html`) and
`assets/Our Story page slideshow/` (the Why We Exist slideshow on `careers.html`).

## What was moved here

| Archived path                                         | Goes back to                         |
| ----------------------------------------------------- | ------------------------------------ |
| `_archive/our-story/our-story.html`                   | `our-story.html`                     |
| `_archive/our-story/css/ourstory.css`                 | `css/ourstory.css`                   |

## What was changed in place

The "Our Story" / "Our Stories" entry in the nav dropdown and in the footer was
commented out on all 23 live pages (2 per page, 46 in total). Each one now reads:

```html
<!-- OURSTORY-HIDDEN: <li><a href="our-story.html">Our Story</a></li> -->
```

(or `Our Stories`, whichever label that spot used.)

The copy of `our-story.html` in this folder was left untouched, so its own
links are still live markup.

Nothing was removed from `css/responsive.css`. Its `.p-ourstory` rules are inert
while the page is gone and will work again the moment it returns.

## Putting it back

Run both steps from the repo root.

**1. Move the files back**

```sh
mv _archive/our-story/our-story.html                    our-story.html
mv _archive/our-story/css/ourstory.css                  css/ourstory.css
rm -rf _archive/our-story
```

**2. Un-hide the nav and footer links**

```sh
python3 - <<'PY'
import re, pathlib
PAT  = re.compile(r'<!-- OURSTORY-HIDDEN: (<li><a href="our-story\.html">Our Stor(?:y|ies)</a></li>) -->')
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

That should report `restored 46 links`. Then load `our-story.html` to confirm.

## Backstop

The page is also in git history — `git log --follow -- our-story.html` will
find it even if this folder is deleted.
