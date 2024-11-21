import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="flex grow">
      <div>
        <Select>
          <SelectTrigger className="rounded-r-none">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">All</SelectItem>
            <SelectItem value="1">Electronics</SelectItem>
            <SelectItem value="2">Clothes</SelectItem>
            <SelectItem value="3">Books</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Input placeholder="Search for something" className="rounded-none grow" />
      <div>
        <Button variant="secondary" className="rounded-l-none">
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};
