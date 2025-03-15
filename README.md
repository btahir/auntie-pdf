# Auntie PDF - Your Sassy PDF Guru

![Auntie PDF Preview](./demo.gif)

Your all-knowing guide that unpacks every PDF into clear, actionable insights.

## About

Auntie PDF is a web application that helps users extract information and insights from PDF documents. With a sassy, helpful personality, Auntie PDF makes understanding complex documents easier and more engaging.

## Features

- **PDF Parsing**: Upload and analyze PDF documents of any size
- **Chat Interface**: Ask questions about your documents and get instant answers
- **Intelligent Insights**: Get actionable information and summaries from your PDFs

## Technology

Auntie PDF leverages advanced AI technologies including:

- **Mistral OCR**: We use [Mistral OCR](https://mistral.ai/en/news/mistral-ocr) for powerful PDF parsing capabilities. This technology enables our application to accurately extract text and structure from PDFs, even from complex layouts and formats.
- **Next.js**: Built with the React framework for production-grade applications
- **AI-powered chat**: Interact naturally with your documents through conversational AI

## Getting Started

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
MISTRAL_API_KEY="your_mistral_api_key"
```

You can obtain a Mistral API key by signing up at [Mistral AI's platform](https://mistral.ai/).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment Notes

This app is deployed on Vercel and has a file upload limit of 4.5MB due to Vercel's request body size restriction. You can still upload larger files locally or use the public URL option.

To bypass this limitation, we can use services like UploadThing, which upload files directly to your storage (or theirs) using a presigned URL, or implement a similar solution ourselves. I’m still undecided on whether to add this layer.

## Demo

Try it out at: [Auntie PDF](https://auntiepdf.com)

## License

[MIT](https://github.com/btahir/auntie-pdf/blob/main/LICENSE)

## Acknowledgments

- Inspired by Mistral's OCR release

## Follow Me

If you're interested in following all the random projects I'm working on, you can find me on Twitter:

[![Twitter Follow](https://img.shields.io/twitter/follow/deepwhitman?style=social)](https://x.com/deepwhitman)

## Sponsored by

[You-TLDR](https://www.you-tldr.com/) - Get the TLDR of any YouTube video in seconds!
