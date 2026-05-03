### Prerequisites

- Node.js 18+ (recommended 20+)
- npm

### Installation

\`\`\`bash
npm install
\`\`\`

### Environment Setup

Create a \`.env.local\` file in the project root:

\`\`\`
COLUMBUS_API_URL=https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise
COLUMBUS_API_KEY=your_api_key_here
\`\`\`

See \`.env.example\` for the template.

### Running

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

\`\`\`
app/
layout.tsx # Root layout with CartProvider
page.tsx # Home page (Server Component, fetches data)
loading.tsx # Skeleton during data fetch
error.tsx # Error boundary with retry
globals.css # Reset and global styles

components/
Header/ # Logo + cart icon with badge
ProductCard/ # Single product display
ProductList/ # Grid layout for products
Price/ # Price with optional discount

context/
CartContext.tsx # Cart state via Context + useReducer

lib/
api.ts # Server-side API client
cart.ts # Fake add-to-cart request
format.ts # Currency formatting and discount math
types.ts # TypeScript types from API schema
\`\`\`
