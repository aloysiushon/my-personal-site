import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-zinc-50 font-sans dark:bg-black">
      {/* Top Section */}
      <div className="flex gap-10 items-center">
        <Avatar className="w-25 h-25">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Card className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>
              This card uses the small size variant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The card component supports a size prop that can be set to
              &quot;sm&quot; for a more compact appearance.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="flex gap-10">
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>
              This card uses the small size variant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The card component supports a size prop that can be set to
              &quot;sm&quot; for a more compact appearance.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>
              This card uses the small size variant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The card component supports a size prop that can be set to
              &quot;sm&quot; for a more compact appearance.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex gap-10">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-3xl font-semibold">1</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-3xl font-semibold">2</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-3xl font-semibold">3</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-3xl font-semibold">4</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-3xl font-semibold">5</span>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-10">
        <Carousel className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
