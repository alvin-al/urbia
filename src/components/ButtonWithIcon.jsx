import { FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function ButtonWithIcon() {
  return (
    <Button>
      <FiMail className='mr-2 h-4 w-4' />
      Login with Email
    </Button>
  );
}
