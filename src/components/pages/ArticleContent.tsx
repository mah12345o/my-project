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
    <article style={{ margin: "auto", backgroundColor: "white" }}>
      {/* Author & Date */}
      <div className="author-date-container">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ position: "relative", width: "2rem", height: "2rem" }}>
            <Image
              src={autherIcon} // Place this in /public or replace with external URL
              fill
              alt="Author Avatar"
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <span
            style={{
              color: "#374151",
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            {authorName}
          </span>
        </div>
        <span
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            textTransform: "uppercase",
          }}
        >
          {date}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          fontSize: "16px",
          lineHeight: "1.625",
          color: "#10152E",
        }}
      >
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        {/* Highlighted Section */}
        <blockquote
          style={{
            fontStyle: "italic",
            marginTop: "1.25rem",
            marginBottom: "1.25rem",
            borderTop: "1px solid #E5E6EA",
            borderBottom: "1px solid #E5E6EA",
            fontWeight: 500,
            color: "#000000",
            padding: "2rem",
          }}
        >
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
