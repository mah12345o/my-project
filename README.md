This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<!-- ----------------------dummy -->

// function BlogPost({ post }) {
// return (
// <article className="w-full">
// {/_ Author and Date _/}
// <header className="flex justify-between items-center mb-4">
// <div className="flex items-center space-x-2">
// <img
// src="/placeholder-author.jpg"
// alt="Author"
// className="w-8 h-8 rounded-full"
// />
// <span className="font-inter font-bold uppercase text-sm text-gray-800">
// {post.author}
// </span>
// </div>
// <time
// className="font-inter text-sm text-gray-600"
// dateTime={post.date}
// >
// {new Date(post.date).toLocaleDateString("en-US", {
// day: "numeric",
// month: "long",
// year: "numeric",
// })}
// </time>
// </header>

// {/_ Title _/}
// <h1 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
// {post.title}
// </h1>

// {/_ Body _/}
// <section className="font-merriweather text-base md:text-lg text-gray-800 leading-relaxed space-y-4 mb-8">
// {post.body.split("\n\n").map((paragraph, index) => (
// <p key={index}>{paragraph}</p>
// ))}
// </section>

// {/_ Author Bio _/}
// <footer className="border-t pt-4">
// <p className="font-inter text-sm italic text-gray-700">
// {post.authorBio}
// </p>
// </footer>
// </article>
// );
// }
// export default BlogPost

// ------------------------------------
// [
// {
// "id": 1,
// "slug": "discover-exercises",
// "title": "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
// "date": "2025-01-23",
// "author": "Alex Carter",
// "authorBio": "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
// "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
// }
// ]

// TOUR GUIDE
[
{
"name": "Miranda Rachel",
"location": "Jombang, Jawa Timur",
"rating": 4.0,
"image": "/images/miranda-rachel.jpg"
},
{
"name": "Danielle Marsh",
"location": "Wonosobo, Jawa Tengah",
"rating": 4.0,
"image": "/images/danielle-marsh.jpg"
},
{
"name": "Kang Haerin",
"location": "Bandung, Jawa Barat",
"rating": 5.0,
"image": "/images/kang-haerin.jpg"
}
]

// OTHER BLOG
[
{
"category": "Culinary",
"date": "2022-06-13",
"title": "Two women in local stand are chatting during morning..",
"image": "/images/culinary-local-stand.jpg"
},
{
"category": "Travel",
"date": "2022-07-22",
"title": "Enjoying the sunset on Padar island together",
"image": "/images/travel-padar-island-sunset.jpg"
},
{
"category": "Travel",
"date": "2022-07-22",
"title": "The lush green surroundings of the campgrounds create a..",
"image": "/images/travel-lush-green-campgrounds.jpg"
}
]
