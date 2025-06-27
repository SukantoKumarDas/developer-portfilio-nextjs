import Education from "@/app/education/page";
import ContactMe from "./ContactMe";
import Home from "./Home";
import ViewCV from "@/app/view-cv/ViewCV";

export default function Main() {
    return(
        <div className="mt-[46px] lg:mt-[68px] bg-[url('/assets/images/body-bg.jpg')]">
            <Home></Home>
            <Education></Education>
            <ViewCV></ViewCV>
            <ContactMe></ContactMe>
        </div>
    );
}