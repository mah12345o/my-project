import Image from "next/image";

export default function ArticleContent({
  authorName,
  // content,
  date,
  autherIcon,
}: {
  authorName: string;
  content: string;
  date: string;
  autherIcon: string;
}) {
  return (
    <article className="mx-auto bg-white">
      {/* Author & Date */}
      <div className="flex text-[#4E5265] justify-between items-center mb-6 border-b border-[#E5E6EA] pb-5">
        <div className="flex items-center space-x-3">
          <div className="relative size-8">
            <Image
              src={autherIcon} // Place this in /public or replace with external URL
              fill
              alt="Author Avatar"
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-gray-700 font-semibold uppercase text-sm">
            {authorName}
          </span>
        </div>
        <span className="text-sm uppercase">{date}</span>
      </div>

      <div className="space-y-6 text-[16px] leading-relaxed text-[#10152E]">
        {/* Content */}
        <p>
          Discover exercises that target every muscle group, helping you build
          strength and endurance. Perfect for beginners and seasoned gym-goers
          alike.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
        </p>
        {/* Highlighted Section */}
        <blockquote className="italic my-5 border-y border-[#E5E6EA] font-medium text-black p-8">
          With over a decade of experience in the fitness industry, Alex
          specializes in strength training and functional fitness. Certified by
          NASM and known for his motivational style, Alex designs workout
          programs that are both challenging and achievable. His passion lies in
          helping clients build strength and confidence through personalized
          training routines. Outside the gym, Alex is an avid runner and enjoys
          outdoor adventures.
        </blockquote>
        {/* More Content */}
        <p>
          With over a decade of experience in the fitness industry, Alex
          specializes in strength training and functional fitness. Certified by
          NASM and known for his motivational style, Alex designs workout
          programs that are both challenging and achievable. His passion lies in
          helping clients build strength and confidence through personalized
          training routines. Outside the gym, Alex is an avid runner and enjoys
          outdoor adventures.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
    </article>
  );
}
