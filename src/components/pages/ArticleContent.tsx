import Image from "next/image";

export default function ArticleContent({
  authorName,
  // content,
  date,
}: {
  authorName: string;
  content: string;
  date: string;
}) {
  return (
    <article className="prose lg:prose-lg max-w-3xl mx-auto py-8 px-4 bg-white">
      {/* Author & Date */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/avatar.jpg" // Place this in /public or replace with external URL
            width={32}
            height={32}
            alt="Author Avatar"
            className="rounded-full"
          />
          <span className="text-gray-700 font-semibold uppercase text-sm">
            {authorName}
          </span>
        </div>
        <span className="text-sm text-gray-500 uppercase">{date}</span>
      </div>

      {/* Content */}
      <p>
        Discover exercises that target every muscle group, helping you build
        strength and endurance. Perfect for beginners and seasoned gym-goers
        alike.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus.
      </p>

      {/* Highlighted Section */}
      <blockquote className="border-l-4 border-gray-400 pl-4 italic font-medium text-gray-700 bg-gray-50 py-2">
        With over a decade of experience in the fitness industry, Alex
        specializes in strength training and functional fitness. Certified by
        NASM and known for his motivational style, Alex designs workout programs
        that are both challenging and achievable. His passion lies in helping
        clients build strength and confidence through personalized training
        routines. Outside the gym, Alex is an avid runner and enjoys outdoor
        adventures.
      </blockquote>

      {/* More Content */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
    </article>
  );
}
