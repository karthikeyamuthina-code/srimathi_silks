import os
import re

root = 'src'
paths = set()
regexes = [
    r'to\s*=\s*"(/[^"\s]*)"',
    r'to\s*=\s*\'(/[^\'\s]*)\'',
    r'href\s*=\s*"(/[^"\s]*)"',
    r'href\s*=\s*\'(/[^\'\s]*)\'',
    r'navigate\(\s*"(/[^"\s]*)"\s*\)',
    r'navigate\(\s*\'(/[^\'\s]*)\'\s*\)',
    r'window\.location\.href\s*=\s*"(/[^"\s]*)"',
    r'window\.location\.href\s*=\s*\'(/[^\'\s]*)\'',
]
for dirpath, _, files in os.walk(root):
    for fn in files:
        if fn.endswith(('.js', '.jsx')):
            fp = os.path.join(dirpath, fn)
            with open(fp, encoding='utf-8', errors='ignore') as f:
                text = f.read()
            for rx in regexes:
                for m in re.findall(rx, text):
                    paths.add((fp, m))

valid_bases = {
    '/', '/shop', '/products', '/categories', '/featured', '/reviews', '/gallery',
    '/sarees', '/fabrics', '/kurtas', '/dupattas', '/product/:id', '/contact',
    '/about', '/account', '/signin', '/cart', '/register', '/faq', '/wishlist',
    '/track-order', '/profile', '/checkout', '/orders'
}

print('ROUTE TARGETS:')
for fp, p in sorted(paths, key=lambda x: (x[1], x[0])):
    base = re.split(r'[?#]', p, maxsplit=1)[0]
    print(f'{p} -> base {base} from {fp}')

print('\nINVALID BASES:')
invalid = []
for fp, p in sorted(paths, key=lambda x: (x[1], x[0])):
    base = re.split(r'[?#]', p, maxsplit=1)[0]
    if base.startswith('/product/'):
        continue
    if base not in valid_bases:
        invalid.append((fp, p, base))
        print(f'{p} -> base {base} from {fp}')
print('TOTAL invalid', len(invalid))
