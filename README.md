# The Margin Men - Waku Site

A modern React site built with Waku, featuring React Server Components.

## Getting Started

Install dependencies:

```bash
npm install
```

Set up environment variables:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

The API key is kept secure on the server using React Server Actions.

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Tech Stack

- **Waku** - Minimal React framework with Server Components
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Iconify** - Icon library
- **AI SDK** - For ChatGPT integration
- **OpenAI** - GPT-4o-mini for chatbot conversations
