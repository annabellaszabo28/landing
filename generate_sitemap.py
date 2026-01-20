import os

# Base URL
base_url = "https://blockmarketingconsulting.com"

# Static and Main Routes
static_routes = [
    "", "/about", "/work", "/blog", "/contact", "/cmo", "/ai-native", "/faq",
    "/terms", "/privacy", "/cookies",
    "/marketing", "/web3"
]

# Service Routes
marketing_slugs = ["strategy", "creative-content", "paid-marketing", "community-retention", "email-marketing"]
web3_slugs = ["gtm", "community", "growth", "pr", "ppc_native", "kol"]

special_landing_pages = [
    "/ppc/performance_marketing", "/ai_search/growth", "/seo/organic_growth",
    "/services/website-building", "/services/product-planning", "/services/app-building"
]

# Combine all core routes
all_routes = static_routes + special_landing_pages
for s in marketing_slugs: all_routes.append(f"/marketing/{s}")
for s in web3_slugs: all_routes.append(f"/web3/{s}")

# Blog Routes
blog_slugs = []
with open("blog_slugs.txt", "r") as f:
    blog_slugs = [line.strip() for line in f if line.strip()]

xml_template = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}
</urlset>
"""

url_entry = """  <url>
    <loc>{loc}</loc>
    <changefreq>{freq}</changefreq>
    <priority>{priority}</priority>
  </url>"""

entries = []
for route in all_routes:
    entries.append(url_entry.format(
        loc=base_url + route,
        freq="weekly" if route == "" else "monthly",
        priority="1.0" if route == "" else "0.8"
    ))

for slug in blog_slugs:
    entries.append(url_entry.format(
        loc=f"{base_url}/blog/{slug}",
        freq="monthly",
        priority="0.6"
    ))

with open("client/public/sitemap.xml", "w") as f:
    f.write(xml_template.format(urls="\n".join(entries)))
