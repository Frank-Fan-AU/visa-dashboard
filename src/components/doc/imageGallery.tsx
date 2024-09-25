import Image from "next/image";

interface ImageGalleryProps {
    path: string;
    count: number;
  }

  const ImageGallery: React.FC<ImageGalleryProps> = ({path, count }) => {
    const images = Array.from({ length: count }, (_, i) => i + 1);
  
    return (
      <div className="w-full h-screen">
        {images.map((num) => (
          <Image
            key={num}
            src={`/${path}/p${num}.png`}
            alt={`pic${num}`}
            width={1200}
            height={600}
          />
        ))}
      </div>
    );
  };
  
  export default ImageGallery;
