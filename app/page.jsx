
import CompanyCarousel from "@/components/company-carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart, CalendarHeart, ChevronRight, Layout } from "lucide-react";
import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from "@/components/ui/accordion"
import Image from "next/image";
import Link from "next/link";
import faqs from "@/data/faqs"
const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet ",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet ",
    icon: CalendarHeart,
  },
  {
    title: "Comprehenive Reporting",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet ",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center ">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline your workflow <br />
          <span className="flex mx-auto gap-3 sm:gp-4 items-center">
            with{" "}
            <Image
              src="/logo.png"
              width={400}
              alt="Logo"
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-grey-300 mb-10 max-w-3xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-2">
            Get Started <ChevronRight size={18} />
          </Button>
        </Link>
        <Link href="/onboarding">
          <Button size="lg" variant="outline" className="mr-4">
            Learn More
          </Button>
        </Link>
      </section>

      {/* Key Feature  */}
      <section id="features" className="bg-gray-900 py-20 px-5">
        <div className="mx-auto container">
          <h3 className="text-3xl font-bold mb-12 text-center">Key Feature</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              return (
                <Card key={index} className="bg-gray-800">
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                    <h4 className="text-xl font-semibold mb-2 ">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">{feature.description} </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Section  */}

      <section  className=" py-20">
        <div className="mx-auto container">
          <h3 className="text-3xl font-bold mb-12 text-center">Trusted by Industry Leaders</h3>
         <CompanyCarousel/>
        </div>
      </section>



      <section  className="bg-gray-900 py-20 px-5">
        <div className="mx-auto container">
          <h3 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h3> 
         <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq,index)=>{
                return(
                    <AccordionItem key={index} value={`items-${index}`}>
    <AccordionTrigger>{faq.question}</AccordionTrigger>
    <AccordionContent>
      {faq.answer}
    </AccordionContent>
  </AccordionItem>
            )
  })}
</Accordion>
        </div>
      </section>

      <section  className=" py-20 text-center px-5">
        <div className="mx-auto container">
          <h3 className="text-3xl font-bold mb-6 text-center">Ready to Transform Your Workflow?</h3>
          <p className="text-xl mb-12">Join Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quas placeat incidunt</p>
         <Link href='/onboarding'>
         <Button size='lg' className='animate-bounce'>
          Start for Free <ArrowRight className="ml-2 h-2 w-5"/>
         </Button>
         </Link>
        </div>
      </section>




    </div>
  );
}
