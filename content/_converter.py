# convert markdown to html for loader
# usage: python _converter.py [buffer].md

import markdown
import sys

# argv[1] must be filename
if len(sys.argv) != 2: exit(1)

# open markdown file
md_fd    = open(sys.argv[1], "r")

# read markdown "filedescriptor" and convert to html
md_buff  = md_fd.read()
html_out = markdown.markdown(md_buff)

# output file replaces *.md with *.html
html_fd  = open(sys.argv[1][:-2] + "html", "x")

html_fd.write(html_out)
html_fd.close()

md_fd.close()