import Image from "next/image";

interface ImageGalleryProps {
    count: number;
  }

  const ImageGallery: React.FC<ImageGalleryProps> = ({ count }) => {
    const images = Array.from({ length: count }, (_, i) => i + 1);
  
    return (
      <div className="w-full h-screen">
        {images.map((num) => (
          <Image
            key={num}
            src={`https://zejie-img-storage.s3.amazonaws.com/visadashboard/80form/p${num}.png`}
            alt={`pic${num}`}
            width={1200}
            height={600}
          />
        ))}
      </div>
    );
  };
  
  export default ImageGallery;
