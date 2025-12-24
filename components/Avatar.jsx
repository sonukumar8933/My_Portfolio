import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full flex items-end justify-center xl:justify-end pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        priority
        className="
          w-full
          h-auto
          max-h-[90vh]
          object-contain
          translate-z-0
        "
      />
    </div>
  );
};

export default Avatar;
