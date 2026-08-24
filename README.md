# E-commerce Data Analysis Dashboard

A two-stage project: a **Jupyter notebook cleans and aggregates** a raw e-commerce product dataset into
compact JSON, and a **Bootstrap dashboard** renders the result as a chart and a paginated table.

The split is the point. Pandas does the heavy work once, offline; the browser only ever loads a few
kilobytes of pre-aggregated JSON instead of parsing a large CSV on every page view.

## Pipeline

```text
data/ecommerce-Dataset.csv        raw product records (from Kaggle)
            │
            ▼  preprocessingdata.ipynb — drop missing values, normalise types, group by category
            │
            ├──▶ data/type_distribution_data.json   counts per product category
            └──▶ data/details_data.json             per-row detail for the table
                        │
                        ▼  index.html + scripts/main.js
                    chart + paginated, searchable table
```

The dataset is an e-commerce product classification set, categorised as **Household** (19,313),
**Books** (11,820), **Electronics** (10,621) and **Clothing & Accessories** (8,670).

## Dashboard

- Collapsible sidebar navigation — Overview, Type Distribution, Details Table
- Chart.js category distribution chart
- Paginated detail table over the preprocessed records
- Bootstrap 4 responsive layout with Font Awesome icons

## Running it

**View the dashboard** — it fetches JSON, so serve it over HTTP rather than opening the file directly:

```bash
git clone https://github.com/apkirana/project-dataanalysis-bootstrap.git
cd project-dataanalysis-bootstrap
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

**Re-run the preprocessing** after changing the source CSV:

```bash
pip install pandas notebook
jupyter notebook preprocessingdata.ipynb
```

Running the notebook regenerates both JSON files in `data/`.

## Repository structure

```text
preprocessingdata.ipynb   - cleaning and aggregation with pandas
data/                     - source CSV and the two generated JSON files
index.html                - dashboard layout
scripts/main.js           - chart rendering, table pagination
styles.css                - sidebar and layout styling
```

## Data source

The product dataset comes from Kaggle and retains its original licence. The generated JSON files are
derived aggregates.

## Licence

MIT — see [LICENSE](LICENSE), covering the code in this repository.

---

## Author

**Annisa Puspa Kirana** — PhD researcher, Faculty of Geo-Information Science and Earth Observation (ITC),
University of Twente. Research on agentic AI and LLM-driven workflows for Earth observation.

[Google Scholar](https://scholar.google.com/citations?user=BQl6KOsAAAAJ&hl=en) ·
[ORCID](https://orcid.org/0000-0002-4622-1445) ·
[LinkedIn](https://www.linkedin.com/in/annisapuspakirana) ·
[GitHub](https://github.com/apkirana)
