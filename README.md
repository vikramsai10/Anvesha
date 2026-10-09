# Anvesha

Anvesha is a React + Vite prototype for source-grounded learning. It demonstrates the workflow:

`UPLOAD -> INDEX -> ASK -> ANSWER -> VERIFY -> LEARN`

## Run locally

```bash
npm install
npm run dev
```

The client runs on the Vite URL shown in the terminal and the demo Express API runs on `http://localhost:4000`.

## Demo behavior

- Use any email and password on the login screen. This is clearly labeled demo authentication and stores only a local browser flag.
- Ask the suggested Dijkstra, backpropagation, normalization, networking, or scheduling questions.
- Click a source citation to open the document, page, section, and relevant passage drawer.
- Upload a local PDF, DOCX, or TXT file to see the simulated extraction and indexing flow.

All learning materials, excerpts, answers, and citations are synthetic demo data. No production AI or RAG service is connected.
---