import { Button } from "./ui/button";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get <span className="text-peach-500">20%</span> off!
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 m-auto my-6 border pl-3 rounded-xl"
      >
        <input
          className="w-full flex-1 outline-none "
          type="email"
          placeholder="Enter your email"
          required
        />
        <Button type="submit" className="text-xs px-10 py-4 rounded-xl">
          SUBSCRIBE
        </Button>
      </form>
    </div>
  );
};

export default NewsletterBox;
