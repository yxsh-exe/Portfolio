
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-9xl font-bold opacity-10">404</h1>
        <div className="-mt-16 mb-8">
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-muted-foreground mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button asChild className="mt-4">
          <Link to="/">Return to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
