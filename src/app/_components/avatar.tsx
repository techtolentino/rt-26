const Avatar = () => {
  return (
    <div className="flex items-center">
      <img
        src={"/assets/blog/authors/ran_bw.jpg"}
        className="w-12 h-12 rounded-full mr-4"
        alt={"close up of randy at the library"}
      />
      <div className="text-xl">randy tolentino</div>
    </div>
  );
};

export default Avatar;
