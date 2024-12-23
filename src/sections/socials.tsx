import { contacts } from "@/components/contact-list";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center cursor-pointer font-semibold hover:text-emerald-500">
        Socials <ChevronDown className="h-4 w-4 ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 mx-4 mt-2">
        <DropdownMenuLabel>Socials</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {contacts.map((contact, index) => (
          <DropdownMenuItem
            key={index}
            asChild
            className="cursor-pointer font-medium text-neutral-300"
          >
            <Link
              href={contact.href}
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>{contact.icon}</span>
              <span>{contact.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Socials;
