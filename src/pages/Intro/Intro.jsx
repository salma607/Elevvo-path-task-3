import Header from "../../Component/Shared/Header";
import Cards from "../../Component/Element/Cards/Cards";
import Footer from "../../Component/Shared/Footer";
import Options from "../../Component/Element/Options";

export default function Home(){
return(
    <div >
        <div className="mb-20">
        <Header/>
       </div>
       <div className="flex flex-col " >
       <Options/>
            <Cards/>
            </div>
           
            <Footer/>
    </div>
)

}
