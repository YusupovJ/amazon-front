import { MapPin } from "lucide-react";
import { Search } from "./search";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { useAuthStore } from "@/store/authStore";

export const Header = () => {
  const { isAuth, user } = useAuthStore();

  return (
    <header className="bg-primary fill-primary-foreground">
      <div className="p-3 flex items-center gap-5">
        <Logo />
        <div className="flex items-center gap-2 text-primary-foreground">
          <MapPin />
          <p className="leading-5 text-sm">
            Deliver to <br /> <b className="text-base">Uzbekistan</b>
          </p>
        </div>
        <Search />
        <div>
          {isAuth ? (
            <p className="text-primary-foreground">Hello, {user?.firstName}</p>
          ) : (
            <Button variant="secondary" asChild>
              <Link to="/login" className="font-medium">
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
