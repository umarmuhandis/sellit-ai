import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function ContentSection() {
  return (
    <section id="features" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            Stop losing money on unused items. Let AI do the selling for you.
          </h2>
          <div className="space-y-6">
            <p>
              Tired of letting valuable items gather dust? Sellit AI turns clutter into cash automatically. Just snap a photo and our AI handles everything—smart pricing based on real market data, compelling listings that sell, and even communicating with buyers.
            </p>
            <p>
              <span className="font-bold">From photo to profit in minutes,</span>{" "}
              not days. While you focus on your life, Sellit AI researches comparable listings, writes optimized descriptions, handles negotiations, and helps you close deals faster. It's like having a professional reseller working 24/7 for you.
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link to="#pricing">
                <span>Start Selling Now</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
