import Link from "next/link";

const ButtonOval = ({ children, href }) => {
  return (
    <Link
      href={href}
      className='hover:bg-gray-200 w-fit flex gap-2 items-center self-center px-6 py-2 hover:rounded-full border-2 rounded-full border-black xl:self-start'
    >
      <p className='hover:underline hover:underline-offset-2'>{children}</p>
    </Link>
  );
};

export default ButtonOval;
