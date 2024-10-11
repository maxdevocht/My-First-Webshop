import { assets } from "@/assets/assets";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT "} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="contact image"
          className="rounded-xl w-full max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-peach-600">Our Store</p>
          <p className="text-gray-500">
            12345 Zip Code
            <br />
            Street 678, City, Country
          </p>
          <p className="text-gray-500">
            Tel: (123) 456-7890
            <br />
            Email: example@email.com
          </p>
          <p className="font-semibold text-xl text-peach-600">
            Careers at Webshop
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <Button className="px-8 py-4 text-sm rounded-xl">Explore Jobs</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
